const axios = require('axios');
const colors = require("colors");


class Searchs {

    history = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor() {
        // TODO: Read DB If Exists
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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


            return data.features.map( site => ({
                id: colors.green(site.id),
                name: site.place_name,
                lng: site.center[0],
                lat: site.center[1],


            }))

            return []; // Devolver los lugares que coincidan con "site"
        } catch (err) {
            return [];
        }
    }

    async getSiteWeather( lat, lon ) {

        try {

            // Axios Instance
            const instanced = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    lat,
                    lon,
                    'appid': process.env.OPENWEATHER_KEY,
                    'units': 'metric',
                    'lang': 'es'
                }
            })


            const { data } = await instanced.get();


            // resp.data

            return {
                desc: colors.green(data.weather[0].description),
                min: colors.green(data.main.temp_min),
                max: colors.green(data.main.temp_max),
                temp: colors.green(data.main.temp),
            }

        } catch (err) {
            console.log("ERROR: ", err);
        }

    }

}




module.exports = Searchs