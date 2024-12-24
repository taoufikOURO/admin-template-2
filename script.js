document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    const toggleBtn = document.getElementById('toggleSidebar');
    const menuItems = document.querySelectorAll('.menu-item');

    // Animation initiale des items du menu
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.opacity = '1';
        }, 100 * (index + 1));
    });

    // Gestion du clic sur le bouton de basculement
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // Utilisation de getComputedStyle pour obtenir la valeur des variables CSS
        const sidebarWidth = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width').trim();
        const sidebarCollapsedWidth = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-collapsed-width').trim();

        if (sidebar.classList.contains('collapsed')) {
            mainContent.style.marginLeft = `${sidebarCollapsedWidth}`;
        } else {
            mainContent.style.marginLeft = `${sidebarWidth}`;
        }
    });

    // Gestion de l'état actif des éléments du menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('text-white', 'bg-primary-600'));
            item.classList.add('text-white', 'bg-primary-600');
        });
    });

    // Effet de survol sophistiqué
    menuItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            item.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.background = '';
        });
    });
});


/* POUR LE LOADER */

window.onload = function () {
    // Masquer le loader
    document.getElementById('loader').style.display = 'none';

    // Afficher le contenu
    document.querySelector('.content').style.display = 'block';
};