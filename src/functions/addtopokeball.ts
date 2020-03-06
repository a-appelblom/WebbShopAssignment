import { prepareCart } from "./preparecart";

export function addToPokeball(e, pokemons) {
  let storage = window.localStorage;
  let card: HTMLElement = e.target;
  let addButt: HTMLElement = e.target;
  let counter: number = parseInt(storage.getItem("counter"));

  if(isNaN(counter)){
    counter=0;
  }
  
  while (addButt && !addButt.classList.contains("addToBall")) {
    addButt = <HTMLElement>addButt.parentElement;
  }
  while (card && !card.classList.contains("card")) {
    card = <HTMLElement>card.parentElement;
  }

  storage.setItem(JSON.stringify(counter), JSON.stringify(pokemons[card.id[0]]));
  counter ++;

  storage.setItem("counter", JSON.stringify(counter));
  prepareCart();
}
