  'use strict';

// ---- data/english/unit1.js ----
const englishUnit1 = {
  id: 'en-unit-1',
  languageId: 'english',
  languageLabel: 'English',
  label: 'Unité 1',
  sourceLanguage: 'Français',
  targetLanguage: 'English',
  cards: [
    ['to miss out on', 'passer à côté de'],
    ['nowadays', 'de nos jours, actuellement'],
    ['to depend on', 'dépendre de'],
    ['abroad', "à l'étranger"],
    ['(to do an) assignment', '(faire un) devoir'],
    ['break', 'pause'],
    ['assessment', 'évaluation'],
    ['grade (mainly US E.)', 'note'],
    ['make the grade', 'obtenir de bonnes notes, être à la hauteur, passer la rampe ou la barre'],
    ['mark (mainly Br. E.)', 'note'],
    ['higher education', 'éducation supérieure'],
    ['(to take) notes', '(prendre des) notes'],
    ['subject', 'matière'],
    ['term', 'trimestre'],
    ['timetable', 'horaire'],
    ['to take it in turns', 'faire chacun son tour, attendre son tour'],
    ['induction week', "semaine d'intégration"],
    ['lecture hall', 'amphithéâtre'],
    ['to attend', 'assister à'],
    ['degree', 'licence, diplôme universitaire'],
    ['facility, facilities', 'installations, équipements'],
    ['a full range of', 'une gamme complète'],
    ['resource', 'ressource'],
    ['personal tutor', 'tuteur personnel, chargé de cours universitaires'],
    ['guidance', 'conseils, aide'],
    ['lecture', 'conférence'],
    ['lecturer', 'conférencier'],
    ['extra-curricular', 'parascolaire'],
    ['to find out about', 'se renseigner sur, se procurer des informations'],
    ['undergraduate', 'étudiant de premier ou deuxième cycle (avant le Bachelor)'],
    ['postgraduate', 'étudiant de troisième cycle'],
    ['academic support', 'soutien scolaire'],
    ['scholarship', "bourse (d'étude)"],
    ['student loan', 'prêt étudiant'],
    ['student accommodation', "logement d'étudiant"],
    ["to take one's mind off", 'ne plus penser à quelque chose, se changer les idées, faire oublier'],
    ['to get together', 'se réunir, se rassembler'],
    ['(to have) a bite to eat', '(manger) un morceau'],
    ['background', 'milieu, éducation'],
    ['to be into', 'être fan, adorer'],
    ['staff', 'personnel'],
    ['to reckon (informal)', 'estimer'],
    ['to stress out', 'angoisser, stresser'],
    ['(to be) convinced', '(être) convaincu, persuadé'],
    ['to behave', 'se comporter'],
    ['to sound / to look', "sembler, avoir l'air"],
    ['towards', 'envers, face à'],
    ['basically', 'en gros, essentiellement'],
    ['delegate', 'délégué'],
    ['role-play', 'jeu de rôle'],
    ['to involve + -ing', 'impliquer, supposer'],
    ['current affairs', 'actualités'],
    ['speech', 'discours'],
    ['jailbreak', 'évasion'],
    ['society', 'société'],
    ['to set up', 'organiser'],
    ['to reflect', 'refléter'],
    ['to care about', 'se sentir concerné, ne pas être indifférent à'],
    ['to alter', 'changer, modifier, transformer'],
    ['beneficial', 'bénéfique'],
    ['completion / to complete', 'achèvement, fini / terminer'],
    ['for ages', 'une éternité, un temps fou'],
    ['novel', 'roman'],
    ['(not) yet', '(ne pas) encore'],
    ['(to make a) cake', '(faire un) gâteau'],
    ['(to make a) choice', '(faire un) choix'],
    ['(to do a) course', '(faire un) cours'],
    ['(to make a) decision', '(prendre une) décision'],
    ['(to do a) favour', '(rendre) service'],
    ['(to make a) mistake', '(faire une) erreur'],
    ['(to make) noise', '(faire du) bruit'],
    ['(to make a) phone call', '(passer un) coup de téléphone'],
    ['(to make a) plan', '(faire un) plan'],
    ['(to make a) promise', '(faire une) promesse'],
    ['(to make a) suggestion', '(faire une) suggestion'],
    ['extracurricular activities', 'activités extra-scolaires'],
    ['(to make an) appointment', '(prendre) rendez-vous'],
    ['(to make an) effort', '(faire un) effort'],
    ['(to do an) essay', '(faire une) dissertation'],
    ['(to do an) exam', '(passer un) examen'],
    ['(to make an) excuse', '(trouver une) excuse'],
    ['(to make an) offer', '(faire une) offre'],
    ['(to do) business', '(faire des) affaires'],
    ['(to do) chores', '(faire les) corvées'],
    ['(to make) friends', '(devenir / se faire des) amis'],
    ['(to do) homework', '(faire ses) devoirs'],
    ['(to make) money', "(gagner de l') argent"],
    ['(to make) progress', '(faire des) progrès'],
    ['(to do) sport', '(faire du) sport'],
    ['(to make the) dinner', '(faire le) souper, repas du soir'],
    ['(to do the) shopping', '(faire les) courses'],
    ['(to do the) washing', '(faire la) lessive'],
    ['(to do) well', '(bien) réussir'],
    ["(to do one's) best", '(faire de son) mieux'],
    ["(to do one's) hair", '(se faire) coiffer'],
    ['to carry on', 'continuer, poursuivre'],
    ['forensic science', 'police scientifique, criminalistique, science forensique'],
    ['to be interested in', 'être intéressé par'],
    ['vocational training', 'formation professionnelle'],
    ['to deal with', 'aborder, gérer'],
    ['worry, worries', 'problème, souci, préoccupation'],
    ['reliable', 'fiable'],
    ['pros and cons', 'le pour et le contre, les avantages et les inconvénients de'],
    ['to pay attention to', 'prêter attention à, faire attention'],
    ['sensible', 'raisonnable'],
    ['balanced', 'équilibré, objectif'],
    ['to be aware (of)', 'être conscient de, être attentif à'],
    ['for a while', 'pendant un moment'],
    ['(to give) advice', 'conseiller, donner des conseils'],
    ['(to ask for) advice', 'demander un conseil, des conseils'],
    ['several', 'plusieurs'],
    ['anyway', 'quand même, de toute façon ; bref, bon'],
    ['(to be) up to', 'faire, fabriquer, trafiquer, manigancer'],
    ['by the way', "au fait, à propos, d'ailleurs"],
    ['to remind sb to + inf. / to remind sb of sth', 'rappeler à, faire penser à'],
    ['to reply', 'répondre'],
    ['twice', 'deux fois, à deux reprises'],
    ['instead of', 'au lieu de, plutôt que'],
    ['to fail', 'rater, ne pas réussir']
  ].map(([en, fr], index) => ({
    id: `en-u1-${String(index + 1).padStart(3, '0')}`,
    en,
    fr,
  })),
};

