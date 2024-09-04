import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokeAPIService {
  getPokemonDetails() {
    console.log('pokemon', Pokemon)
  }
  async getPokemon() {
    const response = await pokeApi.get('/api/v2/pokemon/')
    console.log('Got pokemon!', response.data)

    AppState.pokemons = response.data.results
    console.log('pokemon in the appstate', AppState.pokemons)
  }
}



export const pokeAPIService = new PokeAPIService()