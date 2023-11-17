const ps = require('prompt-sync');
const prompt = ps();
const Tarea = require('./Tarea.js');
const agregarTarea = require('./programaTareas.js');
const buscarTarea = require('./programaTareas.js');
const verTareas = require('./programaTareas.js');
const programaTareas = require('./programaTareas.js');

function generarInterfaz(){
    console.log('Hola Olivia \n'
    +  ' Que deberias hacer? \n'
    
    +  ' 1. Ver mis Tareas \n'
    +  ' 2. Buscar una Tarea \n'
    +  ' 3. Agregar una Tarea \n'
    +  ' 4. Salir \n'
    );
  }

 let tarea = new Tarea();
let tareas= [];
  generarInterfaz();
  let opcion=parseInt(prompt(''));
  while(opcion!=4){
  switch(opcion){
      case 1:
          programaTareas.verTareas();
          break;
      case 2:
          console.log('Buscar tarea');
         programaTareas.buscarTarea();
          break;
      case 3:
        programaTareas.agregarTarea();
          break;
      case 4:
          console.log('Salir');
          break;
      default:
          console.log('Opcion no valida');
          break;
  }
  module.exports=tareas;
  generarInterfaz();
  opcion=parseInt(prompt(''));
}