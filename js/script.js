// Función genérica para toggles
function setupToggle(headerId, gridId) {
    const header = document.getElementById(headerId);
    const grid = document.getElementById(gridId);
    const icon = header.querySelector('.toggle-icon');

    header.addEventListener('click', () => {
        grid.classList.toggle('show');
        icon.classList.toggle('rotate');

        if (grid.classList.contains('show')) {
            grid.style.display = (gridId === 'projects-grid') ? 'grid' : 'grid';
            setTimeout(() => {
                grid.style.opacity = '1';
            }, 10);
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            grid.style.opacity = '0';
            setTimeout(() => {
                grid.style.display = 'none';
            }, 500);
        }
    });
}

// Inicializar toggles
setupToggle('project-toggle', 'projects-grid');
setupToggle('certs-toggle', 'certs-grid');

// Scroll suave para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
