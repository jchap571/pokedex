export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img ?? data.sprites.front_default
    this.backImg = data.backImg ? data.backImg : data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.creatorId = data.creatorId
    this.health = data.health || data.stats[0].base_stat
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.types = data.types
  }



  get activePokemonHTMLTemplate(){
    return `
    <div class="col-6 border border-danger text-white m-2">Active Pokemon
            <h3>${this.name}</h3>
            <img src="${this.img}" alt="">
            <img src="${this.backImg}" alt="">
            <div class="card bg-dark border border-success">
              <div class="d-flex">
                <span>Element | </span>
                <span>Damage Type</span>
                <div class="">
                  <hr>
                  <p>Health: ${this.health}</p>
                  <p>Attack: ${this.attack}</p>
                  <p>Defense: ${this.defense}</p>
                  <p>Speed: ${this.speed}</p>
                  <p>Weight: ${this.weight}</p>
                  <p>Height: ${this.height}</p>
                  <div>
                    <button class="bg-success text-white rounded-pill">Catch Em!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `

  }
}





// "name": {
//   "type": "String",
//   "required": true,
//   "maxLength": 100
// },
// "nickName": {
//   "type": "String",
//   "maxLength": 100
// },
// "img": {
//   "type": "String",
//   "required": true,
//   "maxLength": 500
// },
// "weight": {
//   "type": "String",
//   "maxLength": 100
// },
// "height": {
//   "type": "String",
//   "maxLength": 100
// },
// "types": [
//   {}
// ],
// "creatorId": {
//   "type": "SchemaObjectId",
//   "required": true,
//   "ref": "Account"