import { Flowers } from "./flowers.js"
import { Retailers } from "./retailers.js"


export const Bouquet = () => {
    let html = `
    <article id="flowers">
        <section id="flowerList">
            <h2>Flowers</h2>
            ${Flowers()}
        </section>
        <section id="retailers">
            <h2>Retailers</h2>
            ${Retailers()}
        </section>
    </article>`
    return html
}