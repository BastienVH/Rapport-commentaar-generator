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
  } else {
    aanwijzendVnw = "ze";
    aanwijzendVnwCap = "Ze";
  }

  displayName = document.getElementById("name");
  let kommagetallen = returnSelection("kommagetallen");
  let kloklezen = returnSelection("klok");
  let dictee = returnSelection("dictee");
  let leerhouding = returnSelection("leerhouding");
  let groepswerk = returnSelection("groepswerk");

  // Associative arrays with feedback
  const dictKomma = {
    goed_ook_maten : `Zo rekenden we voor de eerste keer met kommagetallen. Bewerkingen met tienden, honderdsten en duizendsten gaan voorlopig heel vlot voor ${displayName.value}. Zelfs het herleiden van kommagetallen bij lengte- en inhoudsmaten lukt zonder veel moeite. Knap!\n`,
    goed_maten_minder : `Zo rekenden we voor de eerste keer met kommagetallen. Bewerkingen met tienden, honderdsten en duizendsten gaan voorlopig heel vlot voor ${displayName.value}. Kommagetallen omzetten met een herleidingstabel is soms nog wel een uitdaging. Zet steeds de eenheden als eerste op de juiste plaats, dan volgt de rest wel. Als ${displayName.value} goed mee oefent tijdens de lessen, kan ${aanwijzendVnw} tegen het einde van het schooljaar een echte kommagetallenkampioen worden.\n`,
    matig : `Zo rekenden we voor de eerste keer met kommagetallen. Dat is nog niet zo eenvoudig. ${displayName.value} doet goed zijn best. Soms gaat het al heel goed, soms is het nog wat zoeken. ${aanwijzendVnwCap} moet goed kijken welke plaats na de komma welke waarde heeft. Bij het optrekken en aftrekken is het handig om steeds evenveel cijfers na de komma te gebruiken. Als ${displayName.value} goed mee oefent tijdens de lessen, kan ${aanwijzendVnw} tegen het einde van het schooljaar een echte kommagetallenkampioen worden.\n`,
    moeilijk : `Zo rekenden we voor de eerste keer met kommagetallen. Dat is nog niet zo eenvoudig. ${displayName.value} moet goed kijken welke plaats na de komma welke waarde heeft. Bij het optrekken en aftrekken is het handig om steeds evenveel cijfers na de komma te gebruiken. We gaan hier de komende weken nog veel op oefenen.\n`
  }

  const dictKlok = {
    alles_goed : `Kloklezen gaat prima. Ook vraagstukjes rond tijd kan ${displayName.value} correct oplossen.\n`,
    goed_behalve_vraagstuk : `Kloklezen gaat prima. Vraagstukjes rond tijd vindt ${displayName.value} moeilijker.\n`,
    moeilijk: `Kloklezen blijft erg moeilijk voor ${displayName.value}. Probeer hier thuis regelmatig even op te oefenen.\n`
  }

  const dictDictee = {
    goed: `Voor spelling behaalt ${displayName.value} weer mooie resultaten.\n`,
    wp_goed_ww_niet: `Op de gewone woordpakketdictees behaalt ${displayName.value} goede resultaat. De werkwoorddictees zijn minder goed. Het is belangrijk dat ${aanwijzendVnw} de tijd neemt om het werkwoordschema stap voor stap te volgen, dan lukt het vast wel.\n`,
    beter : `Voor spelling behaalt ${displayName.value} al betere resultaten dan op het vorige rapport. Hopelijk zet deze stijgende lijn zich verder tijdens de laatste periode.\n`,
    wisselend: `De resultaten van de dictees van ${displayName.value} zijn erg wisselend. ${aanwijzendVnwCap} moet elke week evenveel inzet tonen en steeds denken aan de spellingsregels.\n`,
    slecht: `De resultaten van de dictees moeten echt verbeteren. Voor de woorden uit het woordpakket heeft ${aanwijzendVnw} vier dagen de tijd om deze te studeren. Dan zouden er niet meer zo veel fouten mogen instaan.\n`
  }

  const dictLeerhouding = {
    goed: `Ik vind het fijn dat ${displayName.value} zich vaak zo goed inzet voor school.\n`,
    woordenschat : `Ik merk dat ${displayName.value} stilaan minder inzet toont voor het schoolwerk. Zo heeft ${aanwijzendVnw} bijvoorbeeld onvoldoende gestudeerd voor de woordenschat taal. Nochtans kan ${aanwijzendVnw} dit wel. Hoog tijd om weer even wat extra tijd te steken in het studeren thuis.\n`,
    niet_goed : `Het vijfde leerjaar komt stilaan in zicht. Dan komt er veel nieuwe leerstof aan bod en moeten de leerlingen zelfstandig grotere leerstofgehelen instuderen. Op dit moment is dat nog een erg grote uitdaging voor ${displayName.value}. Het is belangrijk dat ${aanwijzendVnw} daar nu al op oefent en thuis wat extra aandacht besteed aan studeren voor bijvoorbeeld wereldoriëntatie en woordenschat van taal.\n`
  }

  const dictGroepswerk = {
    goed: `Iedereen van de klas stelde in een klein groepje een provincie voor. ${displayName.value} zorgde voor een leerrijke tekst en veel extra materiaal. Dat maakte het aangenaam en boeiend om naar te luisteren.\n`,
    blanco : ""
  }

  // Combine selected values to create a temporary string to output
  let result = "De derde periode van dit schooljaar zit er weeral op. Ook dit keer hebben we heel wat nieuwe dingen geleerd.\n";
  let slot = `We repeteerden de afgelopen weken ook hard voor onze musical. ${displayName.value} mag erg fier zijn op het resultaat. In maart genoten we van een leuke, leerrijke en zelfs lekkere uitstap naar het chocolademuseum in Antwerpen. Ik kijk al uit naar onze volgende uitstappen.\n${displayName.value}, verzamel al je energie tijdens de paasvakantie om er dan de laatste periode met extra veel zin en inzet voor te gaan.\n`;

  result += dictKomma[kommagetallen] + dictKlok[kloklezen] + dictDictee[dictee] + dictLeerhouding[leerhouding] + dictGroepswerk[groepswerk] + slot;

  // Output result to webpage
  commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
    return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}