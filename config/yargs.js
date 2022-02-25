const argv = require ('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.base)) {
            throw 'la base tiene que ser numerico';

        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option ('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'hasta que numero quiere la tabla'
    })
    .argv;

module.exports =  argv;
