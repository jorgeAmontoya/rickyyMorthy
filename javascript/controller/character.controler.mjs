"use strict";
debugger;
// Config
import { Config } from "../config.mjs";

// Views
import { CharacterView  } from "../view/character.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";



class CharacterController {
debugger;
    #privateRickAndMortyURL;
    #privateView;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        
        this.#privateView = new CharacterView();
        
    }

    async init() {
        const servicio = new RickAndMortyService(this.#privateRickAndMortyURL);
        const characters = await servicio.getCharacters();
        console.log(characters);
        this.#privateView.init(characters);

    }  
}

export const instance = new CharacterController();
instance.init();