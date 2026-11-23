document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.scroll);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('.accordion button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('article');
    const isOpen = item.classList.toggle('open');
    button.querySelector('b').textContent = isOpen ? '−' : '+';
  });
});

const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
});
