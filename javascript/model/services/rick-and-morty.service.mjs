import { characterModel } from "../character.model.mjs";

export class RickAndMortyService {
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

   async  getCharacters() {
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


        async  getCharactersId() {
            
            const rickMortyData = await this.#getDataId();
            const arrayCharacters = new Array();
            
                arrayCharacters.push(new characterModel(rickMortyData.id,rickMortyData.name,rickMortyData.image,rickMortyData.gender));
                return arrayCharacters;
        }
        #getDataId(){
            return fetch(this.#privateUrl).then(response => response.json());
            }

}


