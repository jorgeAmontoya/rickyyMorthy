'use strict';

import { CharacterControllerDescription} from "../controller/character.controler.description.mjs"

export class CharacterViewdescription {
debugger;
    #privateBody;

    constructor() {
        document.title = "Personajes rick y morty";
        this.#privateBody = document.querySelector('body');
    }
debugger;
    init(character) {
        debugger;
        //const description = new CharacterControllerDescription();
        //characters((character)=>{
            
            const card = this.#privateCreateCard();
            //card.id = character.id;
            const title = this.#privateCreateTitle();
            title.textContent = character.Name;
            const image = this.#privateCreateImage();
            image.src = character.Image;

            const gender = this.#privateCreateGender();
            gender.textContent = character.Gender;
            card.append(title,image,gender);
            this.#privateBody.append(card);
            return card;
       // });
       

    }

    #privateCreateCard() {
        return document.createElement('div');
    }

    
    #privateCreateImage() {
        return document.createElement('img');
    }

    
    #privateCreateTitle() {
        return document.createElement('h1');
    }

    #privateCreateGender() {
        return document.createElement('h1');
    }
 

}