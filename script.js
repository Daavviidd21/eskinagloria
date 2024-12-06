////       NAV BUTTON
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///         STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entires) {
    const ent = entires[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

////       SMOOTH SCROLLING
// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     //Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEL = document.querySelector(href);
//       sectionEL.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile nav
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

// Select all anchor links
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Check if the link is an internal link (i.e., starts with #)
    if (href.startsWith("#")) {
      // Prevent default behavior for smooth scroll
      e.preventDefault();

      // Scroll back to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links within the page
      if (href !== "#" && href.startsWith("#")) {
        const sectionEL = document.querySelector(href);
        sectionEL.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile nav
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    } else {
      // If it's an external link, allow the default behavior (redirect)
      return;
    }
  });
});

////    FOOTER COPY RIGHT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
