const applicationState = {
    flowers: []
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


export const getFlowers = () => {
    return applicationState.flowers.map(flower => ({...flower}))
}