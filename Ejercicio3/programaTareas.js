const Tarea = require('./Tarea.js');
let tareas = require('./main.js');
tareas=[];
const ps = require('prompt-sync');
const prompt = ps();


function programaTareas() {
    this.tareas = [];
  } 

  //Funcion para Agregar Tarea Nueva
programaTareas.agregarTarea = function () {
    let nuevaTarea = new Tarea();
    nuevaTarea.setNombre();
    nuevaTarea.setEstado();
    nuevaTarea.setVencimiento();
    nuevaTarea.setDificultad();
   // console.log('Tarea agregada:', nuevaTarea); No puedo acceder directamente a las tareas con "nueva tarea" porque los atributos son privados gracias al Encapsulamiento (en consola aprecen como Anonimos)
    console.log('Tarea agregada:', nuevaTarea.getNombre()); 
    console.log('Estado:', nuevaTarea.getEstado());
    console.log('Vencimiento:', nuevaTarea.getVencimiento());
    console.log('Dificultad:', nuevaTarea.getDificultad());
    console.log('Creacion:', nuevaTarea.getCreacion());
    console.log('Ultima Edicion:', nuevaTarea.getUltimaEdicion());

   tareas.push(nuevaTarea);
    }

   //Funcion para Ver Tareas 
programaTareas.verTareas = function () {
      if (tareas.length === 0) {
        console.log('No hay tareas para mostrar.');
        return;
      }
    
      console.log('Que tareas desea ver? \n' +
        ' 1. Todas \n' +
        ' 2. Pendientes \n' +
        ' 3. En curso \n' +
        ' 4. Terminadas \n' +
        ' 0. Volver \n');
    
      let decision = parseInt(prompt(''));
      switch (decision) {
        case 1:
          if (tareas.length > 0) {
          console.log('Todas las tareas \n');
          console.log("\n");
          tareas.forEach((tarea, index) => {
            console.log(index + 1 + ".", tarea.getNombre());
            console.log("\n");
          });
          verDetallesTarea(tareas);
        } else {
          console.log('No hay tareas para mostrar.');
          return;
        }
          break;
        case 2:
          console.log('Tareas pendientes');
          let tareasPendientes = tareas.filter(tarea => tarea.getEstado() == 'Pendiente');
          if(tareasPendientes.length>0){
          tareasPendientes.forEach((tarea, index) => {
            console.log(index + 1 + ".", tarea.getNombre());
            console.log("\n");
          });
          verDetallesTarea(tareasPendientes);
        } else {
          console.log('No hay tareas para mostrar.');
          return;
        }
          break;
        case 3:
          console.log('Tareas en curso');
          let tareasEnCurso = tareas.filter(tarea => tarea.getEstado() == 'En curso');
          if(tareasEnCurso.length>0){
          tareasEnCurso.forEach((tarea, index) => {
            console.log(index + 1 + ".", tarea.getNombre());
            console.log("\n");
          });
          verDetallesTarea(tareasEnCurso);
        } else {
          console.log('No hay tareas para mostrar.');
          return;
        }
          break;
        case 4:
          console.log('Tareas terminadas');
          let tareasTerminadas = tareas.filter(tarea => tarea.getEstado() == 'Terminada');
          if(tareasTerminadas.length>0){
          tareasTerminadas.forEach((tarea, index) => {
            console.log(index + 1 + ".", tarea.getNombre());
            console.log("\n");
          });
          verDetallesTarea(tareasTerminadas);
        } else {
          console.log('No hay tareas para mostrar.');
          return;
        }
          break;
        case 0:
          console.log('Volver');
          return;
        default:
          console.log('Opción no válida');
          break;
      }
    };


//Funcion para Buscar Tarea por nombre
programaTareas.buscarTarea = function () {
      if (tareas.length === 0) {
        console.log('No hay tareas para buscar.');
        return;
      }
    
      let cadenaBusqueda = prompt('Ingrese el título o parte del título de la tarea: ');
    
      // Filtrar las tareas cuyos títulos contienen la cadena de búsqueda
      let tareasEncontradas = tareas.filter(tarea => tarea.getNombre().includes(cadenaBusqueda));
    
      if (tareasEncontradas.length === 0) {
        console.log(`No se encontraron tareas con el título que contiene "${cadenaBusqueda}".`);
        return;
      }
    
      console.log(`Estas son las tareas relacionadas con el titulo "${cadenaBusqueda}":`);
      console.log("\n \n");
      tareasEncontradas.forEach((tarea, index) => {
        console.log(index + 1 + ".", tarea.getNombre());
        console.log("\n");
      });
      verDetallesTarea(tareasEncontradas);
    };    

module.exports = {
    programaTareas: programaTareas,
    agregarTarea: programaTareas.agregarTarea,
    verTareas: programaTareas.verTareas,
    buscarTarea: programaTareas.buscarTarea,
}
