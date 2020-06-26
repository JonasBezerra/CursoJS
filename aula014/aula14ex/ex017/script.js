window.document.querySelector('input#btnGerar')
.addEventListener('click', function() {
   var num = window.document.querySelector('input#txtNum').value
   var tab = window.document.getElementById('seltab')
   if(num.length == 0){
        window.alert(`Por Favor Digite um Número`)
   }else{
      let n = Number(num)
      let c = 1;
      tab.innerHTML = ''
      tab.style.fontFamily = 'Montserrat alternates'
      while (c <= 10) {
          let item = window.document.createElement('option')
          item.innerHTML = `${c} X ${n} = ${c*n}`
          tab.appendChild(item)
          c++;
      }

   }
})