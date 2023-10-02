const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

for (const button of selectPlanButtons) {
  button.addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';

    modal.classList.add('open');

    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  });
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';

  mobileNav.classList.add('open');
  backdrop.style.display = 'block';

  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});

function closeModal() {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';

  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200);
}

ctaButton.addEventListener('animationstart', (event) => {
  console.log('Animation started!!', event);
});

ctaButton.addEventListener('animationend', (event) => {
  console.log('Animation ended!!', event);
});

ctaButton.addEventListener('animationiteration', (event) => {
  console.log('Animation iteration!!', event);
});
