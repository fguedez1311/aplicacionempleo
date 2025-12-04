const filter=document.querySelector("#filter-location")
const mensaje=document.querySelector('#filter-selected-value')

filter.addEventListener('change',function(){
    const jobs=document.querySelectorAll('.resultados__article')
    const seletecValue=filter.value
    if(seletecValue){
        mensaje.textContent=`Has Seleccionado: ${seletecValue}`
        
    }
    else{
        mensaje.textContent=''
    }
    jobs.forEach(job=>{
        const modalidad= job.dataset.modalidad
        const isShown=seletecValue==='' || seletecValue===modalidad
        job.classList.toggle('is-hidden',isShown===false)
    })
})


const container=document.querySelector('.resultados__jobslistings')
fetch("/src/data/data.json") //fetch es asincrono
    .then((response)=>{
        return response.json()
    })
    .then((jobs)=>{
        jobs.forEach(job=>{
            const article=document.createElement('article')
            article.className='resultados__article'
            article.dataset.modalidad=job.data.modalidad
            article.dataset.nivel=job.data.nivel
            article.dataset.technology=job.data.technology
            article.innerHTML=`
                    <div>
                        <h3 class="resultados__h3">${job.titulo}</h3>
                        <small class="resultados__small">${job.empresa} | ${job.ubicacion}</small>
                        <p class="resultados__p">
                            ${job.descripcion}
                        </p>

                    </div>
                    <button class="boton-azul">Aplicar</button>  
            `
            container.appendChild(article)
        })
       
    })

    