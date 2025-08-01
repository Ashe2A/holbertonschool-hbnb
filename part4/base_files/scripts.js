document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.getAttribute('data-value'));
      updateStars(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      const val = parseInt(star.getAttribute('data-value'));
      if (val <= rating) {
        star.classList.add('checked');
      } else {
        star.classList.remove('checked');
      }
    });
  }
});
