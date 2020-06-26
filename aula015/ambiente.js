let num = [5, 8, 2, 9 ,3]

// num[5]= 6  coloca um novo elemento no vetor. na posição 6
// num.push(7)  coloca um novo elemento na ultima posição do meu vetor com o valor 6.
// num.length propriedade e atributo são os mesmos 
// num.sort pega todos os elementos do meu vetor e coloca em ordem crescente

num.push(1)
num[6]= 12; // coloca um novo elemento na posição 6 valendo 12
//num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`);

for (let poss = 0; poss < num.length; poss++) {
    console.log(num[poss]) 
}

// =================================================

let posicao = num.indexOf(3)
if(posicao == -1){
    console.log(`O valor não foi encontrado!`)
}else{
console.log(`O valor esta na posição ${posicao} `)
}