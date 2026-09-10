// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme and Direction
    if (typeof initTheme === 'function') {
        initTheme();
    }

    // 1. Sidebar Toggle (Mobile)
    const sidebar = document.getElementById('dashboard-sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Create overlay
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay && sidebar) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            if (overlay) overlay.classList.toggle('show');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (sidebar && !sidebar.contains(e.target) && e.target !== mobileMenuBtn && (!mobileMenuBtn || !mobileMenuBtn.contains(e.target))) {
                sidebar.classList.remove('show');
                if (overlay) overlay.classList.remove('show');
            }
        }
    });

    // 2. Tab Navigation
    const navLinks = document.querySelectorAll('.sidebar-link[data-tab]');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and panes
            navLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show corresponding pane
            const targetTab = link.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 1024 && sidebar) {
                sidebar.classList.remove('show');
                const overlay = document.querySelector('.sidebar-overlay');
                if (overlay) overlay.classList.remove('show');
            }
        });
    });
    // 3. Sub-Tab Navigation
    const subNavLinks = document.querySelectorAll('.dash-sub-tab');
    const subTabPanes = document.querySelectorAll('.dash-sub-pane');

    subNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const container = link.closest('.tab-pane');
            if (!container) return;

            const containerSubLinks = container.querySelectorAll('.dash-sub-tab');
            const containerSubPanes = container.querySelectorAll('.dash-sub-pane');

            // Remove active class
            containerSubLinks.forEach(l => l.classList.remove('active'));
            containerSubPanes.forEach(p => p.classList.remove('active'));

            // Add active class
            link.classList.add('active');
            const targetPane = container.querySelector('#' + link.getAttribute('data-sub-tab'));
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 4. Handle external links or deep links
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam) {
        const link = document.querySelector(`.sidebar-link[data-tab="${tabParam}"]`);
        if (link) {
            link.click();
        }
    }
});
    // Handle static links for demonstration
    document.querySelectorAll('a[href="#"]').forEach(link => {
        if(!link.classList.contains('sidebar-link')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('This feature will be available in the backend integration phase.');
            });
        }
    });
