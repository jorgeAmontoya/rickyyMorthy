import { characterModel } from "../character.model.mjs";

export class RickAndMortyService {
debugger;
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

   async  getCharacters() {
    debugger;
    const rickMortyData = await this.#getData();
    const arrayCharacters = new Array();
    rickMortyData.results.forEach((character)=>{
        arrayCharacters.push(new characterModel(character.id,character.name,character.image,character.gender));
    });    

    return arrayCharacters
    //return fetch(`${this.#privateUrl}/character`).then(response => response.json());
    }

    #getData(){
        return fetch(`${this.#privateUrl}/character`).then(response => response.json());
        }

}


