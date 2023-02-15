const applicationState = {
    flowers: [],
    retailers: [],
    distributors: [],
    nurseries: []
}

const API = "http://localhost:8088"

export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
    .then(response => response.json())
    .then(
        data => {
            applicationState.flowers = data
        }
    )
}

export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
    .then(response => response.json())
    .then(
        data => {
            applicationState.retailers = data
        }
    )
}

export const fetchDistributors = () => {
    return fetch(`${API}/distributors`)
    .then(response => response.json())
    .then(
        data => {
            applicationState.distributors = data
        }
    )
}

export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
    .then(response => response.json())
    .then(
        data => {
            applicationState.nurseries = data
        }
    )
}

export const getFlowers = () => {
    return applicationState.flowers.map(f => ({...f}))
}

export const getDistributors = () => {
    return applicationState.distributors.map(d => ({...d}))
}

export const getRetailers = () => {
    return applicationState.retailers.map(r => ({...r}))
}

export const getNurseries = () => {
    return applicationState.nurseries.map(n => ({...n}))
}