function SumaProm (numero){
    var sum=0;
    var prom=0;
    for(i=0; i< numero.length; i++){
        sum += numero[i];
        
    }
    prom = sum/numero.length
    console.log("La suma es:");
    console.log(sum);
    console.log("El promedio es:");
    console.log(prom);

}

var numero = [14, 23, 56]; SumaProm (numero);