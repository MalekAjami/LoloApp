  'use strict';

// ---- data/english/unit1.js ----
const englishUnit1 = {
  id: 'en-unit-1',
  languageId: 'english',
  languageLabel: 'English',
  label: 'Unité 1',
  sourceLanguage: 'Français',
  targetLanguage: 'English',
  sourceCode: 'fr',
  targetCode: 'en',
  sourceKey: 'fr',
  targetKey: 'en',
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

// ---- data/german/kapitel1-words.js ----
const germanKapitel1Words = {
  id: 'de-k1-words',
  languageId: 'german',
  languageLabel: 'Deutsch · Mensch und Familie',
  label: 'Kapitel 1 · Mots',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['der Mensch, en, en', "l’homme, l’être humain"],
    ['menschlich', 'humain'],
    ['die Menschheit, /', "l’humanité"],
    ['die Leute (plur.)', 'les gens, les personnes'],
    ['die Menge, n', 'la foule'],
    ['die Person, en', 'la personne, l’individu'],
    ['persönlich', 'personnel'],
    ['der Herr, n, en', 'le monsieur'],
    ['die Dame, n', 'la dame'],
    ['der Mann, "er', "l’homme"],
    ['männlich', 'masculin'],
    ['die Frau, en', "la femme, l’épouse"],
    ['das Mädchen, -', 'la jeune fille'],
    ['das Kind, er', "l’enfant"],
    ['der Junge, n, n', 'le garçon'],
    ['der Jugendliche, n', "l’adolescent"],
    ['erwachsen', 'adulte'],
    ['wer?', 'qui?'],
    ['jemand', "quelqu’un"],
    ['niemand', 'ne… personne'],
    ['man', 'on'],
    ['selber (selbst)', 'soi-même'],
    ['heissen, heisst, hiess, hat geheissen', "s’appeler"],
    ['nennen, nennt, nannte, hat genannt', 'nommer, appeler, dire'],
    ['der Name, ns, n', 'le nom'],
    ['der Vorname, ns, n', 'le prénom'],
    ['heiraten', '1. épouser; 2. se marier'],
    ['verheiratet', 'marié'],
    ['geschieden', 'divorcé'],
    ['getrennt', 'séparé'],
    ['die Familie, n', 'la famille'],
    ['erziehen, erzieht, erzog, hat erzogen', 'éduquer'],
    ['die Erziehung, /', "l’éducation"],
    ['die Eltern (plur.)', 'les parents'],
    ['die Mutter, "’', 'la mère'],
    ['der Vater, "’', 'le père'],
    ['die Grossmutter, "’', 'la grand-mère'],
    ['der Grossvater, "’', 'le grand-père'],
    ['die Tochter, "’', 'la fille'],
    ['der Sohn, "e', 'le fils'],
    ['die Schwester, n', 'la sœur'],
    ['der Bruder, "’', 'le frère'],
    ['die Geschwister (plur.)', 'les frères et sœurs'],
    ['die Tante, n', 'la tante'],
    ['der Onkel, -', "l’oncle"],
    ['die Kusine, n / die Cousine, n', 'la cousine'],
    ['der Cousin, s', 'le cousin'],
    ['verwandt mit +D', 'parent (de)'],
    ['erben von +D', 'hériter de'],
    ['das Erbe, / (die Erbschaft, en)', "l’héritage"],
  ].map(([de, fr], index) => ({
    id: 'de-k1-w-' + String(index + 1).padStart(3, '0'),
    de,
    fr,
  })),
};

// ---- data/german/kapitel1-phrases.js ----
const germanKapitel1Phrases = {
  id: 'de-k1-phrases',
  languageId: 'german',
  languageLabel: 'Deutsch · Mensch und Familie',
  label: 'Kapitel 1 · Phrases',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['In diese Schule gehen viele junge Leute.', 'Beaucoup de jeunes vont dans cette école.'],
    ['Sie hat ein Kind bekommen.', 'Elle a eu un enfant.'],
    ['Sie haben ihren Sohn Manfred genannt.', 'Ils ont appelé leur fils Manfred.'],
    ['Sie hat einen netten jungen Mann geheiratet.', 'Elle a épousé un jeune homme très sympathique.'],
    ['Sie haben letztes Jahr geheiratet.', 'Ils se sont mariés l’année passée.'],
    ['Er ist mit meiner Cousine verwandt.', 'Il est apparenté à ma cousine.'],
    ['Ihre Verwandten kommen aus Deutschland.', 'Sa parenté vient d’Allemagne.'],
  ].map(([de, fr], index) => ({
    id: 'de-k1-p-' + String(index + 1).padStart(3, '0'),
    de,
    fr,
  })),
};

