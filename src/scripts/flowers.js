import { getFlowers } from "./dataAccess.js"

const convertFlowersToListItem = (obj) => {
    let html = ""
    html += `<li id="flowerListItem" value="flower--${obj.id}">${obj.color} ${obj.name}</li>`
    return html
}


export const Flowers = () => {
    const flowers = getFlowers()
    let html = `
    <ul id=flowerList>
        ${
            flowers.map(convertFlowersToListItem).join("")
        }
    </ul>
    `
    return html
}