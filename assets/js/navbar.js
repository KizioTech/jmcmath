// Enhanced page data with keywords for JMC Math & Academics
const pageData = [
  {
    title: "Home",
    url: "/index.html",
    description: "Welcome to JMC Math & Academics - Your gateway to mathematical excellence"
  },
  {
    title: "Library",
    url: "/resources/library/library.html",
    description: "Comprehensive mathematical resources and reference materials",
    keywords: ["library", "resources", "books", "references", "math books", "textbooks", "study materials", "equations", "formulas", "theorems"]
  },
  {
    title: "Tutorials",
    url: "/resources/tutorials/tutorials.html",
    description: "Step-by-step tutorials for all mathematical topics",
    keywords: ["tutorials", "lessons", "step-by-step", "guides", "how-to", "learning", "instruction", "examples", "practice", "exercises"]
  },
  {
    title: "Courses",
    url: "/courses.html",
    description: "Structured mathematics courses for all levels",
    keywords: ["courses", "classes", "curriculum", "syllabus", "program", "degree", "certification", "online courses", "math courses"]
  },
  {
    title: "Contact",
    url: "/contact.html",
    description: "Get in touch with JMC Math & Academics team",
    keywords: ["contact", "support", "help", "email", "phone", "address", "team", "staff", "faculty", "instructors"]
  },
  {
    title: "JMC Plus",
    url: "/jmcplus.html",
    description: "Premium membership for advanced mathematical resources",
    keywords: ["jmc plus", "premium", "membership", "advanced", "exclusive", "subscription", "pro", "upgrade", "benefits"]
  }
];

// Search mappings for direct navigation to specific content
const searchMappings = {
  "algebra": "resources/library/library.html#algebra",
  "calculus": "resources/library/library.html#calculus",
  "geometry": "resources/library/library.html#geometry",
  "trigonometry": "resources/library/library.html#trigonometry",
  "statistics": "resources/library/library.html#statistics",
  "probability": "resources/library/library.html#probability",
  "linear algebra": "resources/library/library.html#linear-algebra",
  "differential equations": "resources/library/library.html#differential-equations",
  "number theory": "resources/library/library.html#number-theory",
  "discrete math": "resources/library/library.html#discrete-math",

  // Tutorial specific mappings
  "basic math": "resources/tutorials/tutorials.html#basic-math",
  "advanced math": "resources/tutorials/tutorials.html#advanced-math",
  "math fundamentals": "resources/tutorials/tutorials.html#fundamentals",
  "problem solving": "resources/tutorials/tutorials.html#problem-solving",
  "math problems": "resources/tutorials/tutorials.html#problems",
  "solutions": "resources/tutorials/tutorials.html#solutions",
  "step by step": "resources/tutorials/tutorials.html#step-by-step",

  // Course mappings
  "beginner courses": "courses.html#beginner",
  "intermediate courses": "courses.html#intermediate",
  "advanced courses": "courses.html#advanced",
  "online learning": "courses.html#online",
  "certification": "courses.html#certification",

  // General academic terms
  "homework help": "resources/tutorials/tutorials.html#homework",
  "exam preparation": "resources/library/library.html#exam-prep",
  "study guide": "resources/library/library.html#study-guides",
  "formulas": "resources/library/library.html#formulas",
  "equations": "resources/library/library.html#equations",
  "theorems": "resources/library/library.html#theorems",
  "proofs": "resources/library/library.html#proofs",

  // Contact related
  "help": "contact.html#help",
  "support": "contact.html#support",
  "tutor": "contact.html#tutoring",
  "instructor": "contact.html#instructors",

  // Premium content
  "premium": "jmcplus.html",
  "membership": "jmcplus.html#membership",
  "subscription": "jmcplus.html#subscription",
  "advanced resources": "jmcplus.html#advanced"
};

// Function to get the correct relative path based on current location
function getRelativePath(targetPath) {
  // If target is an absolute URL, return as is
  if (targetPath.startsWith('http')) {
    return targetPath;
  }
  
  // If target is already relative, return it
  if (!targetPath.startsWith('/')) {
    return targetPath;
  }
  
  // Calculate the base path relative to root
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  const depth = pathSegments.length - 2; // Adjust for trailing slash
  
  // Create relative path
  if (depth <= 0) {
    return '.' + targetPath;
  } else {
    return '../'.repeat(depth) + targetPath.substring(1);
  }
}

// Function to resolve paths for navigation
function resolvePath(targetPath) {
  if (targetPath.startsWith('http') || !targetPath.startsWith('/')) {
    return targetPath;
  }
  
  // Handle site root
  if (targetPath === '/') {
    return 'index.html';
  }
  
  return targetPath.substring(1);
}

