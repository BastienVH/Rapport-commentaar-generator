// Initialize document elements
const commentPara = document.getElementById("commentaartekst");

// code for generate button
const generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click", generateFeedback);

// Set correct gendered words
let aanwijzendVnw = "";
let aanwijzendVnwCap = "";
let bezittVnw = "";
let bezittVnwCap = "";
let lijdVnw = "";
let geslacht = "";
let leerkrachtGeslacht = "";

function generateFeedback() {
  // set the gender and name of student
  setPronouns();
  const displayName = document.getElementById("name").value;
  // initialize variables for own input in resultaten
  let res1, res2, res3, res4, oud_avi, nieuw_avi;

  // store own input in above variables 
  const resultaten = returnSelection('resultaten');
  if (resultaten == 'goed') {
    res1 = document.getElementById('goed1').value;
    res2 = document.getElementById('goed2').value;
  } else if (resultaten == 'goedzorg') {
    res1 = document.querySelector('#goedzorg1').value;
    res2 = document.querySelector('#goedzorg2').value;
  } else if (resultaten == 'welover') {
    res1 = document.querySelector('#welover2').value;
    res2 = document.querySelector('#welover1').value;
    res3 = document.querySelector('#welover3').value;
    res4 = document.querySelector('#welover4').value;
  }

  // get feedback for slot
  let slot = returnSelection('slot');
  if (slot == 'avi') {
    oud_avi = document.querySelector('#oud_avi').value;
    nieuw_avi = document.querySelector('#nieuw_avi').value;
  }

  
  // dictionaries with feedback
  const dictInzet = {
    heelgoed: `${displayName} wilt graag een mooi resultaat behalen en zet zich daar enorm voor in.`,
    meestalgoed: `${displayName} wilt altijd een mooi resultaat. Daar zet ${aanwijzendVnw} zich meestal goed voor in. Af en toe laat ${aanwijzendVnw} ook ${bezittVnw} hoofd hangen of denkt ${aanwijzendVnw} dat het vanzelf wel zal lukken. ${aanwijzendVnwCap} moet proberen om er ook op die momenten voor te blijven gaan. `,
    goedzwak: `${displayName} wilt graag een mooi resultaat. Daar zet ${aanwijzendVnw} zich ook enorm voor in, want niet alles gaat even gemakkelijk.`,
    goedbabbelen: `${displayName} toonde toen dat ${aanwijzendVnw} hard kan werken wanneer ${aanwijzendVnw} dat wilt, al durfde ${aanwijzendVnw} ook wel eens babbelen met een buurtje.`,
    wisselend: `De ene keer werkt ${displayName} knap mee en is ${aanwijzendVnw} met alles in orde, de andere keer laat ${aanwijzendVnw} ${bezittVnw} hoofd hangen en werkt ${aanwijzendVnw} niet mee. Een goede voorbereiding gebeurt in de klas maar ook thuis.`,
    speels: `${displayName} toonde vooral veel speelsheid. ${aanwijzendVnwCap} wilde in de klas veel plezier maken met ${bezittVnw} vrienden. Nauwkeurig werken en thuis studeren vond ${aanwijzendVnw} minder belangrijk. In een klein groepje bij de juf deed ${aanwijzendVnw} wel ${bezittVnw} best.`,
    droomt: `${displayName} droomt vaak weg in de klas. Dan weet ${aanwijzendVnw} het antwoord niet of weet ${aanwijzendVnw} niet waar we bezig zijn. ${aanwijzendVnwCap} moet in het vijfde leerjaar proberen meteen ${bezittVnw} focus bij de les te houden.`,
    nietgoed: `${displayName} mist wat motivatie om zich in te zetten voor zijn schoolwerk. Van zodra het een beetje moeilijker wordt, haakt ${aanwijzendVnw} af. Dat is jammer, want hij zal nog een heel aantal jaren op school doorbrengen.`,
  }
  
  const dictNetheid = {
    netjes: `${aanwijzendVnwCap} werkt steeds netjes en nauwkeurig.`,
    slordig: `In het vijfde leerjaar mag ${aanwijzendVnw} meer aandacht besteden aan netheid en orde. Dat zal ${bezittVnw} nieuwe juf zeker waarderen.`,
    leeg: ''
  }
  
  const dictVragen = {
    uitleggen: `Wanneer ${aanwijzendVnw} iets niet begrijpt, komt ${aanwijzendVnw} zelf uitleg vragen. Dat is een goede werkhouding. ${aanwijzendVnwCap} vindt het ook fijn om andere leerlingen te helpen als ze een vraag hebben. Het is heel fijn dat ik soms een extra ${leerkrachtGeslacht} in de klas heb.`,
    goed: `Wanneer ${aanwijzendVnw} iets niet begrijpt, komt ${aanwijzendVnw} zelf uitleg vragen. Dat is een goede werkhouding.`,
    tesnel: `${displayName} komt nogal snel hulp vragen wanneer ${aanwijzendVnw} iets niet begrijpt. Het is goed dat ${aanwijzendVnw} uitleg komt vragen als hij het echt niet kan, maar ${aanwijzendVnw} moet ook leren om eerst zelf een aantal manieren uit te proberen. ${aanwijzendVnwCap} mag er meer op vertrouwen dat ${aanwijzendVnw} zelf met een goede oplossing kan komen.`,
    sneller: `Wanneer ${aanwijzendVnw} iets niet begrijpt, stelt ${aanwijzendVnw} wel vragen, maar ${aanwijzendVnw} wacht er soms te lang mee. Van zodra ${aanwijzendVnw} een probleem ondervindt en het niet opgelost krijgt, mag ${aanwijzendVnw} hulp vragen.`,
    geen: `Het blijft belangrijk om hulp te vragen wanneer iets niet lukt. Daar hoeft ${displayName} geen schrik voor te hebben: iedereen komt naar school om bij te leren. Dat kan je niet alleen.`
  }
  
  const dictResultaten = {
    altijdgoed: `${aanwijzendVnwCap} legde dit schooljaar de ene knappe toets na de andere af en kon steeds met een schitterend rapport naar huis. Dat is ook nu niet anders.`,
    goed: `${displayName} behaalde zeer goede resultaten ${res1}. Hier mag ${aanwijzendVnw} erg trots op zijn. ${aanwijzendVnwCap} kan volgend schooljaar nog wat extra aandacht te schenken aan ${res2}.`,
    goedzorg: `${displayName} behaalde goede resultaten voor ${res1}. Daar mag ${aanwijzendVnw} erg trots op zijn. ${res2} waren altijd wat moeilijker voor ${lijdVnw}. ${aanwijzendVnwCap} zette zich daar wel steeds voor in samen met de zorgjuf of in een klein groepje bij ${bezittVnw} eigen juf. Hopelijk toont ${aanwijzendVnw} ook volgend schooljaar diezelfde inzet.`,
    dictees: `Er staan een aantal prima resultaten op je rapport. Spelling heb je niet altijd even goed gestudeerd, sommige dictees gingen vlot, andere helemaal niet. Onthoud dat je volgend jaar zeer regelmatig moet studeren voor spelling en Frans.`,
    welover: `${bezittVnwCap} resultaten voor ${res1} waren goed. Voor ${res2} kon ${aanwijzendVnw} nog wat beter. ${bezittVnwCap} resultaten voor ${res3} waren echt onvoldoende. Het is belangrijk om voldoende te studeren voor ${res4}. Ook aandachtig opletten in de klas kan helpen.`,
    zitten: `We hebben dit schooljaar hard gewerkt, maar niet alle basisleerstof is voldoende gekend. Volgend schooljaar zal ${displayName} het vierde leerjaar opnieuw doen. Dit geeft ${lijdVnw} de kans om de belangrijkste leerstof goed te beheersen. Ik hoop dat ${aanwijzendVnw} zich in september meteen vanaf de eerste dag volledig inzet om er een succesjaar van te maken.`,
    '1B': `We hebben dit schooljaar hard gewerkt, maar niet alle basisleerstof is voldoende gekend. Volgend schooljaar zal ${displayName} naar het vijfde leerjaar gaan, maar een aangepast traject volgen. Dit geeft ${lijdVnw} de kans om de belangrijkste leerstof goed te beheersen. Deze aangepaste leerstof bereidt ${lijdVnw} voor om het jaar nadien over te gaan naar een 1B in het middelbaar. Ik hoop dat ${aanwijzendVnw} zich in september meteen vanaf de eerste dag volledig inzet om er een succesjaar van te maken.`
  }
  
  const dictDrukker = {
    drukker: `Ik merk dat het schooljaar voor ${displayName} lang genoeg geduurd heeft. ${aanwijzendVnwCap} kreeg het de laatste tijd moeilijker om stil te zijn tussendoor en had vaker opmerkingen nodig dan ik van ${lijdVnw} gewend ben.`,
    leeg:'' 
  }
  
  const dictSlot = {
    leuk: `${displayName}, het was een plezier om jou in de klas te hebben. Nu is het tijd voor een welverdiende vakantie. Gebruik de komende twee maanden om veel buiten te spelen en ga regelmatig een boek halen in de bib. Want boeken lezen is niet enkel belangrijk om vlot te leren lezen en je woordenschat uit te breiden, het is ook enorm leuk! In september mag je starten in het vijfde leerjaar. Ik wens je veel succes.`,
    gewoon: `${displayName}, nu is het tijd voor een welverdiende vakantie. Gebruik de komende twee maanden om veel buiten te spelen en ga regelmatig een boek halen in de bib. Want boeken lezen is niet enkel belangrijk om vlot te leren lezen en je woordenschat uit te breiden, het is ook enorm leuk! In september mag je starten in het vijfde leerjaar. Ik wens je veel succes.`,
    avi: `${displayName}, nu is het tijd voor een welverdiende vakantie. Gebruik de komende twee maanden om veel buiten te spelen en ga regelmatig een boek halen in de bib. Want boeken lezen is niet enkel belangrijk om vlot te leren lezen en je woordenschat uit te breiden, het is ook enorm leuk! Je behaalde in juni leesniveau ${oud_avi} en mag nu oefenen op leesniveau ${nieuw_avi}. In september mag je starten in het vijfde leerjaar. Ik wens je veel succes.`
  }

  // Initial feedback, to be extended
  let feedback = 'Het vierde leerjaar zit er op. We hebben veel bijgeleerd en samen leuke herinneringen gemaakt. Ook in deze laatste periode zaten er heel wat hoogtepunten. Zo gingen we zelfstandig de straat op voor het voetgangersexamen en gingen we op uitstap naar toneel, de kinderboerderij en het Suske en Wiskemuseum. We genoten van een erg zonnige sportdag, verfrissende waterspelletjes en mogen erg trots zijn op onze zelf gebouwde machines.';
  
  // get feedback for persoonlijk
  let pers1 = returnSelection('pers1');
  if (pers1 == 'other1') {
    pers1 = document.querySelector('#pers1other').value;
  }
  let pers2 = returnSelection('pers2'); 
  if (pers2 == 'other2') {
    pers2 = document.querySelector('#pers2other').value;
  }
  let persoonlijk = `${displayName} heeft laten zien dat ${aanwijzendVnw} een ${pers1} ${geslacht} is ${pers2}.`;
  feedback += '\n' + persoonlijk;

  // get feedback for inzet
  let inzet = returnSelection('inzet');
  if (inzet == 'other') {
    inzet = document.querySelector('#inzet_other_text').value;
  } else {
    inzet = dictInzet[inzet];
  };
  feedback += '\n' + inzet;

  // get feedback for netheid, vragen, resultaten, drukker and slot

  feedback += '\n' + dictNetheid[returnSelection('netheid')] + '\n' + dictVragen[returnSelection('vragen')] + '\n' + dictResultaten[resultaten] + '\n' + dictDrukker[returnSelection('drukker')] + '\n' + dictSlot[returnSelection('slot')];

  // put feedback on page
  commentPara.value = feedback;
}

function returnSelection(btnSelector) {
    return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}

function setPronouns() {
  let gender = returnSelection('gender');
  if (gender == 'jongen') {
    aanwijzendVnw = 'hij';
    bezittVnw = 'zijn';
    lijdVnw = 'hem';
    geslacht = 'jongen';
    leerkrachtGeslacht = 'meester';
  } else {
    aanwijzendVnw = 'ze';
    bezittVnw = 'haar';
    lijdVnw = 'haar';
    geslacht = 'meid';
    leerkrachtGeslacht = 'juf';
  }
  aanwijzendVnwCap = aanwijzendVnw.charAt(0).toUpperCase() + aanwijzendVnw.slice(1);
  bezittVnwCap = bezittVnw.charAt(0).toUpperCase() + bezittVnw.slice(1);
}