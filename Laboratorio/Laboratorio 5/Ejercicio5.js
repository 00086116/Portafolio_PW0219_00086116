function Palindrome(palabra){
    var validacion = true;
    var original = palabra.split("");
    var invertido = palabra.split("").reverse();

    for(var i =0; i<original.legth; i++){
        if (invertido[i] != original[i]) {
            console.log("La palabra no es palindrome");
            validacion = false;
            break;
    }
}
if  (validacion == true) {
    console.log("La palabra es palindrome");
}
} Palindrome("reconocer")