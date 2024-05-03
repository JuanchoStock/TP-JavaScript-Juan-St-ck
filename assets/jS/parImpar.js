//Escriba un programa que pida al usuario un número y luego muestre si es
//par o impar.

let num = parseInt(prompt('Ingrese un número para saber si es Par o Impar'));

if (num % 2 == 0){
    console.log('El número ingresado es par')
}
    else if(num % 2 !== 0){
        console.log('El número ingresado es Impar.')
    }
    else{
        console.log('El valor ingresado es incorrecto.')
    }