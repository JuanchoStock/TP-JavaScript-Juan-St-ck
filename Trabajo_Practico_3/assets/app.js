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
//Arreglo que voy a recorrer.
let lista = [];

//1 Agregar una tarea.
list.push(1);

//2 Listar el arreglo.

for (let i = 0; i < list.length; i++) {
    // Haciendo uso del contador "i", vamos recorriendo las posiciones del array.
    console.log(list[i])
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