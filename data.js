/* ═══════════════════════════════════════════════════
   data.js — StudyShare M1 ST
   ✅ C'est le SEUL fichier que tu dois éditer
   ❌ Ne touche pas à index.html pour les données
═══════════════════════════════════════════════════ */

// ══════════════════════════════
// EXAMENS
// ══════════════════════════════
// date : format 'AAAA-MM-JJ'   ex: '2026-01-06'
// time : format 'HHhMM'        ex: '15h30'
// sem  : 'S1' ou 'S2'
const EXAMS = [
  { module:'CNA',                   date:'2026-01-06', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Hamza',       sem:'S1' },
  { module:'Systèmes embarqués',    date:'2026-01-08', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Chelali',     sem:'S1' },
  { module:'SPA',                   date:'2026-01-11', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Ouarzeddine', sem:'S1' },
  { module:'FPGA',                  date:'2026-01-14', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Halilali',    sem:'S1' },
  { module:'POO',                   date:'2026-01-17', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Serir',       sem:'S1' },
  { module:'Radiocommunication',    date:'2026-01-21', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Haddad',      sem:'S1' },
  { module:'Routage',               date:'2026-01-22', horaire:'10H15-11H45', salle:'E7,E8', responsable:'Farah',       sem:'S1' },
  { module:'TNS',                   date:'2026-05-10', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Saadi Ahmed', sem:'S2' },
  { module:'Tr.Images',             date:'2026-05-12', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Lounis',      sem:'S2' },
  { module:'Éthique-déontologie',   date:'2026-05-14', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Meksen',      sem:'S2' },
  { module:'Codage et Compression', date:'2026-05-17', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Serir',       sem:'S2' },
  { module:'IA',                    date:'2026-05-19', horaire:'13H45-15H15', salle:'E7,E8', responsable:'Chelali',     sem:'S2' },
  { module:'Antennes',              date:'2026-05-21', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Raaf',        sem:'S2' },
  { module:'Canaux de transmission',date:'2026-05-24', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Haddad',      sem:'S2' },
  { module:'Dispositifs RF',       date:'2026-01-05', horaire:'15H30-17H00', salle:'149T', responsable:'Adane',      sem:'M2' },
  { module:'Télécom Spatiale',     date:'2026-01-07', horaire:'15H30-17H00', salle:'149T', responsable:'Haddad',     sem:'M2' },
  { module:'Multimédia',           date:'2026-01-10', horaire:'15H30-17H00', salle:'149T', responsable:'Hamidia',    sem:'M2' },
  { module:'RSF',                  date:'2026-01-13', horaire:'15H30-17H00', salle:'149T', responsable:'Farah',      sem:'M2' },
  { module:'Radionavigation',      date:'2026-01-15', horaire:'13H45-15H15', salle:'149T', responsable:'Kheddam',    sem:'M2' },
  { module:'Télévision Numérique', date:'2026-01-18', horaire:'12H00-13H30', salle:'149T', responsable:'Chellali',   sem:'M2' },
  { module:'Rech. Documentaire',   date:'2026-01-19', horaire:'15H30-17H00', salle:'149T', responsable:'Bouchemakh', sem:'M2' },
  { module:'Com. Optique',         date:'2026-01-20', horaire:'15H30-17H00', salle:'149T', responsable:'Bazi',       sem:'M2' },
];

// ══════════════════════════════
// MODULES
// ══════════════════════════════
// wip:true = en fabrication (verrouillé, pas cliquable)
const MODULES = [
  {name:'CNA',                   sem:'S1', icon:'⚡',  wip:false},
  {name:'Systèmes embarqués',    sem:'S1', icon:'🔧',  wip:false},
  {name:'SPA',                   sem:'S1', icon:'📊',  wip:false},
  {name:'FPGA',                  sem:'S1', icon:'🖥️',  wip:false},
  {name:'POO',                   sem:'S1', icon:'💻',  wip:false},
  {name:'Radiocommunication',    sem:'S1', icon:'📻',  wip:false},
  {name:'Routage',               sem:'S1', icon:'🔀',  wip:false},
  {name:'TNS',                   sem:'S2', icon:'🎛️',  wip:false},
  {name:'Tr.Images',             sem:'S2', icon:'🖼️',  wip:false},
  {name:'Éthique-déontologie',   sem:'S2', icon:'⚖️',  wip:false},
  {name:'Codage et Compression', sem:'S2', icon:'📦',  wip:false},
  {name:'IA',                    sem:'S2', icon:'🤖',  wip:false},
  {name:'Antennes',              sem:'S2', icon:'📡',  wip:false},
  {name:'Canaux de transmission',sem:'S2', icon:'📶',  wip:false},
  {name:'Dispositifs RF',        sem:'M2', icon:'📡', wip:false},
  {name:'Com. Optique',          sem:'M2', icon:'💡', wip:false},
  {name:'Télévision Numérique',  sem:'M2', icon:'📺', wip:false},
  {name:'RSF',                   sem:'M2', icon:'📶', wip:false},
  {name:'Télécom Spatiale',      sem:'M2', icon:'🛰️', wip:false},
  {name:'Radionavigation',       sem:'M2', icon:'🧭', wip:false},
  {name:'Rech. Documentaire',    sem:'M2', icon:'📰', wip:false},
  {name:'Multimédia',            sem:'M2', icon:'🎬', wip:false},
  {name:'M2 — RT',               sem:'M2', icon:'🌐',  wip:true},
];

// ══════════════════════════════
// PROFESSEURS
// ══════════════════════════════
// initials : 2 lettres pour l'avatar   ex: 'BA'
const PROFS = [
  { nom:'Mr. Hamza',       module:'CNA',                email:'hamzakrimo@yahoo.fr',       initials:'HZ' },
  { nom:'Mme. Chelali',     module:'Systèmes embarqués', email:'chelali_zohra@yahoo.fr',      initials:'CH' },
  { nom:'Mme. Ouarzeddine', module:'SPA',                email:'m.ouarzeddine@yahoo.fr',  initials:'OU' },
  { nom:'Mr. Halilali',    module:'FPGA',               email:'a_halilali@hotmail.com',     initials:'HL' },
  { nom:'Mme. Serir',       module:'POO',                email:'aserir@hotmail.com',        initials:'SE' },
  { nom:'Mr. Haddad',      module:'Radiocommunication', email:'h_boualem@hotmail.com',       initials:'HD' },
  { nom:'Mr. Farah',       module:'Routage',            email:'fafarid@yahoo.fr',        initials:'FA' },
  { nom:'Mme. Saadi Ahmed', module:'TNS',                email:'sanpedagogy@gmail.com',        initials:'SA' },
  { nom:'Mme. Lounis',      module:'Tr.Images',          email:'lounisbahia@yahoo.fr',       initials:'LO' },
  { nom:'Mme. Meksen',      module:'Éthique-déontologie',email:'tmeksen@usthb.dz',       initials:'ME' },
  { nom:'Mme. Serir',       module:'Codage et Compression',email:'aserir@hotmail.com',      initials:'SE' },
  { nom:'Mme. Chelali',     module:'IA',                 email:'chelali_zohra@yahoo.fr',      initials:'CH' },
  { nom:'Mme. Raaf',        module:'Antennes',           email:'rf_ouarda@yahoo.fr',         initials:'RA' },
  { nom:'Mr. Haddad',      module:'Canaux de transmission',email:'h_boualem@hotmail.com',    initials:'HD' },
  { nom:'Mme.  Bouchemakh', module:'TP codage et POO',email:'lynda.bouchemakh@usthb.edu.dz',    initials:'BC' },
  { nom:'Mr. Tounsi',      module:'TP canaux',email:'mltounsi@yahoo.fr',    initials:'TS' },
];

// ══════════════════════════════
// FICHIERS
// ══════════════════════════════
// Pour chaque fichier Google Drive :
//   1. Ouvre dans Drive → clic droit → "Obtenir le lien" → "Toute personne avec le lien"
//   2. Copie l'ID entre /d/ et /view dans l'URL
//   3. Colle-le dans driveId ci-dessous
//
// type possible : 'cours' | 'td' | 'tp' | 'resume' | 'examen' | 'record'
const FICHIERS = [
  {
  id: 1,
  nom: "Résumé Systèmes Embarqués — Rattrapage",
  description: "Thumb ISA · DHT22 · LSL · ARM Cortex-M · QCM",
  type: "resume",
  matiere: "Systèmes embarqués",
  taille: "HTML",
  date: "2026",
  embedUrl: "resume_embarques.html",
  url: "resume_embarques.html",
  source: "local"
},
  {
    id: 2,
    nom: "Résumé IA — Examen",
    description: "CNN · KNN · SVM · QCM",
    type: "resume",
    matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
    taille: "HTML",
    date: "2026",
    embedUrl: "resume_ai.html",
    url: "resume_ai.html",
    source: "local"
  },
  {
    id: 3,
    nom: "Résumé IA — 1H d'examen",
    description: "Apprentissage supervisé · Réseaux de neurones · SVM · QCM",
    type: "resume",
    matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
    taille: "HTML",
    date: "2026",
    embedUrl: "resume_EXAM_1H_IA.html",
    url: "resume_EXAM_1H_IA.html",
    source: "local"
  },
  {
    id: 4,
    nom: "Résumé Routage — Examen",
    description: "Dijkstra · Bellman-Ford · Link State · Broadcast",
    type: "resume",
    matiere: "Routage",      // ← doit correspondre EXACTEMENT au nom dans MODULES
    taille: "HTML",
    date: "2026",
    embedUrl: "resume_routage.html",
    url: "resume_routage.html",
    source: "local"
  },
{
  id: 5,
  nom: 'Cours CNA 24-25',
  matiere: 'CNA',
  type: 'cours',
  description: 'Tout les chapitres du cours CNA pour l’année 2024-2025',
  date: '2025',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1we-Fh5ZxMvQz1tlCBzxt7mUoGbdm5pO-?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1we-Fh5ZxMvQz1tlCBzxt7mUoGbdm5pO-?usp=drive_link',
  source: 'drive'
},
{
  id: 6,
  nom: 'Cours CNA 25-26',
  matiere: 'CNA',
  type: 'cours',
  description: 'Tout les chapitres du cours CNA pour l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/15J7A25LQI2DB2gLZfjzOoiPAqRg6ELAz?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/15J7A25LQI2DB2gLZfjzOoiPAqRg6ELAz?usp=drive_link',
  source: 'drive'
},
{
  id: 7,
  nom: 'Examens CNA 2018',
  matiere: 'CNA',
  type: 'examen',
  description: 'Examens de CNA de l’année 2018',
  date: '2018',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1XC-N-sYfv_FxbZRqZlX-kmd8Wg5NaR5X?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1XC-N-sYfv_FxbZRqZlX-kmd8Wg5NaR5X?usp=drive_link',
  source: 'drive'
},
{
  id: 8,
  nom: 'Examens CNA 2026 partie QCM',
  matiere: 'CNA',
  type: 'examen',
  description: 'Examens de CNA de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Mh6EoObIZ24Anc7y5KteVxOLywElxN2Q?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Mh6EoObIZ24Anc7y5KteVxOLywElxN2Q?usp=drive_link',
  source: 'drive'
},
{
  id: 9,
  nom: 'Intero CNA 2021',
  matiere: 'CNA',
  type: 'examen',
  description: 'Interrogation de CNA de l’année 2021',
  date: '2021',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1fmrjc0FacqCU1RWqV73VbLxKNrhTuFVL?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1fmrjc0FacqCU1RWqV73VbLxKNrhTuFVL?usp=drive_link',
  source: 'drive'
},
{
  id: 10,
  nom: 'QCM CNA',
  matiere: 'CNA',
  type: 'examen',
  description: 'QCM de CNA fait par IA pour s’entraîner à l’examen',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1nHsv5yHfF9R4pPwn--cv3--TBqW19Dow?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1nHsv5yHfF9R4pPwn--cv3--TBqW19Dow?usp=drive_link',
  source: 'drive'
},
{
  id: 11,
  nom: 'Résume CDMA',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre CDMA de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1gsS3XZmi6AtozGItI_lR8f7v1JHnuBKn?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1gsS3XZmi6AtozGItI_lR8f7v1JHnuBKn?usp=drive_link',
  source: 'drive'
},
{
  id: 12,
  nom: 'Résume égalisation',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre égalisation de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1U9daTmmucjK2-E97DIcmx5YfLPXaWoe4?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1U9daTmmucjK2-E97DIcmx5YfLPXaWoe4?usp=drive_link',
  source: 'drive'
},
{
  id: 13,
  nom: 'Résume MIMO',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre MIMO de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1iY9HR-H0lWY4AiFBQojBESSFo6FYD73o?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1iY9HR-H0lWY4AiFBQojBESSFo6FYD73o?usp=drive_link',
  source: 'drive'
},
{
  id: 14,
  nom: 'Résume Modulation',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre Modulation de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1j_zY3ZmbH0lQrEUy0hMbX26PqxvghXou?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1j_zY3ZmbH0lQrEUy0hMbX26PqxvghXou?usp=drive_link',
  source: 'drive'
},
{
  id: 15,
  nom: 'Résume Modulation numérique',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre Modulation numérique de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1tfwfgdvWwgwxbZ1STIQZzf1GRArPU9kN?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1tfwfgdvWwgwxbZ1STIQZzf1GRArPU9kN?usp=drive_link',
  source: 'drive'
},
{
  id: 917,
  nom: 'Résume OFDM',
  matiere: 'CNA',
  type: 'resume',
  description: 'Résumé du chapitre OFDM de CNA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1aojZikrNi28m0ZAvLV_94TEgkcbJYCAI?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1aojZikrNi28m0ZAvLV_94TEgkcbJYCAI?usp=drive_link',
  source: 'drive'
},
{
  id: 22,
  nom: 'TD 1 CDMA',
  matiere: 'CNA',
  type: 'td',
  description: 'Série de TD avec solutions du chapitre CDMA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1ESrjD7ke_8SatJhzhcvRmB-O3wmtEX3a?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1ESrjD7ke_8SatJhzhcvRmB-O3wmtEX3a?usp=drive_link',
  source: 'drive'
},
{
  id: 21,
  nom: 'TD 2 OFDM',
  matiere: 'CNA',
  type: 'td',
  description: 'Série de TD avec solutions du chapitre OFDM',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/124LTybgCg_-6MArfCCOFIT9FEaCWWiKe?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/124LTybgCg_-6MArfCCOFIT9FEaCWWiKe?usp=drive_link',
  source: 'drive'
},
{
  id: 19,
  nom: 'TD 3 Modulation',
  matiere: 'CNA',
  type: 'td',
  description: 'Série de TD avec solutions du chapitre Modulation',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wZEXjzQpgGiz9yXoMDz7EquK2ZLp1O8z?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wZEXjzQpgGiz9yXoMDz7EquK2ZLp1O8z?usp=drive_link',
  source: 'drive'
},
{
  id: 18,
  nom: 'TD 4 MIMO',
  matiere: 'CNA',
  type: 'td',
  description: 'Série de TD avec solutions du chapitre MIMO',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1n2bAnufb9XF5Vf8HNQ2_y2GsVf4j0RwA?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1n2bAnufb9XF5Vf8HNQ2_y2GsVf4j0RwA?usp=drive_link',
  source: 'drive'
},
{
  id: 17,
  nom: 'TD révision',
  matiere: 'CNA',
  type: 'td',
  description: 'Série de révision',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/18EdE0tWpPfvrDRhykwk9jXgdyd532Zvc?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/18EdE0tWpPfvrDRhykwk9jXgdyd532Zvc?usp=drive_link',
  source: 'drive'
},
{
  id: 16,
  nom: 'Bonus',
  matiere: 'CNA',
  type: 'td',
  description: 'Exercices bonus pour bien comprendre',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1oFh9bfc4WXqN8_PcdS98-gDcl4rktXxG?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1oFh9bfc4WXqN8_PcdS98-gDcl4rktXxG?usp=drive_link',
  source: 'drive'
},
{
  id: 23,
  nom: 'Cours FPGA 2017-2018',
  matiere: 'FPGA',
  type: 'cours',
  description: 'Cours de FPGA de l’année 2017-2018 pour aider',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1ft1v6TSaW00Rb1ngn9F70X1_UQIjv1o2?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1ft1v6TSaW00Rb1ngn9F70X1_UQIjv1o2?usp=drive_link',
  source: 'drive'
},
{
  id: 24,
  nom: 'Cours FPGA écrit à la main',
  matiere: 'FPGA',
  type: 'cours',
  description: 'Cours de FPGA écrit à la main (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1ucAkdcDAw0Une5g-uQpwhKY33Eg1Vq_X?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1ucAkdcDAw0Une5g-uQpwhKY33Eg1Vq_X?usp=drive_link',
  source: 'drive'
},
{
  id: 26,
  nom: 'Examen 2012',
  matiere: 'FPGA',
  type: 'examen',
  description: 'Examen de FPGA de l’année 2012',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1R2_W2-9EszPZf-qKrR6PUaoGOCAjhKqY?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1R2_W2-9EszPZf-qKrR6PUaoGOCAjhKqY?usp=drive_link',
  source: 'drive'
},
{
  id: 27,
  nom: 'Examen 2014',
  matiere: 'FPGA',
  type: 'examen',
  description: 'Examen de FPGA de l’année 2014',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1del27aKs36PdbELCYxpGepK4ngBFOu-F?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1del27aKs36PdbELCYxpGepK4ngBFOu-F?usp=drive_link',
  source: 'drive'
},
{
  id: 28,
  nom: 'Examen 2016',
  matiere: 'FPGA',
  type: 'examen',
  description: 'Examen de FPGA de l’année 2016',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1sCX2SKuF5fUS5qgBlSDXB79hluNyIje5?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1sCX2SKuF5fUS5qgBlSDXB79hluNyIje5?usp=drive_link',
  source: 'drive'
},
{
  id: 90,
  nom: 'Examen 2026',
  matiere: 'FPGA',
  type: 'examen',
  description: 'Examen de FPGA de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1yKB7OgkSbxu6DrZlesJg2qhECp5tZ3w3?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1yKB7OgkSbxu6DrZlesJg2qhECp5tZ3w3?usp=drive_link',
  source: 'drive'
},
{
  id: 33,
  nom: 'Série de TD 3',
  matiere: 'FPGA',
  type: 'td',
  description: 'Enoncer Série de TD 3 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1RNaG8iTZK-7Nl0uiGtFpf9rYFbutktgs?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1RNaG8iTZK-7Nl0uiGtFpf9rYFbutktgs?usp=drive_link',
  source: 'drive'
},
{
  id: 34,
  nom: 'Série de TD 2',
  matiere: 'FPGA',
  type: 'td',
  description: 'Enoncer Série de TD 2 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1b7qbV4Mnw8aFAz0yw3doWqJZPrk12ZDO?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1b7qbV4Mnw8aFAz0yw3doWqJZPrk12ZDO?usp=drive_link',
  source: 'drive'
},
{
  id: 35,
  nom: 'Série de TD 1',
  matiere: 'FPGA',
  type: 'td',
  description: 'Enoncer Série de TD 1 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1r0F8pel9uULptSdKllM3oReKARU04aGP?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1r0F8pel9uULptSdKllM3oReKARU04aGP?usp=drive_link',
  source: 'drive'
},
{
  id: 32,
  nom: 'Solution série de TD 3',
  matiere: 'FPGA',
  type: 'td',
  description: 'Solution Série de TD 3 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/19puUy8DEYSwcuIoa3nQeb0vAldVBFVi_?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/19puUy8DEYSwcuIoa3nQeb0vAldVBFVi_?usp=drive_link',
  source: 'drive'
},
{
  id: 31,
  nom: 'Solution série de TD 2',
  matiere: 'FPGA',
  type: 'td',
  description: 'Solution Série de TD 2 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1quArYxo-46wMR2JN-VnBOCohAVUSY8ev?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1quArYxo-46wMR2JN-VnBOCohAVUSY8ev?usp=drive_link',
  source: 'drive'
},
{
  id: 30,
  nom: 'Solution série de TD 1',
  matiere: 'FPGA',
  type: 'td',
  description: 'Solution Série de TD 1 de FPGA ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1MBTYKNi3QWXx8_X7q8JaW401IPNTT4vn?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1MBTYKNi3QWXx8_X7q8JaW401IPNTT4vn?usp=drive_link',
  source: 'drive'
},
{
  id: 29,
  nom: 'Solution série de TD 2+3',
  matiere: 'FPGA',
  type: 'td',
  description: 'Solution Série de TD 2+3 de FPGA écrit à la main (ad3o lmolaha) ',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1fj6G_LgIPClY6Kk9B9TM2Db21N9D8-Dd?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1fj6G_LgIPClY6Kk9B9TM2Db21N9D8-Dd?usp=drive_link',
  source: 'drive'
},
{
  id: 36,
  nom: 'Cours POO 25-26',
  matiere: 'POO',
  type: 'cours',
  description: 'Cours de POO de l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1vguIxqJ0QhSU_9S_lbnR5D8Qr_A3KRpK?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1vguIxqJ0QhSU_9S_lbnR5D8Qr_A3KRpK?usp=drive_link',
  source: 'drive'
},
{
  id: 37,
  nom: 'Examen 2023',
  matiere: 'POO',
  type: 'examen',
  description: 'Examen de POO de l’année 2023',
  date: '2023',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1p23KK8FeGcwa8jTcCXbqvoZh81AobTf8?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1p23KK8FeGcwa8jTcCXbqvoZh81AobTf8?usp=drive_link',
  source: 'drive'
},
{
  id: 38,
  nom: 'Examen 2024',
  matiere: 'POO',
  type: 'examen',
  description: 'Examen de POO de l’année 2024',
  date: '2024',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1BBW4sfjkITJMbsB1ZquiRsKbuCDaTGNH?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1BBW4sfjkITJMbsB1ZquiRsKbuCDaTGNH?usp=drive_link',
  source: 'drive'
},
{
  id: 39,
  nom: 'Examen 2025',
  matiere: 'POO',
  type: 'examen',
  description: 'Examen de POO de l’année 2025',
  date: '2025',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1VLtXHzk76_59RwY8jY_gniYngNoTMcJc?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1VLtXHzk76_59RwY8jY_gniYngNoTMcJc?usp=drive_link',
  source: 'drive'
},
{
  id: 40,
  nom: 'Examen 2026',
  matiere: 'POO',
  type: 'examen',
  description: 'Examen de POO de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1OvJY21KEesOasOwuetHuCO_p-HIJy5Yd?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1OvJY21KEesOasOwuetHuCO_p-HIJy5Yd?usp=drive_link',
  source: 'drive'
},
{
  id: 41,
  nom: 'Exercice révision + intero',
  matiere: 'POO',
  type: 'td',
  description: 'Exercice de révision et interrogation de POO',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1urx0dpkmA_7NWEH62Wjw-enNawYjiEHp?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1urx0dpkmA_7NWEH62Wjw-enNawYjiEHp?usp=drive_link',
  source: 'drive'
},
{
  id: 42,
  nom: 'Résumer POO',
  matiere: 'POO',
  type: 'resume',
  description: 'Plus document que résumé (pour le ramener à l\'examen), il contient ce que vous avez besoin pour votre Exam :)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1ErF0CgbkWHZ5ZCFXIH32BHjJeh4sSopp?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1ErF0CgbkWHZ5ZCFXIH32BHjJeh4sSopp?usp=drive_link',
  source: 'drive'
}, 
{
  id: 944,
  nom: 'Cours Radio 25-26',
  matiere: 'Radiocommunication',
  type: 'cours',
  description: 'Cours de Radiocommunication de l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1v9WZ0DJNCbejeqQ_TcAcvT6ki99-AB3U?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1v9WZ0DJNCbejeqQ_TcAcvT6ki99-AB3U?usp=drive_link',
  source: 'drive'
}, 
{
  id: 43,
  nom: 'Graphes d\'atténuation',
  matiere: 'Radiocommunication',
  type: 'cours',
  description: 'Graphes d\'atténuation de Radiocommunication',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1_T0URbZVagNHiOFCYJFWgai7yN4_qeRz?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1_T0URbZVagNHiOFCYJFWgai7yN4_qeRz?usp=drive_link',
  source: 'drive'
}, 
{
  id: 49,
  nom: 'Série de TD 4 avec corrections',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'énoncer + correction Série de TD 4',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1MDEEKYgI7u1nEHBOWDnWBv5quY8G1UDj?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1MDEEKYgI7u1nEHBOWDnWBv5quY8G1UDj?usp=drive_link',
  source: 'drive'
}, 
{
  id: 50,
  nom: 'Série de TD 3 avec corrections',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'énoncer + correction Série de TD 3',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1v9pV1AU3s2v_2ayFwk1uH871GM918z5o?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1v9pV1AU3s2v_2ayFwk1uH871GM918z5o?usp=drive_link',
  source: 'drive'
}, 
{
  id: 51,
  nom: 'Série de TD 2 avec corrections',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'énoncer + correction Série de TD 2',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1QEJa11cS8C-Y3CD-Qf7NdLXwr0s724LP?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1QEJa11cS8C-Y3CD-Qf7NdLXwr0s724LP?usp=drive_link',
  source: 'drive'
}, 
{
  id: 52,
  nom: 'Série de TD 1 avec corrections',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'énoncer + correction Série de TD 1',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1SDVCI6_a9JWi9NjV55_xPyYyhmTEwz35?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1SDVCI6_a9JWi9NjV55_xPyYyhmTEwz35?usp=drive_link',
  source: 'drive'
}, 
{
  id: 744,
  nom: 'Correction série de TD 4',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'Solution écrit à la main (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1-MeM2aImA3CuD7eDDD-gAfMvvDaZqFA5?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1-MeM2aImA3CuD7eDDD-gAfMvvDaZqFA5?usp=drive_link',
  source: 'drive'
},
{
  id: 45,
  nom: 'Correction série de TD 3',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'Solution écrit à la main (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1pjarJ0nGfqlfkjYORwsJggyLukX8fyo1?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1pjarJ0nGfqlfkjYORwsJggyLukX8fyo1?usp=drive_link',
  source: 'drive'
},
{
  id: 46,
  nom: 'Correction série de TD 2',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'Solution écrit à la main (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1WQQjpJyJfTJC0K1wTnQITYmaWd0DE4Mm?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1WQQjpJyJfTJC0K1wTnQITYmaWd0DE4Mm?usp=drive_link',
  source: 'drive'
},
{
  id: 47,
  nom: 'Correction série de TD 1',
  matiere: 'Radiocommunication',
  type: 'td',
  description: 'Solution écrit à la main (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1MyKUaZ-8lJXIAFsytyLw0RHhN4kNqXJq?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1MyKUaZ-8lJXIAFsytyLw0RHhN4kNqXJq?usp=drive_link',
  source: 'drive'
},
{
  id: 53,
  nom: 'Examen et Rattrapage 2021',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Examen et rattrapage de Radiocommunication de l’année 2021',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1b-NqldI3aVqOhCiyp6_IzgxCWLPJOtJT?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1b-NqldI3aVqOhCiyp6_IzgxCWLPJOtJT?usp=drive_link',
  source: 'drive'
},
{
  id: 54,
  nom: 'Examen 2023',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Examen de Radiocommunication de l’année 2023',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1o4IWcfjeiY5_1rC34_MoOwhqz3GuW2VU?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1o4IWcfjeiY5_1rC34_MoOwhqz3GuW2VU?usp=drive_link',
  source: 'drive'
},
{
  id: 55,
  nom: 'Examen 2024',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Examen de Radiocommunication de l’année 2024',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1bhqumaL_hnA2c2gdmRsaf1jkQwsOJvgm?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1bhqumaL_hnA2c2gdmRsaf1jkQwsOJvgm?usp=drive_link',
  source: 'drive'
},
{
  id: 56,
  nom: 'Examen 2025',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Examen de Radiocommunication de l’année 2025',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wcaMdBBjdB6_AjnGVJlTHrfKkrzSzhX8?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wcaMdBBjdB6_AjnGVJlTHrfKkrzSzhX8?usp=drive_link',
  source: 'drive'
},
{
  id: 57,
  nom: 'Examen 2026',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Examen de Radiocommunication de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wsZS35jT9VMytqU43mMPf-eOFFGw8wLe?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wsZS35jT9VMytqU43mMPf-eOFFGw8wLe?usp=drive_link',
  source: 'drive'
},
{
  id: 58,
  nom: 'Random Interro',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Interrogation de Radiocommunication',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1zFrNAf0oJADUQQovfvpzsgdELomdjCZo?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1zFrNAf0oJADUQQovfvpzsgdELomdjCZo?usp=drive_link',
  source: 'drive'
},
{
  id: 59,
  nom: 'Interro 2024',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Interrogation de Radiocommunication de l’année 2024',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Q6uRCE_ebbPWoL9zLrqrRiud4ZlEl9X_?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Q6uRCE_ebbPWoL9zLrqrRiud4ZlEl9X_?usp=drive_link',
  source: 'drive'
},
{
  id: 60,
  nom: 'Interro 2026',
  matiere: 'Radiocommunication',
  type: 'examen',
  description: 'Interrogation de Radiocommunication de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1-4a1_9NZnpOd-a1wkD2MDnYQDr_ew0xi?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1-4a1_9NZnpOd-a1wkD2MDnYQDr_ew0xi?usp=drive_link',
  source: 'drive'
},
{
  id: 61,
  nom: 'Résumer loi de TD',
  matiere: 'Radiocommunication',
  type: 'resume',
  description: 'Résumé de la loi de TD de Radiocommunication',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1OR6_l8kSsC5kTE93tKIWGtZ2ISlqes7F?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1OR6_l8kSsC5kTE93tKIWGtZ2ISlqes7F?usp=drive_link',
  source: 'drive'
},
{
  id: 62,
  nom: 'Cours 25-26',
  matiere: 'Routage',
  type: 'cours',
  description: 'Cours de Routage de l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/13Oa2ojHOwO5N7JR6f1ATR6uTGL5Qox1C?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/13Oa2ojHOwO5N7JR6f1ATR6uTGL5Qox1C?usp=drive_link',
  source: 'drive'
},
{
  id: 63,
  nom: 'Examen 20?',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 20?',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1geH1f93bdqVyLK6c-xtot6IH07nWzMGd?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1geH1f93bdqVyLK6c-xtot6IH07nWzMGd?usp=drive_link',
  source: 'drive'
},
{
  id: 64,
  nom: 'Examen 2022',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 2022',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/18_Mcm5EpiVV9Tk9JIPMZlMq0OFetZoT8?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/18_Mcm5EpiVV9Tk9JIPMZlMq0OFetZoT8?usp=drive_link',
  source: 'drive'
},
{
  id: 65,
  nom: 'Examen 2023',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 2023',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1OpxyjV3K3rO3oFPJdf4tzJ-fvsQA7qzp?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1OpxyjV3K3rO3oFPJdf4tzJ-fvsQA7qzp?usp=drive_link',
  source: 'drive'
},
{
  id: 66,
  nom: 'Examen 2024',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 2024',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wmaCh9rubE3fVPa35GhPaLf8YwLfmZQZ?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wmaCh9rubE3fVPa35GhPaLf8YwLfmZQZ?usp=drive_link',
  source: 'drive'
},
{
  id: 67,
  nom: 'Examen 2025',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 2025',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Q6fFyYSUE4gemMjrZb4C8-bhnf00wY4e?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Q6fFyYSUE4gemMjrZb4C8-bhnf00wY4e?usp=drive_link',
  source: 'drive'
},
{
  id: 68,
  nom: 'Examen 2026',
  matiere: 'Routage',
  type: 'examen',
  description: 'Examen de Routage de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1fNO4bKBG8aXF2NjJpTLTnzyPBGeCeD6X?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1fNO4bKBG8aXF2NjJpTLTnzyPBGeCeD6X?usp=drive_link',
  source: 'drive'
},
{
  id: 69,
  nom: 'Cours 25-26',
  matiere: 'Systèmes embarqués',
  type: 'cours',
  description: 'Cours de Systèmes embarqués de l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Ui0qTjip-AG1gU_Ey-ZiVN-x5RcmI20y?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Ui0qTjip-AG1gU_Ey-ZiVN-x5RcmI20y?usp=drive_link',
  source: 'drive'
},
{
  id: 70,
  nom: 'Examen 2026',
  matiere: 'Systèmes embarqués',
  type: 'examen',
  description: 'Examen de Systèmes embarqués de l’année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/file/d/1sgy3I1GlYGOzg9JSR5jmr7b7HOOhibDZ/view?usp=drive_link',
  url: 'https://drive.google.com/file/d/1sgy3I1GlYGOzg9JSR5jmr7b7HOOhibDZ/view?usp=drive_link',
  source: 'drive'
},
{
  id: 71,
  nom: 'QCM',
  matiere: 'Systèmes embarqués',
  type: 'td',
  description: 'Some QCM to practice',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/112IbOjxS5z7VNG8_Usxp2T68wztkITYY?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/112IbOjxS5z7VNG8_Usxp2T68wztkITYY?usp=drive_link',
  source: 'drive'
},
{
  id: 72,
  nom: 'Cours Bonus',
  matiere: 'SPA',
  type: 'cours',
  description: 'Cours Bonus de SPA pour aider',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Bv-fZsUbSutpukBc5PUB1hJ0C3DdC-WB?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Bv-fZsUbSutpukBc5PUB1hJ0C3DdC-WB?usp=drive_link',
  source: 'drive'
},
{
  id: 73,
  nom: 'Cours 25-26',
  matiere: 'SPA',
  type: 'cours',
  description: 'Cours de Mme.Ouarzeddine pour l\'année 2025-2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1SzRwI-ks_pbxSOrnp6udOE7angEKpRHs?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1SzRwI-ks_pbxSOrnp6udOE7angEKpRHs?usp=drive_link',
  source: 'drive'
},
{
  id: 74,
  nom: 'Résumer intik',
  matiere: 'SPA',
  type: 'resume',
  description: 'Résumer SPA yslo7',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1_-4fvF2dxCLeRTurkTj5hMmOzQpwo1ba?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1_-4fvF2dxCLeRTurkTj5hMmOzQpwo1ba?usp=drive_link',
  source: 'drive'
},
{
  id: 75,
  nom: 'Résumer',
  matiere: 'SPA',
  type: 'resume',
  description: 'Résumer SPA (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1iphyj6pcsOjpYCBFdQnzL4euXFktjjR_?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1iphyj6pcsOjpYCBFdQnzL4euXFktjjR_?usp=drive_link',
  source: 'drive'
},
{
  id: 76,
  nom: 'Examen 2018',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2018',
  date: '2018',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1kIt80nshbNrGgB6YoDH5cRchnnHIQWiH?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1kIt80nshbNrGgB6YoDH5cRchnnHIQWiH?usp=drive_link',
  source: 'drive'
},
{
  id: 77,
  nom: 'Examen 2019',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2019',
  date: '2019',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wr_aU6zEknPXyltiPHRAbhz5n8gtVMIO?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wr_aU6zEknPXyltiPHRAbhz5n8gtVMIO?usp=drive_link',
  source: 'drive'
},
{
  id: 78,
  nom: 'Examen 2020',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2020',
  date: '2020',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1lt0wYOou1jKKpZIokrX-Qx0e4ccSdemj?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1lt0wYOou1jKKpZIokrX-Qx0e4ccSdemj?usp=drive_link',
  source: 'drive'
},
{
  id: 79,
  nom: 'Examen 2023',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2023',
  date: '2023',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/18lXLO8E6ui2I_0Kn-kqPjDW_fANrqzuC?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/18lXLO8E6ui2I_0Kn-kqPjDW_fANrqzuC?usp=drive_link',
  source: 'drive'
},
{
  id: 80,
  nom: 'Examen 2024',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2024',
  date: '2024',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1gby2TvJknGZjUMN4DZIn6ANPCPUU_klM?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1gby2TvJknGZjUMN4DZIn6ANPCPUU_klM?usp=drive_link',
  source: 'drive'
},
{
  id: 81,
  nom: 'Examen 2025',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2025',
  date: '2025',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1LwGFvUB_a-Aq4WBb_P_nAHebuWkumcxs?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1LwGFvUB_a-Aq4WBb_P_nAHebuWkumcxs?usp=drive_link',
  source: 'drive'
},
{
  id: 82,
  nom: 'Examen 2026',
  matiere: 'SPA',
  type: 'examen',
  description: 'Examen de SPA de l’année 2026',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/147FI35mYvMWJEiIw0i_YHdpsQu2hpCsl?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/147FI35mYvMWJEiIw0i_YHdpsQu2hpCsl?usp=drive_link',
  source: 'drive'
},
{
  id: 85,
  nom: 'Corrections Série 1',
  matiere: 'SPA',
  type: 'td',
  description: 'Corrections Série 1 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/13ogmS0ho-9dbBjLB4oRny8gCJy9dWlav?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/13ogmS0ho-9dbBjLB4oRny8gCJy9dWlav?usp=drive_link',
  source: 'drive'
},
{
  id: 84,
  nom: 'Corrections Série 2',
  matiere: 'SPA',
  type: 'td',
  description: 'Corrections Série 2 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/18gyqg23ins_O4hFSVnmTVUVgnBXIDGIu?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/18gyqg23ins_O4hFSVnmTVUVgnBXIDGIu?usp=drive_link',
  source: 'drive'
},
{
  id: 83,
  nom: 'Suite Corrections Série 2 + Série 3+4',
  matiere: 'SPA',
  type: 'td',
  description: 'Suite Corrections Série 2 + Série 3+4 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1y3SFWqhAoePkmqvxixJxttp6nwB0nN8n?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1y3SFWqhAoePkmqvxixJxttp6nwB0nN8n?usp=drive_link',
  source: 'drive'
},
{
  id: 87,
  nom: 'Serie 4',
  matiere: 'SPA',
  type: 'td',
  description: 'Série d’exercices 4 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1HpW1054Y4kF4Gzokeb59YrMJG0Ry8yx-?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1HpW1054Y4kF4Gzokeb59YrMJG0Ry8yx-?usp=drive_link',
  source: 'drive'
},
{
  id: 88,
  nom: 'Serie 3',
  matiere: 'SPA',
  type: 'td',
  description: 'Série d’exercices 3 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1YsQvZhjk7eEEr4j9n1sciDlMxAE1cgLH?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1YsQvZhjk7eEEr4j9n1sciDlMxAE1cgLH?usp=drive_link',
  source: 'drive'
},
{
  id: 89,
  nom: 'Serie 2',
  matiere: 'SPA',
  type: 'td',
  description: 'Série d’exercices 2 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1fW3n30PdJvijijqXzNvyTKjy1F0leYl5?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1fW3n30PdJvijijqXzNvyTKjy1F0leYl5?usp=drive_link',
  source: 'drive'
},
{
  id: 93,
  nom: 'Serie 1',
  matiere: 'SPA',
  type: 'td',
  description: 'Série d’exercices 1 de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1Zi5xXJl_T528aV43pjlgnLPxRpwS2OA_?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1Zi5xXJl_T528aV43pjlgnLPxRpwS2OA_?usp=drive_link',
  source: 'drive'
},
{
  id: 25,
  nom: 'Examen 2010',
  matiere: 'FPGA',
  type: 'examen',
  description: 'Examen de FPGA de l’année 2010',
  date: '2010',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1-YUqerwpUIA7m1c8aMB6qPv7f5hOPVzO?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1-YUqerwpUIA7m1c8aMB6qPv7f5hOPVzO?usp=drive_link',
  source: 'drive'
},
{
  id: 91,
  nom: 'Les interro SPA',
  matiere: 'SPA',
  type: 'examen',
  description: 'Tout ce que j\'ai trouvé sur les Interro de SPA',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wEZdwexLWsT-w49oP5tx6fmStYqiad3q?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wEZdwexLWsT-w49oP5tx6fmStYqiad3q?usp=drive_link',
  source: 'drive'
},
{
  id: 92,
  nom: 'Record Estimation',
  matiere: 'SPA',
  type: 'record',
  description: 'Record d\'estimation de SPA fait par Ai (ad3o lmolah)',
  date: '2025',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1hYGkzudT-GQLlEPlJnAoO3cy2UiljqeJ?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1hYGkzudT-GQLlEPlJnAoO3cy2UiljqeJ?usp=drive_link',
  source: 'drive'
},
{
  id: 86,
  nom: 'Solution TD 2021',
  matiere: 'SPA',
  type: 'td',
  description: 'Solution du TD 2021 de SPA',
  date: '2021',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1oq12sybMADmfBx5oJ_GmYynmbgUGsBw3?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1oq12sybMADmfBx5oJ_GmYynmbgUGsBw3?usp=drive_link',
  source: 'drive'
},
{
  id: 94,
  nom: 'Question direct ',
  matiere: 'Systèmes embarqués',
  type: 'td',
  description: 'Questions direct fait par Ai',
  date: '2021',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1O6bvqKsHdMdD48oSp6km2-qqMlkAnJBV?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1O6bvqKsHdMdD48oSp6km2-qqMlkAnJBV?usp=drive_link',
  source: 'drive'
},
{
  id: 95,
  nom: 'Code tp 2',
  matiere: 'Systèmes embarqués',
  type: 'tp',
  description: 'Codes TP systèmes (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1tBvT-lyvYoYU96G4rud4Fo-1phU6QEkg?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1tBvT-lyvYoYU96G4rud4Fo-1phU6QEkg?usp=drive_link',
  source: 'drive'
},
{
  id: 96,
  nom: 'Code tp 1',
  matiere: 'Systèmes embarqués',
  type: 'tp',
  description: 'Codes TP systèmes (ad3o lmolaha)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1wJVP7Yw2hX5wyGjTIyl_xSpJdjOKcnAw?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1wJVP7Yw2hX5wyGjTIyl_xSpJdjOKcnAw?usp=drive_link',
  source: 'drive'
},
{
  id: 97,
  nom: 'Révision pour l\'examen tp',
  matiere: 'Systèmes embarqués',
  type: 'tp',
  description: 'Montage, branchement et codes Tp',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1i-WTBedFibZ_idw7NL3n3TT7jUjbS8aC?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1i-WTBedFibZ_idw7NL3n3TT7jUjbS8aC?usp=drive_link',
  source: 'drive'
},
{
  id: 98,
  nom: 'Code tp CNA',
  matiere: 'CNA',
  type: 'tp',
  description: 'Code tp CNA MATLAB',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1uaY9PeHTSzpfLisrg7tkdF8V8I-hvDbl?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1uaY9PeHTSzpfLisrg7tkdF8V8I-hvDbl?usp=drive_link',
  source: 'drive'
},
{
  id: 99,
  nom: 'Code tp POO',
  matiere: 'POO',
  type: 'tp',
  description: 'Code tp POO (machi mratbin)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1ntUe-NHFOrdKAWtkKor-V-uOzeIHGEGW?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1ntUe-NHFOrdKAWtkKor-V-uOzeIHGEGW?usp=drive_link',
  source: 'drive'
},
{
  id: 100,
  nom: 'Code tp SPA',
  matiere: 'SPA',
  type: 'tp',
  description: 'Code tp SPA (machi mratbin)',
  date: '2026',
  taille: '—',
  embedUrl: 'https://drive.google.com/drive/folders/1y1dpx8ZkMz0fpLnwHGDbhA3N7nKeeYRR?usp=drive_link',
  url: 'https://drive.google.com/drive/folders/1y1dpx8ZkMz0fpLnwHGDbhA3N7nKeeYRR?usp=drive_link',
  source: 'drive'
},
{
  id: 101,
  nom: "Résumé TNS — Examen",
  description: "Résumer pour l\'examen Tp",
  type: "tp",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "revision_tp_TNS.html",
  url: "revision_tp_TNS.html",
  source: "local"
},
{
  id: 102,
  nom: "Résumé codage — Examen",
  description: "Résumer pour l\'examen Tp (y3wn bzf)",
  type: "tp",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "revision_Tpcodage.html",
  url: "revision_Tpcodage.html",
  source: "local"
},
{
  id: 103,
  nom: "Résumé TNS 2 — Examen",
  description: "Résumer pour l\'examen Tp",
  type: "tp",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "tns_revision.html",
  url: "tns_revision.html",
  source: "local"
},
{
  id: 104,
  nom: "Résumé TNS 3 — Examen",
  description: "Résumer pour l\'examen Tp",
  type: "tp",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1jtpcxNPYuIZGfYAC1vcIHzYwWsbcEAkQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1jtpcxNPYuIZGfYAC1vcIHzYwWsbcEAkQ?usp=drive_link",
  source: "drive"
},
{
  id: 105,
  nom: "Résumer convolution",
  description: "Résumer convolution pour bien comprendre",
  type: "resume",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "convolution_examples.html",
  url: "convolution_examples.html",
  source: "local"
},
{
  id: 106,
  nom: "resume deontologie COMPLET",
  description: "Résumer ethique intik",
  type: "resume",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "resume_deontologie_COMPLET.html",
  url: "resume_deontologie_COMPLET.html",
  source: "local"
},
{
  id: 107,
  nom: "resume deontologie en arabe",
  description: "Résumer ethique fih 3fayss en arabe bah y3wn",
  type: "resume",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "HTML",
  date: "2026",
  embedUrl: "ethique_deontologie_bilingue.html",
  url: "ethique_deontologie_bilingue.html",
  source: "local"
},
{
  id: 108,
  nom: "Cours 25-26",
  description: "Tout les cours de Mme SAADI AHMED",
  type: "cours",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1BTLCS_1QcNdC4X9LzGN2j2I0b8mW6hwW?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1BTLCS_1QcNdC4X9LzGN2j2I0b8mW6hwW?usp=drive_link",
  source: "drive"
},
{
  id: 109,
  nom: "Solution TD 5",
  description: "Solution TD 5 (ad3o lmolaha)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1Y5xvrle1NMicMEdaLh_HoqIubvYhvYhf?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Y5xvrle1NMicMEdaLh_HoqIubvYhvYhf?usp=drive_link",
  source: "drive"
},
{
  id: 110,
  nom: "Solution TD 3+4+5",
  description: "Solution TD 3+4+5 (ad3o lmolaha)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1P6_CqNnSAUAtQoczfENOoi2BeyQzyqzt?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1P6_CqNnSAUAtQoczfENOoi2BeyQzyqzt?usp=drive_link",
  source: "drive"
},
{
  id: 111,
  nom: "Solution TD 4",
  description: "Solution TD 4 tae lprof (i think)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1Wah--fks77f-8p1NWWwJuqYUby1_-TJR?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Wah--fks77f-8p1NWWwJuqYUby1_-TJR?usp=drive_link",
  source: "drive"
},
{
  id: 112,
  nom: "Solution TD 3",
  description: "Solution TD 3 (ad3o lmolaha)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1WT8S8QKWlcxXJVEnOWH_ZWp1lQ0eNi5Y?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1WT8S8QKWlcxXJVEnOWH_ZWp1lQ0eNi5Y?usp=drive_link",
  source: "drive"
},
{
  id: 113,
  nom: "Solution TD 2",
  description: "Solution TD 2 (ad3o lmolaha)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1qGXBrM2S6vECHWIo9wRdGl0wXp8ERwCt?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1qGXBrM2S6vECHWIo9wRdGl0wXp8ERwCt?usp=drive_link",
  source: "drive"
},
{
  id: 114,
  nom: "Solution TD lowlin",
  description: "Solution TD lowlin (ad3o lmolaha)",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1NNXN5Kzki2GtzuEBkPJJXs_Sw7lt-_1W?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1NNXN5Kzki2GtzuEBkPJJXs_Sw7lt-_1W?usp=drive_link",
  source: "drive"
},
{
  id: 115,
  nom: "Série 5",
  description: "énoncer série 5",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1ax1u9CZyNj0C8Zppw2OIAhFOKTh8N_uy?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ax1u9CZyNj0C8Zppw2OIAhFOKTh8N_uy?usp=drive_link",
  source: "drive"
},
{
  id: 116,
  nom: "Série 4",
  description: "énoncer série 4",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1H3CK46-S7MEauBAdH_9kosYeo2rEFUNE?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1H3CK46-S7MEauBAdH_9kosYeo2rEFUNE?usp=drive_link",
  source: "drive"
},
{
  id: 117,
  nom: "Série 3",
  description: "énoncer série 3",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/177_x_rCMFKqJIH_7p4CAnGUe4uVmG0OQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/177_x_rCMFKqJIH_7p4CAnGUe4uVmG0OQ?usp=drive_link",
  source: "drive"
},
{
  id: 118,
  nom: "Série 2",
  description: "énoncer série 2",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1pUI6D99c9kOK0aCSiUwNf0trs_mpiPrB?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1pUI6D99c9kOK0aCSiUwNf0trs_mpiPrB?usp=drive_link",
  source: "drive"
},
{
  id: 119,
  nom: "Série 1",
  description: "énoncer série 1",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/16cAIpqBT7HA-jGrHMD3uHUgaU__CF09J?usp=drive_link",
  url: "https://drive.google.com/drive/folders/16cAIpqBT7HA-jGrHMD3uHUgaU__CF09J?usp=drive_link",
  source: "drive"
},
{
  id: 120,
  nom: "Série 0",
  description: "énoncer série 0",
  type: "td",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1mSjyHlYPQ9yN7Br4meMpttlVohozyuuq?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1mSjyHlYPQ9yN7Br4meMpttlVohozyuuq?usp=drive_link",
  source: "drive"
},
{
  id: 121,
  nom: "Examen 2026",
  description: "Examen 2026 avec corriger",
  type: "examen",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1uPODdu72TDgd6_o6XF0WU8JTUWeu_uew?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1uPODdu72TDgd6_o6XF0WU8JTUWeu_uew?usp=drive_link",
  source: "drive"
},
{
  id: 122,
  nom: "Interro 2026",
  description: "Interro 2026 ta7lna exo m3ah ta3 convolution (LA SOLUTION GALTA❗❗)",
  type: "examen",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1dRLzq3m3ZOkAaWn7kUhI0TNBhqG6-qZ5?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1dRLzq3m3ZOkAaWn7kUhI0TNBhqG6-qZ5?usp=drive_link",
  source: "drive"
},
{
  id: 123,
  nom: "Interro 2025",
  description: "Interro 2025 sans solution ",
  type: "examen",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1pZggPUXzchfMhyrCR2M9Ztq9l6Xja7eN?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1pZggPUXzchfMhyrCR2M9Ztq9l6Xja7eN?usp=drive_link",
  source: "drive"
},
{
  id: 124,
  nom: "Codes",
  description: "My codes + codes of another student (ad3olo da3wat khir)",
  type: "tp",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1jxHxj-g7Egep8B5gQHSp4LRX9xHCrQOq?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1jxHxj-g7Egep8B5gQHSp4LRX9xHCrQOq?usp=drive_link",
  source: "drive"
},
{
  id: 125,
  nom: "énoncer",
  description: "Tout les énoncer tp TNS",
  type: "tp",
  matiere: "TNS",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/17kDmCZk9YV2989XJnZl3cq6l1ItPRpKI?usp=drive_link",
  url: "https://drive.google.com/drive/folders/17kDmCZk9YV2989XJnZl3cq6l1ItPRpKI?usp=drive_link",
  source: "drive"
},
{
  id: 126,
  nom: "Cours 25-26",
  description: "Tout les cours de Mme LOUNIS",
  type: "cours",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/12fpfz_M0n6g5oHXXIeSFgqLRbaWmym75?usp=drive_link",
  url: "https://drive.google.com/drive/folders/12fpfz_M0n6g5oHXXIeSFgqLRbaWmym75?usp=drive_link",
  source: "drive"
},
{
  id: 127,
  nom: "Correction serie 3",
  description: "Solution serie 3 (machi complet)",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1YDhqaM3nSa9-xaWsvtdJP5bEs4Rdh8rW?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1YDhqaM3nSa9-xaWsvtdJP5bEs4Rdh8rW?usp=drive_link",
  source: "drive"
},
{
  id: 128,
  nom: "Correction série 2",
  description: "Solution série 2 (fait par Ai)",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1jhekJNmMT6nEiPP7DkaMIl9__QPifqPZ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1jhekJNmMT6nEiPP7DkaMIl9__QPifqPZ?usp=drive_link",
  source: "drive"
},
{
  id: 129,
  nom: "Correction TD",
  description: "Solution TD (m5ltion)",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/14pwvr589r6EinI97MqP0iPcjolZSKHUz?usp=drive_link",
  url: "https://drive.google.com/drive/folders/14pwvr589r6EinI97MqP0iPcjolZSKHUz?usp=drive_link",
  source: "drive"
},
{
  id: 130,
  nom: "série 3",
  description: "énoncer série 3",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1np2ux0QVWVoSeUqLM0F_nZ8owZnSRvCT?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1np2ux0QVWVoSeUqLM0F_nZ8owZnSRvCT?usp=drive_link",
  source: "drive"
},
{
  id: 131,
  nom: "Série 2",
  description: "énoncer série 2",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1sFnnf6Ktycaga-SUR-QJvgD4l4bdHctu?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1sFnnf6Ktycaga-SUR-QJvgD4l4bdHctu?usp=drive_link",
  source: "drive"
},
{
  id: 132,
  nom: "Série 1",
  description: "énoncer série 1",
  type: "td",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/18US03Ott53hAIwcc1sqgi3eLp_xvYZTP?usp=drive_link",
  url: "https://drive.google.com/drive/folders/18US03Ott53hAIwcc1sqgi3eLp_xvYZTP?usp=drive_link",
  source: "drive"
},
{
  id: 133,
  nom: "Examen",
  description: "Examen machi ta3 LOUNIS",
  type: "examen",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1Jck5FVgSRNVME6XS9dbiuLJCptNjVDU9?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Jck5FVgSRNVME6XS9dbiuLJCptNjVDU9?usp=drive_link",
  source: "drive"
},
{
  id: 134,
  nom: "Examen 2025",
  description: "Examen 2025 avec correction",
  type: "examen",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/10NA7rS1BnH8UBsYyAmbrfH6rMv0-6Pqh?usp=drive_link",
  url: "https://drive.google.com/drive/folders/10NA7rS1BnH8UBsYyAmbrfH6rMv0-6Pqh?usp=drive_link",
  source: "drive"
},
{
  id: 135,
  nom: "Examen 2026",
  description: "Examen 2026 avec correction",
  type: "examen",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1O9Y4TX_OXL1E9uXFUN1qZBn1HiIE8FyT?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1O9Y4TX_OXL1E9uXFUN1qZBn1HiIE8FyT?usp=drive_link",
  source: "drive"
},
{
  id: 136,
  nom: "Résumer",
  description: "Some 9awanin",
  type: "resume",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1rlFZ10A3r5is0M1fosOE4IwBtz3ktDDi?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1rlFZ10A3r5is0M1fosOE4IwBtz3ktDDi?usp=drive_link",
  source: "drive"
},
{
  id: 137,
  nom: "Codes",
  description: "My codes ps:lprof tmdlkom énoncer ltmak tsma normalement m3ndkomch les codes (ml5r don\'t snitch)",
  type: "tp",
  matiere: "Tr.Images",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1bBUKX9RYGzqwIGzRL7MFnwiOwwD-pk4t?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1bBUKX9RYGzqwIGzRL7MFnwiOwwD-pk4t?usp=drive_link",
  source: "drive"
},
{
  id: 138,
  nom: "Cours 25-26",
  description: "Cours complet",
  type: "cours",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1bn_RxM3qV_oX9WRLlZr9S5MHCaw13N8z?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1bn_RxM3qV_oX9WRLlZr9S5MHCaw13N8z?usp=drive_link",
  source: "drive"
},
{
  id: 139,
  nom: "QCM",
  description: "QCM with correction to pratice",
  type: "td",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1bn_RxM3qV_oX9WRLlZr9S5MHCaw13N8z?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1bn_RxM3qV_oX9WRLlZr9S5MHCaw13N8z?usp=drive_link",
  source: "drive"
},
{
  id: 140,
  nom: "Examen 2018",
  description: "Examen 2018 avec correction ( questions direct)",
  type: "examen",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/17QtwOabIU7EjqlWBpcH9SdpG2jAtg7mZ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/17QtwOabIU7EjqlWBpcH9SdpG2jAtg7mZ?usp=drive_link",
  source: "drive"
},
{
  id: 141,
  nom: "Examen 2024",
  description: "examen 2024 sans correction",
  type: "examen",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1SBvtuM_PHDoeof8fiuhS9wHnQwDylwFd?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1SBvtuM_PHDoeof8fiuhS9wHnQwDylwFd?usp=drive_link",
  source: "drive"
},
{
  id: 142,
  nom: "Examen 2026",
  description: "examen 2026 sans correction",
  type: "examen",
  matiere: "Éthique-déontologie",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1iZONcPlJhc3WpDG8McVPB8Cve6VtzXaI?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1iZONcPlJhc3WpDG8McVPB8Cve6VtzXaI?usp=drive_link",
  source: "drive"
},
{
  id: 143,
  nom: "Cours 25-26",
  description: "Cours complet",
  type: "cours",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1yN6yD5NNAJQw-XgkAKM6auHiZZrPSSTE?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1yN6yD5NNAJQw-XgkAKM6auHiZZrPSSTE?usp=drive_link",
  source: "drive"
},
{
  id: 144,
  nom: "Examen 2026",
  description: "examen 2026 sans correction",
  type: "examen",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1VIzQ8dXSWQForyA6ehJlwZqw7c8h2WGQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1VIzQ8dXSWQForyA6ehJlwZqw7c8h2WGQ?usp=drive_link",
  source: "drive"
},
{
  id: 145,
  nom: "Exercice",
  description: "Exercice darto lprof ou ta7 f l\'examen",
  type: "td",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/14FiAZOSCZ6mwVaYWeojT5w_XY2DiUo-i?usp=drive_link",
  url: "https://drive.google.com/drive/folders/14FiAZOSCZ6mwVaYWeojT5w_XY2DiUo-i?usp=drive_link",
  source: "drive"
},
{
  id: 146,
  nom: "Résumer",
  description: "Résumer IA ad3o lmolah",
  type: "resume",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1l1fPv_NYjM62c326s-cvFeV9uHv8lyf6?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1l1fPv_NYjM62c326s-cvFeV9uHv8lyf6?usp=drive_link",
  source: "drive"
},
{
  id: 147,
  nom: "Codes",
  description: "My codes + some data",
  type: "tp",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/134sPeQHaqRyUzUlhcDWRpwbBpOjrOMgq?usp=drive_link",
  url: "https://drive.google.com/drive/folders/134sPeQHaqRyUzUlhcDWRpwbBpOjrOMgq?usp=drive_link",
  source: "drive"
},
{
  id: 148,
  nom: "Cours 25-26",
  description: "Tout les cours du module codage",
  type: "cours",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1ZlKNxzf_ZhygAxaoxmnB0hD5g1E9l53a?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ZlKNxzf_ZhygAxaoxmnB0hD5g1E9l53a?usp=drive_link",
  source: "drive"
},
{
  id: 149,
  nom: "Solution TD",
  description: "Solution td (ad3o lmolaha)",
  type: "td",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1s19uhFYoT4AGMge0Y-_kgZt9xTbq0h-8?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1s19uhFYoT4AGMge0Y-_kgZt9xTbq0h-8?usp=drive_link",
  source: "drive"
},
{
  id: 150,
  nom: "Série 4",
  description: "énoncer série 4 ",
  type: "td",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1RBk_-9wZqLHmJHFXTDsvqVd8nVUESvO_?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1RBk_-9wZqLHmJHFXTDsvqVd8nVUESvO_?usp=drive_link",
  source: "drive"
},
{
  id: 151,
  nom: "Série 3",
  description: "énoncer série 3 avec corriger",
  type: "td",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1FdOii-chCFPbeR2_RX84W7q2wQrZ968t?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1FdOii-chCFPbeR2_RX84W7q2wQrZ968t?usp=drive_link",
  source: "drive"
},
{
  id: 152,
  nom: "Série 2",
  description: "énoncer série 2 avec corriger",
  type: "td",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1GKr6b_gimOk0XP4apqaBy8llC6Q2c6YT?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1GKr6b_gimOk0XP4apqaBy8llC6Q2c6YT?usp=drive_link",
  source: "drive"
},
{
  id: 153,
  nom: "Série 1",
  description: "énoncer série 1 avec corriger",
  type: "td",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1HnRMydDVtrCYt0dLHwdtXbg4qwHLL8fS?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1HnRMydDVtrCYt0dLHwdtXbg4qwHLL8fS?usp=drive_link",
  source: "drive"
},
{
  id: 166,
  nom: "Devoir 1",
  description: "everything I found about devoir 1(rahom m5ltin)",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1br5adlp4GN9UemcIMMVjoYXmqd9WtZ5u?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1br5adlp4GN9UemcIMMVjoYXmqd9WtZ5u?usp=drive_link",
  source: "drive"
},
{
  id: 165,
  nom: "Devoir 2",
  description: "everything I found about devoir 2(rahom m5ltin)",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1lWUtRzPKRS0eKYh6bkG-X03QZjXXEniD?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1lWUtRzPKRS0eKYh6bkG-X03QZjXXEniD?usp=drive_link",
  source: "drive"
},
{
  id: 154,
  nom: "Examen 2018",
  description: "Examen 2018 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2018",
  embedUrl: "https://drive.google.com/drive/folders/1--NbnCzf41F3nLqGEW-jFPHRlYLu6R8a?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1--NbnCzf41F3nLqGEW-jFPHRlYLu6R8a?usp=drive_link",
  source: "drive"
},
{
  id: 155,
  nom: "Examen 2019",
  description: "Examen 2019 sans corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2019",
  embedUrl: "https://drive.google.com/drive/folders/1IOhmiZYmkbiMDsxlhJfe6IPYmswzHkde?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1IOhmiZYmkbiMDsxlhJfe6IPYmswzHkde?usp=drive_link",
  source: "drive"
},
{
  id: 156,
  nom: "Examen 2020",
  description: "Examen 2020 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2020",
  embedUrl: "https://drive.google.com/drive/folders/1q0yrz5121q_D9Xp61bpslhDGmVCrnn8V?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1q0yrz5121q_D9Xp61bpslhDGmVCrnn8V?usp=drive_link",
  source: "drive"
},
{
  id: 157,
  nom: "Examen 2021",
  description: "Examen 2021 sans corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2021",
  embedUrl: "https://drive.google.com/drive/folders/1RbHuaUGDDceJ6NQsFtgnseU4vytV_09C?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1RbHuaUGDDceJ6NQsFtgnseU4vytV_09C?usp=drive_link",
  source: "drive"
},
{
  id: 158,
  nom: "Examen 2022",
  description: "Examen 2022 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2022",
  embedUrl: "https://drive.google.com/drive/folders/1ydxDSfkh9ocy8pswZzWcac89Ed52ksxU?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ydxDSfkh9ocy8pswZzWcac89Ed52ksxU?usp=drive_link",
  source: "drive"
},
{
  id: 159,
  nom: "Examen 2023",
  description: "Examen 2023 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2023",
  embedUrl: "https://drive.google.com/drive/folders/1o2ubSuEeJmrQSzi7E8S2NsHvj2cefT3T?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1o2ubSuEeJmrQSzi7E8S2NsHvj2cefT3T?usp=drive_link",
  source: "drive"
},
{
  id: 160,
  nom: "Examen 2024",
  description: "Examen 2024 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2024",
  embedUrl: "https://drive.google.com/drive/folders/15zMlhwNe0hoq_SVFHeahK5OeMTct0-Dc?usp=drive_link",
  url: "https://drive.google.com/drive/folders/15zMlhwNe0hoq_SVFHeahK5OeMTct0-Dc?usp=drive_link",
  source: "drive"
},
{
  id: 161,
  nom: "Rattrapage 2025",
  description: "Rattrapage 2025 sans corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1snuMLgYUh1MGdd5RGJUJQMuU5QjnB7Ca?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1snuMLgYUh1MGdd5RGJUJQMuU5QjnB7Ca?usp=drive_link",
  source: "drive"
},
{
  id: 162,
  nom: "Examen 2025",
  description: "Examen 2025 sans corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1XKG2vkZrvZvs3PaP0whZABBlodIwQHLF?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1XKG2vkZrvZvs3PaP0whZABBlodIwQHLF?usp=drive_link",
  source: "drive"
},
{
  id: 163,
  nom: "Rattrapage 2026",
  description: "Examen 2026 sans corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/12dXHgpBbD8wsElCeENg1bDg6gR-7iF8n?usp=drive_link",
  url: "https://drive.google.com/drive/folders/12dXHgpBbD8wsElCeENg1bDg6gR-7iF8n?usp=drive_link",
  source: "drive"
},
{
  id: 164,
  nom: "Examen 2026",
  description: "Examen 2026 avec corriger",
  type: "examen",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1XuDRiSWCJ5INpjTYJls_ot-fusUk_-TB?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1XuDRiSWCJ5INpjTYJls_ot-fusUk_-TB?usp=drive_link",
  source: "drive"
},
{
  id: 1165,
  nom: "Document pour l\'examen",
  description: "Some documents bah d5lohom m3akom l'examen et l\'interro",
  type: "resume",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1MznAAfnjP9WL85FPHSvDXAfTk-n3ee4E?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1MznAAfnjP9WL85FPHSvDXAfTk-n3ee4E?usp=drive_link",
  source: "drive"
},
{
  id: 766,
  nom: "Random",
  description: "Some random things maybe y3wnkom l\'examen",
  type: "resume",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1aUe8jGKcwiVMxM7VNr5CMsTCbMOGldpO?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1aUe8jGKcwiVMxM7VNr5CMsTCbMOGldpO?usp=drive_link",
  source: "drive"
},
{
  id: 167,
  nom: "Codes",
  description: "Some codes (lazm tfhmlha lcode)",
  type: "tp",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1bsS47a3jLo0pqyb0cAfPMYiodVEfo63G?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1bsS47a3jLo0pqyb0cAfPMYiodVEfo63G?usp=drive_link",
  source: "drive"
},
{
  id: 168,
  nom: "énoncer",
  description: "énoncer tp codage",
  type: "tp",
  matiere: "Codage et Compression",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1L6jpJx-uswg9eJC5STpueFssdU13YTMx?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1L6jpJx-uswg9eJC5STpueFssdU13YTMx?usp=drive_link",
  source: "drive"
},
{
  id: 169,
  nom: "énoncer",
  description: "énoncer tp IA",
  type: "tp",
  matiere: "IA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/15DSmkWpK-ASaciLQFDYzWdenlXmQ1q9V?usp=drive_link",
  url: "https://drive.google.com/drive/folders/15DSmkWpK-ASaciLQFDYzWdenlXmQ1q9V?usp=drive_link",
  source: "drive"
},
{
  id: 170,
  nom: "Cours 25-26",
  description: "Cours antenne",
  type: "cours",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1_d5BuchIdqdUrmzSFgaV044vjNd7RQ7X?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1_d5BuchIdqdUrmzSFgaV044vjNd7RQ7X?usp=drive_link",
  source: "drive"
},
{
  id: 171,
  nom: "Solution série 5",
  description: "Correction TD 5 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1Cidp9MNm0WjyaIibtX8PDDeFpWZjNEz_?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Cidp9MNm0WjyaIibtX8PDDeFpWZjNEz_?usp=drive_link",
  source: "drive"
},
{
  id: 172,
  nom: "Solution série 3-4",
  description: "Correction TD 3-4 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1M5d1sGBUUDmMEKWs9mp_EWydVokTbKyV?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1M5d1sGBUUDmMEKWs9mp_EWydVokTbKyV?usp=drive_link",
  source: "drive"
},
{
  id: 173,
  nom: "Solution série 1-2",
  description: "Correction TD 1-2 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1n5rq_j4r0Hg4XIicqwCIMCbuOdr-3Ty5?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1n5rq_j4r0Hg4XIicqwCIMCbuOdr-3Ty5?usp=drive_link",
  source: "drive"
},
{
  id: 174,
  nom: "Solution TD",
  description: "Correction TD antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1c7VDlhFdlQag4X7X7f1V07OGL1M09fya?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1c7VDlhFdlQag4X7X7f1V07OGL1M09fya?usp=drive_link",
  source: "drive"
},
{
  id: 175,
  nom: "énoncer TD 4",
  description: "énoncer TD 4 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1E06inNHnpzDPKuN_eEY8kqreodesY-1a?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1E06inNHnpzDPKuN_eEY8kqreodesY-1a?usp=drive_link",
  source: "drive"
},
{
  id: 176,
  nom: "énoncer TD 3",
  description: "énoncer TD 3 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1qAxN4DMnI_Ylg1H5K9VUKItfCsde4u2q?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1qAxN4DMnI_Ylg1H5K9VUKItfCsde4u2q?usp=drive_link",
  source: "drive"
},
{
  id: 177,
  nom: "énoncer TD 2",
  description: "énoncer TD 2 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1uwfXEAFn6_8K5nuIJv2wnm31XVvJciD5?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1uwfXEAFn6_8K5nuIJv2wnm31XVvJciD5?usp=drive_link",
  source: "drive"
},
{
  id: 178,
  nom: "énoncer TD 1",
  description: "énoncer TD 1 antenne",
  type: "td",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1F7MD5QsH99GjEx-Gjuo08AlwDPGPfCeY?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1F7MD5QsH99GjEx-Gjuo08AlwDPGPfCeY?usp=drive_link",
  source: "drive"
},
{
  id: 179,
  nom: "Révision",
  description: "Révision antenne pour l\'examen",
  type: "record",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "07/05/2026",
  embedUrl: "https://drive.google.com/drive/folders/14lMGH4iSrfUMbpGxtIPUi3COs1wZYk0C?usp=drive_link",
  url: "https://drive.google.com/drive/folders/14lMGH4iSrfUMbpGxtIPUi3COs1wZYk0C?usp=drive_link",
  source: "drive"
},
{
  id: 180,
  nom: "Examen 10-11",
  description: "Examen 2011 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2011",
  embedUrl: "https://drive.google.com/drive/folders/15cO4Q6hLfixOG2WfiTc0Xs3tiDufCLKE?usp=drive_link",
  url: "https://drive.google.com/drive/folders/15cO4Q6hLfixOG2WfiTc0Xs3tiDufCLKE?usp=drive_link",
  source: "drive"
},
{
  id: 181,
  nom: "Examen 11-12",
  description: "Examen 2012 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2012",
  embedUrl: "https://drive.google.com/drive/folders/1LDNme8BjZHF_jOsq53A6XZgFounmjANJ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1LDNme8BjZHF_jOsq53A6XZgFounmjANJ?usp=drive_link",
  source: "drive"
},
{
  id: 182,
  nom: "Examen 12-13",
  description: "Examen 2013 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2013",
  embedUrl: "https://drive.google.com/drive/folders/1QNgrQn4iHeKBJWfEfIewL-bn6aHQVdJn?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1QNgrQn4iHeKBJWfEfIewL-bn6aHQVdJn?usp=drive_link",
  source: "drive"
},
{
  id: 183,
  nom: "Examen 13-14",
  description: "Examen 2014 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2014",
  embedUrl: "https://drive.google.com/drive/folders/1Ae9cLuFNw3m03EWPqpSZgErmM1SGxIVr?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Ae9cLuFNw3m03EWPqpSZgErmM1SGxIVr?usp=drive_link",
  source: "drive"
},
{
  id: 184,
  nom: "Examen 14-15",
  description: "Examen 2015 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2015",
  embedUrl: "https://drive.google.com/drive/folders/1uUINBzNXLs7yyWv7AUDHrCaHJ9p6BecL?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1uUINBzNXLs7yyWv7AUDHrCaHJ9p6BecL?usp=drive_link",
  source: "drive"
},
{
  id: 185,
  nom: "Examen 15-16",
  description: "Examen 2016 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2016",
  embedUrl: "https://drive.google.com/drive/folders/1Ns3j88VugsFqFaOXzzYAumaakCNyFaq6?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Ns3j88VugsFqFaOXzzYAumaakCNyFaq6?usp=drive_link",
  source: "drive"
},
{
  id: 186,
  nom: "Examen 17-18",
  description: "Examen 2018 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2018",
  embedUrl: "https://drive.google.com/drive/folders/1SLbzxFV9gtR6AOHV8Ncosmz12ofweB1D?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1SLbzxFV9gtR6AOHV8Ncosmz12ofweB1D?usp=drive_link",
  source: "drive"
},
{
  id: 187,
  nom: "Examen 18-19",
  description: "Examen 2019 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2019",
  embedUrl: "https://drive.google.com/drive/folders/1TJvST31atr014vE9v5dVtr-GN6bvj0H4?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1TJvST31atr014vE9v5dVtr-GN6bvj0H4?usp=drive_link",
  source: "drive"
},
{
  id: 188,
  nom: "Examen 20-21",
  description: "Examen 2021 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2021",
  embedUrl: "https://drive.google.com/drive/folders/1VSmjzCOA1GBwF_5jFQzCmBo3hHO51HM4?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1VSmjzCOA1GBwF_5jFQzCmBo3hHO51HM4?usp=drive_link",
  source: "drive"
},
{
  id: 189,
  nom: "Examen 21-22",
  description: "Examen 2022 sans correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2022",
  embedUrl: "https://drive.google.com/drive/folders/1qLrKS1X9egTKdrdOLTeWzS2Nr_4ay5Rd?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1qLrKS1X9egTKdrdOLTeWzS2Nr_4ay5Rd?usp=drive_link",
  source: "drive"
},
{
  id: 190,
  nom: "Examen 22-23",
  description: "Examen 2023 (exo 1 same as exo 1 ta3 2026)",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2023",
  embedUrl: "https://drive.google.com/drive/folders/1W6yOMTfBmtCQdbH9-LiWoPg7oEfeln-H?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1W6yOMTfBmtCQdbH9-LiWoPg7oEfeln-H?usp=drive_link",
  source: "drive"
},
{
  id: 191,
  nom: "Examen 23-24",
  description: "Examen 2024 (exo 3 same as exo 3 ta3 2026)",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2024",
  embedUrl: "https://drive.google.com/drive/folders/1zRGhH0Bs4ZTlbx1ELpu4AR8apJckZwY6?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1zRGhH0Bs4ZTlbx1ELpu4AR8apJckZwY6?usp=drive_link",
  source: "drive"
},
{
  id: 192,
  nom: "Rattrapage 24-25",
  description: "Rattrapage 2025 ",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1EHTp4uXxxys7X4OtqUk46ySthULuoKRE?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1EHTp4uXxxys7X4OtqUk46ySthULuoKRE?usp=drive_link",
  source: "drive"
},
{
  id: 193,
  nom: "Examen 24-25",
  description: "Examen 2025 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1J1MlBIAhs2GaTKRYWE0MiUEekcKdfiN8?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1J1MlBIAhs2GaTKRYWE0MiUEekcKdfiN8?usp=drive_link",
  source: "drive"
},
{
  id: 194,
  nom: "Examen 25-26",
  description: "Examen 2026 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/18je-uICVmk56BHZ-TiKa7_z9p7CCq5PJ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/18je-uICVmk56BHZ-TiKa7_z9p7CCq5PJ?usp=drive_link",
  source: "drive"
},
{
  id: 195,
  nom: "Interro 2019",
  description: "Interro 2019 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2019",
  embedUrl: "https://drive.google.com/drive/folders/118si4e0T9VR2iMuMO-ZQDHHNrPwpjGuf?usp=drive_link",
  url: "https://drive.google.com/drive/folders/118si4e0T9VR2iMuMO-ZQDHHNrPwpjGuf?usp=drive_link",
  source: "drive"
},
{
  id: 196,
  nom: "Interro 24-25",
  description: "Interro 2025 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1a9wzn-Px6FGGix5OBFIcFAv3WuZdWAjJ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1a9wzn-Px6FGGix5OBFIcFAv3WuZdWAjJ?usp=drive_link",
  source: "drive"
},
{
  id: 197,
  nom: "Interro 25-26",
  description: "Interro 2026 avec correction",
  type: "examen",
  matiere: "Antennes",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1ucikkq7o4164FH6nv_r2y4pdFzLnbIvT?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ucikkq7o4164FH6nv_r2y4pdFzLnbIvT?usp=drive_link",
  source: "drive"
},
{
  id: 198,
  nom: "Cours 25-26",
  description: "Cours 2026 de Mr.HADDAD",
  type: "cours",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1ifpRSgBkriRaVxzeBnh0HlUQ1UHT49Rh?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ifpRSgBkriRaVxzeBnh0HlUQ1UHT49Rh?usp=drive_link",
  source: "drive"
},
{
  id: 199,
  nom: "Série 5",
  description: "Série 5 avec correction",
  type: "td",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1ttCTVj0pOAaRoFHeXD6c43c5ykU-QX2x?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ttCTVj0pOAaRoFHeXD6c43c5ykU-QX2x?usp=drive_link",
  source: "drive"
},
{
  id: 200,
  nom: "Série 4",
  description: "Série 4 avec correction",
  type: "td",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1iq6pf_8JlbXmZtWkhffkGqaVBqBCXe-W?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1iq6pf_8JlbXmZtWkhffkGqaVBqBCXe-W?usp=drive_link",
  source: "drive"
},
{
  id: 201,
  nom: "Série 3",
  description: "Série 3 avec correction",
  type: "td",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1B_MhWpM3_aoYYUuCbkR9e-Uyytl1AKwA?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1B_MhWpM3_aoYYUuCbkR9e-Uyytl1AKwA?usp=drive_link",
  source: "drive"
},
{
  id: 202,
  nom: "Série 2",
  description: "Série 2 avec correction + une série bien detaillé",
  type: "td",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1BvjIe4x1uwaU6Z46eNDWJvNOUP9BTmPQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1BvjIe4x1uwaU6Z46eNDWJvNOUP9BTmPQ?usp=drive_link",
  source: "drive"
},
{
  id: 203,
  nom: "Série 1",
  description: "Série 1 avec correction + une série bien detaillé",
  type: "td",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/18McrutIo3cVvGqms4JEd-WUgQgFRMqFQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/18McrutIo3cVvGqms4JEd-WUgQgFRMqFQ?usp=drive_link",
  source: "drive"
},
{
  id: 204,
  nom: "Résumer",
  description: "9awanin TD 5",
  type: "resume",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1kHIgt6Uh6fxDSwVKc3ddszshwxnMMWJu?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1kHIgt6Uh6fxDSwVKc3ddszshwxnMMWJu?usp=drive_link",
  source: "drive"
},
{
  id: 205,
  nom: "Examen 2021",
  description: "Examen 2021 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2021",
  embedUrl: "https://drive.google.com/drive/folders/1zyVyXciufXXWZK0Rt2BsCivmK4h8UNDI?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1zyVyXciufXXWZK0Rt2BsCivmK4h8UNDI?usp=drive_link",
  source: "drive"
},
{
  id: 206,
  nom: "Rattrapage 2022",
  description: "Rattrapage 2022 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2022",
  embedUrl: "https://drive.google.com/drive/folders/1Q7AGJIMxC7ze0Dgv-z6lVYgtz6Rd23zP?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Q7AGJIMxC7ze0Dgv-z6lVYgtz6Rd23zP?usp=drive_link",
  source: "drive"
},
{
  id: 207,
  nom: "Examen 2022",
  description: "Examen 2022 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2022",
  embedUrl: "https://drive.google.com/drive/folders/1_4BQExDT7b_DD4eB-Nww762D18oTaQDx?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1_4BQExDT7b_DD4eB-Nww762D18oTaQDx?usp=drive_link",
  source: "drive"
},
{
  id: 208,
  nom: "Examen 2025",
  description: "Examen 2025 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1qyCNOFcxwI-iowx2vihgWnLfDXHV-RtM?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1qyCNOFcxwI-iowx2vihgWnLfDXHV-RtM?usp=drive_link",
  source: "drive"
},
{
  id: 209,
  nom: "Examen 2026",
  description: "Examen 2026 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1RmNK849wyuZ_25spPm8Ct1xerotDsS9p?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1RmNK849wyuZ_25spPm8Ct1xerotDsS9p?usp=drive_link",
  source: "drive"
},
{
  id: 210,
  nom: "Interro 2019",
  description: "Examen 2019 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2019",
  embedUrl: "https://drive.google.com/drive/folders/18ogegNr65l_vBb95CF8usYA3FXBFX2eI?usp=drive_link",
  url: "https://drive.google.com/drive/folders/18ogegNr65l_vBb95CF8usYA3FXBFX2eI?usp=drive_link",
  source: "drive"
},
{
  id: 211,
  nom: "Interro 2022",
  description: "Examen 2022 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2022",
  embedUrl: "https://drive.google.com/drive/folders/1SKRgwkIwyU9WHLeloJPWUXDz975WPPs-?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1SKRgwkIwyU9WHLeloJPWUXDz975WPPs-?usp=drive_link",
  source: "drive"
},
{
  id: 212,
  nom: "Interro 2024",
  description: "Examen 2024 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2024",
  embedUrl: "https://drive.google.com/drive/folders/1tgKTJsFfmg4Qox2hUw5liBa4DgtgxGTw?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1tgKTJsFfmg4Qox2hUw5liBa4DgtgxGTw?usp=drive_link",
  source: "drive"
},
{
  id: 213,
  nom: "Interro 2025",
  description: "Examen 2025 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1OH7OMg5KhD_X_892hf6CBDFTViOQgQXv?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1OH7OMg5KhD_X_892hf6CBDFTViOQgQXv?usp=drive_link",
  source: "drive"
},
{
  id: 214,
  nom: "Interro 2026",
  description: "Examen 2026 avec correction",
  type: "examen",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1mq9MZnJzlVy056Kk2bCmxruhwXkq2sf3?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1mq9MZnJzlVy056Kk2bCmxruhwXkq2sf3?usp=drive_link",
  source: "drive"
},
{
  id: 215,
  nom: "Cours + TD Guide dondes",
  description: "Record TD et Cours",
  type: "record",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/13fpJAVqrnVRwsQvOQXXLkN6xNRzehK0s?usp=drive_link",
  url: "https://drive.google.com/drive/folders/13fpJAVqrnVRwsQvOQXXLkN6xNRzehK0s?usp=drive_link",
  source: "drive"
},
{
  id: 216,
  nom: "Abaque de smith",
  description: "Record abaque de smith",
  type: "record",
  matiere: "Canaux de transmission",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1Il9tY6fSOcpzSVXwVlPQr6emOtpldVRB?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1Il9tY6fSOcpzSVXwVlPQr6emOtpldVRB?usp=drive_link",
  source: "drive"
},
{
  id: 219,
  nom: "TD sup",
  description: "TD suplementaire",
  type: "td",
  matiere: "FPGA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/13daODptoM3JbDB_pNEVDgxeCfYRs79b_?usp=drive_link",
  url: "https://drive.google.com/drive/folders/13daODptoM3JbDB_pNEVDgxeCfYRs79b_?usp=drive_link",
  source: "drive"
},
{
  id: 220,
  nom: "Compte rendu",
  description: "Compte rendu année 2015 (hna ma demandalnach ndiro on c jms y9olelkom)",
  type: "tp",
  matiere: "FPGA",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/13daODptoM3JbDB_pNEVDgxeCfYRs79b_?usp=drive_link",
  url: "https://drive.google.com/drive/folders/13daODptoM3JbDB_pNEVDgxeCfYRs79b_?usp=drive_link",
  source: "drive"
},
{
  id: 221,
  nom: "Série 1",
  description: "Circuit miroondes passifs et actifs",
  type: "td",
  matiere: "Dispositifs RF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/17db3ubnUXzdW9YvjBwyRTSZVGx35juIF?usp=drive_link",
  url: "https://drive.google.com/drive/folders/17db3ubnUXzdW9YvjBwyRTSZVGx35juIF?usp=drive_link",
  source: "drive"
},
{
  id: 222,
  nom: "Cours 25-26",
  description: "Tout les cours de technologies-et-protocoles-pour-le-multimedia channel",
  type: "cours",
  matiere: "Multimédia",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/1jup7mmGWNpOgFvvteaX5zmdsNA8vnMNg?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1jup7mmGWNpOgFvvteaX5zmdsNA8vnMNg?usp=drive_link",
  source: "drive"
},
{
  id: 223,
  nom: "TD",
  description: "kayen gir série wahda",
  type: "td",
  matiere: "Multimédia",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/15UkLrMIxPiG2mYGQQcYCXG__pWGRR5yQ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/15UkLrMIxPiG2mYGQQcYCXG__pWGRR5yQ?usp=drive_link",
  source: "drive"
},
{
  id: 224,
  nom: "Cours 25-26",
  description: "Cours recherche documentaire et conception de mémoire",
  type: "cours",
  matiere: "Rech. Documentaire",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1e9ah2CLSfDFqWfqKLs-pBIuOk9seZC18?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1e9ah2CLSfDFqWfqKLs-pBIuOk9seZC18?usp=drive_link",
  source: "drive"
},
{
  id: 225,
  nom: "Cours 25-26",
  description: "Cours Réseaux sans fil et mobiles",
  type: "cours",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1rFPSmDd95BfpkZpiVuegbjyyavDU2nWs?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1rFPSmDd95BfpkZpiVuegbjyyavDU2nWs?usp=drive_link",
  source: "drive"
},
{
  id: 226,
  nom: "Série 1",
  description: "énoncer série 1 RSF",
  type: "td",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1NNfNtQ9LfkinaiiI8D4tcW1_don59SdI?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1NNfNtQ9LfkinaiiI8D4tcW1_don59SdI?usp=drive_link",
  source: "drive"
},
{
  id: 227,
  nom: "Série 2",
  description: "énoncer série 2 RSF",
  type: "td",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/127kxjz9XVjRJnp432X2tCxzhqFqkS56T?usp=drive_link",
  url: "https://drive.google.com/drive/folders/127kxjz9XVjRJnp432X2tCxzhqFqkS56T?usp=drive_link",
  source: "drive"
},
{
  id: 228,
  nom: "Série 3",
  description: "énoncer série 3 RSF",
  type: "td",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1h9nSXfpFQZT0a-NzXVksqTDdljfQAbpD?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1h9nSXfpFQZT0a-NzXVksqTDdljfQAbpD?usp=drive_link",
  source: "drive"
},
{
  id: 229,
  nom: "Série 4",
  description: "énoncer série 4 RSF",
  type: "td",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1gHUizjFvsTgSid4Udtq5j_L429Ik7PAt?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1gHUizjFvsTgSid4Udtq5j_L429Ik7PAt?usp=drive_link",
  source: "drive"
},
{
  id: 230,
  nom: "Solution TD",
  description: "Solution TD RSF(rahom m5ltin)",
  type: "td",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1znFUQwxSL12OWwYwez9qNYkUzGMfhvgm?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1znFUQwxSL12OWwYwez9qNYkUzGMfhvgm?usp=drive_link",
  source: "drive"
},
{
  id: 231,
  nom: "énoncer tp",
  description: "All i found about tp RSF",
  type: "tp",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1fQ0iANNH11XNSDSCB3nbl29O8P1066HE?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1fQ0iANNH11XNSDSCB3nbl29O8P1066HE?usp=drive_link",
  source: "drive"
},
{
  id: 232,
  nom: "Examen 2026",
  description: "Examen 2026 RSF avec solution",
  type: "examen",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1KaPY4J0Dp6nGkqNOkH4lw4NKv9sYrElO?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1KaPY4J0Dp6nGkqNOkH4lw4NKv9sYrElO?usp=drive_link",
  source: "drive"
},
{
  id: 233,
  nom: "Rattrapage 2026",
  description: "Rattrapage 2026 RSF sans solution",
  type: "examen",
  matiere: "RSF",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/14OVshyZLaABgngIsNXYfTXlPHw6BLUPf?usp=drive_link",
  url: "https://drive.google.com/drive/folders/14OVshyZLaABgngIsNXYfTXlPHw6BLUPf?usp=drive_link",
  source: "drive"
},
{
  id: 234,
  nom: "Cours",
  description: "Cours Systèmes de Radionavigation ",
  type: "cours",
  matiere: "Radionavigation",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1vm58GAOO3BZd14QkLhE3bZt4gSvxR3pt?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1vm58GAOO3BZd14QkLhE3bZt4gSvxR3pt?usp=drive_link",
  source: "drive"
},
{
  id: 235,
  nom: "Cours",
  description: "Cours télécommunications-optiques",
  type: "cours",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1dXYtZ9Fla09ggujhGli3ZpcXgmCt6AQ4?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1dXYtZ9Fla09ggujhGli3ZpcXgmCt6AQ4?usp=drive_link",
  source: "drive"
},
{
  id: 236,
  nom: "Série 1",
  description: "énoncer série 1",
  type: "td",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1ePnDFwti1YEZvtFnAixHmi2A4ZkGP94T?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1ePnDFwti1YEZvtFnAixHmi2A4ZkGP94T?usp=drive_link",
  source: "drive"
},
{
  id: 237,
  nom: "Série 2",
  description: "énoncer série 2",
  type: "td",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1i-xQXbq3ID6jtfyyv9l6V9bZ43iLdpe-?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1i-xQXbq3ID6jtfyyv9l6V9bZ43iLdpe-?usp=drive_link",
  source: "drive"
},
{
  id: 238,
  nom: "Examen 2023",
  description: "Examen 2023 sans correction",
  type: "examen",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1GvjKjyKSfNq8a6-7sO5PzJsBNAA4iJrZ?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1GvjKjyKSfNq8a6-7sO5PzJsBNAA4iJrZ?usp=drive_link",
  source: "drive"
},
{
  id: 239,
  nom: "Rattrapage 2026",
  description: "Rattrapage 2026 sans correction",
  type: "examen",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1iFC-Y_ep3o2O07SPOxnFPAX4HxQeTMRu?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1iFC-Y_ep3o2O07SPOxnFPAX4HxQeTMRu?usp=drive_link",
  source: "drive"
},
{
  id: 240,
  nom: "énoncer TP",
  description: "Tout les énoncers tp Com. Optique",
  type: "tp",
  matiere: "Com. Optique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1IpNkfUIjxe4i953jyjYf2ew_MJ0c6ysl?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1IpNkfUIjxe4i953jyjYf2ew_MJ0c6ysl?usp=drive_link",
  source: "drive"
},
{
  id: 241,
  nom: "Cours 25-26",
  description: "Tout les cours de Télécom Spatiale",
  type: "cours",
  matiere: "Télécom Spatiale",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1KPaax8gkpZAGek28RhVhnsZ_5-ubvUW-?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1KPaax8gkpZAGek28RhVhnsZ_5-ubvUW-?usp=drive_link",
  source: "drive"
},
{
  id: 242,
  nom: "Cours 25-26",
  description: "Tout les cours de Télévision Numérique",
  type: "cours",
  matiere: "Télévision Numérique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2025",
  embedUrl: "https://drive.google.com/drive/folders/1mR5sGtqSN_T_3EFcI-ljWDWub2fx6ery?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1mR5sGtqSN_T_3EFcI-ljWDWub2fx6ery?usp=drive_link",
  source: "drive"
},
{
  id: 243,
  nom: "Examen 2021",
  description: "Examen 2021 avec corriger",
  type: "examen",
  matiere: "Télévision Numérique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2021",
  embedUrl: "https://drive.google.com/drive/folders/15QD8HUjnnVtFCc0-COdiukLDGUTGH7w9?usp=drive_link",
  url: "https://drive.google.com/drive/folders/15QD8HUjnnVtFCc0-COdiukLDGUTGH7w9?usp=drive_link",
  source: "drive"
},
{
  id: 244,
  nom: "Examen 2023",
  description: "Examen 2023 avec corriger",
  type: "examen",
  matiere: "Télévision Numérique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2023",
  embedUrl: "https://drive.google.com/drive/folders/1J1aquuEEHcDL-3fMJdrGxyDArfNum6zr?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1J1aquuEEHcDL-3fMJdrGxyDArfNum6zr?usp=drive_link",
  source: "drive"
},
{
  id: 245,
  nom: "Examen 2024",
  description: "Examen 2024 avec corriger",
  type: "examen",
  matiere: "Télévision Numérique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2024",
  embedUrl: "https://drive.google.com/drive/folders/1AZ8k-CwkZQmddUw3SMPZBrEovm-c2J9u?usp=drive_link",
  url: "https://drive.google.com/drive/folders/1AZ8k-CwkZQmddUw3SMPZBrEovm-c2J9u?usp=drive_link",
  source: "drive"
},
{
  id: 246,
  nom: "Examen 2026",
  description: "Examen 2026 sans corriger",
  type: "examen",
  matiere: "Télévision Numérique",           // ← doit correspondre EXACTEMENT au nom dans MODULES
  taille: "—",
  date: "2026",
  embedUrl: "https://drive.google.com/drive/folders/11FO9PPfOown-gP59Zxxd67E93GR7JKQF?usp=drive_link",
  url: "https://drive.google.com/drive/folders/11FO9PPfOown-gP59Zxxd67E93GR7JKQF?usp=drive_link",
  source: "drive"
},

];

// ══════════════════════════════
// TOP ÉTUDIANTS (optionnel)
// ══════════════════════════════
const TOP_STUDENTS = [
  // { nom:'Amira Benali', specialite:'ST', contributions:12 },
];

// ══════════════════════════════
// EMPLOI DU TEMPS
// ══════════════════════════════
// date      : format 'AAAA-MM-JJ'
// horaire   : format 'HHhMM-HHhMM'   ex: '15h30-17h00'
// salle     : ex: 'E7,E8'
// sem       : 'S1' ou 'S2'
const EMPLOI_DU_TEMPS = [
  // SAMEDI
  { jour:'Samedi', module:'Éthique-déontologie',    type:'en ligne', horaire:'09H40-11H10', salle:'',       responsable:'Meksen', sem:'S2' },
  { jour:'Samedi', module:'Canaux de transmission', type:'en ligne', horaire:'11H20-12H50', salle:'',       responsable:'Haddad', sem:'S2' },

  // DIMANCHE
  { jour:'Dimanche', module:'TNS', type:'TD',    horaire:'08H00-09H30', salle:'354',  groupe:'G3', responsable:'SADI-AHMED', sem:'S2' },
  { jour:'Dimanche', module:'TNS', type:'TD',    horaire:'09H40-11H10', salle:'',     groupe:'G2', responsable:'SADI-AHMED', sem:'S2' },
  { jour:'Dimanche', module:'Antennes', type:'TD', horaire:'09H40-11H10', salle:'406', groupe:'G3', responsable:'RAAF', sem:'S2' },
  { jour:'Dimanche', module:'TNS', type:'cours', horaire:'11H20-12H50', salle:'E8',   responsable:'SADI-AHMED', sem:'S2' },
  { jour:'Dimanche', module:'Antennes', type:'cours', horaire:'13H00-14H30', salle:'E1', responsable:'RAAF', sem:'S2' },

  // LUNDI
  { jour:'Lundi', module:'Antennes',              type:'TD',    horaire:'08H00-09H30', salle:'462',  groupe:'G1', responsable:'RAAF', sem:'S2' },
  { jour:'Lundi', module:'TNS',                   type:'TD',    horaire:'09H40-11H10', salle:'',     groupe:'G1', responsable:'SADI-AHMED', sem:'S2' },
  { jour:'Lundi', module:'Antennes',              type:'TD',    horaire:'09H40-11H10', salle:'358',  groupe:'G2', responsable:'RAAF', sem:'S2' },
  { jour:'Lundi', module:'Codage et Compression', type:'TD',    horaire:'09H40-11H10', salle:'',     groupe:'G3', responsable:'SERIR', sem:'S2' },
  { jour:'Lundi', module:'Tr.Images',             type:'cours', horaire:'11H20-12H50', salle:'C202', responsable:'LOUNIS', sem:'S2' },
  { jour:'Lundi', module:'TNS',                   type:'cours', horaire:'13H00-14H30', salle:'C202', responsable:'SADI-AHMED', sem:'S2' },

  // MARDI
  { jour:'Mardi', module:'Canaux de transmission', type:'en ligne', horaire:'11H20-12H50', salle:'', responsable:'HADDAD', sem:'S2' },

  // MERCREDI
  { jour:'Mercredi', module:'TNS',                   type:'labo', horaire:'08H00-09H30', salle:'labo18', sem:'S2' },
  { jour:'Mercredi', module:'Antennes',              type:'labo', horaire:'09H40-11H10', salle:'labo11', sem:'S2' },
  { jour:'Mercredi', module:'Codage et Compression', type:'labo', horaire:'11H20-12H50', salle:'labo22', sem:'S2' },
  { jour:'Mercredi', module:'Tr.Images',             type:'labo', horaire:'13H00-14H30', salle:'labo47', sem:'S2' },
  { jour:'Mercredi', module:'IA',                    type:'labo', horaire:'14H40-16H10', salle:'labo44', sem:'S2' },

  // JEUDI
  { jour:'Jeudi', module:'IA',                    type:'cours', horaire:'08H00-09H30',  salle:'415T', responsable:'CHELALI', sem:'S2' },
  { jour:'Jeudi', module:'Codage et Compression', type:'cours', horaire:'09H40-11H10',  salle:'415T', responsable:'SERIR',   sem:'S2' },
  { jour:'Jeudi', module:'Codage et Compression', type:'TD',    horaire:'11H20-12H50',  salle:'128T', groupe:'G1+G2', responsable:'SERIR', sem:'S2' },

  // SAMEDI M2
  { jour:'Samedi', module:'Radionavigation',      type:'en ligne', horaire:'09H40-11H10', salle:'',      responsable:'Kheddam',    sem:'M2' },
  { jour:'Samedi', module:'Rech. Documentaire',   type:'en ligne', horaire:'11H20-12H50', salle:'',      responsable:'Bouchemakh', sem:'M2' },
  { jour:'Samedi', module:'Télécom Spatiale',     type:'en ligne', horaire:'13H00-14H30', salle:'',      responsable:'Haddad',     sem:'M2' },

  // LUNDI M2
  { jour:'Lundi', module:'Télévision Numérique',  type:'cours',    horaire:'11H20-12H50', salle:'R5',    responsable:'Chelali',    sem:'M2' },
  { jour:'Lundi', module:'Multimédia',            type:'cours',    horaire:'13H00-14H30', salle:'R5',    responsable:'Merazka',    sem:'M2' },
  { jour:'Lundi', module:'Multimédia',            type:'TD',       horaire:'14H40-16H10', salle:'448',   groupe:'G1', responsable:'Merazka', sem:'M2' },
  { jour:'Lundi', module:'RSF',                   type:'TD',       horaire:'14H40-16H10', salle:'248',   groupe:'G2', responsable:'Farah',   sem:'M2' },

  // MARDI M2
  { jour:'Mardi', module:'RSF',                   type:'cours',    horaire:'11H20-12H50', salle:'326D',  responsable:'Farah',      sem:'M2' },
  { jour:'Mardi', module:'RSF',                   type:'TD',       horaire:'13H00-14H30', salle:'203',   groupe:'G1', responsable:'Farah',   sem:'M2' },
  { jour:'Mardi', module:'Multimédia',            type:'TD',       horaire:'14H40-16H10', salle:'117D',  groupe:'G2', responsable:'Merazka', sem:'M2' },

  // MERCREDI M2 — TP 
  { jour:'Mercredi', module:'RSF',                type:'labo',     horaire:'08H00-9H30', salle:'labo44',  responsable:'Zergat',   sem:'M2' },
  { jour:'Mercredi', module:'Com. Optique',       type:'labo',     horaire:'08H00-9H30', salle:'labo44',  responsable:'Bazi',     sem:'M2' },
  { jour:'Mercredi', module:'Dispositifs RF',     type:'labo',     horaire:'09H40-11H10', salle:'labo44',  responsable:'Adane',    sem:'M2' },
  { jour:'Mercredi', module:'Télévision Numérique',type:'labo',    horaire:'09H40-11H10', salle:'labo53',  responsable:'Chelali',  sem:'M2' },
  { jour:'Mercredi', module:'RSF',                type:'labo',     horaire:'11H20-12H50', salle:'labo44',  responsable:'Zergat',   sem:'M2' },
  { jour:'Mercredi', module:'Com. Optique',       type:'labo',     horaire:'11H20-12H50', salle:'labo44',  responsable:'Bazi',     sem:'M2' },
  { jour:'Mercredi', module:'Dispositifs RF',     type:'labo',     horaire:'13H00-14H30', salle:'labo44',  responsable:'Adane',    sem:'M2' }, 
  { jour:'Mercredi', module:'Télévision Numérique',type:'labo',    horaire:'13H00-14H30', salle:'labo53',  responsable:'Chelali',  sem:'M2' },
  { jour:'Mercredi', module:'RSF',                type:'labo',     horaire:'14H40-16H10', salle:'labo44',  responsable:'Zergat',   sem:'M2' },
  { jour:'Mercredi', module:'Com. Optique',       type:'labo',     horaire:'14H40-16H10', salle:'labo44',  responsable:'Bazi',     sem:'M2' },
  { jour:'Mercredi', module:'Dispositifs RF',     type:'labo',     horaire:'16H20-17H50', salle:'labo44',  responsable:'Adane',    sem:'M2' },
  { jour:'Mercredi', module:'Télévision Numérique',type:'labo',    horaire:'16H20-17H50', salle:'labo53',  responsable:'Chelali',  sem:'M2' },

  // JEUDI M2
  { jour:'Jeudi', module:'Com. Optique',          type:'cours',    horaire:'08H00-09H30', salle:'241D',  responsable:'Bazi',       sem:'M2' },
  { jour:'Jeudi', module:'Com. Optique',          type:'TD',       horaire:'09H40-11H10', salle:'362',   groupe:'G2', responsable:'Bazi',   sem:'M2' },
  { jour:'Jeudi', module:'Dispositifs RF',        type:'TD',       horaire:'11H20-12H50', salle:'358',   groupe:'G1', responsable:'Adane',  sem:'M2' },
  { jour:'Jeudi', module:'Dispositifs RF',        type:'cours',    horaire:'13H00-14H30', salle:'391D',  responsable:'Adane',      sem:'M2' },
  { jour:'Jeudi', module:'Com. Optique',          type:'TD',       horaire:'14H40-16H10', salle:'360',   groupe:'G1', responsable:'Bazi',   sem:'M2' },
  { jour:'Jeudi', module:'Dispositifs RF',        type:'TD',       horaire:'14H40-16H10', salle:'364',   groupe:'G2', responsable:'Adane',  sem:'M2' },
];

// ══════════════════════════════
// RATTRAPAGES
// ══════════════════════════════
const RATTRAPAGES = [
  { module:'TNS',                   date:'2026-06-01', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Sadi Ahmed',  sem:'S2' },
  { module:'Tr.Images',             date:'2026-06-03', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Lounis',      sem:'S2' },
  { module:'Codage et Compression', date:'2026-06-06', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Serir',       sem:'S2' },
  { module:'Antennes',              date:'2026-06-08', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Raaf',        sem:'S2' },
  { module:'Canaux de transmission',date:'2026-06-10', horaire:'13H45-15H15', salle:'E7,E8', responsable:'Haddad',      sem:'S2' },
  { module:'Systèmes embarqués',    date:'2026-06-13', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Chelali',     sem:'S1' },
  { module:'Radiocommunication',    date:'2026-06-14', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Haddad',      sem:'S1' },
  { module:'FPGA',                  date:'2026-06-16', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Halilali',    sem:'S1' },
  { module:'SPA',                   date:'2026-06-20', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Ouarzeddine', sem:'S1' },
  { module:'CNA',                   date:'2026-06-22', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Hamza',       sem:'S1' },
  { module:'POO',                   date:'2026-06-24', horaire:'15H30-17H00', salle:'E7,E8', responsable:'Serir',       sem:'S1' },
];
