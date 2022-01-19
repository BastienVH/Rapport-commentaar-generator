// Initialize document elements
const displayName = document.getElementById("name");
const displayTotal = document.getElementById("total");
const commentPara = document.getElementById("commentaartekst");
let result = "";

const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", generateFeedback);

function generateFeedback() {
  const gender = returnSelection('gender');
  const fbTekst = returnSelection("tekstenkennen");
  const fbStemgebruik = returnSelection("stemgebruik");
  const fbMeedoen = returnSelection("goedmeedoen");
  const fbAanwezigheid = returnSelection('aanwezigheid');
  // Log to console to test returned values
  console.log(`Teksten kennen: ${fbTekst}\n Stemgebruik: ${fbStemgebruik}\n Meedoen: ${fbMeedoen}\n Aanwezigheid: ${fbAanwezigheid}`);
  
  // Create full text result for fbTekst
  let fbTekstFull = "";
  if (fbTekst === 'zeergoed') {
    fbTekstFull = 'Je kent de teksten van de liedjes al goed!';
  } else if (fbTekst === 'goed') {
    fbTekstFull = 'Je kent de teksten van de liedjes al redelijk goed.'
  } else {
    fbTekstFull = 'Je hebt soms nog moeite met de teksten van de liedjes.'
  }

  // Create full text result for fbStemgebruik
  let fbStemFull = "";
  switch (fbStemgebruik) {
    case "zeergoed":
      fbStemFull = "Je kan je stem al goed gebruiken en zingt mooi op toon.";
      break;
    case "goed":
      fbStemFull = "Zingen op toon begint al goed te lukken. Let op de tips die ik geef over zingen op een goede manier.";
      break;
    default:
      fbStemFull = "Luister goed naar de piano en de andere kinderen tijdens het zingen. Zoek actief naar de goede toonhoogte en let op de tips die ik geef.";
  }

  // Create full text result for fbMeedoen
  let fbMeedoenFull = "";
  if (fbMeedoen === 'zeergoed') {
    fbMeedoenFull = 'Je doet altijd goed mee tijdens de lessen.';
  } else if (fbMeedoen === 'goed') {
    fbMeedoenFull = 'Je doet meestal goed mee tijdens de lessen.'
  } else {
    fbMeedoenFull = 'Je bent af en toe afgeleid tijdens de lessen.'
  }

  // Create full text result for fbAanwezigheid
  let fbAanwezigheidFull = "";
  switch (fbAanwezigheid) {
    case "zeergoed":
      fbAanwezigheidFull = "Je bent vaak aanwezig en doet goed mee. Fijn zo!";
      break;
    case "goed":
      fbAanwezigheidFull = "Je bent meestal aanwezig tijdens de koorlessen.";
      break;
    default:
      fbAanwezigheidFull = "Je bent af en toe afwezig tijdens de koorlessen. Dat is spijtig, want zo mis je wel wat van de liedjes die we leren.";
    }

  // Generate combined full text result
    if (gender === "meisje") {
      result = `${displayName.value}, je bent een fijne meid.\n${fbTekstFull}\n${fbMeedoenFull}\n${fbStemFull}\n${fbAanwezigheidFull}`;
    } else {
      result = `${displayName.value}, je bent een toffe ${gender}.\n${fbTekstFull}\n${fbMeedoenFull}\n${fbStemFull}\n${fbAanwezigheidFull}`;
    }
  // Output result to webpage
    commentPara.innerHTML = result;
}

function returnSelection(btnSelector) {
  return document.querySelector(`input[name="${btnSelector}"]:checked`).value;
}