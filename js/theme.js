/**
 * Theme and Direction (RTL/LTR) Management
 */

function initTheme() {
    const htmlEl = document.documentElement;
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const directionToggles = document.querySelectorAll('.direction-toggle');

    // Setup Theme
    const storedTheme = localStorage.getItem('ironpulse-theme') || 'dark';
    htmlEl.setAttribute('data-theme', storedTheme);
    updateThemeIcons(storedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('ironpulse-theme', newTheme);
            updateThemeIcons(newTheme);
        });
    });

    // Setup Direction
    const storedDirection = localStorage.getItem('ironpulse-direction') || 'ltr';
    htmlEl.setAttribute('dir', storedDirection);
    updateDirectionText(storedDirection);

    directionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = htmlEl.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            
            htmlEl.setAttribute('dir', newDir);
            localStorage.setItem('ironpulse-direction', newDir);
            updateDirectionText(newDir);
        });
    });
}

function updateDirectionText(direction) {
    const directionSpans = document.querySelectorAll('.direction-toggle span');
    directionSpans.forEach(span => {
        span.textContent = direction.toUpperCase();
    });
}

function updateThemeIcons(theme) {
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
        const iconName = theme === 'dark' ? 'sun' : 'moon';
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', iconName);
        newIcon.className = 'theme-icon';
        icon.parentNode.replaceChild(newIcon, icon);
    });
    
    // Re-initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}
