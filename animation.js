// Animate sections on scroll
const sections = document.querySelectorAll('section');

const fadeIn = (element) => {
  element.classList.add('fade-in');
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn(entry.target);
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  sectionObserver.observe(section);
});
