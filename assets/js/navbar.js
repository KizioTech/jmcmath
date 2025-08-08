// Enhanced page data with keywords for JMC Math & Academics
const pageData = [
  {
    title: "Home",
    url: "/index.html",
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

// Enhanced search mappings with document categories and specific targeting
const searchMappings = {
  // Algebra documents
  "algebra": { url: "/public/resources/library/library.html", category: "textbooks", specific: "algebra" },
  "linear algebra": { url: "/public/resources/library/library.html", category: "textbooks", specific: "linear algebra" },
  "abstract algebra": { url: "/public/resources/library/library.html", category: "textbooks", specific: "abstract algebra" },

  // Calculus documents
  "calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "calculus" },
  "differential calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "differential calculus" },
  "integral calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "integral calculus" },
  "multivariable calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "multivariable calculus" },

  // Geometry documents
  "geometry": { url: "/public/resources/library/library.html", category: "textbooks", specific: "geometry" },
  "analytic geometry": { url: "/public/resources/library/library.html", category: "textbooks", specific: "analytic geometry" },
  "differential geometry": { url: "/public/resources/library/library.html", category: "textbooks", specific: "differential geometry" },

  // Statistics and Probability
  "statistics": { url: "/public/resources/library/library.html", category: "textbooks", specific: "statistics" },
  "probability": { url: "/public/resources/library/library.html", category: "textbooks", specific: "probability" },
  "biostatistics": { url: "/public/resources/library/library.html", category: "textbooks", specific: "biostatistics" },

  // Trigonometry
  "trigonometry": { url: "/public/resources/library/library.html", category: "textbooks", specific: "trigonometry" },

  // Advanced Mathematics
  "differential equations": { url: "/public/resources/library/library.html", category: "textbooks", specific: "differential equations" },
  "number theory": { url: "/public/resources/library/library.html", category: "textbooks", specific: "number theory" },
  "discrete math": { url: "/public/resources/library/library.html", category: "textbooks", specific: "discrete mathematics" },
  "real analysis": { url: "/public/resources/library/library.html", category: "textbooks", specific: "real analysis" },
  "complex analysis": { url: "/public/resources/library/library.html", category: "textbooks", specific: "complex analysis" },

  // Tutorial specific mappings
  "basic math": { url: "/public/resources/tutorials/tutorials.html", category: "lectures", specific: "basic math" },
  "advanced math": { url: "/public/resources/tutorials/tutorials.html", category: "lectures", specific: "advanced math" },
  "math fundamentals": { url: "/public/resources/tutorials/tutorials.html", category: "lectures", specific: "fundamentals" },
  "problem solving": { url: "/public/resources/tutorials/tutorials.html", category: "practice", specific: "problem solving" },

  // Exam and Practice materials
  "exam preparation": { url: "/public/resources/library/library.html", category: "exams", specific: "exam prep" },
  "practice problems": { url: "/public/resources/library/library.html", category: "practice", specific: "practice problems" },
  "midterm": { url: "/public/resources/library/library.html", category: "exams", specific: "midterm" },
  "final exam": { url: "/public/resources/library/library.html", category: "exams", specific: "final exam" },

  // Study materials
  "study guide": { url: "/public/resources/library/library.html", category: "lectures", specific: "study guides" },
  "lecture notes": { url: "/public/resources/library/library.html", category: "lectures", specific: "lecture notes" },
  "formulas": { url: "/public/resources/library/library.html", category: "lectures", specific: "formulas" },
  "equations": { url: "/public/resources/library/library.html", category: "lectures", specific: "equations" },

  // Author specific searches
  "mcmullen": { url: "/public/resources/library/library.html", category: "textbooks", specific: "mcmullen" },
  "mcmullen's calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "mcmullen calculus" },
  "stewart": { url: "/public/resources/library/library.html", category: "textbooks", specific: "stewart" },
  "stewart's calculus": { url: "/public/resources/library/library.html", category: "textbooks", specific: "stewart calculus" },
  "james stewart": { url: "/public/resources/library/library.html", category: "textbooks", specific: "james stewart" },

  // General library access
  "library": { url: "/public/resources/library/library.html", category: "all", specific: null },
  "resources": { url: "/public/resources/library/library.html", category: "all", specific: null },

  // Course mappings
  "beginner courses": { url: "/public/courses.html", category: null, specific: "beginner" },
  "intermediate courses": { url: "/public/courses.html", category: null, specific: "intermediate" },
  "advanced courses": { url: "/public/courses.html", category: null, specific: "advanced" },

  // Contact related
  "help": { url: "/public/contact.html", category: null, specific: null },
  "support": { url: "/public/contact.html", category: null, specific: null },

  // Premium content
  "premium": { url: "/public/jmcplus.html", category: null, specific: null },
  "jmc plus": { url: "/public/jmcplus.html", category: null, specific: null }
};

/**
 * Enhanced connection between navbar search and PDF/resource search with better filtering
 */

// Helper function to determine if we're currently on the library page
function isOnLibraryPage() {
  const currentPath = window.location.pathname.toLowerCase();
  return currentPath.includes('library.html') || currentPath.includes('/library/');
}

// Enhanced function to trigger resource search and filter with specific document targeting
function triggerResourceSearch(query, category = 'all', specific = null) {
  const pdfSearchInput = document.getElementById('pdfSearch');
  
  if (pdfSearchInput) {
    // Set the search input value
    if (specific) {
      pdfSearchInput.value = specific;
    } else {
      pdfSearchInput.value = query;
    }
    
    // Trigger the input event to activate search
    const inputEvent = new Event('input', { bubbles: true });
    pdfSearchInput.dispatchEvent(inputEvent);
  }

  // Handle category filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  // Reset all category buttons
  categoryBtns.forEach(btn => btn.classList.remove('active'));
  
  // Find and activate the appropriate category button
  let targetBtn = null;
  categoryBtns.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
      targetBtn = btn;
    }
  });
  
  // If no specific category found, default to 'all'
  if (!targetBtn && category !== 'all') {
    categoryBtns.forEach(btn => {
      if (btn.dataset.category === 'all') {
        btn.classList.add('active');
        targetBtn = btn;
      }
    });
  }

  // Trigger the category filter
  if (targetBtn) {
    const clickEvent = new Event('click', { bubbles: true });
    targetBtn.dispatchEvent(clickEvent);
  }

  // If we have a specific document target, further filter to show only that document
  if (specific) {
    setTimeout(() => {
      filterToSpecificDocument(specific);
    }, 100); // Small delay to let category filter complete
  }
}

