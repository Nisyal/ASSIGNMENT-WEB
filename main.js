(function () {
  "use strict";

  /* ---------------------------------------------------------
     Mobile navigation toggle
  --------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------
     Scroll reveal (progressive enhancement)
  --------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    ".service-card, .testimonial-card, .price-card"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------
     Contact form — client-side validation
  --------------------------------------------------------- */
  var form = document.getElementById("contactForm");
  if (!form) return;

  var status = document.getElementById("formStatus");
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("nameError"),
      validate: function (value) {
        return value.trim().length > 0 ? "" : "Please enter your name.";
      }
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: function (value) {
        if (value.trim().length === 0) return "Please enter your email.";
        if (!EMAIL_RE.test(value.trim())) return "Please enter a valid email address.";
        return "";
      }
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("messageError"),
      validate: function (value) {
        return value.trim().length >= 10
          ? ""
          : "Tell us a little more (at least 10 characters).";
      }
    }
  };

  function setFieldState(field, message) {
    var row = field.input.closest(".form-row");
    field.error.textContent = message;
    if (message) {
      row.classList.add("has-error");
      field.input.setAttribute("aria-invalid", "true");
    } else {
      row.classList.remove("has-error");
      field.input.removeAttribute("aria-invalid");
    }
  }

  function validateField(key) {
    var field = fields[key];
    var message = field.validate(field.input.value);
    setFieldState(field, message);
    return message === "";
  }

  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    field.input.addEventListener("blur", function () { validateField(key); });
    field.input.addEventListener("input", function () {
      if (field.input.closest(".form-row").classList.contains("has-error")) {
        validateField(key);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isValid = Object.keys(fields)
      .map(validateField)
      .every(Boolean);

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.className = "form-status error";
      var firstInvalid = form.querySelector(".has-error input, .has-error textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // No backend is wired up in this build. In production, replace this
    // block with a real submission (Netlify Forms, Formspree, or your
    // own API endpoint) — see README for instructions.
    status.textContent = "Thanks — your message is in. We'll reply within one business day.";
    status.className = "form-status success";
    form.reset();
  });
})();
