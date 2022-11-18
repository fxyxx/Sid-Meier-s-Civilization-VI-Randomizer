document.addEventListener('DOMContentLoaded', () => {
  let toTopBtn = document.querySelector('.to-up');

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  };

  toTopBtn.addEventListener('click', () => {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});
