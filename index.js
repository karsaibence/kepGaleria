import Fokep from "./Fokep.js"
import Kartya from "./Kartya.js"
import Kartyak from "./Kartyak.js"
import { kepek } from "./adatlista.js"

const fokep = $(".kartya")
const kisKepek = $(".kisKartyak")

new Fokep(kepek[0], fokep)
new Kartyak(kepek,kisKepek)