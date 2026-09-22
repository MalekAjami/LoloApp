// ---- app.js ----
const STORAGE_KEY = 'loloapp-state-v3';
const LEGACY_STORAGE_KEYS = ['vocabflip-state-v2'];
const DEFAULT_UNIT_ID = 'en-unit-1';

const $ = (id) => document.getElementById(id);

const elements = {
  languageTree: $('languageTree'),
  breadcrumb: $('breadcrumb'),
  unitTitle: $('unitTitle'),
  scopeSummary: $('scopeSummary'),
  directionToggle: $('directionToggle'),
  directionLabel: $('directionLabel'),
  soundToggle: $('soundToggle'),
  animationToggle: $('animationToggle'),
  statsStrip: $('statsStrip'),
  passNumber: $('passNumber'),
  progressText: $('progressText'),
  missedCount: $('missedCount'),
  knownCount: $('knownCount'),
  leftPileZone: $('leftPileZone'),
  rightPileZone: $('rightPileZone'),
  leftPileCount: $('leftPileCount'),
  rightPileCount: $('rightPileCount'),
  leftPile: $('leftPile'),
  rightPile: $('rightPile'),
  setupPanel: $('setupPanel'),
  weakModeButton: $('weakModeButton'),
  weakModeHint: $('weakModeHint'),
  packOptions: $('packOptions'),
  weakOptions: $('weakOptions'),
  prevPackButton: $('prevPackButton'),
  nextPackButton: $('nextPackButton'),
  newCycleButton: $('newCycleButton'),
  packPickerTitle: $('packPickerTitle'),
  packPickerRange: $('packPickerRange'),
  unitMasteryText: $('unitMasteryText'),
  unitProgressBar: $('unitProgressBar'),
  startStudyButton: $('startStudyButton'),
  deck: $('deck'),
  flashcard: $('flashcard'),
  frontKicker: $('frontKicker'),
  backKicker: $('backKicker'),
  frontWord: $('frontWord'),
  backWord: $('backWord'),
  feedbackLine: $('feedbackLine'),
  answerActions: $('answerActions'),
  dontKnowButton: $('dontKnowButton'),
  knowButton: $('knowButton'),
  resultPanel: $('resultPanel'),
  resultEmoji: $('resultEmoji'),
  resultEyebrow: $('resultEyebrow'),
  resultTitle: $('resultTitle'),
  firstPassScore: $('firstPassScore'),
  masteryLabel: $('masteryLabel'),
  masteryScore: $('masteryScore'),
  resultCopy: $('resultCopy'),
  globalResult: $('globalResult'),
  reviewMissedButton: $('reviewMissedButton'),
  nextPackResultButton: $('nextPackResultButton'),
  restartButton: $('restartButton'),
  backToUnitButton: $('backToUnitButton'),
  streakBadge: $('streakBadge'),
  streakCount: $('streakCount'),
  toast: $('toast'),
  celebrationLayer: $('celebrationLayer'),
  resetStorageButton: $('resetStorageButton'),
};

function defaultDirectionForUnit(unit) {
  return `${unit.sourceCode}-${unit.targetCode}`;
}

function reverseDirectionForUnit(unit) {
  return `${unit.targetCode}-${unit.sourceCode}`;
}

function freshState(unitId = DEFAULT_UNIT_ID) {
  const unit = unitsById.get(unitId) || unitsById.get(DEFAULT_UNIT_ID);
  return {
    selectedUnitId: unit.id,
    direction: defaultDirectionForUnit(unit),
    settings: {
      sound: true,
      animations: true,
      funnyMessages: true,
    },
    study: {
      setupVisible: true,
      mode: 'pack',
      batchSize: 20,
      batchIndex: 0,
      weakLimit: 20,
      activeCardIds: [],
      packOrder: shuffle(unit.cards.map((card) => card.id)),
    },
    session: null,
    history: {},
    flipped: false,
  };
}

