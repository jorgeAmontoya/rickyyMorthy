'use strict';

import { CharacterControllerDescription} from "../controller/character.controler.description.mjs"

export class CharacterView {
debugger;
    #privateBody;

    constructor() {
        document.title = "Personajes rick y morty";
        this.#privateBody = document.querySelector('body');
    }
debugger;
    init(characters) {
        const description = new CharacterControllerDescription();
        debugger;
        let button;
        characters.forEach((character)=>{
            const card = this.#privateCreateCard();

            card.id = character.Id;
            debugger;
            //card.addEventListener("click", function(){
                 
               const button = this.#privateCreateButton();

            debugger;
             button.href = `index.characters.html`;

            //}); //description.description(character)})};
            const title = this.#privateCreateTitle();
            title.textContent = character.Name;
            const image = this.#privateCreateImage();
            image.src = character.Image;
            card.append(title,image,button);
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

    #privateCreateButton() {
        return document.createElement('button');
    }

}