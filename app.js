// const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();
// console.log(process.argv );
// console.log( argv );
// console.log('base : yargs', argv.b);

crearArchivo(argv.b, argv.l, argv.h)
      .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
      .catch(err => console.log(err));

//==============================================================================================
// const [ , ,arg3 = 'base=5'] = process.argv
// const [ , base = 5] = arg3.split('='); 
// console.log( base );

// const base = 5;



     /*
     Para instalar los paquete de colors se debe realizar con el comando (npm i colors)

     Para instalar nodemon solo para desarrollo  sin dependencia  se debe realizar con el siguiente
     comando (npm install nodemon --save-dev)

     Para desistanlar nodemon sin dependencia  solo para desarrollo se debe realiza con el siguiente 
     comando (npm uninstall nodemon )

     Para instlar el paquete de colors con una version especifica se usa los siguiente 
     (npm i colors@1.0.0)

     Para actualiza el paqeute de color con una version actual  se usa el siguiente comando
     (npm update )

     Para instalar el paquete de yargs se usa el siguiente comando (npm i yargs) y si queremos
     otra version se usa el mismo comando pero con el @ y el numero de version por ejemplo 
     (npm i yargs@16.2.0 )

     */