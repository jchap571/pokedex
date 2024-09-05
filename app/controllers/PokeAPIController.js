import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeAPIService } from "../services/PokeAPIService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokeAPIController {
  constructor() {
    console.log('pokeAPI controller is loaded!')
    this.getPokemon()
    AppState.on('wildPokemons', this.drawWildPokemonList)
    AppState.on('activePokemon', this.drawActivePokemon)
  }



  async getPokemon() {
    try {
      await pokeAPIService.getPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }



  drawWildPokemonList() {
    console.log('did I run?')

    const pokemons = AppState.wildPokemons
    let pokeHTML = ''
    pokemons.forEach(pokemon => {
      
      pokeHTML += 
      `
      <div class="col-3 border border-danger m-2">
        <button onclick="app.pokeAPIController.getActivePokemon('${pokemon.name}')" class=" rounded-pill bg-danger text-white"><i class="mdi mdi-pokeball"></i>${pokemon.name}</button>
      </div>
      `
    });
    setHTML('poke-list', pokeHTML)

  }


  drawActivePokemon(){
    if (AppState.activePokemon == null) return

    setHTML('active-pokemon', AppState.activePokemon.activePokemonHTMLTemplate)
  }
         


  async  getActivePokemon(pokemonName) {
    try {
      await pokeAPIService.getActivePokemon(pokemonName)
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }





}