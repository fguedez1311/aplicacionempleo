const filter = document.querySelector('#filter-location')
const searchInput = document.querySelector('#empleos-search-input')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', filterJobs)
searchInput.addEventListener('input', filterJobs)

function filterJobs() {
    const jobs = document.querySelectorAll('.resultados__article')
    const selectedValue = (filter.value || '').toLowerCase().trim()
    mensaje.textContent = selectedValue ? `Has Seleccionado: ${selectedValue}` : ''

    const searchTerm = (searchInput.value || '').toLowerCase().trim()

    jobs.forEach(job => {
        const modalidad = (job.dataset.modalidad || '').toLowerCase()
        const titulo = (job.dataset.titulo || '').toLowerCase()

        const matchesModalidad = !selectedValue || selectedValue === modalidad
        const matchesTitulo = !searchTerm || titulo.includes(searchTerm)

        const shouldShow = matchesModalidad && matchesTitulo
        job.classList.toggle('is-hidden', !shouldShow)
    })
    // Informar a la paginación que los filtros cambiaron (reset de página)
    document.dispatchEvent(new CustomEvent('filters:changed'))
}
