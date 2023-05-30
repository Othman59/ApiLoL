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
  
  // Appel initial pour afficher la première question
  displayQuestion();
  