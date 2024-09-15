import clearActiveTag, { setActiveTag } from "./activeFunctions.js"
import { kepek } from "./adatlista.js"

export default class Kartya {
    #kep
    constructor(kep, divElem) {
        this.divElem = divElem
        this.#kep = kep
        this.#kepetMegjelenit()
        this.imgElement = $(".selectedIMG:last")
        this.#kepreEsemeny()
    }
    #kepetMegjelenit() {
        this.divElem.append(
            `<div >
                <div class="card">
                    <img class="selectedIMG" src="${this.#kep.url}" alt="${this.#kep.nev}">
                </div>
            <div>`
        )
    }
    #kepreEsemeny() {
        this.imgElement.on('click', (event) => {
            const e = new CustomEvent("Kivalaszt", { detail: this.#kep })
            window.dispatchEvent(e)
            clearActiveTag($("."))
            setActiveTag(this.#kep.id)
        })
    }

}