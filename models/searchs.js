const axios = require('axios');


class Searchs {

    history = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor() {
        // TODO: Read DB If Exists
    }

    async citySearch(site = '') {

        try {
            // Peticion http
            // console.log('Ciudad:', site)
            const {data} = await axios.get('https://reqres.in/api/users?page=2')
            console.log(data)

            return []; // Devolver los lugares que coincidan con "site"
        } catch (err) {
            return [];
        }
    }

}




module.exports = Searchs