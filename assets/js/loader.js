// loader.js - Universal version for all directories
function getBasePath() {
    // Calculate base path relative to root
    const pathSegments = window.location.pathname.split('/');
    const depth = pathSegments.length - 2; // Adjust for trailing slash
    
    if (depth <= 0) return './';
    return '../'.repeat(depth);
}

async function loadNavbar() {
    try {
        const basePath = getBasePath();
        const response = await fetch(`${basePath}components/navbar.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const navbarHTML = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = navbarHTML;
        const navbar = tempDiv.querySelector('.header');
        
        if (navbar) {
            // Look for existing containers in this order
            let targetContainer = document.getElementById('navbar-container') || 
                                 document.getElementById('navbar') || 
                                 document.querySelector('header');
            
            if (!targetContainer) {
                // Create a new container at top of body
                targetContainer = document.createElement('div');
                targetContainer.id = 'navbar-container';
                document.body.insertBefore(targetContainer, document.body.firstChild);
            }
            
            // Only replace navbar content
            targetContainer.innerHTML = '';
            targetContainer.appendChild(navbar);
            
            // Load navbar.js with correct relative path
            const script = document.createElement('script');
            script.src = `${basePath}assets/js/navbar.js`;
            script.onload = () => {
                console.log('Navbar loaded');
                if (window.initNavbar) window.initNavbar();
            };
            script.onerror = (e) => console.error('Error loading navbar script:', e);
            document.head.appendChild(script);
        } else {
            console.error('Navbar element not found');
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

async function loadFooter() {
    try {
        const basePath = getBasePath();
        const response = await fetch(`${basePath}components/footer.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const footerHTML = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = footerHTML;
        const footer = tempDiv.querySelector('.footer');
        
        if (footer) {
            // Look for existing containers
            let targetContainer = document.getElementById('footer-container') || 
                                 document.getElementById('footer') || 
                                 document.querySelector('footer');
            
            if (!targetContainer) {
                // Create new container at bottom
                targetContainer = document.createElement('div');
                targetContainer.id = 'footer-container';
                document.body.appendChild(targetContainer);
            }
            
            targetContainer.innerHTML = '';
            targetContainer.appendChild(footer);
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Enhanced loader that works for all pages
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
});

// Fallback for pages with unexpected structure
window.addEventListener('load', () => {
    if (!document.querySelector('.header')) {
        console.warn('Navbar missing after load, retrying...');
        loadNavbar();
    }
    if (!document.querySelector('.footer')) {
        console.warn('Footer missing after load, retrying...');
        loadFooter();
    }
});