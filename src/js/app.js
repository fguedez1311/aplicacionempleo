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

// Eventos de los filtros

const filter=document.querySelector('#filter-technology')

filter.addEventListener('change',function(){
    console.log(filter.value)
})

// Filtros por ubicación

const filter_ubicacion=document.querySelector('#filter-location')
filter_ubicacion.addEventListener('change',function(){
    const tipo_localidad=filter_ubicacion.value
    console.log(tipo_localidad)
    const etiquetasSmall=document.querySelectorAll(".resultados__article .resultados__small")
    etiquetasSmall.forEach((small)=>{
        console.log(small.textContent.toLocaleLowerCase().includes(tipo_localidad))
        // if(small.textContent.toLocaleLowerCase().contains(tipo_localidad))
        //     console.log(small.innerHTML)
    })
})
