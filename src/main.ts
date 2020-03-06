import getPokemon from "./functions/getpokemon";
import { printPokemon } from "./functions/printpokemon";
import { prepareCart } from "./functions/preparecart";
import Pokemon from "./models/pokemon";

class Main {
  async start(): Promise<void> {
    let pokemons:Pokemon[] = await getPokemon();
    let storage = window.localStorage;
    printPokemon(pokemons);

    let cartToggle = document.getElementById("pokeBalls");
    let cart = document.getElementById("cart");

    cartToggle.addEventListener("click", () =>{
        cart.classList.toggle("hide");
        if (storage.length !== 0) {
            prepareCart();
        }
    });
  }
}

window.onload = () => {
  let main = new Main();
  main.start();
};
