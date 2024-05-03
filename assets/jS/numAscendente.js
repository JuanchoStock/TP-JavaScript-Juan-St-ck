//Escribe un programa que pida al usuario tres números y luego los muestre
//en orden ascendente.
prompt (parseFloat('Ingrese 3 numero para descubrir el orden Ascendente'))

let num1= prompt (parseFloat('Ingrese el primer Número'));
let num2= prompt (parseFloat('Ingrese el segundo Número'));
let num3= prompt (parseFloat('Ingrese el tercer Número'));

if (num1>num2 && num1>num3 && num2>num3){
    console.log('El orden ascendente de los numeros es: ', num1 , num2 , num3)
}
else{
    ('Cualquier valor')
}