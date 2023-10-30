// Initialize document elements
const commentPara = document.getElementById("commentaartekst");
const selectBeschr1 = document.getElementById("beschrijving1");
const selectBeschr2 = document.getElementById("beschrijving2");
const eigenTekst = document.getElementById("eigenTxt");

// code for generate button
const generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click", generateBasisFeedback);

// Set correct gendered words
var aanwijzendVnw = "";
var aanwijzendVnwCap = "";
var bezittVnw = "";
var bezittVnwCap = "";
var lijdVnw = "";

function generateBasisFeedback() {
  // Get selected values from the form
  let gender = returnSelection('gender');
  
  if (gender === 'jongen') {
    aanwijzendVnw = "hij";
    aanwijzendVnwCap = "Hij";
    bezittVnw = "zijn";
    bezittVnwCap = "Zijn";
    lijdVnw = "hem";
  } else {
    aanwijzendVnw = "ze";
    aanwijzendVnwCap = "Ze";
    bezittVnw = "haar";
    bezittVnwCap = "Haar";
    lijdVnw = "haar";
  }

  displayName = document.getElementById("name");
  let beschrijving1 = selectBeschr1.value;
  let beschrijving2 = selectBeschr2.value;
  let eigenTekstje = eigenTekst.value;
  let individueel = returnSelection("individueel")
  let uitleg = returnSelection("uitleg");
  let klassikaal = returnSelection("klassikaal");
  let klGroepje = returnSelection("klgroepje");
  let helpen = returnSelection("helpen");
  let schrijven = returnSelection("schrijven");
  let bank = returnSelection("bank");
  let punten = returnSelection("punten");
  let werkpuntenLijst = getWerkpunten();
  let werkpunten = getWerkpuntenFullText(werkpuntenLijst);
  let avi = returnSelection("avi");
  let tafels = returnSelection("tafels");
  let slot = returnSelection("slot");

  //read value for selectors
  let selectPuntenIntro1 = "";
  let selectPuntenIntro2 = "";

  if (punten === "goed" || punten === "schitterend") {
    selectPuntenIntro1 = document.getElementById(`punten_${punten}_selector1`).value;
    selectPuntenIntro2 = document.getElementById(`punten_${punten}_selector2`).value;
  }


  // Associative arrays with feedback
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
  slecht : `SLECHT\n`,
  matig : `De resultaten op het rapport van ${displayName.value} kunnen beter.\n`,
  goed : `Er staan weer een aantal mooie resultaten op het rapport van ${displayName.value}, zoals voor ${selectPuntenIntro1} en ${selectPuntenIntro2}. Hier mag ${aanwijzendVnw} erg trots op zijn.\n`,
  schitterend : `Het rapport van ${displayName.value} staat weer vol schitterende resultaten, zoals voor ${selectPuntenIntro1} en ${selectPuntenIntro2}. Hier mag ${aanwijzendVnw} erg trots op zijn.\n`
}

const dictAvi = {
  gelijk : `Het leesniveau van ${displayName.value} is niet gestegen ten opzichte van september. Dat is jammer.  Het is belangrijk dat ${displayName.value} elke dag (luidop) leest. De teksten die de leerlingen moeten verwerken voor de lessen taal en wereldoriëntatie worden steeds langer en moeilijker, vlot kunnen lezen is daarom enorm belangrijk.\n`,
  gestegen_zwak : `Het leesniveau van ${displayName.value} is gestegen naar AVI 5 / 6 / 7 , dus ${displayName.value} kan beginnen oefenen op AVI 6 / 7 / 8. De teksten die de leerlingen moeten verwerken voor de lessen taal en wereldoriëntatie worden steeds langer en moeilijker, vlot kunnen lezen is daarom enorm belangrijk.\n`,
  gestegen_goed : `Het leesniveau van ${displayName.value} is gestegen, goed zo! ${displayName.value} kan beginnen oefenen op AVI 9.\n`,
  leesdiploma : `${displayName.value} behaalde in januari ${bezittVnw} leesdiploma. Proficiat!`,
  nvt : ``
}

const dictTafels = {
  goed : `De maaltafels zijn goed gekend. Vanaf nu kan ${displayName.value} studeren op de oefeningen van het studeerblad, zodat ook deze vlot kunnen gebruikt worden tijdens de lessen wiskunde.\n`,
  maaltafels_niet_gekend : `De maaltafels zijn onvoldoende gekend. Het is belangrijk om deze regelmatig te herhalen. Vanaf nu kan ${displayName.value} studeren op de oefeningen van het studeerblad, zodat deze vlot kunnen gebruikt worden tijdens de lessen wiskunde.\n`
}

const dictSlot = {
  goed : `De komende periode gaan we weer veel nieuwe dingen leren en ontdekken. Ik kijk er naar uit om ${displayName.value} verder te zien groeien.`,
  kan_beter : `${displayName.value}, laat de komende periode zien wat je kan!`
}

  // Combine selected values to create a temporary string to output
  result = displayName.value + " is een " + beschrijving1 + " en " + beschrijving2 + " " + gender + ".\n";
  // Check if something has been entered for eigenTekstje
  if (eigenTekstje) {
    result += eigenTekstje +"\n";
  }

  result += dictIndividueel[individueel] + dictUitleg[uitleg] + dictKlassikaal[klassikaal] + dictKlGroepje[klGroepje] + dictHelpen[helpen] + dictSchrijven[schrijven] + dictBank[bank] + dictPunten[punten] + werkpunten + dictAvi[avi] + dictTafels[tafels] + dictSlot[slot];

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
    return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}

function getWerkpunten() {
  let werkpuntenLijst = document.querySelectorAll("input[name='werkpunten']:checked");
  return werkpuntenLijst;
}

function getWerkpuntenFullText(nodelist) {
  // Define dictionary with feedback
  let selectWerkpuntenBeetje1 = document.getElementById(`werkpunten_beetje_selector1`).value;
  let selectWerkpuntenBeetje2 = document.getElementById(`werkpunten_beetje_selector2`).value;
  let selectWerkpuntWiskunde = document.getElementById("werkpunten_wiskunde_selector").value;
  const dictWerkpunten = {
    inzet : `Ik denk dat ${displayName.value} thuis nog iets meer moet werken voor school.`,
    beetje : `De komende periode kan ${aanwijzendVnw} nog wat extra aandacht schenken aan ${selectWerkpuntenBeetje1} en ${selectWerkpuntenBeetje2}.`,
    wiskunde : `${selectWerkpuntWiskunde} blijft een werkpunt. Het is belangrijk om voldoende uitleg te komen vragen in de klas.`,
    spelling : `De dictees van ${displayName.value} zijn onvoldoende. Het is belangrijk om elke dag de woorden van het woordpakket te schrijven en fouten te verbeteren. Op de website van de school vind je ingesproken dictees van elk woordpakket die kunnen helpen bij het oefenen.`,
    wo_godsdienst : `${bezittVnwCap} resultaten voor w.o. en godsdienst zijn deze periode nogal zwak. Dit zijn onderdelen waar ${aanwijzendVnw} thuis voor moet studeren. ${aanwijzendVnwCap} moet dan elke dag leren en hoofdgedachten noteren.`
  }

  let fullText = "";
  let length = nodelist.length;
  console.log(length);
  for (let i = 0; i < length; i++ ) {
    console.log(nodelist[i].value);
    fullText += dictWerkpunten[nodelist[i].value] + " ";
  }
  fullText += "\n";
  console.log(fullText);
  return fullText;
}