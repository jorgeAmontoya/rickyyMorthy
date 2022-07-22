"use strict";
debugger;
// Config
import { Config } from "../config.mjs";

// Views
import { CharacterView  } from "../view/character.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";
import { CharacterViewdescription } from "../view/character.view.description.mjs";



export class CharacterControllerDescription {
debugger;
    #privateRickAndMortyURL;
    #privateViewdescription;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        
        this.#privateViewdescription = new CharacterViewdescription();
        
    }

    async init() {
        const servicio = new RickAndMortyService(this.#privateRickAndMortyURL);
        const characters = await servicio.getCharacters();
       // console.log(characters);
        //this.#privateViewdescription.init(characters);

    }  

    async description (characters){
        debugger;
        /*
        const servicio = new RickAndMortyService(this.#privateRickAndMortyURL);
        const characters = await servicio.getCharacters();
       */
        console.log(characters.toString());

        
        this.#privateViewdescription.init(characters);
        
        //console.log(this.description[0]);

       // this.#privateViewdescription.init();
       // this.#characterView= new CharacterView.description();
        //this.#privateView.init(characters);
    }
}


export const instance = new CharacterControllerDescription();
instance.init();
