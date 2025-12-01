const filter=document.querySelector("#filter-location")
const mensaje=document.querySelector('#filter-selected-value')
const jobs=document.querySelectorAll('.resultados__article')
filter.addEventListener('change',function(){
    const seletecValue=filter.value
    if(seletecValue){
        mensaje.textContent=`Has Seleccionado: ${seletecValue}`
        
    }
    else{
        mensaje.textContent=''
    }
    jobs.forEach(job=>{
    const modalidad= job.dataset.modalidad
    if(seletecValue==='' || seletecValue===modalidad){
        job.classList.remove('is-hidden')
    }
    else{
       job.classList.add('is-hidden')
    }
})
})



