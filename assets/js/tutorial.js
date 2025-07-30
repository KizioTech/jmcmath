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
