const axios = require('axios');


class Searchs {

    history = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor() {
        // TODO: Read DB If Exists
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiY3Jpc3RpYW5yZzM2IiwiYSI6ImNrbmR1Z2Q4ZzAweW0yb253MWNlcDl1Y3QifQ.oTLxrkDNIgPBGKpBxEshqg',
            'limit': 5,
            'language': 'es'
        }
    }

    async citySearch(site = '') {

        try {
            // Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ site }.json`,
                params: this.paramsMapbox
            })

            const { data } = await instance.get();


            console.log(data)

            return []; // Devolver los lugares que coincidan con "site"
        } catch (err) {
            return [];
        }
    }

}




module.exports = Searchs