// ---- data/german/kapitel1-expressions.js ----
const germanKapitel1Expressions = {
  id: 'de-k1-expressions',
  languageId: 'german',
  languageLabel: 'Deutsch · Mensch und Familie',
  label: 'Kapitel 1 · Expressions',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['eine Menge Leute = viele Leute', 'une foule de gens = beaucoup de gens'],
    ['ein Jugendlicher', 'un adolescent'],
    ['die Erwachsenen', 'les adultes'],
  ].map(([de, fr], index) => ({
    id: 'de-k1-e-' + String(index + 1).padStart(3, '0'),
    de,
    fr,
  })),
};

// ---- data/german/kapitel2-words.js ----
const germanKapitel2Words = {
  id: 'de-k2-words',
  languageId: 'german',
  languageLabel: 'Deutsch · Gesellschaftsleben',
  label: 'Kapitel 2 · Mots',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['der Umgang, /', 'la (les) fréquentation(s)'],
    ['treffen, trifft, traf, hat getroffen', 'rencontrer'],
    ['begegnen +D, ist begegnet', 'rencontrer (par hasard)'],
    ['sich wenden an +A, wendet, wandte, hat gewandt', 's’adresser à'],
    ['anreden', 'aborder'],
    ['duzen', 'tutoyer'],
    ['siezen', 'vouvoyer'],
    ['bekannt', 'connu'],
    ['unbekannt', 'inconnu'],
    ['fremd', 'étranger'],
    ['sich vorstellen', 'se présenter'],
    ['vorstellen', 'présenter qn.'],
    ['kennen lernen +A', 'faire la connaissance de'],
    ['die Verabredung, en', 'le rendez-vous'],
    ['der Termin, e', 'le rendez-vous professionnel, l’obligation'],
    ['das Rendez-vous, -', 'le rendez-vous amoureux'],
    ['einladen zu +D, lädt ein, lud ein, hat eingeladen', 'inviter qn. à'],
    ['die Einladung, en', 'l’invitation'],
    ['die Party, s', 'la fête'],
    ['der Gast, "e', 'l’hôte, l’invité'],
    ['der Gastgeber, -', 'l’hôte (qui reçoit)'],
    ['das Fest, e', 'la fête'],
    ['feiern', 'fêter, célébrer'],
    ['besuchen +A', 'rendre visite à'],
    ['der Besuch, e', 'la visite'],
    ['grüssen', 'saluer'],
    ['(sich) begrüssen', '(se) saluer, se dire bonjour'],
    ['der Gruss, "e', 'la salutation'],
    ['Wie geht’s?', 'Comment ça va?'],
    ['auf Wiedersehen!', 'au revoir'],
    ['die Bitte, n', 'la prière, la demande'],
    ['bitten, bittet, bat, hat gebeten', 'prier, demander de +inf.; demander qch. à qn.'],
    ['bitte!', 's’il te plaît, s’il vous plaît'],
    ['danke!', 'merci'],
    ['danken +D für +A', 'remercier qn. de/pour qch.'],
    ['gleichfalls, ebenfalls', 'de même'],
    ['schenken', 'offrir'],
    ['das Geschenk, e', 'le cadeau'],
    ['gratulieren +D zu +D', 'féliciter qn. de qch.'],
    ['(sich) entschuldigen', '(s’)excuser'],
    ['die Entschuldigung, en', 'l’excuse'],
    ['die Ausrede, n', 'l’excuse, le prétexte'],
    ['Verzeihung!', 'pardon!'],
    ['verzeihen, verzeiht, verzieh, hat verziehen', 'pardonner à qn.'],
    ['leider', 'malheureusement'],
    ['es tut mir leid', 'je suis désolé(e)'],
    ['schade!', 'dommage'],
  ].map(([de, fr], index) => ({
    id: 'de-k2-w-' + String(index + 1).padStart(3, '0'),
    de,
    fr,
  })),
};

