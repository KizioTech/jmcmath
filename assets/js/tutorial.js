document.addEventListener("DOMContentLoaded", function () {
  // Desktop dropdown
  const dropdownTrigger = document.querySelector(".dropdown-trigger");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownTrigger && dropdownContent) {
    dropdownTrigger.addEventListener("click", function () {
      dropdownContent.classList.toggle("show-dropdown");
    });

    // Optional: close dropdown when clicking outside
    window.addEventListener("click", function (e) {
      if (
        !dropdownTrigger.contains(e.target) &&
        !dropdownContent.contains(e.target)
      ) {
        dropdownContent.classList.remove("show-dropdown");
      }
    });
  }

  // Mobile dropdown
  const mobileDropdownTrigger = document.getElementById(
    "mobile-dropdown-trigger"
  );
  const mobileDropdown = document.getElementById("mobile-dropdown");

  if (mobileDropdownTrigger && mobileDropdown) {
    mobileDropdownTrigger.addEventListener("click", function () {
      mobileDropdown.classList.toggle("show-dropdown");
      document
        .getElementById("mobile-dropdown-icon")
        .classList.toggle("rotated");
    });
  }
});
function toggleSolution(button) {
  const solutionContent = button.nextElementSibling;
  const icon = button.querySelector("i");

  if (solutionContent.classList.contains("show")) {
    solutionContent.classList.remove("show");
    button.innerHTML = '<i class="fas fa-chevron-down"></i> Show Solution';
    button.classList.remove("expanded");
  } else {
    solutionContent.classList.add("show");
    button.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Solution';
    button.classList.add("expanded");
  }
}

// Optional: Auto-render MathJax when content is dynamically shown
document.addEventListener("DOMContentLoaded", function () {
  // Re-render MathJax for any dynamically shown content
  const solutionToggles = document.querySelectorAll(".solution-toggle");
  solutionToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      setTimeout(() => {
        if (window.MathJax) {
          MathJax.typesetPromise();
        }
      }, 100);
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
