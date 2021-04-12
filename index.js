require('dotenv').config()

const Searchs = require("./models/searchs");
const colors = require("colors")
const {readInput, inquirerMenu, pause, listSites} = require("./helpers/inquirer");


const main = async () => {

    const searchs = new Searchs()
    let menuOpt;

    do {

        menuOpt = await inquirerMenu()
        searchs.readDB()

        switch ( menuOpt ) {

            case 1:
                // Show Message
                const searchTerm = await readInput('Ciudad:');

                // Search Sites
                const sites = await searchs.citySearch(searchTerm)

                // Selects One Site
                const selectedId = await listSites(sites);
                if ( selectedId === '0' ) continue;


                const selectedSite = sites.find( l => l.id === selectedId );
                // Save On DB

                searchs.addHistory( selectedSite.name )
                await pause()

                // Get Weather
                const weather = await searchs.getSiteWeather(selectedSite.lat, selectedSite.lng)

                // Show Info
                console.clear()
                console.log("\nInformación de la ciudad\n".green);
                console.log("Ciudad:", selectedSite.name);
                console.log('Lat:', selectedSite.lat);
                console.log('Lng:', selectedSite.lng);
                console.log('Temperatura:', weather.temp);
                console.log('Minima:', weather.min);
                console.log('Maxima:', weather.max);
                console.log('Estado:', weather.desc)

            break;

            case 2:

                searchs.hisoryCap.forEach( (site, index) => {
                    const idx = `${ index + 1 }.`.green
                    console.log( `${ idx } ${ site }` )
                })

            break;
        }


        if ( menuOpt !== 0) await pause()

    } while (menuOpt !== 0)

}



main()