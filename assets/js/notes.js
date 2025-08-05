// Mobile navigation toggle
const mobileNavToggle = document.getElementById("sidebar-toggle");
const navSidebar = document.getElementById("notes-nav-sidebar");
const mobileOverlay = document.getElementById("mobile-overlay");
const navLinks = document.querySelectorAll(".notes-nav-link");

// Get the existing push toggle element from HTML
const pushToggle = document.getElementById("push-toggle");

// Update push toggle visibility based on screen size
function updatePushToggleVisibility() {
  if (pushToggle) {
    if (window.innerWidth <= 768) {
      pushToggle.style.display = "block";
    } else {
      pushToggle.style.display = "none";
    }
  }
}

// Push toggle functionality
if (pushToggle) {
  pushToggle.addEventListener("click", () => {
    navSidebar.classList.toggle("active");
    mobileOverlay.classList.toggle("active");

    const icon = pushToggle.querySelector("i");
    if (navSidebar.classList.contains("active")) {
      icon.className = "fas fa-chevron-left";
    } else {
      icon.className = "fas fa-chevron-right";
    }
  });
}

// Initial setup
updatePushToggleVisibility();

// Toggle sidebar and update icon
mobileNavToggle?.addEventListener("click", () => {
  navSidebar.classList.toggle("active");
  mobileOverlay.classList.toggle("active");

  const icon = mobileNavToggle.querySelector("i");
  if (navSidebar.classList.contains("active")) {
    icon.className = "fas fa-times";
  } else {
    icon.className = "fas fa-bars";
  }
});

// Close sidebar when clicking overlay
mobileOverlay?.addEventListener("click", () => {
  navSidebar.classList.remove("active");
  mobileOverlay.classList.remove("active");

  if (mobileNavToggle) {
    mobileNavToggle.querySelector("i").className = "fas fa-bars";
  }
  if (pushToggle) {
    pushToggle.querySelector("i").className = "fas fa-chevron-right";
  }
});

// Navigation link functionality - FIXED FOR BOTH DESKTOP AND MOBILE
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Get the target section
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile nav if open (mobile only)
        if (window.innerWidth <= 768) {
          navSidebar.classList.remove("active");
          mobileOverlay.classList.remove("active");

          if (mobileNavToggle) {
            mobileNavToggle.querySelector("i").className = "fas fa-bars";
          }
          if (pushToggle) {
            pushToggle.querySelector("i").className = "fas fa-chevron-right";
          }
        }
      }
    }
  });
});

// Update active navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos <= bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Handle window resize
window.addEventListener("resize", () => {
  updatePushToggleVisibility();

  if (window.innerWidth > 768) {
    navSidebar.classList.remove("active");
    mobileOverlay.classList.remove("active");

    if (mobileNavToggle) {
      mobileNavToggle.querySelector("i").className = "fas fa-bars";
    }
    if (pushToggle) {
      pushToggle.querySelector("i").className = "fas fa-chevron-right";
    }
  }
});

// Section navigation buttons functionality
const sectionNavButtons = document.querySelectorAll(
  ".notes-section-nav .notes-nav-btn"
);

sectionNavButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = button.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (targetId && !targetId.startsWith("#")) {
      // Handle external links (like library.html, tutorials.html)
      window.location.href = targetId;
    }
  });
});

// Submenu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mainMenuItems = document.querySelectorAll(
    ".notes-nav-item.has-submenu"
  );

  mainMenuItems.forEach((item) => {
    const mainLink = item.querySelector(".notes-nav-link");

    if (mainLink) {
      mainLink.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all other main menu items
        mainMenuItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        // Toggle active class on clicked item
        item.classList.toggle("active");
      });
    }
  });

  // Also handle submenu links
  const submenuLinks = document.querySelectorAll(
    ".notes-nav-submenu .notes-nav-link"
  );
  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all main navigation links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked submenu link
      link.classList.add("active");

      // Get the target section
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Close mobile nav if open (mobile only)
          if (window.innerWidth <= 768) {
            navSidebar.classList.remove("active");
            mobileOverlay.classList.remove("active");

            if (mobileNavToggle) {
              mobileNavToggle.querySelector("i").className = "fas fa-bars";
            }
            if (pushToggle) {
              pushToggle.querySelector("i").className = "fas fa-chevron-right";
            }
          }
        }
      }
    });
  });
});
// Mobile Detection and Warning System
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

function isPortraitMode() {
  return window.innerHeight > window.innerWidth;
}

function shouldShowWarning() {
  // Check if user has dismissed the warning permanently
  const dontShow = localStorage.getItem("hideMobileEquationWarning");
  if (dontShow === "true") {
    return false;
  }

  // Show warning if on mobile device
  return isMobileDevice();
}

function showMobileWarning() {
  const overlay = document.getElementById("mobileWarning");
  if (overlay) {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
}

function closeMobileWarning() {
  const overlay = document.getElementById("mobileWarning");
  if (overlay) {
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
  }
}

function dontShowAgain() {
  localStorage.setItem("hideMobileEquationWarning", "true");
  closeMobileWarning();
}

function resetWarningPreference() {
  localStorage.removeItem("hideMobileEquationWarning");
  alert(
    "Warning preference reset! The mobile warning will show again on mobile devices."
  );
}

// Auto-show warning on page load for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  if (shouldShowWarning()) {
    // Small delay to ensure page is fully loaded
    setTimeout(showMobileWarning, 1000);
  }
});

// Optional: Show warning when rotating to portrait mode
window.addEventListener("orientationchange", function () {
  setTimeout(function () {
    if (
      isMobileDevice() &&
      isPortraitMode() &&
      !localStorage.getItem("hideMobileEquationWarning")
    ) {
      showMobileWarning();
    }
  }, 500);
});

// Close warning when clicking outside the popup
document
  .getElementById("mobileWarning")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeMobileWarning();
    }
  });

// Close warning with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMobileWarning();
  }
});
