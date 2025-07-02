import {createCharacter} from "./createChar.js";
import {renderCard} from "./renderCard.js"



const btnGenerateChar = document.getElementById("btn-genera");
const boxCard = document.getElementById("lista-card");

btnGenerateChar.addEventListener("click", createCard);

function createCard() {
 const newCharacter = createCharacter();
 /* console.log(newCharacter); */
 renderCard(newCharacter);
}


