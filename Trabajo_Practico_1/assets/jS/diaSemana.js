//Escriba un programa que pida al usuario un número del 1 al 7 y luego
//muestre el día de la semana correspondiente (1 para "Lunes", 2 para
//"Martes", etc.).

let dia = parseInt(prompt('Ingrese un numero para saber que día de la semana es: '));


switch (dia) {
    case dia = 1:
        console.log('Lunes')
    break;
    case dia = 2:
        console.log('Martes')
    break;
    case dia = 3:
        console.log('Miercoles')
    break;
    case dia = 4:
        console.log('Jueves')
    break;
    case dia = 5:
        console.log('Viernes')
    break;
    case dia = 6:
        console.log('Sábado')
    break;
    case dia = 7:
        console.log('Domingo')
    break;
    
    default:
    console.log('El valor ingresado no es valido.')
    break;
}