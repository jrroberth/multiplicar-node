const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimi en consola tabla', opts)
    .command('crear', 'crea archivo tabla', opts)
    .help()
    .argv;


module.exports = {
    argv
}