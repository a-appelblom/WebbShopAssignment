import Pokemon from "../models/pokemon";
import { sortCart } from "./sortcart";
import { getTotals } from "./gettotals";

export function prepareCart() {
  let storage = window.localStorage;
  let counter: number = parseInt(storage.getItem("counter"));
  let pokemons: Pokemon[] = [];

  for (let i = 0; i <= counter; i++) {
    let item: Pokemon = JSON.parse(storage.getItem(`${i}`));
    if (item !== null) {
        let pokemon = new Pokemon(item.index, item.name, item.sprite, item.weight, item.height); 
      pokemons.push(pokemon);
    }
  }

  pokemons = pokemons.sort((a: Pokemon, b: Pokemon) =>
    a.index > b.index ? 1 : b.index > a.index ? -1 : 0
  );
  
  sortCart(pokemons);
  getTotals();
}
