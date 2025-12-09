// Paginación con enlaces <a> que interactúa con filtros y búsqueda
const container = document.querySelector('.resultados__jobslistings')
if (!container) throw new Error('No se encontró el contenedor de empleos (.resultados__jobslistings)')

const pageSize = 5
let currentPage = 1

// Crear nav de paginación si no existe
let paginationNav = document.querySelector('.resultados__pagination')
if (!paginationNav) {
    paginationNav = document.createElement('nav')
    paginationNav.className = 'resultados__pagination'
    container.parentNode.insertBefore(paginationNav, container.nextSibling)
}

function buildNav(totalPages) {
    paginationNav.innerHTML = ''
    if (totalPages <= 1) return

    // Prev
    const prev = document.createElement('a')
    prev.className = 'resultados__a'
    prev.href = '#'
    prev.dataset.page = Math.max(1, currentPage - 1)
    prev.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
        </svg>`
    paginationNav.appendChild(prev)

    // Números
    for (let i = 1; i <= totalPages; i++) {
        const a = document.createElement('a')
        a.className = 'resultados__a'
        if (i === currentPage) a.classList.add('is-active')
        a.href = '#'
        a.textContent = i
        a.dataset.page = i
        paginationNav.appendChild(a)
    }

    // Next
    const next = document.createElement('a')
    next.className = 'resultados__a'
    next.href = '#'
    next.dataset.page = Math.min(totalPages, currentPage + 1)
    next.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
        </svg>`
    paginationNav.appendChild(next)
}

function updatePagination() {
    const jobs = Array.from(container.querySelectorAll('.resultados__article'))
    const visibleJobs = jobs.filter(j => !j.classList.contains('is-hidden'))

    if (visibleJobs.length === 0) {
        // ocultar todos y limpieza de paginación
        jobs.forEach(j => j.style.display = 'none')
        paginationNav.innerHTML = ''
        return
    }

    const totalPages = Math.max(1, Math.ceil(visibleJobs.length / pageSize))
    if (currentPage > totalPages) currentPage = totalPages

    // Mostrar/ocultar según página y filtro
    jobs.forEach(job => {
        if (job.classList.contains('is-hidden')) {
            job.style.display = 'none'
            return
        }
        const index = visibleJobs.indexOf(job)
        const pageOfJob = Math.floor(index / pageSize) + 1
        job.style.display = pageOfJob === currentPage ? '' : 'none'
    })

    buildNav(totalPages)
}

// Delegación de clicks en la paginación
paginationNav.addEventListener('click', (e) => {
    const a = e.target.closest('a')
    if (!a) return
    e.preventDefault()
    const page = parseInt(a.dataset.page, 10)
    if (!isNaN(page) && page !== currentPage) {
        currentPage = page
        updatePagination()
        // opcional: bajar al inicio de resultados
        container.scrollIntoView({ behavior: 'smooth' })
    }
})

// Cuando los datos se cargan inicialmente
document.addEventListener('data:loaded', () => {
    currentPage = 1
    updatePagination()
})

// Cuando los filtros cambian -> reset a página 1 y actualizar
document.addEventListener('filters:changed', () => {
    currentPage = 1
    updatePagination()
})

// Inicializar por si los artículos ya están en el DOM
document.addEventListener('DOMContentLoaded', () => {
    // pequeña espera para cuando fetch ya haya añadido elementos
    setTimeout(() => updatePagination(), 200)
})