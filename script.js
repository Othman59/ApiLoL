// Replace YOUR_API_KEY with your actual Riot Games API key
const apiKey = "YOUR_API_KEY";

// Fetches champion data from the League of Legends API
async function fetchChampionData() {
  try {
    const response = await fetch(`https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-d56f370b-d045-4625-b5a5-a87722f4072f`);
    const data = await response.json();
    const champions = Object.values(data.data);
    return champions;
  } catch (error) {
    console.log("Error fetching champion data:", error);
    return [];
  }
}

// Variables globales
let champions = [];
let currentChampionIndex = 0;
let attemptsLeft = 7;
let score = 0;

// Éléments DOM
const championImage = document.getElementById("champion-image");
const feedback = document.getElementById("feedback");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-btn");
const attemptsElement = document.getElementById("attempts");
const scoreElement = document.getElementById("score");

// Affiche les détails du champion courant
function displayChampionDetails() {
  const champion = champions[currentChampionIndex];
  championImage.src = `https://dragon.leagueoflegends.com/cdn/11.1.1/img/champion/${champion.image.full}`;
  // Afficher les autres informations sur le champion dans l'interface
}

// Charge les données des champions depuis l'API et initialise le jeu
async function initializeGame() {
  champions = await fetchChampionData();
  if (champions.length > 0) {
    displayChampionDetails();
  } else {
    console.log("No champion data available");
  }
}

// Appeler la fonction d'initialisation du jeu
initializeGame();