function loadState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        raw = localStorage.getItem(legacyKey);
        if (raw) break;
      }
    }
    if (!raw) return freshState();
    const saved = JSON.parse(raw);
    const unit = unitsById.get(saved.selectedUnitId) || unitsById.get(DEFAULT_UNIT_ID);
    const validIds = new Set(unit.cards.map((card) => card.id));
    const activeCardIds = Array.isArray(saved.study?.activeCardIds)
      ? saved.study.activeCardIds.filter((id) => validIds.has(id))
      : [];
    const savedPackOrder = Array.isArray(saved.study?.packOrder)
      ? saved.study.packOrder.filter((id) => validIds.has(id))
      : [];
    const packOrderIsValid = savedPackOrder.length === unit.cards.length
      && new Set(savedPackOrder).size === unit.cards.length;
    const session = saved.session;
    const sessionValid = !session || ['queue', 'known', 'missed'].every(
      (key) => Array.isArray(session[key]) && session[key].every((id) => validIds.has(id)),
    );

    return {
      selectedUnitId: unit.id,
      direction: [defaultDirectionForUnit(unit), reverseDirectionForUnit(unit)].includes(saved.direction)
        ? saved.direction
        : defaultDirectionForUnit(unit),
      settings: {
        sound: saved.settings?.sound !== false,
        animations: saved.settings?.animations !== false,
        funnyMessages: saved.settings?.funnyMessages !== false,
      },
      study: {
        setupVisible: saved.study?.setupVisible !== false || !sessionValid,
        mode: ['pack', 'all', 'weak'].includes(saved.study?.mode) ? saved.study.mode : 'pack',
        batchSize: [10, 20, 30].includes(Number(saved.study?.batchSize)) ? Number(saved.study.batchSize) : 20,
        batchIndex: Math.max(0, Number(saved.study?.batchIndex) || 0),
        weakLimit: [10, 20, 30].includes(Number(saved.study?.weakLimit)) ? Number(saved.study.weakLimit) : 20,
        activeCardIds,
        packOrder: packOrderIsValid ? savedPackOrder : shuffle(unit.cards.map((card) => card.id)),
      },
      session: sessionValid ? session : null,
      history: saved.history && typeof saved.history === 'object' ? saved.history : {},
      flipped: false,
    };
  } catch {
    return freshState();
  }
}

let state = loadState();
let transitionLocked = false;
let toastTimer;

function currentUnit() {
  return unitsById.get(state.selectedUnitId);
}

function allCardIds() {
  return currentUnit().cards.map((card) => card.id);
}

function ensurePackOrder(forceNew = false) {
  const ids = allCardIds();
  const order = Array.isArray(state.study.packOrder) ? state.study.packOrder : [];
  const valid = order.length === ids.length
    && new Set(order).size === ids.length
    && order.every((id) => ids.includes(id));
  if (forceNew || !valid) {
    state.study.packOrder = shuffle(ids);
    state.study.batchIndex = 0;
    state.study.activeCardIds = [];
  }
  return state.study.packOrder;
}

function currentDirectionHistory() {
  return state.history?.[state.selectedUnitId]?.[state.direction] || {};
}

function setCurrentDirectionHistory(nextStats) {
  state.history = {
    ...state.history,
    [state.selectedUnitId]: {
      ...(state.history[state.selectedUnitId] || {}),
      [state.direction]: nextStats,
    },
  };
}

function currentCard() {
  if (!state.session) return null;
  const id = state.session.queue[0];
  return currentUnit().cards.find((card) => card.id === id);
}

function saveState() {
  try {
    const toSave = { ...state, flipped: false };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // file:// can restrict storage in some browsers; the app still works without persistence.
  }
}

function pluralizeCards(count) {
  return `${count} ${count === 1 ? 'carte' : 'cartes'}`;
}

function weakCardIds() {
  return rankWeakCards(allCardIds(), currentDirectionHistory(), state.study.weakLimit);
}

function fullWeakCount() {
  return rankWeakCards(allCardIds(), currentDirectionHistory(), allCardIds().length).length;
}

function packCount() {
  return getPackCount(currentUnit().cards.length, state.study.batchSize);
}

function normalizedBatchIndex() {
  const count = packCount();
  return Math.min(state.study.batchIndex, Math.max(0, count - 1));
}

function scopeCardIds() {
  const ids = allCardIds();
  if (state.study.mode === 'all') return ids;
  if (state.study.mode === 'weak') return weakCardIds();
  return getPackCardIds(ensurePackOrder(), state.study.batchSize, normalizedBatchIndex());
}

function scopeLabel() {
  if (state.study.mode === 'all') return `Toute l’unité · ${currentUnit().cards.length} cartes`;
  if (state.study.mode === 'weak') return `Cartes difficiles · ${state.study.activeCardIds.length || weakCardIds().length} cartes`;
  return `Paquet ${normalizedBatchIndex() + 1}/${packCount()} · ${state.study.activeCardIds.length || scopeCardIds().length} cartes`;
}

