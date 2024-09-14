import Kartya from "./Kartya.js";

export default class Kartyak{
    #kepLista=[]
    constructor(kepLista,szuloElem){
        this.#kepLista=kepLista
        this.szuloElem=szuloElem
        this.#kartyakatMegjelenit(kepLista)
    }
    #kartyakatMegjelenit(kepek){
        kepek.forEach(e => {
            new Kartya(e,this.szuloElem)
        });
    }
}