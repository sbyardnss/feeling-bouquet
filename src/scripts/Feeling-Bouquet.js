import { Flowers } from "./flowers.js"


export const Bouquet = () => {
    let html = `
    <article id="flowers">
        <section id="flowerList">
            <h2>Flowers</h2>
            ${Flowers()}
        </section>
    </article>`
    return html
}