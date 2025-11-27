// const botones=document.querySelectorAll('.button-apply-job')
// console.log(botones)
// botones.forEach(boton=>{
//     boton.addEventListener('click',()=>{
//         boton.textContent="Aplicado!"
//         boton.classList.add('is-applied')
//         boton.disabled=true
//     })

// })

const jobsListingSection=document.querySelector('.resultados__jobslistings')
jobsListingSection.addEventListener('click',function(event){
    const element=event.target
    if(element.classList.contains('button-apply-job')){
        console.log('Es el botón')
    }
})