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
  let individueel = returnSelection("individueel")
  let uitleg = returnSelection("uitleg");
  let klassikaal = returnSelection("klassikaal");
  let klGroepje = returnSelection("klgroepje");
  let helpen = returnSelection("helpen");
  let schrijven = returnSelection("schrijven");
  let bank = returnSelection("bank");
  let punten = returnSelection("punten");

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
  moeilijk_alleen : `${displayName.value} is nog aan het leren om samen te werken in groep. De anderen hebben niet altijd dezelfde ideeën, en dat vindt ${aanwijzendVnw} moeilijk om mee om te gaan. In plaats van een discussie aan te gaan en samen naar een oplossing te zoeken, zal ${displayName.value} zich dan terugtrekken en alleen beginnen werken.\n`,
  moeilijk_ruzie : `Tijdens groepswerk wil ${aanwijzendVnw} graag dat alles op ${bezittVnw} manier gebeurt, dit botst soms met de ideeën van anderen. Door vaak in groep te werken leert ${aanwijzendVnw} stilaan om op te komen voor ${bezittVnw} eigen mening en toch ook rekening te houden met de anderen.\n`,
  moeilijk_spelen : `Bij een groepswerk wil ${displayName.value} graag de sfeermaker van de groep zijn. Zich amuseren is dan belangrijker dan het resultaat van het groepswerk. Nochtans kan ${aanwijzendVnw} dit wel wanneer ik ${lijdVnw} hierop wijs.\n`,
  gemiddeld : `In een groepje met zelfgekozen klasgenoten kan ${displayName.value} goed samenwerken.\n`,
  goed : `${aanwijzendVnwCap} kan goed in een groep samenwerken. ${aanwijzendVnwCap} zorgt ervoor dat er geen ruzie ontstaat en komt tegelijkertijd ook op voor ${bezittVnw} eigen mening. Knap!\n`
}

const dictIndividueel = {
  moeilijk : `Tijdens zelfstandig werk raakt ${displayName.value} makkelijk afgeleid. Dan begint ${aanwijzendVnw} te praten met de leerlingen die bij ${lijdVnw} in de buurt zitten.\n`,
  gemiddeld : `${displayName.value} kan op sommige momenten heel flink zelfstandig werken. Op andere dagen lukt het minder goed. Dan wil ${aanwijzendVnw} liever babbelen met ${bezittVnw} buurtje.\n`,
  goed : `Bij zelfstandig werken doet ${displayName.value} goed ${bezittVnw} best. ${aanwijzendVnwCap} werkt rustig en flink aan ${bezittVnw} oefeningen.\n`
}

const dictUitleg = {
  moeilijk : `${aanwijzendVnwCap} komt zelden uit zichzelf extra uitleg vragen wanneer iets moeilijk gaat. Nochtans help ik ${lijdVnw} met plezier.\n`,
  gemiddeld : `${aanwijzendVnwCap} vraagt soms extra uitleg wanneer ${aanwijzendVnw} iets niet begrijpt. Dat mag ${aanwijzendVnw} nog vaker doen.\n`,
  goed : `${aanwijzendVnwCap} komt uitleg vragen wanneer ${aanwijzendVnw} iets niet begrijpt. Dat is een goede leerhouding!\n`
}

