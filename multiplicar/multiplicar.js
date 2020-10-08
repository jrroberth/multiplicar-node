//clase requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('============'.yellow);
    console.log(`tabla del ${ base } al ${ limite }`.yellow);
    console.log('==========='.yellow);
    for (let i = 1; i <= limite; i++) {
        let data = '';
        data += (`${ base } * ${ i } = ${ base * i } \n`);
        console.log(data);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL base no es numero ${ base }`);
            return;
        }
        if (!Number(limite)) {
            reject(`EL limite no es numero ${ limite }`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}