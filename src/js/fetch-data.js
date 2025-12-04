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

    