// Function to filter and show only specific documents
function filterToSpecificDocument(specificTerm) {
  const pdfCards = document.querySelectorAll('.pdf-card');
  const searchTerm = specificTerm.toLowerCase();
  let foundExactMatch = false;
  
  pdfCards.forEach(card => {
    const title = card.querySelector('.pdf-title')?.textContent?.toLowerCase() || '';
    const meta = card.querySelector('.pdf-meta')?.textContent?.toLowerCase() || '';
    const description = card.querySelector('.pdf-description')?.textContent?.toLowerCase() || '';
    
    // Check for exact or close matches
    const isMatch = title.includes(searchTerm) || 
                   meta.includes(searchTerm) || 
                   description.includes(searchTerm) ||
                   searchTerm.includes(title.replace(/[^a-zA-Z0-9\s]/g, '').trim());
    
    if (isMatch) {
      card.style.display = 'block';
      foundExactMatch = true;
    } else {
      card.style.display = 'none';
    }
  });
  
  // If no exact matches found, show all cards in the current category
  if (!foundExactMatch) {
    pdfCards.forEach(card => {
      if (card.style.display !== 'none') {
        card.style.display = 'block';
      }
    });
  }
}

// Enhanced navbar search event listener
window.addEventListener('navbarResourceSearch', function (e) {
  const { query, category, specific } = e.detail;
  
  // Only trigger if we're on the library page
  if (isOnLibraryPage()) {
    triggerResourceSearch(query, category, specific);
  }
});

// Function to get relative path with better handling for same-page navigation
function getRelativePath(targetPath) {
  // If target is an absolute URL, return as is
  if (targetPath.startsWith('http')) {
    return targetPath;
  }

  // If target is already relative, return it
  if (!targetPath.startsWith('/')) {
    return targetPath;
  }

  const currentPath = window.location.pathname;
  const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
  const targetDir = targetPath.substring(0, targetPath.lastIndexOf('/'));
  
  // If we're targeting the same directory, return just the filename
  if (currentDir === targetDir) {
    return targetPath.substring(targetPath.lastIndexOf('/') + 1);
  }

  // Calculate the base path relative to root
  const pathSegments = currentPath.split('/').filter(segment => segment);
  const depth = pathSegments.length - 1; // Don't count the file itself

  // Create relative path
  if (depth <= 0) {
    return '.' + targetPath;
  } else {
    return '../'.repeat(depth) + targetPath.substring(1);
  }
}

