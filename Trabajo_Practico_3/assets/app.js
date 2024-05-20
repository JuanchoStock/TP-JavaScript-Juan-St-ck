/*
1. Agregar Tarea: El usuario podrá agregar una nueva tarea a la lista
proporcionando un nombre para la tarea.

2. Listar Tareas: El usuario podrá ver todas las tareas actualmente en la lista.

3. Editar Tarea: El usuario podrá modificar el nombre de una tarea existente en la
lista.

4. Eliminar Tarea: El usuario podrá eliminar una tarea de la lista.

// Expresion regular que valida que no contenga espacios en blanco al principio o al final ni que este vacio.
const regex = /^\S+$/
*/

let menu = prompt(' - Menú de Opciones - \n 1 - Listar Tareas.\n 2 - Agregar Tarea. \n 3 - Editar Tarea.\n 4 - Eliminar Tarea.\n 0 - Salir')


// 1 - Agregar una tarea.
function agregarTareas(nomTar){
    tareas.push(nomTar)
    //console.log para probar
}

// 2 - Listar el arreglo.
function listarTareas(){
    let msj = "";
    for (let i = 0; i < tareas.length; i++) {
    // Haciendo uso del contador "i", vamos recorriendo las posiciones del array.
    msj += tareas[i] + "\n";
    }
    alert(msj);
}

// 3 - Editar una Tarea.
function editarTarea(nomTar, nuevaTar){
    const indice = tareas.indexOf(nomTar);
    if(indice !== -1){
        tareas[indice] = nuevaTar;
        alert("Se editó nombre de Tarea.");
    }
    else{
        alert('La tarea que desea editar, no se encuentra en la lista.')
    }
}

// 4 - 
function eliminarTarea(nomTar){
    const indice = tarea.indexOf (nomTar);
    if (indice !== -1){
        tareas.splice(indice, 1);
        alert('Se eliminó tarea.')
    }
    else{
        alert('La tarea que desea eliminar, no se encuentra en la lista')
    }
}

/*
menu()
while (n =! 0){
    menu()
    if(n === 0){
        console.log('Salir')
    }
    else if(n<1 || n>5){
        console.log('Opción ingresada Incorrecta.')
    }
}*/