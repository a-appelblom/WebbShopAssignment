import { prepareCart } from "./preparecart";

export function removeFromCart(e) {
  let storage = window.localStorage;
  let target: HTMLElement = e.target;
  let item: HTMLElement = target.parentElement.parentElement;
  let pokemon: string = item.querySelector(".cartItemName").innerHTML;
  let counter: number = parseInt(storage.getItem("counter"));

  for (let i = 0; i < counter; i++) {
    let storageItem = JSON.parse(storage.getItem(`${i}`));
    if (storageItem === null) {
      continue;
    } else if (storageItem.name === pokemon) {
      console.log(storageItem);
      storage.removeItem(`${i}`);
    }
  }
  prepareCart();
}
