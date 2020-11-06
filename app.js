//requireds
//const fs = require('fs'); //libreria propia de node
//const fs = require('express');//no existe en la docu de node, paquete que se instala
//const fs = require('./fs');//que creamos nosotros

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando  = argv._[0];

switch( comando ){
    case 'listar':
        console.log('Listar');
        listarTabla( argv.base, argv.limite );
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo( argv.base, argv.limite )
        .then(archivo => console.log('Archivo creado: ', colors.green( archivo )))
        .catch( e => console.log(e));
        break;  
    default:
        console.log('Comando no reconocido');
}

/*let base = 5;*/ //Comentado para ejemplo de Process.Argv

/*let data = '';

for (let i = 1; i <= 10; i++){
    //let resul = base * i;
    //data += base +'*'+ i +'='+ resul; //Forma 1
    data += `${ base } * ${ i } = ${ base * i } \n`; //Forma 2
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado`);
  });*/


  
//console.log(process.argv);
//let argv2  = process.argv;

//console.log(argv.base);
//console.log('Limite ', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];