const dictKlassikaal = {
  gemiddeld_spelen : `${aanwijzendVnwCap} wil graag opletten in de klas, maar wil ook graag plezier maken met ${bezittVnw} klasgenoten. ${aanwijzendVnwCap} moet goed onthouden dat je speelt op de speelplaats en werkt in de klas. Er zijn meer en meer momenten waarop ${displayName.value} goed meewerkt. Toch moet ik ${lijdVnw} regelmatig weer bij de les houden.\n`,
  gemiddeld_dromen : `Tijdens klassikaal werk doet ${displayName.value} ${bezittVnw} best, maar ${bezittVnw} gedachten durven wel eens af te dwalen. ${aanwijzendVnwCap} heeft alle uitleg nochtans echt nodig.\n`,
  goed : `Tijdens klassikaal werk denkt ${aanwijzendVnw} goed mee na en steekt ${aanwijzendVnw} enthousiast ${bezittVnw} vinger op.\n`
}
const dictKlGroepje = {
  goed : `${displayName.value} krijgt regelmatig extra uitleg in een klein groepje. Dan doet ${aanwijzendVnw} goed mee.\n`,
  niet_goed : `${displayName.value} krijgt regelmatig extra uitleg in een klein groepje. Dat doen we om ${lijdVnw} zo veel mogelijk te helpen. Jammer genoeg doet ${displayName.value} niet elke keer goed mee. ${aanwijzendVnwCap} heeft nochtans echt nood aan die extra begeleiding.\n`,
  nvt : ""
}

const dictHelpen = {
  juf : `Als er tijd is om de juf te helpen, doet ${displayName.value} dat met plezier. ${aanwijzendVnw} is erg behulpzaam.\n`,
  klasgenoten : `${displayName.value} helpt graag klasgenoten als daar tijd voor is. ${aanwijzendVnw} is een goede helper.\n`,
  nvt : ``
}

const dictSchrijven = {
  slordig : `${displayName.value} werkt erg slordig. Door mooier te schrijven en netter om te gaan met materiaal, is het nochtans aangenamer om te studeren.\n`,
  moeilijk : `Mooi schrijven blijft een werkpunt. ${aanwijzendVnwCap} moet hier extra op te letten wanneer ${aanwijzendVnw} zinnen schrijft die ${aanwijzendVnw} nadien nog eens moet lezen, bijvoorbeeld in ${bezittVnw} agenda of omdat ${aanwijzendVnw} moet dit studeren. Ook op toetsen is het belangrijk om mooi te schrijven, zodat de leerkracht alles goed kan lezen.\n`,
  wisselend : `De laatste tijd schrijft ${displayName.value} regelmatig wat slordiger. ${aanwijzendVnwCap} kan nochtans heel mooi schrijven als ${aanwijzendVnw} er aandacht aan schenkt.\n`,
  mooi : `${displayName.value} kan zeer netjes schrijven.\n`,
  nvt : ``,
}

const dictBank = {
  slordig : `Door de rommel in ${bezittVnw} bank, is het soms moeilijk om snel het juiste werkschrift terug te vinden. Alles een vaste plaats geven en alles meteen op diezelfde plaats terugleggen, kan helpen.\n`,
  nvt : ``
}

const dictPunten = {
  slecht : `SLECHT`,
  matig : `De resultaten op het rapport van ${displayName.value} kunnen beter.\n`,
  goed : `Er staan weer een aantal mooie resultaten op het rapport van ${displayName.value}, zoals voor lezen / luisteren / taalsystematiek / getallenkennis en bewerkingen / meten en metend rekenen / wereldoriëntatie / godsdienst en idem . Hier mag ${aanwijzendVnw} erg trots op zijn.\n`,
  schitterend : `Het rapport van ${displayName.value} staat weer vol schitterende resultaten, zoals voor lezen / luisteren / taalsystematiek / getallenkennis en bewerkingen / meten en metend rekenen / wereldoriëntatie / godsdienst en idem . Hier mag ${aanwijzendVnw} erg trots op zijn.\n`
}

  // Combine selected values to create a temporary string to output
  result = displayName.value + " is een " + beschrijving1 + " en " + beschrijving2 + " " + gender + ".\n";
  // Check if something has been entered for eigenTekstje
  if (eigenTekstje) {
    result += eigenTekstje +"\n";
  }
  result += dictSamenwerken[samenwerken] + dictIndividueel[individueel] + dictUitleg[uitleg] + dictKlassikaal[klassikaal] + dictKlGroepje[klGroepje] + dictHelpen[helpen] + dictSchrijven[schrijven] + dictBank[bank] + dictPunten[punten];

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}