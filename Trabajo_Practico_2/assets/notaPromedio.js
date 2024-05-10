// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso
// y calcule la nota promedio. Tener en cuenta que, solo se pueden ingresar números
// del 1 al 10 . El resultado que dará será el siguiente:
//- 'Nota Insuficiente' si la el promedio está entre 1 y 3,
//- 'Nota Regular' si está entre 4 y 5,
//- 'Nota Buena' si está entre 6 y 7,
//- 'Nota Muy Buena' si está entre 8 y 9 y
//- 'Nota Sobresaliente' si es igual a 10.

let nota1 = parseInt(prompt('Ingrese la nota del primer Trimestre: '))
let nota2 = parseInt(prompt('Ingrese la nota del Segundo Trimestre: '))
let nota3 = parseInt(prompt('Ingrese la nota del Tercer Trimestre: '))

//nota promedio.
notaprom = Math.floor((nota1 + nota2 + nota3) / 3);

// Validacion de las notas.
if(isNaN(nota1) || (1>nota1 || nota1>10)){
    alert('El valores ingresados en NOTA 1 no es valido ! ')
} 
else if(isNaN(nota2) || (1>nota2 || nota2>10)){
    alert('El valores ingresados en NOTA 2 no es valido ! ')
}
else if(isNaN(nota3) || (1>nota3 || nota3>10)){
    alert('El valores ingresados en NOTA 3 no es valido ! ')
}
else{
    //Mensaje de promedio. 

if(notaprom>=1 && notaprom<= 3){
    console.log('Nota Insuficiente.')
    console.log('La nota promedio es: ', notaprom)
}
else if(notaprom>=4 && notaprom<= 5){
    console.log('Nota Regular.')
    console.log('La nota promedio es: ', notaprom)
}
else if(notaprom>=6 && notaprom<= 7){
    console.log('Nota buena! ')
    console.log('La nota promedio es: ', notaprom)
}
else if(notaprom>=8 && notaprom<= 9){
    console.log(' Nota Muy Buena.')
    console.log('La nota promedio es: ', notaprom)
}
else if(notaprom == 10){
    console.log('Nota Sobresaliente !! ')
    console.log('La nota promedio es: ', notaprom)
}
}




