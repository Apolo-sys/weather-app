const inquirer = require('inquirer');
require('colors');


const menuQuestions = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }
];




const inquirerMenu = async () => {

    console.clear()
    console.log('========================='.green);
    console.log('  Seleccione una opcion'.white)
    console.log('=========================\n'.green);

    const { opt } = await inquirer.prompt(menuQuestions)

    return opt
}

const pause = async () => {

    const pauseInfo = [
        {
            type: 'input',
            name: 'enter',
            message: `Pulsa ${'ENTER'.green} para continuar.`
        }
    ]

    console.log('\n')
    await inquirer.prompt(pauseInfo)
}

const readInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc }  = await inquirer.prompt(question);
    return desc
}

const listTaskErase = async( tasks = [] ) => {

    const choices = tasks.map( (task, index) => {

        const idx = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${ idx } ${task.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions)
    return id

                // {
                //     value: tarea.id,
                //         name: `${'1.'.green} Crear tarea`
                // },


}

const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await (inquirer.prompt(question))

    return ok

}

const showListChecklist = async( tasks = [] ) => {

    const choices = tasks.map( (task, index) => {

        const idx = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${ idx } ${task.desc}`,
            checked: ( task.finishedOn )
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question)
    return ids

    // {
    //     value: tarea.id,
    //         name: `${'1.'.green} Crear tarea`
    // },


}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTaskErase,
    confirm,
    showListChecklist
}