// ---- data/catalog.js ----
const catalog = [
  {
    id: 'english',
    label: 'English',
    icon: '🇬🇧',
    units: [englishUnit1],
  },
  {
    id: 'german',
    label: 'Deutsch',
    icon: '🇩🇪',
    units: [],
    comingSoon: true,
  },
];

const unitsById = new Map(
  catalog.flatMap((language) => language.units.map((unit) => [unit.id, unit])),
);

// ---- logic.js ----
function shuffle(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function percent(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function getPackCount(totalCards, packSize) {
  if (!totalCards || !packSize) return 0;
  return Math.ceil(totalCards / packSize);
}

function getPackCardIds(cardIds, packSize, packIndex) {
  const safeSize = Math.max(1, Number(packSize) || cardIds.length || 1);
  const count = getPackCount(cardIds.length, safeSize);
  const safeIndex = Math.min(Math.max(0, Number(packIndex) || 0), Math.max(0, count - 1));
  const start = safeIndex * safeSize;
  return cardIds.slice(start, start + safeSize);
}

function rankWeakCards(cardIds, stats = {}, limit = 20) {
  const ranked = cardIds
    .map((id, sourceIndex) => {
      const entry = stats[id] || {};
      const seen = Number(entry.seen) || 0;
      const wrong = Number(entry.wrong) || 0;
      const errorRate = seen ? wrong / seen : 0;
      return { id, wrong, seen, errorRate, sourceIndex };
    })
    .filter((entry) => entry.wrong > 0)
    .sort((a, b) => (
      b.wrong - a.wrong
      || b.errorRate - a.errorRate
      || b.seen - a.seen
      || a.sourceIndex - b.sourceIndex
    ));

  return ranked.slice(0, Math.max(1, Number(limit) || 20)).map((entry) => entry.id);
}

function recordCardAnswer(stats = {}, cardId, knowsIt) {
  const previous = stats[cardId] || { seen: 0, correct: 0, wrong: 0, mastered: false, last: null };
  return {
    ...stats,
    [cardId]: {
      seen: previous.seen + 1,
      correct: previous.correct + (knowsIt ? 1 : 0),
      wrong: previous.wrong + (knowsIt ? 0 : 1),
      mastered: Boolean(knowsIt),
      last: knowsIt ? 'correct' : 'wrong',
    },
  };
}

function countMastered(cardIds, stats = {}) {
  return cardIds.reduce((total, id) => total + (stats[id]?.mastered ? 1 : 0), 0);
}

function createSession(cardIds, random = Math.random) {
  return {
    queue: shuffle(cardIds, random),
    known: [],
    missed: [],
    pass: 1,
    passTotal: cardIds.length,
    passAnswered: 0,
    firstPassKnown: 0,
    firstPassScore: null,
    streak: 0,
    bestStreak: 0,
    finished: cardIds.length === 0,
  };
}

function answerCard(session, cardId, knowsIt) {
  const queue = session.queue.filter((id) => id !== cardId);
  const known = knowsIt ? [...session.known, cardId] : session.known;
  const missed = knowsIt ? session.missed : [...session.missed, cardId];
  const streak = knowsIt ? session.streak + 1 : 0;
  const next = {
    ...session,
    queue,
    known,
    missed,
    passAnswered: session.passAnswered + 1,
    firstPassKnown: session.pass === 1 && knowsIt ? session.firstPassKnown + 1 : session.firstPassKnown,
    streak,
    bestStreak: Math.max(session.bestStreak, streak),
  };

  if (queue.length === 0) {
    next.finished = true;
    if (session.pass === 1) {
      next.firstPassScore = percent(next.firstPassKnown, session.passTotal);
    }
  }

  return next;
}

function continueMissed(session, random = Math.random) {
  if (!session.missed.length) return session;
  const queue = shuffle(session.missed, random);
  return {
    ...session,
    queue,
    missed: [],
    pass: session.pass + 1,
    passTotal: queue.length,
    passAnswered: 0,
    streak: 0,
    finished: false,
  };
}

// ---- audio.js ----
let audioContext;

function getContext() {
  if (!audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioContext = new Ctx();
  }
  return audioContext;
}

function tone(frequency, duration, startDelay = 0, type = 'sine', gainValue = 0.06) {
  const context = getContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime + startDelay;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}

function playSuccess() {
  tone(520, 0.11, 0, 'triangle', 0.05);
  tone(690, 0.14, 0.09, 'triangle', 0.055);
}

function playMiss() {
  tone(210, 0.12, 0, 'square', 0.025);
  tone(155, 0.17, 0.09, 'sine', 0.045);
}

function playStreak() {
  tone(520, 0.1, 0, 'triangle', 0.045);
  tone(660, 0.1, 0.08, 'triangle', 0.05);
  tone(860, 0.18, 0.16, 'triangle', 0.055);
}

// ---- feedback.js ----
const successMessages = [
  'Bien joué ! ✨',
  'Ça rentre ! 🧠',
  'Propre. Net. Suivant. 😎',
  'Tu l’avais dans la poche.',
  'Encore une de gagnée !',
  'Boum. Carte maîtrisée. 💥',
];

const retryMessages = [
  'Oups… celle-là revient 😄',
  'Pas encore. Elle n’échappera pas au prochain tour.',
  'Cette carte demande un rappel… insistant 😅',
  'On la garde sous surveillance 👀',
  'Elle fait la maligne. On la revoit plus tard.',
  'Aucun drame : retour dans la pile rouge.',
];

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resultMessage(score) {
  if (score === 100) return { title: 'Tout est maîtrisé !', emoji: '🏆', copy: 'Aucune carte à revoir. Tu peux recommencer dans l’autre sens pour vérifier que ça tient vraiment.' };
  if (score >= 85) return { title: 'Très solide.', emoji: '🚀', copy: 'La majorité est acquise. Un passage ciblé sur les cartes rouges devrait suffire.' };
  if (score >= 65) return { title: 'Bonne base.', emoji: '🎯', copy: 'Tu connais déjà une bonne partie. Maintenant, on attaque uniquement les cartes qui résistent.' };
  if (score >= 40) return { title: 'Ça progresse.', emoji: '🧩', copy: 'Il reste du travail, mais la pile rouge va devenir de plus en plus petite à chaque passage.' };
  return { title: 'On construit les bases.', emoji: '🛠️', copy: 'Pas besoin de tout savoir au premier tour. Le prochain passage ne contiendra que les cartes à revoir.' };
}

