const competencesContainer = document.getElementById("competencesContainer");
const competenceDetails = document.getElementById("competenceDetails");
const competenceName = document.getElementById("competenceName");
const competenceImage = document.getElementById("competenceImage");
const competenceDescription = document.getElementById("competenceDescription");
const championImage = document.getElementById('champion-image');

const competences = [
    {
      name: "Q - Le Cri primal",
      image: "cri_primal.png",
      description: "Description de la compétence Q"
    },
    {
      name: "W - Marque des ténèbres",
      image: "marque_tenebres.png",
      description: "Description de la compétence W"
    },
    {
      name: "E - Saut éclair",
      image: "saut_eclair.png",
      description: "Description de la compétence E"
    },
    {
      name: "R - Jugement dernier",
      image: "jugement_dernier.png",
      description: "Description de la compétence R"
    }
    // Ajoutez d'autres compétences ici...
  ];
  
  function displayCompetences() {
    competencesContainer.innerHTML = "";
  
    competences.forEach((competence, index) => {
      const competenceElement = document.createElement("div");
      competenceElement.classList.add("competence");
      competenceElement.textContent = competence.name;
  
      competenceElement.addEventListener("click", () => {
        showCompetenceDetails(index);
      });
  
      competencesContainer.appendChild(competenceElement);
    });
  }
  
  function showCompetenceDetails(index) {
    const selectedCompetence = competences[index];
    competenceName.textContent = selectedCompetence.name;
    competenceImage.src = selectedCompetence.image;
    competenceDescription.textContent = selectedCompetence.description;
  
    competenceDetails.style.display = "block";
  }
  displayCompetences();
  
  