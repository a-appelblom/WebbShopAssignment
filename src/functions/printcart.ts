import { adjustQuantity } from "./adjustquantity";
import { removeFromCart } from "./removefromcart";

export function printCart(pokemon): void {
  let cart: HTMLElement = <HTMLElement>document.getElementById("items");

  let cartItemContainer: HTMLElement = <HTMLElement>(
    document.createElement("div")
  );
  cartItemContainer.className = "card cartItemContainer";

  let cartItem: HTMLElement = <HTMLElement>document.createElement("div");
  cartItem.className = "row cartItem";

  let remove: HTMLElement = <HTMLElement>document.createElement("a");
  remove.className = "btn-flat col s1";
  let removeButt: HTMLElement = <HTMLElement>document.createElement("i");
  removeButt.className = "material-icons";
  removeButt.innerHTML = "remove_circle";
  removeButt.addEventListener("click", (e:Event)=>{
    removeFromCart(e);
  });
  remove.appendChild(removeButt);

  let cartItemName: HTMLElement = <HTMLElement>document.createElement("span");
  cartItemName.innerText = `${pokemon.name}`;
  cartItemName.className = "cartItemName col s3";

  let quantityBox: HTMLElement = <HTMLElement>document.createElement("span");
  quantityBox.className = "cartQuantity col s2";

  let subtract: HTMLElement = <HTMLElement>document.createElement("a");
  subtract.className = "btn-flat col s4";
  let subtractButt: HTMLElement = <HTMLElement>document.createElement("i");
  subtractButt.className = "material-icons";
  subtractButt.innerHTML = "remove";
  subtract.appendChild(subtractButt);
  subtractButt.addEventListener("click",(e:Event) =>{
    adjustQuantity(e);
  });
  quantityBox.appendChild(subtract);

  let quantity: HTMLElement = <HTMLElement>document.createElement("span");
  quantity.className = "itemQuantity col s3";
  quantity.id = `index${pokemon.index}`;
  quantity.textContent = "1";
  quantityBox.appendChild(quantity);

  let add: HTMLElement = <HTMLElement>document.createElement("a");
  add.className = "btn-flat col s4";
  let addButt: HTMLElement = <HTMLElement>document.createElement("i");
  addButt.className = "material-icons";
  addButt.innerHTML = "add";
  add.appendChild(addButt);
  addButt.addEventListener("click",(e:Event) =>{
    adjustQuantity(e);
  });
  quantityBox.appendChild(add);

  let cartItemPrice: HTMLElement = <HTMLElement>document.createElement("span");
  cartItemPrice.innerText = `Price: ${pokemon.price()} Pokemon Dollars`;
  cartItemPrice.className = "cartItemPrice col s3";

  let times: HTMLElement = <HTMLElement>document.createElement("span");
  times.textContent = "*";
  times.className = "col s1";

  let total: HTMLElement = document.createElement("span");
  total.className = "totalPrice col s1";

  cartItem.appendChild(remove);
  cartItem.appendChild(cartItemName);
  cartItem.appendChild(cartItemPrice);
  cartItem.appendChild(times);
  cartItem.appendChild(quantityBox);
  cartItem.appendChild(total);

  cartItemContainer.appendChild(cartItem);

  cart.appendChild(cartItemContainer);
}
