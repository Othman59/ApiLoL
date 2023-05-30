// Définition des questions et réponses
const questions = [
    {
      image: "chemin_vers_image1.jpg",
      answer: "Nom de la bonne réponse 1",
      hint: "Indice pour la question 1"
    },
    {
      image: "chemin_vers_image2.jpg",
      answer: "Nom de la bonne réponse 2",
      hint: "Indice pour la question 2"
    },
    // Ajouter d'autres questions ici...
  ];
  
  // Variables de suivi
  let currentQuestion = 0;
  let attempts = 0;
  
  // Fonction pour afficher la question courante
  function displayQuestion() {
    const question = questions[currentQuestion];
    const imageElement = document.getElementById("image");
    imageElement.src = question.image;
  }
  
  // Fonction appelée lors de la soumission du formulaire
  function submitAnswer(event) {
    event.preventDefault();
  
    const answerInput = document.getElementById("answer");
    const answer = answerInput.value.trim();
  
    if (answer === questions[currentQuestion].answer) {
      showResult(true);
    } else {
      showResult(false);
    }
  
    attempts++;
  
    if (attempts >= 3) {
      showHint();
    }
  
    answerInput.value = "";
    answerInput.focus();
  }
  
  // Fonction pour afficher le résultat
  function showResult(isCorrect) {
    const resultElement = document.getElementById("result");
    const feedbackElement = document.getElementById("feedback");
  
    if (isCorrect) {
      resultElement.style.color = "green";
      resultElement.textContent = "Correct!";
      feedbackElement.textContent = "";
    } else {
      resultElement.style.color = "red";
      resultElement.textContent = "Incorrect!";
      feedbackElement.textContent = "Essayez encore.";
    }
  
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      // Fin du quiz
      // Affichez le score final, réinitialisez les variables, etc.
    }
  }
  
  // Fonction pour afficher un indice
  function showHint() {
    const hintElement = document.getElementById("hint");
    hintElement.textContent = questions[currentQuestion].hint;
  }

// Fonction pour effectuer une requête HTTP GET vers l'API League of Legends
async function fetchChampionRotations() {
    const response = await fetch("https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-b0eca0be-40d5-4cf1-94ff-158c3acae8d2");
    const data = await response.json();
    return data;
  }
  
  // Fonction pour afficher les rotations de champions
  async function displayChampionRotations() {
    const championRotations = await fetchChampionRotations();
    console.log(championRotations); // Affiche les données des rotations de champions dans la console
  
    // Vous pouvez maintenant utiliser les données pour afficher les rotations de champions dans votre interface utilisateur
    // par exemple, en mettant à jour les éléments HTML appropriés avec les informations récupérées
    // Assurez-vous de modifier cette fonction en fonction de votre structure HTML et de la manière dont vous souhaitez afficher les données.
  }
  
  // Appel initial pour afficher les rotations de champions
  displayChampionRotations();
  