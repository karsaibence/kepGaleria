import Fokep from "./Fokep.js"
import Kartyak from "./Kartyak.js"
import { kepek } from "./adatlista.js"

const fokepElem = $(".fokep")
const kisKepek = $(".kisKartyak")

new Fokep(kepek[0], fokepElem)
new Kartyak(kepek, kisKepek)

$(window).on("Kivalaszt", (event) => {
    fokepElem.html("")
    new Fokep(event.detail, fokepElem)
})