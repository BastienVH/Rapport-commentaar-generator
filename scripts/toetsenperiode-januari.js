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
  let res1, res2, res3, res4;

  // store own input in above variables 
  const resultaten = returnSelection('resultaten');
  if (resultaten == 'goed_werkpuntje') {
    res1 = document.getElementById('goed1').value;
  } else if (resultaten == 'goed_veel_werk') {
    res1 = document.querySelector('#goed_veel_werk1').value;
    res2 = document.querySelector('#goed_veel_werk2').value;
  } else if (resultaten == 'kan_beter') {
    res1 = document.querySelector('#kan_beter1').value;
    res2 = document.querySelector('#kan_beter2').value;
  }

  // Get value for text input samenwerken
  let samenwerken_text;
  let samenwerken = returnSelection('samenwerken');
  if (samenwerken == 'kan_beter') {
    samenwerken_text = document.querySelector('#samenwerken_text').value;
  }

  let tekst_vorig_rapport = document.querySelector('#tekst_vorig_rapport').value;
  let terugblik_extra_text;
  let terugblik = returnSelection('terugblik');
  if (terugblik == 'verbetering') {
    terugblik_extra_text = document.querySelector('#terugblik_extra_text').value;
  }
  
  // dictionaries with feedback 
  const dictVragen = {
    nooit: `Tijdens de toetsenperiode was er steeds tijd om vragen te stellen over de leerstof. ${displayName} deed dit eigenlijk nooit. Begreep ${aanwijzendVnw} altijd alles meteen, had ${aanwijzendVnw} geen zin om extra uitleg te krijgen of durfde ${aanwijzendVnw} geen vragen te stellen? Ik ben er altijd om ${lijdVnw} te helpen, dus ik hoop dat ${aanwijzendVnw} in de toekomst wel vragen komt stellen als dat nodig is.`,
    soms: `Tijdens de toetsenperiode was er steeds tijd om vragen te stellen over de leerstof. ${displayName} deed dit af en toe. Ik ben er altijd om ${lijdVnw} te helpen, dus ${aanwijzendVnw} mag dit zeker vaker doen, als dat nodig is.`,
    goed: `Tijdens de toetsenperiode was er steeds tijd om vragen te stellen over de leerstof. ${displayName} deed dit regelmatig en leerde op die manier veel bij. Knap!`,
    te_veel: `Tijdens de toetsenperiode was er steeds tijd om vragen te stellen over de leerstof. ${displayName} deed dit regelmatig. Dat is op zich een goede leerhouding. Het is wel belangrijk dat ${displayName} enkel vragen komt stellen als ${aanwijzendVnw} iets niet begrijpt. Nu kwam ${aanwijzendVnw} ook vaak vragen stellen waarop ${aanwijzendVnw} eigenlijk het antwoord wel wist. Is ${aanwijzendVnw} onzeker of heeft ${aanwijzendVnw} nood aan extra bevestiging? ${displayName} mag echt wel vertrouwen in zichzelf, ${aanwijzendVnw} kan veel meer dan ${aanwijzendVnw} denkt.`
  }
  
  const dictResultaten = {
    heel_goed: `Er staan veel mooie resultaten op het rapport van ${displayName}. Ik ben trots op wat ${displayName} tot nu toe al allemaal heeft geleerd.`,
    goed_werkpuntje: `Er staan veel mooie resultaten op het rapport van ${displayName}. ${aanwijzendVnwCap} heeft al veel geleerd dit schooljaar en daar mag ${aanwijzendVnw} best trots op zijn. De komende periode moet ${aanwijzendVnw} wat extra aandacht schenken aan ${res1}`,
    goed_veel_werk: `Er staan veel mooie resultaten op het rapport van ${displayName}. ${aanwijzendVnwCap} heeft al veel geleerd dit schooljaar. Het is niet altijd makkelijk voor ${displayName}, maar ${aanwijzendVnw} zet zich enorm in. Hij mag dan ook terecht fier zijn op zijn resultaten voor bijvoorbeeld ${res1}. Ik hoop dat ${aanwijzendVnw} diezelfde inzet het hele jaar door kan volhouden. Samen oefenen we de komende periode nog extra op ${res2}.`,
    kan_beter: `Er staan al enkele mooie resultaten op het rapport van ${displayName}. Zo mag ${aanwijzendVnw} erg trots zijn op bijvoorbeeld zijn punten voor ${res1}. Er is bij een aantal onderdelen ook nog ruimte om te groeien. Ik verwacht dat ${displayName} in de klas goed oplet, vragen stelt wanneer ${aanwijzendVnw} het niet begrijpt en thuis extra oefent. Als ${aanwijzendVnw} zowel op school als thuis extra aandacht schenkt aan ${res2} dan zien we op het volgende rapport hopelijk een verbetering.`
  }
  
  const dictHerhalingsbundels = {
    niet_gemaakt: `De herhalingsbundels die ${displayName} thuis moest maken ter voorbereiding, waren niet altijd in orde. Dit zijn natuurlijk gemiste oefenkansen.`,
    slecht_verbeterd: `${displayName} werkte thuis goed in de herhalingsbundels om voor te bereiden voor de toetsen. In de klas kreeg ${aanwijzendVnw} de kans om de gemaakte oefeningen na te kijken. Dit deed ${aanwijzendVnw} niet altijd met evenveel zorg en aandacht. ${aanwijzendVnwCap} liet soms foutjes staan of verbeterde sommige oefeningen niet. Het is belangrijk dat ${aanwijzendVnw} volgende keer wel elke keer geconcentreerd nakijkt, zodat ${aanwijzendVnw} zelf weet waar ${aanwijzendVnw} nog extra op moet oefenen of vragen over moet stellen.`,
    goed_nagekeken: `${displayName} werkte thuis goed in de herhalingsbundels om voor te bereiden voor de toetsen. In de klas keek ${aanwijzendVnw} ${bezittVnw} oefeningen ook aandachtig na. Deze studiehouding verdient een pluim.`,
    extra_geoefend: `${displayName} werkte thuis goed in de herhalingsbundels om voor te bereiden voor de toetsen. In de klas keek ${aanwijzendVnw} ${bezittVnw} oefeningen ook aandachtig na. Daarnaast maakte ${displayName} ook regelmatig extra oefeningen in ${bezittVnw} huiswerkschrift. Dit toont veel inzet. Deze studiehouding verdient dan ook een grote pluim.`
  }

  const dictSamenwerken = {
    goed: `Tijdens de les werken we regelmatig samen in duo's of kleine groepjes. Soms mogen ze zelf kiezen met wie ze samenwerken en soms zijn de groepjes al op voorhand vastgelegd. Dit samenwerken gaat voor ${displayName} al redelijk goed. Dat is fijn.`,
    weinig_inbreng: `Tijdens de les werken we regelmatig samen in duo's of kleine groepjes. Soms mogen ze zelf kiezen met wie ze samenwerken en soms zijn de groepjes al op voorhand vastgelegd. Samenwerken per twee gaat voor ${displayName} erg goed. Als de groepen groter zijn, wordt het meer een uitdaging. ${displayName} werkt wel mee, maar geeft zelf weinig inbreng. Dat is jammer, want ook ${bezittVnw} mening is belangrijk. ${aanwijzendVnwCap} mag gerust ook zelf met ideeën komen.`,
    kan_beter: `Tijdens de les werken we regelmatig samen in duo's of kleine groepjes. Soms mogen ze zelf kiezen met wie ze samenwerken en soms zijn de groepjes al op voorhand vastgelegd. Samenwerken per twee gaat voor ${displayName} meestal goed. Als de groepen groter zijn, wordt het meer een uitdaging. ${samenwerken_text}`
  }

  const dictAvi = {
    zelfde: `Het leesniveau van ${displayName} is niet gestegen ten opzichte van het vorige rapport. Dat is jammer.  Het is noodzakelijk dat ${displayName} elke dag (luidop) leest zodat ${aanwijzendVnw} op het einde van dit schooljaar AVI 9 behaalt. De teksten die de leerlingen moeten verwerken voor de lessen taal en wereldoriëntatie worden steeds langer en moeilijker, vlot kunnen lezen is daarom enorm belangrijk.`,
    al_2_keer_zelfde: `Het leesniveau van ${displayName} is niet gestegen ten opzichte van het vorige rapport. Ook toen was het niveau niet gestegen. Het is echt tijd om hier thuis extra op in te zetten, zodat ${displayName} hierin vooruit gaat. Als ${aanwijzendVnw} niet vlot genoeg leest, is het voor ${lijdVnw} ook veel moeilijker om te kunnen volgen tijdens andere lessen, zoals begrijpend lezen en wereldoriëntatie.`,
    licht_gestegen: `Het leesniveau van ${displayName} is licht gestegen, dus ${aanwijzendVnw} kan beginnen oefenen op AVI 6 / 7 / 8. Misschien behaalt ${aanwijzendVnw} volgende keer ${bezittVnw} leesdiploma?`,
    gestegen: `Het leesniveau van ${displayName} is gestegen, goed zo! ${aanwijzendVnwCap} kan beginnen oefenen op AVI 9. Misschien behaalt ${aanwijzendVnw} volgende keer ${bezittVnw} leesdiploma?`,
    diploma: `${displayName} behaalde in januari ${bezittVnw} leesdiploma. Proficiat!`,
    nvt: ``
  }

  const dictTerugblik = {
    verbetering: `Op het vorige rapport schreef ik ${tekst_vorig_rapport} Hier heeft ${aanwijzendVnw} al grote stappen in gezet. ${terugblik_extra_text}`,
    beetje_beter: `Op het vorige rapport schreef ik ${tekst_vorig_rapport} Ik zie dat ${displayName} hier probeert op te letten. ${aanwijzendVnwCap} mag hier ook de komende periode nog aandacht aan schenken.`,
    zelfde_gebleven: `Op het vorige rapport schreef ik ${tekst_vorig_rapport} Ik zie echter weinig verandering. Ik hoop dat ${displayName} hier de komende periode echt op zal letten.`
  }

  // Initial feedback, to be extended
  let feedback = 'De tijd is weeral voorbijgevlogen. We hebben de voorbije maanden veel gedaan en bijgeleerd. We gingen op uitstap naar de brandweer, genoten van zelfgemaakte hapjes op onze kerstreceptie en we eindigden met de grote toetsenperiode.';
  
  feedback += '\n' + dictHerhalingsbundels[returnSelection('herhalingsbundels')];
  feedback += '\n' + dictVragen[returnSelection('vragen')];
  feedback += '\n' + dictResultaten[returnSelection('resultaten')];
  feedback += '\n' + dictSamenwerken[returnSelection('samenwerken')];
  feedback += '\n' + dictAvi[returnSelection('avi')];
  feedback += '\n' + dictTerugblik[returnSelection('terugblik')];


  // Add static last sentence to feedback.

  feedback+= '\n' + "Ik kijk al uit naar de volgende periode. Maar eerst even genieten van een welverdiende vakantie.";

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