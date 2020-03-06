import Pokemon from "../models/pokemon";
import { addToPokeball } from "./addtopokeball";

export function printPokemon(pokemons) {
  let container: HTMLElement = <HTMLElement>(
    document.getElementById("pokemonListings")
  );
  let row: HTMLElement = <HTMLElement>document.createElement("div");
  row.className = "row";

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon: Pokemon = pokemons[i];

    if (i % 4 === 0) {
      container.appendChild(row);
    }

    let pokeCard: HTMLElement = <HTMLElement>document.createElement("div");
    pokeCard.className = `card container col l3 pokeCard ${pokemon.name}`;
    pokeCard.id =  `${i}`;

    // From API
    let pokeSpriteDiv: HTMLElement = <HTMLElement>document.createElement("div");
    pokeSpriteDiv.className = "row valign-wrapper pokeSprite";
    let pokeSprite: HTMLImageElement = <HTMLImageElement>(
      document.createElement("img")
    );
    pokeSprite.setAttribute("src", pokemon.sprite);
    pokeSprite.className = "sprite";
    pokeSpriteDiv.appendChild(pokeSprite);
    pokeCard.appendChild(pokeSpriteDiv);

    let pokeName: HTMLElement = <HTMLElement>document.createElement("div");
    pokeName.className = "row pokeName";
    pokeName.textContent = pokemon.name;
    pokeCard.appendChild(pokeName);

    let pokePrice: HTMLElement = <HTMLElement>document.createElement("div");
    pokePrice.className = "row pokePrice";
    pokePrice.textContent = `Price: ${pokemon.price()} Pokemon Dollars`;
    pokeCard.appendChild(pokePrice);
    // From Api

    // Add to pokeballs
    let addToBalls: HTMLElement = <HTMLElement>document.createElement("div");
    addToBalls.className = "row pokeBall";
    let addToBallsButt:HTMLElement = <HTMLElement>document.createElement("a");
    addToBallsButt.className = "btn-flat right valign-wrapper addToBall";
    let addToBallsText:HTMLElement = <HTMLElement>document.createElement("span");
    addToBallsText.innerText = "Add to Pokeball";
    let addToBallsIcon:HTMLElement = <HTMLElement>document.createElement("i");
    addToBallsIcon.className = "material-icons";
    addToBallsIcon.innerHTML = "arrow_forward";
    let addtoBallsImg: HTMLElement = <HTMLElement> document.createElement("img");
    addtoBallsImg.setAttribute("src", "https://img.icons8.com/color/24/000000/pokeball--v1.png");

    addToBallsButt.appendChild(addToBallsText);
    addToBallsButt.appendChild(addToBallsIcon);
    addToBallsButt.appendChild(addtoBallsImg);
    addToBalls.appendChild(addToBallsButt);

    addToBalls.addEventListener("click", (e:Event) =>{
      addToPokeball(e, pokemons);
    });

    pokeCard.appendChild(addToBalls);
    // Add to pokeballs

    row.appendChild(pokeCard);
  }
}
