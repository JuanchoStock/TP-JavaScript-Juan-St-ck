/*
1. Agregar Tarea: El usuario podrá agregar una nueva tarea a la lista
proporcionando un nombre para la tarea.

2. Listar Tareas: El usuario podrá ver todas las tareas actualmente en la lista.

3. Editar Tarea: El usuario podrá modificar el nombre de una tarea existente en la
lista.

4. Eliminar Tarea: El usuario podrá eliminar una tarea de la lista.
*/

while (n =! 0){
    console.log(' - Menú de Opciones - ')
    console.log(' 1 - Listar Tareas.')
    console.log(' 2 - Agregar Tarea.')
    console.log(' 3 - Editar Tarea.')
    console.log(' 4 - Eliminar Tarea.')
    console.log(' 0 - Salir.')
    if(n === 0){
        console.log('Salir')
    }
    else if(n<1 || n>5){
        console.log('Opción ingresada Incorrecta.')
    }
}