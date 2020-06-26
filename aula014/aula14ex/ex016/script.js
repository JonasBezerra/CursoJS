window.document.querySelector('input#btnContar')
.addEventListener('click', function(){
    var txtInicio = window.document.getElementById('txtInicio').value
    var txtFim = window.document.querySelector('input#txtFim').value
    var txtPasso = window.document.getElementById('txtPasso').value
    var res = window.document.getElementById('res')
    
    if(txtInicio.length == 0 || txtFim.length == 0 || txtPasso.length == 0){ // verificação de caixas sem textos
        res.innerHTML = 'Impossível Contar!'
        alert('[ERRO]! Faltam Dados')
    }else{
        res.innerHTML = `Contando: <br>`
        var i = Number(txtInicio)
        var f = Number(txtFim)
        var p = Number(txtPasso)
        if(p <= 0 ){ // verifica se o passo é <= 0
            alert('Passo valendo 0, Considerando 1 para a contagem.') 
            p = 1
        } 
        if(txtInicio <= txtFim){ // CONTAGEM CRESCENTE
            while (i <= f) {
                res.innerHTML += `👉${i} `
                i += p 
            }
        }else{
             while (i>=f) {// CONTAGEM DECRESCENTE
                res.innerHTML += `👉${i} `
                i-=p
            }   
        }
        res.innerHTML +=`🏴`  
        } // fim do else com o teste de caixa vazia
})