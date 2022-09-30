window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
    headerlink = document.querySelectorAll('.header_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header.classList.toggle('header_active');
    });

    headerlink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header.classList.toggle('header_active');
        })
    })
})

const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('slide-in-bottom');
      }
    });
  });
observer.observe(document.querySelector('.promo__block'));
observer.observe(document.querySelector('.creative__block'));
observer.observe(document.querySelector('.services__items'));
observer.observe(document.querySelector('.lifestyle__block'));
observer.observe(document.querySelector('.reviews__items'));
observer.observe(document.querySelector('.benefit__wrapper'));
observer.observe(document.querySelector('.discount__wrapper'));