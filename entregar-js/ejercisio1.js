let nombre = prompt ("cual es tu nombre");
let producto1;
let precio1;
let producto2;
let precio2;
let producto3;
let precio3;
let producto4;
let precio4;
producto1= prompt("digite producto a comparar");
precio1= parseInt( prompt("digite el precio de el producto1"));

console.log(producto1,precio1);
producto2= prompt("digite producto a comparar");
precio2= parseInt( prompt("digite el precio de el producto2"));

console.log(producto2,precio2);
producto3= prompt("digite producto a comparar");
precio3= parseInt( prompt("digite el precio de el producto3"));


console.log(producto3,precio3);
producto4= prompt("digite producto a comparar");
precio4= parseInt( prompt("digite el precio de el producto4"));


console.log(producto4,precio4);

let subtotal = (precio1 + precio2 + precio3 + precio4);
let iva = (subtotal*0.19);
let descuento = (subtotal* 0.10);
let total = (subtotal + iva - descuento);
console.log(" el subtotal de la compra es: " , subtotal);
console.log(" el iva de los productos es:", iva);
console.log(" el decuento de la factura es:", descuento);
console.log(" el total a pagar por el señor:",nombre,"de la factura es:", total);

