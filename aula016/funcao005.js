// recursao é quando uma função chama ela mesma

function fatorial(n) {
    if(n==1){
        return 1;
    }else{
        return n * fatorial(n-1); // recursividade
        5 * (4)
    }
    // 5 x 4! 
}
console.log("O valor é: "+ fatorial(5));