// ---- data/german/kapitel2-phrases.js ----
const germanKapitel2Phrases = {
  id: 'de-k2-phrases',
  languageId: 'german',
  languageLabel: 'Deutsch · Gesellschaftsleben',
  label: 'Kapitel 2 · Phrases',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['Er hat schlechten Umgang.', 'Il a de mauvaises fréquentations.'],
    ['Ich habe ihn vor dem Kino getroffen.', 'Je l’ai rencontré devant le cinéma.'],
    ['Ich bin ihm gestern in der Stadt begegnet.', 'Je suis tombé sur lui hier en ville.'],
    ['Wenden Sie sich an mich, wenn Sie ein Problem haben.', 'Adressez-vous à moi si vous avez un problème.'],
    ['Auf der Strasse hat mich ein Fremder angeredet.', 'Un inconnu m’a abordé dans la rue.'],
    ['Duzt du deinen Lehrer?', 'Est-ce que tu tutoies ton prof?'],
    ['Im Gymnasium siezen die Lehrer die Schüler.', 'Au lycée, les enseignants vouvoient les élèves.'],
    ['Stellen Sie sich bitte vor!', 'Présentez-vous, s’il vous plaît!'],
    ['Sie hat mir ihren Freund vorgestellt.', 'Elle m’a présenté son ami.'],
    ['In den Ferien habe ich viele Leute kennen gelernt.', 'Pendant les vacances, j’ai fait la connaissance de beaucoup de gens.'],
    ['Können wir einen Termin abmachen?', 'Pouvons-nous fixer un rendez-vous?'],
    ['Er lädt mich zu seiner Party ein.', 'Il m’invite à sa fête.'],
    ['Er hat seinen Geburtstag gefeiert.', 'Il a fêté son anniversaire.'],
    ['In den Ferien werde ich dich besuchen.', 'Pendant les vacances, je te rendrai visite.'],
    ['Heute haben wir Besuch.', 'Aujourd’hui, nous avons de la visite.'],
    ['Grüsse deine Eltern von mir.', 'Salue tes parents de ma part.'],
    ['Wir haben uns schon begrüsst.', 'Nous nous sommes déjà salués.'],
    ['Herzliche Grüsse!', 'Cordiales salutations!'],
    ['Wie geht es dir? – Mir geht es gut.', 'Comment vas-tu? – Je vais bien.'],
    ['Ich hätte eine Bitte.', 'J’aurais une demande.'],
    ['Er hat mich gebeten, auf ihn zu warten.', 'Il m’a demandé de l’attendre.'],
    ['Sie bat mich um Hilfe.', 'Elle me demanda de l’aide.'],
    ['Er hat mir für meine Einladung gedankt.', 'Il m’a remercié pour mon invitation.'],
    ['Guten Appetit! – Danke, gleichfalls.', 'Bon appétit! – Merci, pareillement.'],
    ['Er hat mir ein Buch zum Geburtstag geschenkt.', 'Il m’a offert un livre pour mon anniversaire.'],
    ['Sie hat mir zum Geburtstag gratuliert.', 'Elle m’a souhaité un joyeux anniversaire.'],
    ['Ich möchte mich bei dir entschuldigen.', 'J’aimerais m’excuser auprès de toi.'],
    ['Er findet immer Ausreden, wenn er zu spät kommt.', 'Il invente toujours des excuses quand il arrive en retard.'],
    ['Verzeih mir, bitte!', 'Pardonne-moi, s’il te plaît!'],
    ['Leider kann ich nicht kommen.', 'Malheureusement, je ne peux pas venir.'],
    ['Es tut mir leid, dass ich nicht kommen kann.', 'Je suis désolé de ne pas pouvoir venir.'],
    ['Schade, dass du nicht da warst!', 'Dommage que tu n’aies pas été là!'],
  ].map(([de, fr], index) => ({
    id: 'de-k2-p-' + String(index + 1).padStart(3, '0'),
    de,
    fr,
  })),
};

// ---- data/german/kapitel2-expressions.js ----
const germanKapitel2Expressions = {
  id: 'de-k2-expressions',
  languageId: 'german',
  languageLabel: 'Deutsch · Gesellschaftsleben',
  label: 'Kapitel 2 · Expressions',
  sourceLanguage: 'Français',
  targetLanguage: 'Deutsch',
  sourceCode: 'fr',
  targetCode: 'de',
  sourceKey: 'fr',
  targetKey: 'de',
  cards: [
    ['der Unbekannte / die Unbekannten / ein Unbekannter', 'l’inconnu / les inconnus / un inconnu'],
    ['der Fremde / die Fremden / ein Fremder', 'l’étranger / les étrangers / un étranger'],
    ['an / auf / bei diesem Fest', 'à cette fête'],
    ['bitten +A um +A', 'demander qch. à qn.'],
  ].map(([de, fr], index) => ({
    id: 'de-k2-e-' + String(index + 1).padStart(3, '0'),
    de,
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
    units: [
      germanKapitel1Words,
      germanKapitel1Phrases,
      germanKapitel1Expressions,
      germanKapitel2Words,
      germanKapitel2Phrases,
      germanKapitel2Expressions,
    ],
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