function renderTree() {
  elements.languageTree.innerHTML = catalog.map((language) => {
    const groupedUnits = [];
    language.units.forEach((unit) => {
      const chapterLabel = unit.chapterLabel || '';
      let group = groupedUnits.find((entry) => entry.chapterLabel === chapterLabel);
      if (!group) {
        group = { chapterLabel, units: [] };
        groupedUnits.push(group);
      }
      group.units.push(unit);
    });

    const units = groupedUnits.map((group) => {
      const buttons = group.units.map((unit) => `
        <button class="tree-unit ${unit.id === state.selectedUnitId ? 'active' : ''}" data-unit-id="${unit.id}" type="button">
          <span>${unit.label}</span>
          <small>${unit.cards.length} cartes</small>
        </button>
      `).join('');

      return group.chapterLabel
        ? `<div class="tree-chapter">
            <div class="tree-chapter-title">${group.chapterLabel}</div>
            <div class="tree-chapter-units">${buttons}</div>
          </div>`
        : buttons;
    }).join('');

    return `
      <section class="tree-language ${language.comingSoon ? 'muted' : ''}">
        <div class="tree-language-title">
          <span class="tree-flag" aria-hidden="true">${language.icon}</span>
          <strong>${language.label}</strong>
          ${language.comingSoon ? '<span class="soon-pill">Bientôt</span>' : ''}
        </div>
        ${units ? `<div class="tree-units">${units}</div>` : ''}
      </section>
    `;
  }).join('');

  elements.languageTree.querySelectorAll('[data-unit-id]').forEach((button) => {
    button.addEventListener('click', () => selectUnit(button.dataset.unitId));
  });
}

function renderHeader() {
  const unit = currentUnit();
  const unitContext = unit.chapterLabel || unit.languageLabel;
  elements.breadcrumb.textContent = `${unit.languageLabel} · ${unitContext}`;
  elements.unitTitle.textContent = `${unit.label} · ${unit.cards.length} cartes`;
  elements.scopeSummary.textContent = state.study.setupVisible ? 'Choisis comment tu veux travailler.' : scopeLabel();
  const forward = state.direction === defaultDirectionForUnit(unit);
  elements.directionLabel.textContent = forward
    ? `${unit.sourceCode.toUpperCase()} → ${unit.targetCode.toUpperCase()}`
    : `${unit.targetCode.toUpperCase()} → ${unit.sourceCode.toUpperCase()}`;
  elements.soundToggle.textContent = state.settings.sound ? '🔊' : '🔇';
  elements.soundToggle.classList.toggle('muted-setting', !state.settings.sound);
  elements.animationToggle.textContent = state.settings.animations ? '✨' : '◌';
  elements.animationToggle.classList.toggle('muted-setting', !state.settings.animations);
  document.body.classList.toggle('reduced-motion', !state.settings.animations);
}

function renderSetup() {
  const isSetup = state.study.setupVisible || !state.session;
  elements.setupPanel.hidden = !isSetup;
  if (!isSetup) return;

  document.querySelectorAll('[data-study-mode]').forEach((button) => {
    button.classList.toggle('active', button.dataset.studyMode === state.study.mode);
  });
  document.querySelectorAll('[data-pack-size]').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.packSize) === state.study.batchSize);
  });
  document.querySelectorAll('[data-weak-limit]').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.weakLimit) === state.study.weakLimit);
  });

  elements.packOptions.hidden = state.study.mode !== 'pack';
  elements.weakOptions.hidden = state.study.mode !== 'weak';

  const weakCount = fullWeakCount();
  elements.weakModeHint.textContent = weakCount
    ? `${pluralizeCards(weakCount)} avec au moins une erreur`
    : 'Aucune erreur enregistrée';
  elements.weakModeButton.classList.toggle('mode-unavailable', weakCount === 0);

  state.study.batchIndex = normalizedBatchIndex();
  const count = packCount();
  ensurePackOrder();
  const currentPackSize = getPackCardIds(state.study.packOrder, state.study.batchSize, state.study.batchIndex).length;
  elements.packPickerTitle.textContent = `Paquet ${state.study.batchIndex + 1} / ${count}`;
  elements.packPickerRange.textContent = `${pluralizeCards(currentPackSize)} · mélange fixe pour ce cycle`;
  elements.prevPackButton.disabled = state.study.batchIndex === 0;
  elements.nextPackButton.disabled = state.study.batchIndex >= count - 1;

  const mastered = countMastered(allCardIds(), currentDirectionHistory());
  const masteryPct = percent(mastered, currentUnit().cards.length);
  elements.unitMasteryText.textContent = `${mastered} / ${currentUnit().cards.length} · ${masteryPct}%`;
  elements.unitProgressBar.style.width = `${masteryPct}%`;

  const noWeakCards = state.study.mode === 'weak' && weakCount === 0;
  elements.startStudyButton.disabled = noWeakCards;
  elements.startStudyButton.textContent = noWeakCards ? 'Fais quelques erreurs d’abord 😄' : 'Commencer →';
}

