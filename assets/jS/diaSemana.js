//Escriba un programa que pida al usuario un número del 1 al 7 y luego
//muestre el día de la semana correspondiente (1 para "Lunes", 2 para
//"Martes", etc.).

let dia= prompt (parseFloat('Ingrese un numero para saber que día de la semana es: '));


switch (dia) {
    case valor1:
        console.log('Lunes')
      [break;]
    case valor2:
        console.log('Martes')
      [break;]
      case valor3:
        console.log('Miercoles')
      [break;]
    case valor4:
        console.log('Jueves')
      [break;]
      case valor5:
        console.log('Viernes')
      [break;]
    case valor6:
        console.log('Sábado')
      [break;]
      case valor7:
        console.log('Domingo')
      [break;]
    
    default:
      console.log('El valor ingresado no es valido.')
      [break;]
  }