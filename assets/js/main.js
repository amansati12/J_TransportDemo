(function () {
  "use strict";

  const navbar = document.getElementById("mainNavbar");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    const scrolled = window.scrollY > 40;
    if (navbar) navbar.classList.toggle("navbar-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll(".gallery-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".gallery-filters button").forEach((btn) => {
        btn.classList.remove("active", "btn-warning");
        btn.classList.add("btn-outline-dark");
      });
      button.classList.add("active", "btn-warning");
      button.classList.remove("btn-outline-dark");

      document.querySelectorAll(".gallery-item").forEach((item) => {
        const visible = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("d-none", !visible);
      });
    });
  });

  document.querySelectorAll(".needs-validation").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const status = form.querySelector(".form-status");
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        if (status) status.textContent = "Please complete the required details so our transport team can prepare an accurate quote.";
        return;
      }
      form.classList.add("was-validated");
      if (status) status.textContent = "Thank you. Your request is ready to connect to your preferred form handler or CRM.";
    });
  });
})();
