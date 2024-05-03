//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente.
//prompt (parseFloat('Ingrese 3 numero para descubrir el orden Ascendente'))

let num1= parseInt(prompt('Ingrese el primer Número'));
let num2=parseInt(prompt('Ingrese el segundo Número'));
let num3= parseInt(prompt('Ingrese el tercer Número'));

if (num1>num2 && num1>num3){
    console.log('El numero 1 ingresado es el mayor.')
    if (num2>num3){
        console.log('El orden de los numeros Ascendentes es: ', num3 ,num2 , num1)
    }
    else{
        console.log('El orden de los numeros Ascendentes es: ', num2 ,num3 , num1)
    }
}
else if(num2>num1 && num2>num3){
    console.log('El numero 2 ingresado es el mayor.')
    if(num1>num3){
        console.log('El orden de los números Ascendentes es: ', num3, num1, num2)
    }
    else{
        console.log('El orden de los números Ascendentes es: ', num1, num3, num2)
    }
}
else if(num3>num1 && num3>num2){
    console.log('El numero 3 ingresado es el mayor.')
    if(num1>num2){
        console.log('El orden de los números Ascendentes es: ', num2, num1, num3)
    }
    else{
        console.log('El orden de los números Ascendentes es: ', num1, num2, num3)
    }
}
else if(num1==num2 && num1==num3){
        console.log('Los numeros ingresados son iguales.')
    }
else{
    console.log('Valores ingresados no válidos.')
}
