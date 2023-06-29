
moteros=[];
let numero= parseInt(prompt("ingresa un numero"))

for ( let i=0; i<numero; i++){
    motero1={
        nombre:prompt("ingresa tu nombre"),
        moto: prompt("ingresa tu moto")
    }
    moteros.unshift(motero1)
}
console.table(moteros)


