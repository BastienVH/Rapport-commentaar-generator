// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const displayName = document.getElementById("name");

// code for generate button
const generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click", generateFeedback);

// Set correct gendered words
let aanwijzendVnw = "";
let aanwijzendVnwCap = "";
let bezittVnw = "";
let bezittVnwCap = "";
let lijdVnw = "";


function generateFeedback() {
  // set the gender of student
  setPronouns();
  let feedback = 'Het vierde leerjaar zit er op. We hebben veel bijgeleerd en samen leuke herinneringen gemaakt. Bij de hoogtepunten van deze laatste periode horen zeker de uitstap naar de Zoo, onze zelfgemaakte machines en de sportdag.\n';
  // get feedback for persoonlijk
  // get feedback for inzet
  feedback += getFeedback(dictInzet, returnSelection('inzet'));
  // get feedback for netheid
  // get feedback for vragen
  // get feedback for resulaten
  // get feedback for eind drukker
  // get feedback for slot

  // put feedback on page
  commentPara.innerText = feedback;
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
  } else {
    aanwijzendVnw = 'zij';
    bezittVnw = 'haar';
    lijdVnw = 'haar';
  }
  aanwijzendVnwCap = aanwijzendVnw.charAt(0).toUpperCase() + aanwijzendVnw.slice(1);
  bezittVnwCap = bezittVnw.charAt(0).toUpperCase() + bezittVnw.slice(1);
}

function getFeedback(section, value){
  return section[value];
};

dictInzet = {
  heelgoed: `(naam) wilt graag een mooi resultaat behalen en zet zich daar enorm voor in.`,
  meestalgoed: `(naam) wilt altijd een mooi resultaat. Daar zet (hij) zich meestal goed voor in. Af en toe laat (hij) ook (zijn) hoofd hangen of denkt (hij) dat het vanzelf wel zal lukken. (Hij) moet proberen om er ook op die momenten voor te blijven gaan. `,
  goedzwak: `(naam) wilt graag een mooi resultaat. Daar zet (hij) zich ook enorm voor in, want niet alles gaat even gemakkelijk.`,
  goedbabbelen: `(naam) toonde toen dat (hij) hard kan werken wanneer (hij) dat wilt, al durfde (hij) ook wel eens babbelen met een buurtje.`,
  wisselend: `De ene keer werkt (naam) knap mee en is (hij) met alles in orde, de andere keer laat (hij) (zijn) hoofd hangen en werkt (hij) niet mee. Een goede voorbereiding gebeurt in de klas maar ook in de studie en thuis.`,
  speels: `(naam) toonde vooral veel speelsheid. (Hij) wilde in de klas veel plezier maken met (zijn) vrienden. Nauwkeurig werken en thuis studeren vond (hij) minder belangrijk. In een klein groepje bij de juf deed (hij) wel (zijn) best.`,
  droomt: `(naam) droomt vaak weg in de klas. Dan weet (hij) het antwoord niet of weet (hij) niet waar we bezig zijn. (Hij) moet in het vijfde leerjaar proberen meteen (zijn) focus bij de les te houden.`,
  nietgoed: `(naam) mist wat motivatie om zich in te zetten voor zijn schoolwerk. Van zodra het een beetje moeilijker wordt, haakt (hij) af. Dat is jammer, want hij zal nog een heel aantal jaren op school doorbrengen.`,
}

dictNetheid = {
  netjes: `(Hij) werkt steeds netjes en nauwkeurig.\n`,
  slordig: `In het vijfde leerjaar mag (hij) meer aandacht besteden aan netheid en orde. Dat zal (zijn) nieuwe juf of meester zeker waarderen.\n`,
  leeg: ''
}

dictVragen = {
  uitleggen: `Wanneer (hij) iets niet begrijpt, komt (hij) zelf uitleg vragen. Dat is een goede werkhouding. (Hij) vindt het ook fijn om andere leerlingen te helpen als ze een vraag hebben. Het is heel fijn dat ik soms een extra (meester) in de klas heb.\n`,
  goed: `Wanneer (hij) iets niet begrijpt, komt (hij) zelf uitleg vragen. Dat is een goede werkhouding.\n`,
  tesnel: `(naam) komt nogal snel hulp vragen wanneer (hij) iets niet begrijpt. Het is goed dat (hij) uitleg komt vragen als hij het echt niet kan, maar (hij) moet ook leren om eerst zelf een aantal manieren uit te proberen. (Hij) mag er meer op vertrouwen dat (hij) zelf met een goede oplossing kan komen.\n`,
  sneller: `Wanneer (hij) iets niet begrijpt, stelt (hij) wel vragen, maar (hij) wacht er soms te lang mee. Van zodra (hij) een probleem ondervindt en het niet opgelost krijgt, mag (hij) hulp vragen. \n`,
  geen: `Het blijft belangrijk om hulp te vragen wanneer iets niet lukt. Daar hoeft (naam) geen schrik voor te hebben: iedereen komt naar school om bij te leren. Dat kan je niet alleen.\n`
}

dictResultaten = {
  altijdgoed: `(Hij) legde dit schooljaar de ene knappe toets na de andere af en kon steeds met een schitterend rapport naar huis. Dat is ook nu niet anders.\n`,
  goed: `(naam) behaalde zeer goede resultaten (ZELF IN TE VULLEN). Hier mag (hij) erg trots op zijn. (Hij) kan volgend schooljaar nog wat extra aandacht te schenken aan (ZELF IN TE VULLEN).\n`,
  goedzorg: `(Naam) behaalde goede resultaten voor (ZELF IN TE VULLEN). Daar mag (hij) erg trots op zijn. (ZELF IN TE VULLEN) waren altijd wat moeilijker voor (hem). (Hij) zette zich daar wel steeds voor in samen met de zorgjuf of in een klein groepje bij (zijn) eigen juf. Hopelijk toont (hij) ook volgend schooljaar diezelfde inzet.\n`,
  dictees: `Er staan een aantal prima resultaten op je rapport. Spelling heb je niet altijd even goed gestudeerd, sommige dictees gingen vlot, andere helemaal niet. Onthoud dat je volgend jaar zeer regelmatig moet studeren voor spelling en Frans.\n`,
  ng_welover: `(Zijn) resultaten voor (ZELF IN TE VULLEN) waren goed. Voor (ZELF IN TE VULLEN) kon (hij) nog wat beter. (Zijn) resultaten voor (ZELF IN TE VULLEN) waren echt onvoldoende. Het is belangrijk om voldoende te studeren voor (ZELF IN TE VULLEN). Ook aandachtig opletten in de klas kan helpen.`,
  ng_zitten: `We hebben dit schooljaar hard gewerkt, maar niet alle basisleerstof is voldoende gekend. Volgend schooljaar zal (naam) het vierde leerjaar opnieuw doen. Dit geeft (hem) de kans om de belangrijkste leerstof goed te beheersen. Ik hoop dat (hij) zich in september meteen vanaf de eerste dag volledig inzet om er een succesjaar van te maken.\n`,
  '1B': `We hebben dit schooljaar hard gewerkt, maar niet alle basisleerstof is voldoende gekend. Volgend schooljaar zal (naam) naar het vijfde leerjaar gaan, maar een aangepast traject volgen. Dit geeft (hem) de kans om de belangrijkste leerstof goed te beheersen.  Deze aangepaste leerstof bereidt (hem) voor om het jaar nadien over te gaan naar een 1B in het middelbaar. Ik hoop dat (hij) zich in september meteen vanaf de eerste dag volledig inzet om er een succesjaar van te maken.\n`
}