// Function to fix navigation paths based on current page location
function fixNavigationPaths() {
  console.log('Fixing navigation paths...');

  // Update all navigation links
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#')) {
      const relativePath = getRelativePath(href);
      link.setAttribute('href', relativePath);
    }
  });

  // Also update form actions if any
  document.querySelectorAll('form').forEach(form => {
    const action = form.getAttribute('action');
    if (action && !action.startsWith('http') && !action.startsWith('#')) {
      const relativePath = getRelativePath(action);
      form.setAttribute('action', relativePath);
    }
  });
}

// Enhanced navigation function
window.navigateToPage = function (url) {
  console.log('Navigating to:', url);

  // Resolve path to relative format
  const targetUrl = url.startsWith('/') ? getRelativePath(resolvePath(url)) : getRelativePath(url);

  // Handle anchor links
  if (targetUrl.includes('#')) {
    const [baseUrl, anchor] = targetUrl.split('#');
    const currentPagePath = window.location.pathname;
    
    // Check if baseUrl matches current page
    if (baseUrl === currentPagePath || baseUrl === '' || baseUrl === '.') {
      // Same page: scroll to anchor
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        hideSearch();
        return;
      }
    }
  }
  
  // Regular navigation
  window.location.href = targetUrl;
  hideSearch();
};

function hideSearch() {
  // Hide search results and clear inputs
  const searchResults = document.getElementById('searchResults');
  const mobileSearchResults = document.getElementById('mobileSearchResults');
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  if (searchResults) searchResults.style.display = 'none';
  if (mobileSearchResults) mobileSearchResults.style.display = 'none';
  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
}

