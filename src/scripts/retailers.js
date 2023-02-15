import { getRetailers, getDistributors, getNurseries, getFlowers } from "./dataAccess.js";


const convertRetailersToListItem = (obj) => {
    let html = ""
    html += `<li id="retailerListItem" value="retailer--${obj.id}"><div>${obj.name}</div><div>Offers: ${retailerFlowers(obj)}<div>${obj.address}, ${obj.city}, ${obj.state}</div><div>Distributor: ${distributorMatcher(obj)}</div><div>Sourced from: ${nurseryToRetailer(obj)}</li>`
    return html
}

const distributorMatcher = (obj) => {
    const distributors = getDistributors()
    const matchedDistributor = distributors.find(dist => obj.distributorId === dist.id)
    return matchedDistributor.name
}

const nurseryToRetailer = (obj) => {
    const nurseries = getNurseries()
    const distributors = getDistributors()
    let matchedNurseriesArray = []
    const matchedDistributor = distributors.find(dist => obj.distributorId === dist.id)
    for (const nursery of nurseries) {
        if (matchedDistributor.nurseryId.includes(nursery.id)) {
            matchedNurseriesArray.push(nursery)
        }
    }
    return matchedNurseriesArray.map(n => n.name).join(" and ")
} 

const retailerFlowers = (obj) => {
    const nurseries = getNurseries()
    const distributors = getDistributors()
    const flowers = getFlowers()
    let matchedNurseriesArray = []
    let matchedFlowersArray = []
    const matchedDistributor = distributors.find(dist => obj.distributorId === dist.id)
    for (const nursery of nurseries) {
        if (matchedDistributor.nurseryId.includes(nursery.id)) {
            matchedNurseriesArray.push(nursery)
        }
    }
    for (const match of matchedNurseriesArray) {
        matchedFlowersArray = flowers.filter(flower => match.flowers.includes(flower.id))
    }

    return matchedFlowersArray.map(n => n.color + " " + n.name).join(" and ")
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