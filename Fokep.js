import { kepek } from "./adatlista.js"

export default class Fokep {

    #kep
    constructor(kep, szulo) {
        this.#kep = kep
        this.szulo = szulo
        this.#kepetMegjelenit()

    }

    #kepetMegjelenit() {
        this.szulo.append(
            `<div>
            <button class="prev">«</button>
            <img src="${this.#kep.url}" alt="${this.#kep.nev}">
            <button class="next">»</button>
        </div>`
        )
        this.#nextPic()
        this.#prevPic()
    }
    #nextPic() {
        $(".next").on("click", () => {
            if (this.#kep.id < (kepek.length - 1)) {
                this.#kep = kepek[this.#kep.id + 1]
                this.szulo.html("")
                this.#kepetMegjelenit()
            }
            else {
                this.#kep = kepek[0]
                this.szulo.html("")
                this.#kepetMegjelenit()
            }
        })
    }
    #prevPic() {
        $(".prev").on("click", () => {
            if (this.#kep.id > 0) {
                this.#kep = kepek[this.#kep.id - 1]
                this.szulo.html("")
                this.#kepetMegjelenit()
            }
            else {
                this.#kep = kepek[(kepek.length - 1)]
                this.szulo.html("")
                this.#kepetMegjelenit()
            }
        })
    }
}