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

function updateFooterText() {
  // Get the current page URL path
  var path = window.location.pathname;

  // Select the footer element
  var footer = document.getElementById("creator"); // Assuming your footer text has this ID

  // Check which page the user is on and change the footer text
  if (path.includes("index")) {
    footer.innerHTML = "Createur de la page : Constant SUCHET";
  } else if (path.includes("Innovations")) {
    footer.innerHTML = "Createur de la page : Talali Zakaria";
  } else if (path.includes("Finances")) {
    footer.innerHTML = "Createur de la page : Touzi Tahar Amin";
  } else if (path.includes("Evolution")) {
    footer.innerHTML = "Createur de la page : Jibryl Tebib";
  } else {
    footer.innerHTML = "Createur de la page : Constant SUCHET";
  }
}


window.addEventListener('DOMContentLoaded', updateFooterText);
