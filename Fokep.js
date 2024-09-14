export default class Fokep {
    #kep
    constructor(kep,szulo){
        this.#kep=kep
        this.szulo=szulo
        this.#kepetMegjelenit()
    }

    #kepetMegjelenit() {
        this.szulo.append(
            `<div class="kartya">
            <img src="${this.#kep.url}" alt="${this.#kep.nev}">
        </div>`
        )
    }
}