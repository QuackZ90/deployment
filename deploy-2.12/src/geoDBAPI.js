import axios from "axios";


const geoDBAPI = axios.create({
    baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
    headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': '5b5da16cc8msha8a4e6d0f246d91p1f8030jsnd1513bc79539',
    }

})

export default geoDBAPI;