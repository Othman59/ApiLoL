// Génération du champion aléatoire
var champion = generateChampion();

// Temps imparti en secondes
var timeLimit = 30;

// Démarrage du compte à rebours
var countdown = setInterval(updateTimer, 1000);

// Fonction pour générer le champion aléatoire
function generateChampion() {
  var champions = [
    { name: "Champion1", year: 2020, lord: "Seigneur1", sex: "Homme" },
    { name: "Champion2", year: 2015, lord: "Seigneur2", sex: "Femme" },
    { name: "Champion3", year: 2018, lord: "Seigneur3", sex: "Homme" },
    // Ajoutez d'autres champions ici...
  ];
  
  var randomIndex = Math.floor(Math.random() * champions.length);
  return champions[randomIndex];
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkGuess(event) {
  event.preventDefault();
  
  var guessInput = document.getElementById("guess");
  var guess = guessInput.value;
  
  var result = document.getElementById("result");
  
  if (guess == champion.name) {
    result.innerText = "Bravo, vous avez deviné le nom du champion!";
  } else if (guess == champion.year) {
    result.innerText = "Bravo, vous avez deviné l'année de sortie du champion!";
  } else if (guess == champion.lord) {
    result.innerText = "Bravo, vous avez deviné le seigneur du champion!";
  } else if (guess == champion.sex) {
    result.innerText = "Bravo, vous avez deviné le sexe du champion!";
  } else {
    result.innerText = "Essayez encore, vous êtes loin de la réponse.";
  }
  
  guessInput.value = "";
}

// Fonction pour mettre à jour le compte à rebours
function updateTimer() {
  var timer = document.getElementById("timer");
  
  if (timeLimit > 0) {
    timer.innerText = "Temps restant : " + timeLimit + " secondes";
    timeLimit--;
  } else {
   
  }
}