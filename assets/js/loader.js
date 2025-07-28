// loader.js - Enhanced version for GitHub Pages/Netlify
async function loadComponent(url, containerIds, elementSelector) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const element = tempDiv.querySelector(elementSelector);
        
        if (element) {
            // Find or create container
            let targetContainer = null;
            for (const id of containerIds) {
                targetContainer = document.getElementById(id);
                if (targetContainer) break;
            }
            
            if (!targetContainer) {
                targetContainer = document.querySelector(elementSelector);
                if (!targetContainer) {
                    // Create new container
                    targetContainer = document.createElement('div');
                    targetContainer.id = containerIds[0];
                    elementSelector === '.header' 
                        ? document.body.insertBefore(targetContainer, document.body.firstChild)
                        : document.body.appendChild(targetContainer);
                }
            }
            
            // Replace container content
            targetContainer.innerHTML = '';
            targetContainer.appendChild(element);
            return true;
        } else {
            console.error(`${elementSelector} element not found in ${url}`);
            return false;
        }
    } catch (error) {
        console.error(`Error loading ${elementSelector}:`, error);
        return false;
    }
}

async function loadNavbar() {
    // Use relative path for GitHub Pages compatibility
    const loaded = await loadComponent('components/navbar.html', 
        ['navbar-container', 'navbar'], '.header');
    
    if (loaded) {
        const script = document.createElement('script');
        // Use relative path for assets
        script.src = 'assets/js/navbar.js';
        script.onload = () => {
            console.log('Navbar script loaded');
            if (window.initNavbar) window.initNavbar();
        };
        script.onerror = () => console.error('Error loading navbar.js');
        document.head.appendChild(script);
    }
}

async function loadFooter() {
    // Use relative path for GitHub Pages compatibility
    await loadComponent('components/footer.html', 
        ['footer-container', 'footer'], '.footer');
}

// Improved DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', () => {
    // Load navbar first then footer
    loadNavbar().then(loadFooter).catch(err => {
        console.error('Component loading error:', err);
    });
    
    // Fallback in case components take too long
    setTimeout(() => {
        if (!document.querySelector('.header')) loadNavbar();
        if (!document.querySelector('.footer')) loadFooter();
    }, 1000);
});

// Retry loading if elements not found after initial load
window.addEventListener('load', () => {
    if (!document.querySelector('.header')) {
        console.warn('Navbar not found after load, retrying...');
        loadNavbar();
    }
    if (!document.querySelector('.footer')) {
        console.warn('Footer not found after load, retrying...');
        loadFooter();
    }
});