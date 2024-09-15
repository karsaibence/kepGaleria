export default function clearActiveTag(lista) {
    lista.forEach(e => {
        $(`kep${e.id}`).classList.remove()
    });
}

export function setActiveTag(id) {
    $("div").classList.add("active")
}