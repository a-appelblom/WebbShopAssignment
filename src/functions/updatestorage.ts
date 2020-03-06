import { prepareCart } from "./preparecart";

export function updateStorage(plusminus: boolean, item: string) {
  let storage = window.localStorage;
  let counter: number = parseInt(storage.getItem("counter"));
  let listings:HTMLElement = document.getElementById("pokemonListings");
  let pokemonCard:HTMLElement = listings.querySelector(`.${item}`);

  if (plusminus === false) {
    for (let i = 0; i < counter; i++) {
      let storageItem = JSON.parse(storage.getItem(`${i}`));
      if (storageItem === null) {
        continue;
      } else if (storageItem.name === item) {
        console.log(storageItem);
        storage.removeItem(`${i}`);
        prepareCart();
        break;
      }
    }
  } else if (plusminus === true) {
    let addButt = pokemonCard.querySelector(".addToBall").parentElement;
    addButt.click();
  }
}
