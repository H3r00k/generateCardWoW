export function renderCard(character) {
  const card = document.createElement("div");
  card.classList.add("card-personaggio");

  card.innerHTML = `
                <h2>${character.nome}</h2>
                <p>Razza: ${character.razza}</p>
                <p>Classe: ${character.classe}</p>
                <p>Fazione: ${character.fazione}</p>
                <p>Livello: ${character.livello}</p>`;

  const borderColors = {
    Guerriero: "red",
    Paladino: "orange",
    Cacciatore: "green",
    Ladro: "yellow",
    Sacerdote: "white",
    "Cavaliere della Morte": "darkred",
    Sciamano: "blue",
    Mago: "lightblue",
    Stregone: "purple",
    Monaco: "lime",
    Druido: "chocolate",
    "Cacciatore di Demoni": "darkviolet",
    Evocatore: "gold",
  };

  const coloreClasse = borderColors[character.classe] || "gray";
  card.style.border = `3px solid ${coloreClasse}`;

  const boxCard = document.getElementById("lista-card");
  boxCard.style.display = "grid";
  boxCard.appendChild(card);
}
