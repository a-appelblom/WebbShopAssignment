import { updateStorage } from "./updatestorage";

export function adjustQuantity(e) {
  let target: HTMLElement = e.target;
  let cartItem: HTMLElement = target.parentElement.parentElement.parentElement;
  let itemNameElement: HTMLElement = cartItem.querySelector(".cartItemName");
  let itemName = itemNameElement.innerHTML;
  let quantityElement = cartItem.querySelector(".itemQuantity");
  let quantity: number = parseInt(quantityElement.innerHTML);

  if (target.innerHTML === "add") {
    quantity++;
    updateStorage(true, itemName);
  } else if (target.innerHTML === "remove") {
    quantity--;
    if (quantity === 0) {
        console.log("call remove function");
    } else {
      updateStorage(false, itemName);
    }
  } else {
    console.log("ERROR");
  }

  quantityElement.innerHTML = `${quantity}`;
}
