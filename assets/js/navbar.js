// Enhanced page data with keywords for JMC Math & Academics
const pageData = [
  {
    title: "Home",
    url: "/public/index.html",
    description: "Welcome to JMC Math & Academics - Your gateway to mathematical excellence"
  },
  {
    title: "Library",
    url: "/public/resources/library/library.html",
    description: "Comprehensive mathematical resources and reference materials",
    keywords: ["library", "resources", "books", "references", "math books", "textbooks", "study materials", "equations", "formulas", "theorems"]
  },
  {
    title: "Tutorials",
    url: "/public/resources/tutorials/tutorials.html",
    description: "Step-by-step tutorials for all mathematical topics",
    keywords: ["tutorials", "lessons", "step-by-step", "guides", "how-to", "learning", "instruction", "examples", "practice", "exercises"]
  },
  {
    title: "Courses",
    url: "/public/courses.html",
    description: "Structured mathematics courses for all levels",
    keywords: ["courses", "classes", "curriculum", "syllabus", "program", "degree", "certification", "online courses", "math courses"]
  },
  {
    title: "Contact",
    url: "/public/contact.html",
    description: "Get in touch with JMC Math & Academics team",
    keywords: ["contact", "support", "help", "email", "phone", "address", "team", "staff", "faculty", "instructors"]
  },
  {
    title: "JMC Plus",
    url: "/public/jmcplus.html",
    description: "Premium membership for advanced mathematical resources",
    keywords: ["jmc plus", "premium", "membership", "advanced", "exclusive", "subscription", "pro", "upgrade", "benefits"]
  }
];

// Search mappings for direct navigation to specific content
const searchMappings = {
  "algebra": "/public/resources/library/library.html#algebra",
  "calculus": "/public/resources/library/library.html#calculus",
  "geometry": "/public/resources/library/library.html#geometry",
  "trigonometry": "/public/resources/library/library.html#trigonometry",
  "statistics": "/public/resources/library/library.html#statistics",
  "probability": "/public/resources/library/library.html#probability",
  "linear algebra": "/public/resources/library/library.html#linear-algebra",
  "differential equations": "/public/resources/library/library.html#differential-equations",
  "number theory": "/public/resources/library/library.html#number-theory",
  "discrete math": "/public/resources/library/library.html#discrete-math",

  // Tutorial specific mappings
  "basic math": "/public/resources/tutorials/tutorials.html#basic-math",
  "advanced math": "/public/resources/tutorials/tutorials.html#advanced-math",
  "math fundamentals": "/public/resources/tutorials/tutorials.html#fundamentals",
  "problem solving": "/public/resources/tutorials/tutorials.html#problem-solving",
  "math problems": "/public/resources/tutorials/tutorials.html#problems",
  "solutions": "/public/resources/tutorials/tutorials.html#solutions",
  "step by step": "/public/resources/tutorials/tutorials.html#step-by-step",

  // Course mappings
  "beginner courses": "/public/courses.html#beginner",
  "intermediate courses": "/public/courses.html#intermediate",
  "advanced courses": "/public/courses.html#advanced",
  "online learning": "/public/courses.html#online",
  "certification": "/public/courses.html#certification",

  // General academic terms
  "homework help": "/public/resources/tutorials/tutorials.html#homework",
  "exam preparation": "/public/resources/library/library.html#exam-prep",
  "study guide": "/public/resources/library/library.html#study-guides",
  "formulas": "/public/resources/library/library.html#formulas",
  "equations": "/public/resources/library/library.html#equations",
  "theorems": "/public/resources/library/library.html#theorems",
  "proofs": "/public/resources/library/library.html#proofs",

  // Contact related
  "help": "/public/contact.html#help",
  "support": "/public/contact.html#support",
  "tutor": "/public/contact.html#tutoring",
  "instructor": "/public/contact.html#instructors",

  // Premium content
  "premium": "/public/jmcplus.html",
  "membership": "/public/jmcplus.html#membership",
  "subscription": "/public/jmcplus.html#subscription",
  "advanced resources": "/public/jmcplus.html#advanced"
};

// Function to get the correct relative path based on current location
function getRelativePath(targetPath) {
  const currentPath = window.location.pathname;
  console.log('Current path:', currentPath);
  console.log('Target path:', targetPath);

  // If target is an absolute URL (starts with http), return as is
  if (targetPath.startsWith('http')) {
    return targetPath;
  }

  // If target doesn't start with /, it's already relative
  if (!targetPath.startsWith('/')) {
    return targetPath;
  }

  // Calculate directory depth of current page
  let currentDir = currentPath;
  if (currentDir.endsWith('.html')) {
    currentDir = currentDir.substring(0, currentDir.lastIndexOf('/'));
  }
  if (currentDir.endsWith('/')) {
    currentDir = currentDir.slice(0, -1);
  }

  // Count directory levels (excluding root)
  const currentLevels = currentDir === '' ? 0 : currentDir.split('/').length - 1;
  console.log('Current levels:', currentLevels);

  // Create relative path
  let relativePath = '';

  if (currentLevels === 0) {
    // We're at root level
    relativePath = '.' + targetPath;
  } else {
    // We're in a subdirectory, need to go up
    relativePath = '../'.repeat(currentLevels) + targetPath.substring(1);
  }

  console.log('Relative path:', relativePath);
  return relativePath;
}

