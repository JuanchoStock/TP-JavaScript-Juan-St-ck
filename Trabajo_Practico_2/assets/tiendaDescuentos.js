// Una tienda aplica un descuento del 15% para las compras que incluyan 10
// artículos o más iguales cuyo precio total sea superior a 20000 pesos. Tu programa
// debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y
// el precio. Tener en cuenta que, solo se pueden ingresar números mayores a 1, y
// además, si la cantidad y el monto supera lo establecido, el descuento deberá
// aplicarse al precio total para luego mostrar en pantalla un mensaje que lo
// confirme. De lo contrario, indicar que no se superó la cantidad o el precio, según
// corresponda.

let cant_art = parseInt(prompt('Ingrese la cantidad de articulos que lleva: '))
let precio_uni = parseInt(prompt('Ingrese el precio unitario del articulos que lleva: '))

pre_total = (cant_art * precio_uni);

if(isNaN(cant_art) || (1>cant_art)){
    alert('El valor ingresado para los artículos no es válido ! ')
}
if(isNaN(precio_uni) || (1>cant_art)){
    alert('El valor ingresado para el precio no es válido ! ')
}

switch (true) {
    case pre_total >= 20000 && cant_art >=10:
        pre_desc = pre_total - (pre_total * 0.15)
        console.log('El precio total a pagar CON descuento es de: ', '$'+pre_desc)
        break;

        case pre_total >= 20000 && cant_art < 10:
        console.log('El total No tiene descuento, importe a pagar: ', '$'+ pre_total)
        break;

        case pre_total < 20000 && cant_art >= 10:
        console.log('El total No tiene descuento, porque no supera los $20000 : ', 'Debe pagar $'+ pre_total)
        break;

}