function renderStats() {
  const session = state.session;
  const studying = !state.study.setupVisible && session;
  elements.statsStrip.hidden = !studying;
  elements.leftPileZone.hidden = !studying;
  elements.rightPileZone.hidden = !studying;
  if (!studying) return;

  elements.passNumber.textContent = session.pass;
  const shownIndex = session.finished ? session.passTotal : Math.min(session.passAnswered + 1, session.passTotal);
  elements.progressText.textContent = `Carte ${shownIndex} / ${session.passTotal}`;
  elements.missedCount.textContent = session.missed.length;
  elements.knownCount.textContent = session.known.length;
  elements.leftPileCount.textContent = pluralizeCards(session.missed.length);
  elements.rightPileCount.textContent = pluralizeCards(session.known.length);
  elements.leftPile.style.setProperty('--pile-depth', Math.min(session.missed.length, 6));
  elements.rightPile.style.setProperty('--pile-depth', Math.min(session.known.length, 6));

  const showStreak = session.streak >= 3 && !session.finished;
  elements.streakBadge.hidden = !showStreak;
  elements.streakCount.textContent = session.streak;
}

function renderCard() {
  const session = state.session;
  const studying = !state.study.setupVisible && session;
  const finished = studying && session.finished;
  const card = currentCard();

  elements.resultPanel.hidden = !finished;
  elements.deck.hidden = !studying || finished;
  elements.feedbackLine.hidden = !studying || finished;
  elements.answerActions.hidden = !studying || finished;
  if (!studying || !card || finished) return;

  const unit = currentUnit();
  const forward = state.direction === defaultDirectionForUnit(unit);
  const frontKey = forward ? unit.sourceKey : unit.targetKey;
  const backKey = forward ? unit.targetKey : unit.sourceKey;
  elements.frontKicker.textContent = forward ? unit.sourceLanguage : unit.targetLanguage;
  elements.backKicker.textContent = forward ? unit.targetLanguage : unit.sourceLanguage;
  elements.frontWord.textContent = card[frontKey];
  elements.backWord.textContent = card[backKey];

  elements.flashcard.classList.toggle('is-flipped', state.flipped);
  elements.knowButton.disabled = !state.flipped || transitionLocked;
  elements.dontKnowButton.disabled = !state.flipped || transitionLocked;
  if (!state.flipped) elements.feedbackLine.textContent = 'Retourne la carte, puis choisis.';
}

function renderResult() {
  if (!state.session?.finished || state.study.setupVisible) return;
  const scopeTotal = state.study.activeCardIds.length || state.session.passTotal;
  const mastery = percent(state.session.known.length, scopeTotal);
  const firstPass = state.session.firstPassScore ?? percent(state.session.firstPassKnown, state.session.passTotal);
  const messaging = resultMessage(mastery);
  const masteredUnit = countMastered(allCardIds(), currentDirectionHistory());
  const unitPct = percent(masteredUnit, currentUnit().cards.length);

  elements.resultEmoji.textContent = messaging.emoji;
  elements.resultTitle.textContent = messaging.title;
  elements.resultEyebrow.textContent = state.study.mode === 'pack' ? `Paquet ${state.study.batchIndex + 1} terminé` : 'Session terminée';
  elements.firstPassScore.textContent = `${firstPass}%`;
  elements.masteryLabel.textContent = state.study.mode === 'all' ? 'Maîtrise de l’unité' : 'Maîtrise de cette session';
  elements.masteryScore.textContent = `${mastery}%`;
  elements.resultCopy.textContent = messaging.copy;
  elements.globalResult.textContent = `Unité : ${masteredUnit}/${currentUnit().cards.length} cartes maîtrisées · ${unitPct}%`;

  const hasMissed = state.session.missed.length > 0;
  elements.reviewMissedButton.disabled = !hasMissed;
  elements.reviewMissedButton.textContent = hasMissed
    ? `Revoir ${pluralizeCards(state.session.missed.length)}`
    : 'Aucune erreur ✓';

  const hasNextPack = state.study.mode === 'pack' && state.study.batchIndex < packCount() - 1;
  elements.nextPackResultButton.hidden = !hasNextPack;
  elements.nextPackResultButton.textContent = hasNextPack ? `Paquet ${state.study.batchIndex + 2} →` : '';
  elements.restartButton.textContent = state.study.mode === 'all' ? '↺ Recommencer l’unité' : '↺ Recommencer cette session';
}

