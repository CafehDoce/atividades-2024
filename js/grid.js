const colleagues = [
    "matheusribeiroavila",
    "DieimesNunes",
    "VictorPjt",
    "CafehDoce",
    "DecemberAmaral"
  ];
  
  const gridContainer = document.getElementById("grid");
  
  async function fetchColleagueData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  }
  
  async function displayColleagues() {
    for (const username of colleagues) {
      try {
        const colleague = await fetchColleagueData(username);
        
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML = `
          <img src="${colleague.avatar_url}" alt="${colleague.login} foto de perfil">
          <h3>${colleague.name || colleague.login}</h3>
          <p>🛠️ Tecnologias principais: ${colleague.bio || "Informações não disponíveis"}</p>
          <a href="${colleague.html_url}" target="_blank">Ver perfil no GitHub</a>
        `;
  
        gridContainer.appendChild(card);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    }
  }
  
  displayColleagues();
  