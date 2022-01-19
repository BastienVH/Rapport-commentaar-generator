// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const selectBeschr1 = document.getElementById("beschrijving1");
const selectBeschr2 = document.getElementById("beschrijving2");
const eigenTekst = document.getElementById("eigenTxt");

// code for generate button
const generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click", generateBasisFeedback);

// Set correct gendered words
let aanwijzendVnw = "";
let aanwijzendVnwCap = "";
let bezittVnw = "";
let lijdVnw = "";

function generateBasisFeedback() {
  // Get selected values from the form
  let gender = returnSelection('gender');
  let displayName = document.getElementById("name");
  let beschrijving1 = selectBeschr1.value;
  let beschrijving2 = selectBeschr2.value;
  let eigenTekstje = eigenTekst.value;
  let samenwerken = returnSelection("samenwerken");

  if (gender === 'jongen') {
    aanwijzendVnw = "hij";
    aanwijzendVnwCap = "Hij";
    bezittVnw = "zijn";
    lijdVnw = "hem";
  } else {
    aanwijzendVnw = "ze";
    aanwijzendVnwCap = "Ze";
    bezittVnw = "haar";
    lijdVnw = "haar";
  }

  // Associative arrays with feedback
const dictSamenwerken = {
  moeilijk_alleen : `${displayName.value} is nog aan het leren om samen te werken in groep. De anderen hebben niet altijd dezelfde ideeën, en dat vindt ${aanwijzendVnw} moeilijk om mee om te gaan. In plaats van een discussie aan te gaan en samen naar een oplossing te zoeken, zal ${displayName.value} zich dan terugtrekken en alleen beginnen werken.`,
  moeilijk_ruzie : `Tijdens groepswerk wil ${aanwijzendVnw} graag dat alles op ${bezittVnw} manier gebeurt, dit botst soms met de ideeën van anderen. Door vaak in groep te werken leert ${aanwijzendVnw} stilaan om op te komen voor ${bezittVnw} eigen mening en toch ook rekening te houden met de anderen.`,
  moeilijk_spelen : `Bij een groepswerk wil ${displayName.value} graag de sfeermaker van de groep zijn. Zich amuseren is dan belangrijker dan het resultaat van het groepswerk. Nochtans kan ${aanwijzendVnw} dit wel wanneer ik ${lijdVnw} hierop wijs.`,
  gemiddeld : `In een groepje met zelfgekozen klasgenoten kan ${displayName.value} goed samenwerken.`,
  goed : `${aanwijzendVnwCap} kan goed in een groep samenwerken. ${aanwijzendVnwCap} zorgt ervoor dat er geen ruzie ontstaat en komt tegelijkertijd ook op voor ${bezittVnw} eigen mening. Knap!`
}
const dictIndividueel = {
  moeilijk : `Tijdens zelfstandig werk raakt (naam) makkelijk afgeleid. Dan begint (hij) te praten met de leerlingen die bij (hem) in de buurt zitten.  `,
  gemiddeld : `(naam) kan op sommige momenten heel flink zelfstandig werken. Op andere dagen lukt het minder goed. Dan wil (hij) liever babbelen met (zijn) buurtje.`,
  goed : `Bij zelfstandig werken doet (naam) goed  (zijn) best. (Hij) werkt rustig en flink aan  (zijn) oefeningen.`
}

// const dictUitleg = {
//   moeilijk : ``,
//   gemiddeld : ``,
//   goed : ``
// }
  // Combine selected values to create a temporary string to output
  result = displayName.value + " is een " + beschrijving1 + " en " + beschrijving2 + " " + gender + ".\n";
  // Check if something has been entered for eigenTekstje
  if (eigenTekstje) {
    result += eigenTekstje +"\n";
  }
  result += dictSamenwerken[samenwerken] + "\n";

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}