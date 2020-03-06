import Pokemon from "../models/pokemon";

export default async function getPokemon() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=52`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  });
  let list = await response.json();
  let pokemonlist = list.results;
  let rawpokemons = [];

  await asyncForEach(pokemonlist, async element => {
    let pokedata = await fetch(element.url);
    let rawpokemon = await pokedata.json();
    rawpokemons.push(rawpokemon);
  });

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  let pokemons: Pokemon[] = rawpokemons.map(item => {
    let pokemon = new Pokemon(
      item.id,
      item.name,
      item.sprites.front_default,
      item.weight,
      item.height
    );

    return pokemon;
  });
  return pokemons;
}
