function render() {
  renderTree();
  renderHeader();
  renderSetup();
  renderStats();
  renderCard();
  renderResult();
  saveState();
}

function flipCard() {
  if (!state.session || state.study.setupVisible || state.session.finished || transitionLocked) return;
  state.flipped = !state.flipped;
  renderCard();
  if (state.flipped) elements.feedbackLine.textContent = 'Tu le savais ?';
}

function showToast(message, tone = 'neutral') {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.className = `toast show ${tone}`;
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 1800);
}

function celebrate() {
  if (!state.settings.animations) return;
  const symbols = ['✦', '●', '★', '◆', '✧', '●', '✦', '★'];
  elements.celebrationLayer.innerHTML = '';
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement('span');
    piece.textContent = symbols[i % symbols.length];
    piece.style.setProperty('--x', `${10 + Math.random() * 80}vw`);
    piece.style.setProperty('--delay', `${Math.random() * 0.25}s`);
    piece.style.setProperty('--drift', `${-60 + Math.random() * 120}px`);
    elements.celebrationLayer.appendChild(piece);
  }
  setTimeout(() => { elements.celebrationLayer.innerHTML = ''; }, 1600);
}

function startStudy() {
  const ids = scopeCardIds();
  if (!ids.length) {
    showToast('Aucune carte difficile pour le moment.', 'neutral');
    return;
  }
  state.study.activeCardIds = ids;
  state.study.setupVisible = false;
  state.session = createSession(ids);
  state.flipped = false;
  showToast(`${scopeLabel()} · mélange effectué 🔀`, 'neutral');
  render();
}

function answer(knowsIt) {
  if (!state.flipped || transitionLocked || !state.session || state.session.finished) return;
  const card = currentCard();
  if (!card) return;

  transitionLocked = true;
  const nextSession = answerCard(state.session, card.id, knowsIt);
  setCurrentDirectionHistory(recordCardAnswer(currentDirectionHistory(), card.id, knowsIt));

  if (state.settings.sound) {
    if (knowsIt && nextSession.streak > 0 && nextSession.streak % 5 === 0) playStreak();
    else if (knowsIt) playSuccess();
    else playMiss();
  }

  const message = knowsIt ? randomFrom(successMessages) : randomFrom(retryMessages);
  if (state.settings.funnyMessages) showToast(message, knowsIt ? 'success' : 'danger');
  if (knowsIt && nextSession.streak > 0 && nextSession.streak % 5 === 0) celebrate();

  elements.flashcard.classList.add(knowsIt ? 'throw-right' : 'throw-left');
  const delay = state.settings.animations ? 200 : 20;

  setTimeout(() => {
    state.session = nextSession;
    state.flipped = false;
    transitionLocked = false;
    elements.flashcard.classList.remove('throw-right', 'throw-left', 'is-flipped');
    render();
  }, delay);
}

function continueSession() {
  if (!state.session?.missed.length) return;
  state.session = continueMissed(state.session);
  state.flipped = false;
  showToast('Pile rouge remélangée. Deuxième chance ! 🔀', 'neutral');
  render();
}

function restartSession() {
  if (!state.study.activeCardIds.length) return;
  state.session = createSession(state.study.activeCardIds);
  state.flipped = false;
  showToast('Même sélection, nouveau mélange.', 'neutral');
  render();
}

function nextPack() {
  if (state.study.mode !== 'pack' || state.study.batchIndex >= packCount() - 1) return;
  state.study.batchIndex += 1;
  state.study.activeCardIds = getPackCardIds(ensurePackOrder(), state.study.batchSize, state.study.batchIndex);
  state.session = createSession(state.study.activeCardIds);
  state.study.setupVisible = false;
  state.flipped = false;
  showToast(`Paquet ${state.study.batchIndex + 1}/${packCount()} prêt.`, 'neutral');
  render();
}

function backToUnit() {
  state.study.setupVisible = true;
  state.session = null;
  state.study.activeCardIds = [];
  state.flipped = false;
  render();
}

function selectUnit(unitId) {
  if (!unitsById.has(unitId) || unitId === state.selectedUnitId) return;
  state.selectedUnitId = unitId;
  state.study = { ...freshState(unitId).study };
  state.session = null;
  state.flipped = false;
  render();
}

function toggleDirection() {
  state.direction = state.direction === 'fr-en' ? 'en-fr' : 'fr-en';
  state.study.setupVisible = true;
  state.study.activeCardIds = [];
  state.session = null;
  state.flipped = false;
  showToast(state.direction === 'fr-en' ? 'Français → English' : 'English → Français', 'neutral');
  render();
}

function toggleSound() {
  state.settings.sound = !state.settings.sound;
  render();
  showToast(state.settings.sound ? 'Son activé 🔊' : 'Son coupé 🔇');
}

function toggleAnimations() {
  state.settings.animations = !state.settings.animations;
  render();
  showToast(state.settings.animations ? 'Animations activées ✨' : 'Animations réduites');
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch { /* ignored */ }
  state = freshState(state.selectedUnitId);
  render();
  showToast('Progression et historique des erreurs effacés.', 'neutral');
}

function setStudyMode(mode) {
  if (!['pack', 'all', 'weak'].includes(mode)) return;
  state.study.mode = mode;
  render();
}

function setPackSize(size) {
  state.study.batchSize = Number(size);
  state.study.batchIndex = 0;
  render();
}

function setWeakLimit(limit) {
  state.study.weakLimit = Number(limit);
  render();
}

function movePack(delta) {
  const next = Math.min(Math.max(0, state.study.batchIndex + delta), Math.max(0, packCount() - 1));
  state.study.batchIndex = next;
  render();
}

function newPackCycle() {
  ensurePackOrder(true);
  state.session = null;
  state.study.setupVisible = true;
  state.flipped = false;
  showToast('Nouvel ordre créé pour toute l’unité 🔀', 'neutral');
  render();
}

elements.flashcard.addEventListener('click', flipCard);
elements.knowButton.addEventListener('click', () => answer(true));
elements.dontKnowButton.addEventListener('click', () => answer(false));
elements.reviewMissedButton.addEventListener('click', continueSession);
elements.nextPackResultButton.addEventListener('click', nextPack);
elements.restartButton.addEventListener('click', restartSession);
elements.backToUnitButton.addEventListener('click', backToUnit);
elements.startStudyButton.addEventListener('click', startStudy);
elements.directionToggle.addEventListener('click', toggleDirection);
elements.soundToggle.addEventListener('click', toggleSound);
elements.animationToggle.addEventListener('click', toggleAnimations);
elements.resetStorageButton.addEventListener('click', clearProgress);
elements.prevPackButton.addEventListener('click', () => movePack(-1));
elements.nextPackButton.addEventListener('click', () => movePack(1));
elements.newCycleButton.addEventListener('click', newPackCycle);

document.querySelectorAll('[data-study-mode]').forEach((button) => {
  button.addEventListener('click', () => setStudyMode(button.dataset.studyMode));
});
document.querySelectorAll('[data-pack-size]').forEach((button) => {
  button.addEventListener('click', () => setPackSize(button.dataset.packSize));
});
document.querySelectorAll('[data-weak-limit]').forEach((button) => {
  button.addEventListener('click', () => setWeakLimit(button.dataset.weakLimit));
});

document.addEventListener('keydown', (event) => {
  if (!state.session || state.study.setupVisible) return;
  if (event.key === ' ' && !state.session.finished) {
    event.preventDefault();
    flipCard();
  }
  if (state.flipped && event.key === 'ArrowRight') answer(true);
  if (state.flipped && event.key === 'ArrowLeft') answer(false);
});

render();
