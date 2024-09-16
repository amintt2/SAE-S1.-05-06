window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset;

  header.classList.toggle('sticky', scrollPosition > 0);
});
