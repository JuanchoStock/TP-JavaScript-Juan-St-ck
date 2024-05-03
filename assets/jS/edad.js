//Escribe un programa que pida al usuario su edad y luego le diga en qué
//rango de edad se encuentra: niño (0-12), adolescente (13-19), adulto
//(20-59), o adulto mayor (60 o más).

let edad= prompt (parseFloat('Ingrese una edad'));

if (edad>=0 && edad<=12){
    console.log('La edad es de un niño.')
}
    else if(edad>=13 && edad<=19){
        console.log('La edad es de un Adolescente.')
    }
    else if(edad>=20 && edad<=59){
        console.log('La edad es de un Adulto.')
    }
    else if(edad>= 60){
        console.log('La edad es de un Adulto Mayor.')
    }
    else{
        console.log('El valor ingresado es incorrecto.')
    }
    