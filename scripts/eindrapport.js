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