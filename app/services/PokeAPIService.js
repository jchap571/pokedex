import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokeAPIService {
async getActivePokemon(selectedPokemon) {
    
    console.log(selectedPokemon)
    this.getPokemonByName(selectedPokemon)
  }

async getPokemonByName(pokemonName){
  
  console.log('pokemon name!', pokemonName)
  const response = await pokeApi.get(`api/v2/pokemon/${pokemonName}`)
  AppState.activePokemon = new Pokemon(response.data)
  console.log('got pokemon details!', response.data)
}


  async getPokemon() {
    const response = await pokeApi.get('/api/v2/pokemon/')
    console.log('Got pokemon!', response.data)

    AppState.wildPokemons = response.data.results
    console.log('pokemon in the appstate', AppState.wildPokemons)
  }
}



export const pokeAPIService = new PokeAPIService()