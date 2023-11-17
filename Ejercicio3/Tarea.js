const ps = require('prompt-sync');
const prompt = ps();

function Tarea(nombre, estado, vencimiento, dificultad) {
    let nombrePrivado = '' || nombre;
    let descripcionPrivada = '' ;
    let estadoPrivado = '' || estado;
    let creacion = new Date();
    let ultimaEdicion = creacion || ultimaEdicion;
    let vencimientoPrivado = '' || vencimiento;
    let dificultadPrivada = '' || dificultad;
  

    // Getter y Setter para el Nombre
    this.getNombre = function() {
      return nombrePrivado;
    };
  
    this.setNombre = function() {
      let nuevoNombre = prompt('Ingrese el nombre de la tarea: ');
      while (nuevoNombre.trim() == '') {
        nuevoNombre=prompt('El nombre no puede estar vacío.');
      }
        nombrePrivado = nuevoNombre;
        ultimaEdicion = new Date();
    };
  
  
    // Getter y Setter para el Estado
    this.getEstado = function() {
      return estadoPrivado;
    };
  
    this.setEstado = function() {
      let nuevoEstado = prompt('Ingrese el estado de la tarea (Pendiente/En curso/Terminada/Cancelada): ');
      while (nuevoEstado!== 'Pendiente' && nuevoEstado!== 'En curso' && nuevoEstado!== 'Terminada' && nuevoEstado!== 'Cancelada'){
        nuevoEstado = prompt('Estado no válido. Debe ser Pendiente, En curso, Terminada o Cancelada.');
      }
        estadoPrivado = nuevoEstado;
        ultimaEdicion = new Date();
    };

    // Getter y Setter para la Descripción
    this.getDescripcion = function() {
      return descripcionPrivada;
    };

    this.setDescripcion = function() {
      let nuevaDescripcion = prompt('Ingrese la descripción de la tarea: ');
      descripcionPrivada = nuevaDescripcion;
      ultimaEdicion = new Date();
    };
  
    // Getter y Setter para la Creación
    this.getCreacion = function() {
      return creacion;
    };
  
    // Getter y Setter para la Última Edición
    this.getUltimaEdicion = function() {
      return ultimaEdicion;
    };
  
    // Getter y Setter para el Vencimiento
    this.getVencimiento = function() {
      return vencimientoPrivado;
    };
  
    this.setVencimiento = function() {
      let nuevoVencimiento = prompt('Ingrese la fecha de vencimiento (YYYY-MM-DD): ');
      vencimientoPrivado = nuevoVencimiento;
      ultimaEdicion = new Date();
    };
  
    // Getter y Setter para la Dificultad
    this.getDificultad = function() {
      return dificultadPrivada;
    };
  
    this.setDificultad = function() {
      let nuevaDificultad = prompt('Ingrese la dificultad de la tarea (Facil/Medio/Dificil): ');
      while (nuevaDificultad!= "Facil" && nuevaDificultad!= "Medio" && nuevaDificultad!= "Dificil") {
        nuevaDificultad = prompt('Dificultad no válida. Debe ser Facil, Medio o Dificil.');
      }
        dificultadPrivada = nuevaDificultad;
        ultimaEdicion = new Date();
      
    };
    verDetallesTarea = function (tareas) {
      let indiceTarea = parseInt(prompt('Selecciona el número de la tarea para ver detalles: '));
      if (indiceTarea < 1 || indiceTarea > tareas.length) {
        console.log('Opción no válida.');
        return;
      } else {
        indiceTarea=indiceTarea-1;
        let tareaSeleccionada = tareas[indiceTarea];
        console.log('\n Detalles de la Tarea:');
        console.log(`  Título: ${tareaSeleccionada.getNombre()}`);
        console.log(`  Descripción: ${tareaSeleccionada.getDescripcion()}`);
        console.log(`  Estado: ${tareaSeleccionada.getEstado()}`);
        console.log(`  Creación: ${tareaSeleccionada.getCreacion()}`);
        console.log(`  Última Edición: ${tareaSeleccionada.getUltimaEdicion()}`);
        console.log(`  Vencimiento: ${tareaSeleccionada.getVencimiento()}`);
        console.log(`  Dificultad: ${tareaSeleccionada.getDificultad()}`);
    }
    
    }
  }
  module.exports=Tarea;