function initNavbar() {
  console.log('Initializing navbar...');

  // Fix navigation paths first
  fixNavigationPaths();

  // Get search elements for both desktop and mobile
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const mobileSearchResults = document.getElementById('mobileSearchResults');

  // Mobile menu elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileDropdownTrigger = document.getElementById('mobile-dropdown-trigger');
  const mobileDropdown = document.getElementById('mobile-dropdown');
  const mobileDropdownIcon = document.getElementById('mobile-dropdown-icon');

  function performSearch(query, resultsContainer) {
    if (!query.trim()) {
      resultsContainer.style.display = 'none';
      return;
    }

    const lowerQuery = query.toLowerCase();

    // First, check for direct mappings
    const directMapping = searchMappings[lowerQuery];
    if (directMapping) {
      window.navigateToPage(directMapping);
      return;
    }

    // Check if query matches any specific mapping partially
    const partialMapping = Object.keys(searchMappings).find(key =>
      key.includes(lowerQuery) || lowerQuery.includes(key)
    );

    if (partialMapping) {
      window.navigateToPage(searchMappings[partialMapping]);
      return;
    }

    // Regular search through page data
    const results = pageData.filter(page => {
      const titleMatch = page.title.toLowerCase().includes(lowerQuery);
      const descMatch = page.description.toLowerCase().includes(lowerQuery);
      const keywordMatch = page.keywords && page.keywords.some(keyword =>
        keyword.toLowerCase().includes(lowerQuery)
      );

      return titleMatch || descMatch || keywordMatch;
    });

    // If no local results, offer web search
    if (results.length === 0) {
      displayWebSearchOption(query, resultsContainer);
    } else {
      displayResults(results, resultsContainer);
    }
  }

  function displayResults(results, container) {
    container.innerHTML = '';
    
    results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      resultItem.innerHTML = `
        <div class="result-title">${result.title}</div>
        <div class="result-description">${result.description}</div>
        <div class="result-url">${result.url}</div>
      `;
      resultItem.addEventListener('click', () => {
        window.navigateToPage(result.url);
      });
      container.appendChild(resultItem);
    });
    
    container.style.display = 'block';
  }

  function displayWebSearchOption(query, container) {
    container.innerHTML = '';
    
    const noResults = document.createElement('div');
    noResults.className = 'search-result-item';
    noResults.innerHTML = `
      <div class="result-title">No results found for "${query}"</div>
      <div class="result-description">Try adjusting your keywords or explore other sections.</div>
    `;
    container.appendChild(noResults);
    
    const browseItem = document.createElement('div');
    browseItem.className = 'search-result-item';
    browseItem.innerHTML = `
      <div class="result-title">📚 Browse Library</div>
      <div class="result-description">Explore all mathematical resources and materials</div>
    `;
    browseItem.addEventListener('click', () => {
      window.navigateToPage('resources/library/library.html');
    });
    container.appendChild(browseItem);
    
    const webSearch = document.createElement('div');
    webSearch.className = 'search-result-item';
    webSearch.innerHTML = `
      <div class="result-title">🌐 Search Web</div>
      <div class="result-description">Search the web for "${query}"</div>
    `;
    webSearch.addEventListener('click', () => {
      performWebSearch(query);
    });
    container.appendChild(webSearch);
    
    container.style.display = 'block';
  }

  function showSearchSuggestions(query, container) {
    const lowerQuery = query.toLowerCase();
    const suggestions = [];

    // Add direct mappings as suggestions
    Object.keys(searchMappings).forEach(key => {
      if (key.includes(lowerQuery)) {
        suggestions.push({
          title: key,
          url: searchMappings[key],
          type: 'direct'
        });
      }
    });

    // Add page matches
    pageData.forEach(page => {
      if (page.keywords) {
        page.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(lowerQuery)) {
            suggestions.push({
              title: `${keyword} - ${page.title}`,
              url: page.url,
              type: 'page'
            });
          }
        });
      }
    });

    if (suggestions.length > 0) {
      const uniqueSuggestions = suggestions.filter((item, index, self) =>
        index === self.findIndex(t => t.url === item.url)
      ).slice(0, 5);

      displaySuggestions(uniqueSuggestions, container);
    }
  }

  function displaySuggestions(suggestions, container) {
    container.innerHTML = '';
    
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'search-result-item suggestion';
      suggestionItem.innerHTML = `
        <div class="result-title">${suggestion.title}</div>
        <div class="result-type">${suggestion.type === 'direct' ? '🎯 Direct Match' : '📄 Page Match'}</div>
      `;
      suggestionItem.addEventListener('click', () => {
        window.navigateToPage(suggestion.url);
      });
      container.appendChild(suggestionItem);
    });
    
    container.style.display = 'block';
  }

  window.performWebSearch = function (query) {
    // Open Google search in new tab
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' site:jmcmath.com')}`;
    window.open(searchUrl, '_blank');
    hideSearch();
  };

  // Desktop search event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      if (query.length > 2) {
        showSearchSuggestions(query, searchResults);
      } else if (query.length === 0) {
        searchResults.style.display = 'none';
      }
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(searchInput.value, searchResults);
      }
    });
  }

  // Mobile search event listeners
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      if (query.length > 2) {
        showSearchSuggestions(query, mobileSearchResults);
      } else if (query.length === 0) {
        mobileSearchResults.style.display = 'none';
      }
    });

    mobileSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(mobileSearchInput.value, mobileSearchResults);
      }
    });
  }

  // Hide search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      if (searchResults) searchResults.style.display = 'none';
      if (mobileSearchResults) mobileSearchResults.style.display = 'none';
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      if (menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
      }
      // Clear mobile search when closing menu
      if (!mobileMenu.classList.contains('active')) {
        if (mobileSearchInput) mobileSearchInput.value = '';
        if (mobileSearchResults) mobileSearchResults.style.display = 'none';
      }
    });
  }

  // Mobile dropdown toggle
  if (mobileDropdownTrigger && mobileDropdown) {
    mobileDropdownTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      mobileDropdown.classList.toggle('active');
      if (mobileDropdownIcon) {
        mobileDropdownIcon.classList.toggle('fa-chevron-down');
        mobileDropdownIcon.classList.toggle('fa-chevron-up');
      }
    });
  }

  // Desktop dropdown functionality
  const dropdownTrigger = document.querySelector('.dropdown-trigger');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownTrigger && dropdownContent) {
    // Show dropdown on hover for desktop
    dropdownTrigger.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        dropdownContent.style.display = 'block';
      }
    });

    // Hide dropdown when mouse leaves
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
          dropdownContent.style.display = 'none';
        }
      });
    }

    // Click functionality for mobile
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      }
    });
  }

  // Function to set active navigation based on current page
  function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (!href) return;
      
      // Get absolute path of the link
      const linkPath = new URL(href, window.location.href).pathname;
      
      // Check for exact matches
      if (currentPath === linkPath) {
        link.classList.add('active');
        return;
      }
      
      // Check for partial matches in subdirectories
      const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
      if (linkPath.startsWith(currentDir) || currentPath.startsWith(linkPath)) {
        link.classList.add('active');
      }
    });
  }

  // Initialize active nav on page load
  setActiveNav();

  // Update active nav when navigating
  window.addEventListener('popstate', setActiveNav);

  // Make functions globally available for external use
  window.navbarUtils = {
    setActiveNav: setActiveNav,
    performSearch: performSearch,
    navigateToPage: window.navigateToPage,
    performWebSearch: window.performWebSearch,
    fixNavigationPaths: fixNavigationPaths,
    getRelativePath: getRelativePath
  };

  console.log('Navbar initialization complete');
}

// Attach to window for loader.js to call after navbar is loaded
window.initNavbar = initNavbar;