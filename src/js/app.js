const botones=document.querySelectorAll('.button-apply-job')
console.log(botones)
botones.forEach(boton=>{
    boton.addEventListener('click',()=>{
        boton.textContent="Aplicado!"
        boton.classList.add('is-applied')
        boton.disabled=true
    })

})

