import { getRetailers, getDistributors, getNurseries, getFlowers } from "./dataAccess.js";


const convertRetailersToListItem = (obj) => {
    let html = ""
    html += `<li id="retailerListItem" value="retailer--${obj.id}"><div>${obj.name}</div><div>Offers: ${retailerFlowers(obj)}<div>${obj.address}, ${obj.city}, ${obj.state}</div><div>Distributor: ${distributorMatcher(obj).name}</div><div>Sourced from: ${nurseryToRetailer(obj).map(n => n.name).join(" and ")}</li>`
    return html
}

const distributorMatcher = (obj) => {
    const distributors = getDistributors()
    const matchedDistributor = distributors.find(dist => obj.distributorId === dist.id)
    return matchedDistributor
}

const nurseryToRetailer = (obj) => {
    const nurseries = getNurseries()
    let matchedNurseriesArray = []
    const matchedDistributor = distributorMatcher(obj)
    for (const nursery of nurseries) {
        if (matchedDistributor.nurseryId.includes(nursery.id)) {
            matchedNurseriesArray.push(nursery)
        }
    }
    return matchedNurseriesArray
} 

const retailerFlowers = (obj) => {
    const flowers = getFlowers()
    let matchedNurseriesArray = nurseryToRetailer(obj)
    let matchedFlowersArray = []
    for (const match of matchedNurseriesArray) {
        // matchedFlowersArray = flowers.filter(flower => match.flowers.includes(flower.id))
        for (const flower of flowers) {
            if (match.flowers.includes(flower.id)) {
                matchedFlowersArray.push(flower)
            }
        }
    }
    const uniqueFlowers = [...new Set(matchedFlowersArray)]
    return uniqueFlowers.map(n => n.color + " " + n.name).join(" and ")
}



export const Retailers = () => {
    const retailers = getRetailers()
    let html = `
    <ul id=retailerList>
        ${
            retailers.map(convertRetailersToListItem).join("")
        }
    </ul>
    `
    return html
}