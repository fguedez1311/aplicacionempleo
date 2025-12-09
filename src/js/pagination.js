// Contenedor de paginación (crea si no existe)
let pagination = document.querySelector('.pagination')
if (!pagination) {
    pagination = document.createElement('div')
    pagination.className = 'pagination'
    container.parentNode.insertBefore(pagination, container.nextSibling)
}