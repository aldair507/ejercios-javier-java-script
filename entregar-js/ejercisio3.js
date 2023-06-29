alert ("registro motoviajero")
let nombremotoviajero=prompt("ingrese su nombre");
let apellidomotoviajero=prompt("ingrese su apellido");
let correomotoviajero=prompt("ingrese tu correo");
let telefonomotoviajero=prompt("ingrese numero de telefono");
let generomotoviajero=prompt("ingrese genero");


const motoviajero={
        nombre: nombremotoviajero,
        apellido:apellidomotoviajero,
        correo:correomotoviajero,
        telefono:telefonomotoviajero,
        genero:generomotoviajero
}
console.log(motoviajero);
alert ("ruta");
let puntoinicio=prompt("ingrese punto de partida");
let parada1=prompt("ingrese su primer punto de parada");
let parada2=prompt("ingrese sun segunda parada");
let puntollegada=prompt("indique punto de llegada");
let fechaviaje=("fecha de el viaje");


const ruta={
        inicio:puntoinicio,
        parada_1:parada1,
        parada_2:parada2,
        llegada: puntollegada,
        fecha:fechaviaje
}
console.log(ruta);

alert ("mis gastos");
let combustible= parseInt (prompt("ingrese gasto de combustible"));
let restaurantes= parseInt (prompt("ingrese gasto de restaurantes"));
let recreacion= parseInt (prompt("ingrese gasto de recreacion"));
let hospedaje= parseInt (prompt("indique gasto de hospedaje"));
let otros= parseInt (prompt("otros gastos"));

const gastos={
        combust:combustible,
        restaurant: restaurantes,
        recreac: recreacion,
        hosped:hospedaje,
        otr:otros
}
console.log(gastos);
totalgastos= combustible+restaurantes+recreacion+hospedaje+otros;
console.log(`mi gasto en esta ruta fue: ${totalgastos}`);
console.log(`mis gastos en combustible fue:${combustible}`);
console.log(`mis gastos en hospedaje fue: hospedaje:${hospedaje}`);
console.log(`mis gastos en recreacion fue: recreacion:${recreacion}`);
console.log(`mis gastos en otros fue: otros${otros}`);

console.log(`motoviajero:${motoviajero}`);
console.log(`puntoinicio: ${puntoinicio}`);
console.log(`primera parada ${parada1}`);
console.log(`segunda parada ${parada2}` );
console.log(`total gastos ${totalgastos}`);