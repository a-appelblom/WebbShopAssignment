import Pokemon from "../models/pokemon";
import { printCart } from "./printcart";
import { increamentCart } from "./increamentcart";

export function sortCart(pokemons: Pokemon[]) {
  let cart: HTMLElement = <HTMLElement>document.getElementById("items");
  cart.innerHTML = "";

  pokemons.forEach((pokemon: Pokemon) => {
    let index: number = pokemon.index;
    let checkIndex: HTMLElement = document.querySelector(`#index${index}`);
    if (checkIndex === null) {
      printCart(pokemon);
    } else {
      increamentCart(checkIndex);
    }
  });
}
