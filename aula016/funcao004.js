function fatorial(n){
    let fat = 1;

    for (let c = n; c > 1; c--){
        fat *=c; // == fat = fat * c
    }
    return fat;
}

console.log("O fatorial vale: "+ fatorial(5));

// CALCULAR FATORIAL
// FATORIAL DE 5?: 5 x 4 x 3 x 2 x 1