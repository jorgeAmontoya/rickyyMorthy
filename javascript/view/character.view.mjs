'use strict';

import { CharacterController} from "../controller/character.controler.mjs"

export class CharacterView {

    #privateBody;

    constructor() {
        document.title = "Personajes rick y morty";
        this.#privateBody = document.querySelector('body');
    }


 
/**
 * 
 * @param {} characters 
 */
    init(characters) {
        const description = new CharacterController();
        
        characters.forEach((character)=>{
            const card = this.#privateCreateCard();

            card.id = character.Id;
            
            card.addEventListener("click", () => location.href = "index.characters.html?"+character.Id);

            const title = this.#privateCreateTitle();
            title.textContent = character.Name;
            const image = this.#privateCreateImage();
            image.src = character.Image;
            card.append(title,image);
            this.#privateBody.append(card);
            return card;
        });
       

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
}