// Initialize document elements
const commentPara = document.getElementById("commentaartekst");

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
  let kommagetallen = returnSelection("kommagetallen");
  // let kloklezen = returnSelection("klok");
  // let dictee = returnSelection("dictee");
  // let leerhouding = returnSelection("leerhouding");
  // let groepswerk = returnSelection("groepswerk");

  // Associative arrays with feedback
  const dictKomma = {
    goed_ook_maten : "Zo rekenden we voor de eerste keer met kommagetallen. Bewerkingen met tienden, honderdsten en duizendsten gaan voorlopig heel vlot voor (naam). Zelfs het herleiden van kommagetallen bij lengte- en inhoudsmaten lukt zonder veel moeite. Knap!\n",
    goed_maten_minder : "Zo rekenden we voor de eerste keer met kommagetallen. Bewerkingen met tienden, honderdsten en duizendsten gaan voorlopig heel vlot voor (naam). Kommagetallen omzetten met een herleidingstabel is soms nog wel een uitdaging. Zet steeds de eenheden als eerste op de juiste plaats, dan volgt de rest wel. Als (naam) goed mee oefent tijdens de lessen, kan (hij) tegen het einde van het schooljaar een echte kommagetallenkampioen worden.\n",
    matig : "Zo rekenden we voor de eerste keer met kommagetallen. Dat is nog niet zo eenvoudig. (naam) doet goed zijn best. Soms gaat het al heel goed, soms is het nog wat zoeken. (Hij) moet goed kijken welke plaats na de komma welke waarde heeft. Bij het optrekken en aftrekken is het handig om steeds evenveel cijfers na de komma te gebruiken. Als (naam) goed mee oefent tijdens de lessen, kan (hij) tegen het einde van het schooljaar een echte kommagetallenkampioen worden.\n",
    moeilijk : "Zo rekenden we voor de eerste keer met kommagetallen. Dat is nog niet zo eenvoudig. (naam) moet goed kijken welke plaats na de komma welke waarde heeft. Bij het optrekken en aftrekken is het handig om steeds evenveel cijfers na de komma te gebruiken. We gaan hier de komende weken nog veel op oefenen.\n" 
  }

  // Combine selected values to create a temporary string to output
  let result = "De derde periode van dit schooljaar zit er weeral op. Ook dit keer hebben we heel wat nieuwe dingen geleerd.\n";
  let slot = "We repeteerden de afgelopen weken ook hard voor onze musical. (naam) mag erg fier zijn op het resultaat. In maart genoten we van een leuke, leerrijke en zelfs lekkere uitstap naar het chocolademuseum in Antwerpen. Ik kijk al uit naar onze volgende uitstappen.\n(naam), verzamel al je energie tijdens de paasvakantie om er dan de laatste periode met extra veel zin en inzet voor te gaan.\n"

  result += dictKomma[kommagetallen] + slot;

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
    return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}