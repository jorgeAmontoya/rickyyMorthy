'use strict';

export class characterModel {
debugger;
    #privateId;
    #privateName;
    #privateImage;
    #privateGender;



    constructor(id,name,image,gender) {
        this.#privateId = id;
        this.#privateName = name;
        this.#privateImage = image;
        this.#privateGender = gender;
        
    }

    get Name() {
        return this.#privateName;
    }

    set Name(name) {
        this.#privateName = name;
    }

    get Image() {
        return this.#privateImage;
    }

    set Image(image) {
        this.#privateImage = image;
    }

    get Id() {
        return this.#privateId;
    }

    set Id(id) {
        this.#privateId = id;
    }

    get Gender() {
        return this.#privateGender;
    }

    set Gender(gender) {
        this.#privateGender = gender;
    }


    toString() {
        return `${this.#privateName} ${this.#privateImage}${this.#privateId}${this.#privateGender}`;
    }
}