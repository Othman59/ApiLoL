const competencesContainer = document.getElementById("competencesContainer");
const competenceDetails = document.getElementById("competenceDetails");
const competenceName = document.getElementById("competenceName");
const competenceImage = document.getElementById("competenceImage");
const competenceDescription = document.getElementById("competenceDescription");
const championImage = document.getElementById("champion-image");

const competences = [
  {
    name: "Q - Le Cri primal",
    image: "cri_primal.png",
    description: "Description de la compétence Q",
  },
  {
    name: "W - Marque des ténèbres",
    image: "marque_tenebres.png",
    description: "Description de la compétence W",
  },
  {
    name: "E - Saut éclair",
    image: "saut_eclair.png",
    description: "Description de la compétence E",
  },
  {
    name: "R - Jugement dernier",
    image: "jugement_dernier.png",
    description: "Description de la compétence R",
  },
  // Ajoutez d'autres compétences ici...
];

// Appel initial de la fonction displayCompetences
displayCompetences();

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
  competenceImage.src = selectedCompetence.image; // Afficher l'image correspondante
  competenceDescription.textContent = selectedCompetence.description;

  competenceDetails.style.display = "block";
}

// Exemple pour l'affichage des champions
const champions = [
  {
    id: 1,
    image: {
      full: "champion1.png",
    },
  },
  {
    id: 2,
    image: {
      full: "champion2.png",
    },
  },
  // Ajoutez d'autres champions ici...
];

// Boucle pour afficher les champions
for (let i = 0; i < champions.length; i++) {
  const champion = champions[i];
  const championImage = document.createElement("img");
  imageChampion.src = `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${championImage}`;
document.body.appendChild(imageChampion)
}
