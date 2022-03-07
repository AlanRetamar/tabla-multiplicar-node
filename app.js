const argv = require('./config/yargs').argv
const colors = require('colors');
const {
    listarArchivo,
    crearArchivo
} = require('./multiplicar/multiplicar')

let argv2 = process.argv

let comando = argv._[0]


switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}