let numerico=prompt("ingrese un numero");



 if(numerico%1 == 0){
     console.log("este es un numero entero")
    for(i=0; i<= numerico; i++){
        if (i%5==0 & i%3==0){
        console.log(` ${i} ping pong`)
    }
        else if( i%3==0 ){
            console.log(`${i} ping`)
        } 
        else if(i%5==0 ){
            console.log(`${i} pong`)
        }
        else{
            console.log(i)
            continue;
        }
           
    }
    
}   
  else{
    console.log("el numero es decimal")

  }
