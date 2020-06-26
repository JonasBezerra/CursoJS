var idade = 66
if (idade < 16) {
    console.log('Não Vota!');
    
} else if(idade < 18 || idade > 65){ // (idade >=16 && idade < 18) mesma coisa q idade < 18
    console.log('Voto Opcional');
}else if (idade >= 18 ) {
    console.log('Voto Obrigatório')
} else {
    
}