export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.creatorId = data.creatorId


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