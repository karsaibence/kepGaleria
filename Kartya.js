export default class Kartya {
    #kep
    constructor(kep, divElem) {
        this.divElem = divElem
        this.#kep = kep
        this.#kepetMegjelenit(kep)
    }
    #kepetMegjelenit(kep) {
        this.divElem.append(
            `<div class="kartya">
                <button>«</button>
                <img src="${this.#kep.url}" alt="${this.#kep.nev}">
                <button>»</button>
            </div>`
        )
    }
}