let num = [8, 1, 7, 4, 2, 9]

num.sort() // organiza crescentimente
console.log(`\t O Vetor ${num} tem tamanho: ${num.length}`)
/*
for (let poss = 0; poss < num.length; poss++) {
    console.log(`\t A posição ${poss} tem o valor: ${num[poss]}`) 
}
*/

for (let poss in num) { // lê-se. para cada posição em num 
    console.log(`\t A posição ${poss} tem o valor: ${num[poss]}`)
}

// num.indexOf(valor). esse metodo pega a posição de algum elemento com o valor ex: num.indexOf(8). então ele vai pegar a posição 0
// se o eu buscar um valor q não se encontra dentro do meu vetor ele retorna -1