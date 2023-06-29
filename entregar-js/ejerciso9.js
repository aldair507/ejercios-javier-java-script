let i=0;
do{
    
    let numero=parseInt (prompt("ingrese un numero de el 1 a 10"));
    let saldo=5000;
    let cantidad= parseInt(prompt("ingrese cantidad a apostar")) ;
    
    if ( cantidad>saldo){
        console.log("no puedes apostar");
    } else{
        let aleatorio= Math.floor(Math.random() *11);
    console.log("numero aleatorio " + aleatorio);
    
    
    if(aleatorio==numero){
        saldo=  saldo +cantidad*3;
        console.log(`ganaste ${saldo}`)
    } else {
        saldo= saldo- cantidad ;
        console.log(`perdiste `)
        console.log(`saldo actual ${saldo}`);
        
    } if(saldo==0){
        console.log("ya no puedes apostar")
        break
    }
        
}
    i++;
    
}while(i<1)




