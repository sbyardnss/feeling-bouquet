import { fetchDistributors, fetchFlowers, fetchNurseries, fetchRetailers } from "./dataAccess.js"
import { Bouquet } from "./Feeling-Bouquet.js"


const mainContainer = document.querySelector("#container")


const render = () => {
    fetchFlowers()
    .then(()=> fetchDistributors())
    .then(()=> fetchNurseries())
    .then(()=> fetchRetailers())
    .then(
        () => {
            mainContainer.innerHTML = Bouquet()
        }
    )
}
render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})