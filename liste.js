const champions = [
    {
      name: "Champion 1",
      role: "Assassin",
      image: "champion1.jpg",
      abilities: ["Ability 1", "Ability 2", "Ability 3"],
      stats: {
        attack: 8,
        defense: 4,
        magic: 2
      }
    },
    // Ajoutez d'autres champions ici...
  ];
  
  const championsContainer = document.getElementById("championsContainer");
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  
  function displayChampions() {
    championsContainer.innerHTML = "";
  
    const searchQuery = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
  
    const filteredChampions = champions.filter(champion => {
      const nameMatch = champion.name.toLowerCase().includes(searchQuery);
      const abilityMatch = champion.abilities.some(ability => ability.toLowerCase().includes(searchQuery));
      const roleMatch = filterValue === "" || champion.role === filterValue;
  
      return nameMatch || abilityMatch || roleMatch;
    });

    // ...

  filteredChampions.forEach(champion => {
  const championElement = document.createElement("div");
  championElement.classList.add("champion");

  const imageElement = document.createElement("img");
  imageElement.src = champion.image; // Définit la source de l'image
  championElement.appendChild(imageElement);

  // ...

  const statsElement = document.createElement("div");
  statsElement.classList.add("stats");
  statsElement.textContent = `Attack: ${champion.stats.attack}, Defense: ${champion.stats.defense}, Magic: ${champion.stats.magic}`;
  championElement.appendChild(statsElement);

  championsContainer.appendChild(championElement);
});

// ...

  
    
  
      const role = champion.role;
  
      const roleElement = document.createElement("div");
      roleElement.classList.add("role");
      roleElement.textContent = champion.role;
      championElement.appendChild(roleElement);
  
      const statsElement = document.createElement("div");
      statsElement.classList.add("stats");
      statsElement.textContent = `Attack: ${champion.stats.attack}, Defense: ${champion.stats.defense}, Magic: ${champion.stats.magic}`;
      championElement.appendChild(statsElement);
  
      championsContainer.appendChild(championElement);
    });
  }
  
  displayChampions();
  
  searchInput.addEventListener("input", displayChampions);
  filterSelect.addEventListener("change", displayChampions);
