const Searchs = require("./models/searchs");
const {readInput, inquirerMenu, pause} = require("./helpers/inquirer");


const main = async () => {

    const searchs = new Searchs()
    let menuOpt;

    do {

        menuOpt = await inquirerMenu()

        switch ( menuOpt ) {

            case 1:
                // Show Message
                const site = await readInput('Ciudad:');
                console.log(site);

                // Search Sites

                // Selects One Site

                // Get Weather

                // Show Info
                console.log("\nInformación de la ciudad\n".green);
                console.log("Ciudad:", );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );

            break;

        }


        if (menuOpt !== 0) await pause()

    } while (menuOpt !== 0)

}



main()