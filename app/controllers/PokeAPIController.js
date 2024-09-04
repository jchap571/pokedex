import { AppState } from "../AppState.js";
import { pokeAPIService } from "../services/PokeAPIService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokeAPIController {
  constructor() {
    console.log('pokeAPI controller is loaded!')
    this.getPokemon()
    AppState.on('pokemons', this.drawPokeList)
  }



  async getPokemon() {
    try {
      await pokeAPIService.getPokemon()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }



  drawPokeList() {
    console.log('did I run?')

    const pokemons = AppState.pokemons
    let pokeHTML = ''
    pokemons.forEach(pokemon => {
      pokeHTML += `
      <div class="col-3 border border-danger m-2">
         
            <button onclick="app.PokeAPIController.getPokemonDetails('${pokemon.name}')" class=" rounded-pill bg-danger text-white"><i class="mdi mdi-pokeball"></i>${pokemon.name}</button>
          </div>
          `

    });
    setHTML('poke-list', pokeHTML)

  }

  async getPokemonDetails(pokemonName) {
    try {
      await pokeAPIService.getPokemonDetails(pokemonName)
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }





}