// Function to fix navigation paths based on current page location
function fixNavigationPaths() {
  console.log('Fixing navigation paths...');

  // Update all navigation links
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    const originalHref = link.getAttribute('href');
    if (originalHref && originalHref.startsWith('/') && !originalHref.startsWith('//')) {
      const relativePath = getRelativePath(originalHref);
      link.setAttribute('href', relativePath);
      console.log(`Updated link: ${originalHref} -> ${relativePath}`);
    }
  });

  // Also update form actions if any
  document.querySelectorAll('form[action^="/"]').forEach(form => {
    const originalAction = form.getAttribute('action');
    if (originalAction && originalAction.startsWith('/') && !originalAction.startsWith('//')) {
      const relativePath = getRelativePath(originalAction);
      form.setAttribute('action', relativePath);
      console.log(`Updated form action: ${originalAction} -> ${relativePath}`);
    }
  });
}

// Enhanced navigation function
window.navigateToPage = function (url) {
  console.log('Navigating to:', url);

  // Convert to relative path if needed
  const targetUrl = url.startsWith('/') ? getRelativePath(url) : url;
  console.log('Target URL:', targetUrl);

  // Handle anchor links
  if (targetUrl.includes('#')) {
    const [baseUrl, anchor] = targetUrl.split('#');

    // If it's the same page, just scroll to anchor
    if (baseUrl === '' || baseUrl === window.location.pathname) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Navigate to different page with anchor
    window.location.href = targetUrl;

    // Wait for page to load, then scroll to anchor
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  } else {
    // Regular navigation
    window.location.href = targetUrl;
  }

  // Hide search results
  const searchResults = document.getElementById('searchResults');
  const mobileSearchResults = document.getElementById('mobileSearchResults');
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  if (searchResults) searchResults.style.display = 'none';
  if (mobileSearchResults) mobileSearchResults.style.display = 'none';
  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
};

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
    container.innerHTML = ''; // Clear old results first

    container.innerHTML = results.map(result => `
      <div class="search-result-item" onclick="window.navigateToPage('${result.url}')">
        <div class="result-title">${result.title}</div>
        <div class="result-description">${result.description}</div>
        <div class="result-url">${result.url}</div>
      </div>
    `).join('');

    container.style.display = 'block';
  }

  function displayWebSearchOption(query, container) {
    container.innerHTML = ''; // Clear old results first

    container.innerHTML = `
      <div class="search-result-item">
        <div class="result-title">No results found for "${query}"</div>
        <div class="result-description">Try adjusting your keywords or explore other sections.</div>
      </div>
      <div class="search-result-item" onclick="window.navigateToPage('/public/resources/library/library.html')">
        <div class="result-title">📚 Browse Library</div>
        <div class="result-description">Explore all mathematical resources and materials</div>
      </div>
      <div class="search-result-item" onclick="performWebSearch('${query}')">
        <div class="result-title">🌐 Search Web</div>
        <div class="result-description">Search the web for "${query}"</div>
      </div>
    `;

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
    container.innerHTML = suggestions.map(suggestion => `
      <div class="search-result-item suggestion" onclick="window.navigateToPage('${suggestion.url}')">
        <div class="result-title">${suggestion.title}</div>
        <div class="result-type">${suggestion.type === 'direct' ? '🎯 Direct Match' : '📄 Page Match'}</div>
      </div>
    `).join('');
    container.style.display = 'block';
  }

  window.performWebSearch = function (query) {
    // Open Google search in new tab
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' site:jmcmath.com')}`;
    window.open(searchUrl, '_blank');
    if (searchResults) searchResults.style.display = 'none';
    if (mobileSearchResults) mobileSearchResults.style.display = 'none';
    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';
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
      const dataPage = link.getAttribute('data-page');
      const href = link.getAttribute('href');

      // Check for exact matches or partial matches
      if (currentPath === href ||
        (href !== '/' && currentPath.includes(href.replace(/^.*\//, ''))) ||
        (currentPath === '/' && dataPage === 'home') ||
        (currentPath.includes('/resources/') && dataPage === 'resources') ||
        (currentPath.includes('/library') && dataPage === 'library') ||
        (currentPath.includes('/tutorials') && dataPage === 'tutorials') ||
        (currentPath.includes('/courses') && dataPage === 'courses') ||
        (currentPath.includes('/contact') && dataPage === 'contact') ||
        (currentPath.includes('/jmcplus') && dataPage === 'jmcplus')) {
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