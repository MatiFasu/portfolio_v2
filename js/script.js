// ============================================================
// Matías Fasulino - Portfolio Interactivo
// Manejador de Navegación por Pestañas (Tabs)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const desktopTabs = document.querySelectorAll('.sidebar-nav .nav-item');
    const mobileTabs = document.querySelectorAll('.mobile-tabs-header .m-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-view');
    const scrollContainer = document.querySelector('.content-scrollable');

    // Función principal para cambiar de pestaña
    function switchTab(targetTabId) {
        // 1. Actualizar estado activo en botones desktop
        desktopTabs.forEach(btn => {
            if (btn.dataset.tab === targetTabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 2. Actualizar estado activo en botones mobile
        mobileTabs.forEach(btn => {
            if (btn.dataset.tab === targetTabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 3. Mostrar la vista seleccionada y ocultar las demás
        tabPanes.forEach(pane => {
            if (pane.id === `tab-${targetTabId}`) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        // 4. Resetear el scroll del panel de contenido al tope de forma fluida
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // 5. Actualizar URL hash de forma limpia sin saltos de scroll
        if (history.pushState) {
            history.pushState(null, null, `#${targetTabId}`);
        } else {
            location.hash = `#${targetTabId}`;
        }
    }

    // Event listeners para pestañas de desktop
    desktopTabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = btn.dataset.tab;
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    // Event listeners para pestañas de mobile
    mobileTabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = btn.dataset.tab;
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    // Event listeners para botones y tarjetas internas que navegan entre pestañas
    document.querySelectorAll('[data-tab-target]').forEach(btn => {
        const handleNav = (e) => {
            e.preventDefault();
            const targetId = btn.dataset.tabTarget;
            if (targetId) {
                switchTab(targetId);
            }
        };

        btn.addEventListener('click', handleNav);
        
        // Soporte de accesibilidad: navegar con teclado (Enter y Espacio)
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleNav(e);
            }
        });
    });

    // Soporte para cargar directamente mediante el hash de la URL (ej: #projects o #home)
    const currentHash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'experience', 'projects', 'certs', 'facultad'];
    
    if (validTabs.includes(currentHash)) {
        switchTab(currentHash);
    } else {
        switchTab('home');
    }

    // Sincronizar en caso de que el usuario use botones Adelante/Atrás del navegador
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.replace('#', '');
        if (validTabs.includes(hash)) {
            switchTab(hash);
        } else {
            switchTab('home');
        }
    });
});
