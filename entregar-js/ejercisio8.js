let numero= parseInt( prompt("ingrese un numero de 1 a 12"));
let mes1= "enero"
let mes2= "febrero"
let mes3= "marzo"
let mes4= "abril"
let mes5= "mayo"
let mes6= "junio"
let mes7= "julio"
let mes8= "agosto"
let mes9= "septimebre"
let mes10= "octubre"
let mes11= "noviembre"
let mes12= "diciembre"


let enero =31
 let febrero=28
 let marzo= 31
 let abril= 30
 let mayo=31
 let junio= 30
 let julio= 31
 let agosto=31
 let septiembre= 30
 let octubre= 31
 let noviembre=30
 let diciembre=31

if(numero ==1 ){
    console.log(`el mes ${mes1}  tiene ${enero} dias` )
    
 }else if (numero==2){
     console.log(`el mes  ${mes2} tiene ${febrero}   dias`)
}else if (numero==3){
    console.log(`el mes  ${mes3} tiene ${marzo}  dias`)
}else if (numero==4){
    console.log(`el mes ${mes4} tiene ${abril}  dias`)
}else if (numero==5){
    console.log(`el mes  ${mes5} tiene ${mayo}  dias`)
}else if (numero==6){
    console.log(`el mes  ${mes6} tiene ${junio}  dias`)
}else if (numero==7){
    console.log(`el mes ${mes7} tiene ${julio}  dias`)
}else if (numero==8){
    console.log(`el mes  ${mes8} tiene ${agosto}  dias`)
}else if (numero==9){
    console.log(`el mes  ${mes9} tiene ${septiembre}  dias`)
}else if (numero==10){
    console.log(`el mes ${mes10} tiene ${octubre}  dias`)
}else if (numero==11){
    console.log(`el mes  ${mes11} tiene ${noviembre}   dias`)
}else if (numero==12){
    console.log(`el mes  ${mes12} tiene ${diciembre}  dias y es epoca de navidad`)
}  

if ( numero== 1 ||numero== 2 ||numero== 3){
    console.log(" es invierno")
    console.log(`los meses de invierno son : ${mes1} ${mes2} ${mes3}`)
}else if  (numero== 4 ||numero== 5){
    console.log(" primavera")
    console.log(`los meses de primavera son : ${mes4} ${mes5}`)
}else if  (numero==6 || numero== 7||  numero==8){
    console.log(" es verano")
    console.log(`los meses de verano son : ${mes6} ${mes7} ${mes8}`)
}else if(numero==9 || numero==10 || numero==11 || numero==12){
    console.log(" es otoño")
    console.log(`los meses de otoño son : ${mes9} ${mes10} ${mes11} ${mes12}`)
}
if (numero>=13){
    console.log("este numero nos es valido")
}
