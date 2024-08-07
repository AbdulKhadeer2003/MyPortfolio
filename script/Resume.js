document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('#left-menu a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        menuItems.forEach(item => {
          if (item.getAttribute('href') === '#' + sectionId) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.5 });

  const pageSections = document.querySelectorAll('section');
  pageSections.forEach(section => observer.observe(section));
});




