var agora = new Date()


var horas = agora.getHours()
var minutos = agora.getMinutes()
console.log('Agora são: '+horas+' horas e '+ minutos+' minutos')

/*
if (horas < 6 ) {
    console.log('Boa Madrugada!')
}else if(horas < 12 ){
    console.log('Bom Dia!')
}else if (horas <= 18) {
    console.log('Boa Tarde')
} else if (horas <=23) {
    console.log('Boa Noite!')
}*/

if(horas >=6 &&  horas <=11 ){

    console.log('Bom Dia!')
}else if (horas >=12 && horas  <= 18) {
    console.log('Boa Tarde!')
}else if (horas >18) {
    console.log('Boa Noite')
}else{

    console.log('Boa Madrugada')
}
