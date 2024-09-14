window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var scrollPosition = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;

  header.classList.toggle('sticky', scrollPosition > 0);

  // Check if the user has scrolled to the bottom
  if (scrollPosition + windowHeight >= bodyHeight - 100) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
