"use strict";
// Config
import { Config } from "../config.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";
// Views
import { CharacterViewdescription } from "../view/character.view.description.mjs";

export class CharacterControllerDescription {
    #privateRickAndMortyURL;
    #privateViewdescription;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        
        this.#privateViewdescription = new CharacterViewdescription();
 
    }

    async init() {
        //local search toma los parametros de la Url como si fuera una peticion Get
        var ga = location.search;
        var id = ga.replace('?','');
        var url = this.#privateRickAndMortyURL+"/character/"+id;
        const servicio = new RickAndMortyService(url);
        const characters = await servicio.getCharactersId();

        this.#privateViewdescription.init(characters[0]);

    }  
}
export const instance = new CharacterControllerDescription();
instance.init();
