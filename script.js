const submitBtn = document.getElementById('submit-btn');
const answerInput = document.getElementById('answer-input');
const question = document.getElementById('question');
const result = document.getElementById('result');
const score = document.getElementById('score');
const championImage = document.getElementById('champion-image');

let currentQuestionIndex = 0;
let currentScore = 0;

let champions = [];
let correctAnswers = [];

submitBtn.addEventListener('click', checkAnswer);

function fetchChampionList() {
  // Requête pour obtenir la liste des champions depuis l'API League of Legends
  fetch(`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/fr_FR/champion.json`)
    .then(response => JSON.parse(response))
    .then(data => {
      champions = Object.keys(data.data);
      //console.log(champions);
      correctAnswers = champions.slice(); // Copier le tableau pour l'utiliser comme réponses correctes
      askQuestion();
    })
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error(`Request failed. Status: ${request.status}`));
      }
    });
    request.open('GET', url);
    request.setRequestHeader('Accept', 'application/json');
    request.send();
  });
}

function checkAnswer() {
  const userAnswer = answerInput.value;
  const correctAnswer = correctAnswers[currentQuestionIndex];

  // Vérifier si la réponse de l'utilisateur correspond à la réponse correcte
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    result.textContent = 'Bonne réponse!';
    currentScore++;
  } else {
    result.textContent = 'Mauvaise réponse!';
  }

  currentQuestionIndex++;
  updateScore();
  askQuestion();
}

function updateScore() {
  score.textContent = `Score: ${currentScore}`;
}

// Dans votre fonction askQuestion()
function askQuestion() {
  // Vérifier si toutes les questions ont été posées
  if (currentQuestionIndex >= champions.length) {
    // Afficher le score final
    question.textContent = 'Quiz terminé!';
    result.textContent = `Score final: ${currentScore} sur ${champions.length}`;
    submitBtn.disabled = true;
  } else {
    // Poser la prochaine question
    question.textContent = `Quel est le champion numéro ${currentQuestionIndex + 1}?`;
    answerInput.value = '';

    const championName = champions[currentQuestionIndex];
    const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${championName}.png`;
    const championImage = document.getElementById('champion-image');
    championImage.src = championImageUrl;
    championImage.alt = `Image du champion ${championName}`;
  }
}


fetchChampionList();
