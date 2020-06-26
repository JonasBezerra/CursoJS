window.document.querySelector('input.verificar')
.addEventListener('click', function(){
    var data = new Date(); // pega a data
    var txtAno = window.document.getElementById('txtAno').value // pegando valor do input
 
    var result = window.document.getElementById('res') // pegando valor da div res
    var genero = '';
    var img = document.createElement('img')
    
    if (txtAno.length == 0 || txtAno > data.getFullYear()) {
        window.alert('Erro Verifique os Dados e tente Novamente!.')
    } else { 
        var fsex = window.document.getElementsByName('radsex')
        var idade = (data.getFullYear() - txtAno)
        
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade <=10){
                // criança
                img.setAttribute('src','./img/CriancaHomem.png')
            }else if(idade <=40){
                // Jovem
                img.setAttribute('src','./img/HomemJovem.png')
            }else {
                // idoso
                img.setAttribute('src','./img/homemIdoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade <=10){
                // criança
                img.setAttribute('src','./img/CriancaMulher.png')
            }else if(idade <41){
                // Jovem
                img.setAttribute('src','./img/MulherJovem.png')
            }else{
                // idoso
                img.setAttribute('src','./img/mulherIdosa.png')
            }
        }
        result.style.textAlign = 'center'
        result.style.fontFamily = 'Montserrat'
        result.innerHTML = `Detectamos ${genero} com ${idade} Anos`
        result.appendChild(img)
    }

})