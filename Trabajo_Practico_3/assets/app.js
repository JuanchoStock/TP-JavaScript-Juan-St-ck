/*
1. Agregar Tarea: El usuario podrá agregar una nueva tarea a la lista
proporcionando un nombre para la tarea.

2. Listar Tareas: El usuario podrá ver todas las tareas actualmente en la lista.

3. Editar Tarea: El usuario podrá modificar el nombre de una tarea existente en la
lista.

4. Eliminar Tarea: El usuario podrá eliminar una tarea de la lista.
*/


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
    const indice = tareas.indexOf (nomTar);
    if (indice !== -1){
        tareas.splice(indice, 1);
        alert('Se eliminó tarea.')
    }
    else{
        alert('La tarea que desea eliminar, no se encuentra en la lista')
    }
}

let tareas = [];
/* Expresion regular que valida que no contenga espacios en blanco al principio o al final ni que este vacio.*/
const regex = /^\S+$/
/* Menu de opciones */
let menu = prompt(' - Menú de Opciones - \n 1 - Agregar Tarea.\n 2 - Listar Tareas. \n 3 - Editar Tarea.\n 4 - Eliminar Tarea.\n 0 - Salir')


while (menu !== "0"){
    if(menu.trim() === "" || isNaN(menu) || parseInt(menu)< 0 || parseInt(menu)>4)
        {
            alert('La Opción ingresada No es valida. Intente denuevo.')
        }
    
    else{
        switch(parseInt(menu)){
            case 1:
                nomTar = prompt('Ingrese el nombre de la Tarea: ');
                if (regex.test(nomTar) && isNaN(nomTar)){
                    agregarTareas(nomTar);
                }else{
                    alert('El Nombre de la tarea no puede ser vacio o un número o símbolo.');
                }
                break;
                case 2:
                    if (tareas.length > 0){
                        listarTareas();
                    }else{
                        alert('La lista esta vacía, ingrese una tarea.')
                    }
                    break;
                    case 3:
                        if (tareas.length > 0){
                            nomTar = prompt('Ingrese nombre de la tarea que quiere editar: ');
                            const indice = tareas.indexOf(nomTar);
                            if (indice !== -1){
                                nuevaTar = prompt('Ingrese el nuevo nombre de la tarea.');
                                if (nuevaTar.trim() !== ""){
                                    editarTarea(nomTar, nuevaTar);
                                }else{
                                    alert('En nombre de la tarea no puede ser vacío.')
                                }
                            }else{
                                alert('No se encontro esa Tarea en la lista.')
                            }
                        }else{
                            alert('No hay tareas por editar.');
                        }
                        break;

                        case 4:
                            if(tareas.length > 0){
                                nomTar = prompt ('Ingrese el nombre de la tarea que desea eliminar.');
                                if (nomTar.trim() !== "" && regex.test(nomTar) && isNaN(nomTar)){
                                    eliminarTarea(nomTar);
                                }else{
                                    alert('El nombre de la tarea que desea eliminar no puede estar vacío.')
                                }
                            }else{
                                alert('La lista esta vacía, no hay tareas para eliminar.');
                            }
                            break;
                            default:
                                break;
        }
    }
    menu = prompt(' - Menú de Opciones - \n 1 - Agregar Tareas.\n 2 - Listar Tarea. \n 3 - Editar Tarea.\n 4 - Eliminar Tarea.\n 0 - Salir')
}
