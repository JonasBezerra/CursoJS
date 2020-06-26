function carregar(){
    var imprimirHoras = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var corpo = window.document.getElementById('corpo')
    var agora = new Date();
    var horario = agora.getHours()
    var minutos = agora.getMinutes()



    if(horario <12 && horario >=6){

        imprimirHoras.innerHTML = `São exatamente <strong>${horario}</strong> e <strong>${minutos}</strong> da manhâ!`
        img.src = 'MANHA.png'
        corpo.style.background = "#ca6d88"

    }else if (horario <=18 && horario >=12){

        imprimirHoras.innerHTML = `São exatamente <strong>${horario}</strong> e <strong>${minutos}</strong> da Tarde!`
        img.src = 'TARDE.png'
        corpo.style.background = "#6a475b"
    }else{

        imprimirHoras.innerHTML = `São exatamente <strong>${horario}</strong> e <strong>${minutos}</strong> da Noite`
        img.src = 'NOITE.png'
        corpo.style.background = "#404445"

 }

}