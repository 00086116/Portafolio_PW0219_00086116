function Ordenamiento(lista) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length -1; j++) {
            if (lista[j+1] < lista[j]) {
                var aux = lista[j+1];
                lista[j+1] = lista[j];
                lista[j] = aux;
            }        
        }
    }
    return lista;
}

console.log (Ordenamiento([600, 3, 29, 63, 1, 200]));