// Enhanced navigation function with same-page search handling
window.navigateToPage = function (url, searchData = null) {
  console.log('Navigating to:', url, 'with search data:', searchData);

  // Check if we're trying to navigate to the same page we're already on
  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const targetFile = url.substring(url.lastIndexOf('/') + 1).split('#')[0];
  
  // If we're on the same page and have search data, just trigger the search
  if (currentFile === targetFile && isOnLibraryPage() && searchData) {
    triggerResourceSearch(searchData.query, searchData.category, searchData.specific);
    hideSearch();
    return;
  }

  // Handle anchor links
  if (url.includes('#')) {
    const [baseUrl, anchor] = url.split('#');
    
    // Check if baseUrl matches current page
    if (baseUrl === currentPath || baseUrl === '' || baseUrl === '.') {
      // Same page: scroll to anchor or trigger search
      if (searchData && isOnLibraryPage()) {
        triggerResourceSearch(searchData.query, searchData.category, searchData.specific);
      } else {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      hideSearch();
      return;
    }
  }

  // Store search data in sessionStorage for use after navigation
  if (searchData) {
    sessionStorage.setItem('pendingSearch', JSON.stringify(searchData));
  }

  // Regular navigation
  const targetUrl = url.startsWith('/') ? getRelativePath(url) : getRelativePath(url);
  window.location.href = targetUrl;
  hideSearch();
};

// Function to check for pending searches after page load
function checkPendingSearch() {
  const pendingSearch = sessionStorage.getItem('pendingSearch');
  if (pendingSearch && isOnLibraryPage()) {
    try {
      const searchData = JSON.parse(pendingSearch);
      sessionStorage.removeItem('pendingSearch');
      
      // Wait for page to fully load before triggering search
      setTimeout(() => {
        triggerResourceSearch(searchData.query, searchData.category, searchData.specific);
      }, 500);
    } catch (e) {
      console.error('Error parsing pending search data:', e);
      sessionStorage.removeItem('pendingSearch');
    }
  }
}

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

function initNavbar() {
  console.log('Initializing navbar...');

  // Fix navigation paths first
  fixNavigationPaths();

  // Check for pending searches
  checkPendingSearch();

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
      const searchData = {
        query: query,
        category: directMapping.category,
        specific: directMapping.specific
      };
      window.navigateToPage(directMapping.url, searchData);
      return;
    }

    // Check if query matches any specific mapping partially
    const partialMapping = Object.keys(searchMappings).find(key =>
      key.includes(lowerQuery) || lowerQuery.includes(key)
    );

    if (partialMapping) {
      const mapping = searchMappings[partialMapping];
      const searchData = {
        query: query,
        category: mapping.category,
        specific: mapping.specific
      };
      window.navigateToPage(mapping.url, searchData);
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
        // Check if this is a library result and add search data
        const searchData = result.url.includes('library') ? {
          query: result.title.toLowerCase(),
          category: 'all',
          specific: null
        } : null;
        
        window.navigateToPage(result.url, searchData);
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
      <div class="result-title">
        <i class="fas fa-book-open"></i>
        <span>Browse Library</span>
      </div>
      <div class="result-description">Explore all mathematical resources and materials</div>
    `;
    browseItem.addEventListener('click', () => {
      window.navigateToPage('/public/resources/library/library.html');
    });
    container.appendChild(browseItem);

    const webSearch = document.createElement('div');
    webSearch.className = 'search-result-item';
    webSearch.innerHTML = `
      <div class="result-title">
        <i class="fas fa-globe"></i>
        <span>Search Web</span>
      </div>
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

    // Add direct mappings as suggestions with enhanced data
    Object.keys(searchMappings).forEach(key => {
      if (key.includes(lowerQuery)) {
        const mapping = searchMappings[key];
        suggestions.push({
          title: key,
          url: mapping.url,
          category: mapping.category,
          specific: mapping.specific,
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
              category: page.url.includes('library') ? 'all' : null,
              specific: keyword,
              type: 'page'
            });
          }
        });
      }
    });

    if (suggestions.length > 0) {
      const uniqueSuggestions = suggestions.filter((item, index, self) =>
        index === self.findIndex(t => t.url === item.url && t.title === item.title)
      ).slice(0, 5);

      displaySuggestions(uniqueSuggestions, container);
    }
  }

  function displaySuggestions(suggestions, container) {
    container.innerHTML = '';

    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'search-result-item suggestion';
      
      // Determine icon based on suggestion type
      const iconClass = suggestion.type === 'direct' ? 'fas fa-bullseye' : 'fas fa-file-alt';
      const typeText = suggestion.type === 'direct' ? 'Direct Match' : 'Page Match';
      
      suggestionItem.innerHTML = `
        <div class="result-title">${suggestion.title}</div>
        <div class="result-type">
          <i class="${iconClass}"></i>
          <span>${typeText}</span>
        </div>
      `;
      suggestionItem.addEventListener('click', () => {
        const searchData = {
          query: suggestion.title,
          category: suggestion.category,
          specific: suggestion.specific
        };
        window.navigateToPage(suggestion.url, searchData);
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

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Find the best matching link
    let bestMatch = null;
    let bestMatchLength = 0;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Skip anchor links
      if (href.startsWith('#')) return;

      // Get absolute path of the link
      const linkPath = new URL(href, window.location.origin).pathname;

      // Check if current path matches link exactly
      if (currentPath === linkPath) {
        link.classList.add('active');
        return;
      }

      // Check for partial matches
      const matchLength = Math.min(currentPath.length, linkPath.length);
      let score = 0;

      for (let i = 0; i < matchLength; i++) {
        if (currentPath[i] === linkPath[i]) {
          score++;
        } else {
          break;
        }
      }

      // If this link has a better match score than previous best
      if (score > bestMatchLength) {
        bestMatch = link;
        bestMatchLength = score;
      }
    });

    // If we found a best match, mark it as active
    if (bestMatch) {
      bestMatch.classList.add('active');
    }
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
    getRelativePath: getRelativePath,
    triggerResourceSearch: triggerResourceSearch,
    isOnLibraryPage: isOnLibraryPage
  };

  console.log('Navbar initialization complete');
}

// Attach to window for loader.js to call after navbar is loaded
window.initNavbar = initNavbar;