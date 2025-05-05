const allSections = document.querySelectorAll(".fade-in-section");

let options = {
    rootMargin: "50px",
    threshold: 0.4
}

let animationobserver = new IntersectionObserver(callback, options);

allSections.forEach(section => {
    animationobserver.observe(section);
  });

  function callback(entries, animationobserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            animationobserver.unobserve(entry.target);
        }
      });
  }