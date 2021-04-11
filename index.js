const {readInput, inquirerMenu, pause} = require("./helpers/inquirer");


const main = async () => {

    let menuOpt;

    do {

        menuOpt = await inquirerMenu()
        console.log({ menuOpt })


        if (menuOpt !== 0) await pause()

    } while (menuOpt !== 0)

}



main()