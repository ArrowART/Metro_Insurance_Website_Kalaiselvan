// nav bar
var toggleBtn = document.getElementById('toggle');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleBtn.addEventListener('click', handleClick);

// scroll
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
      });
  });
  // Scroll to Reserve now section
  document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#services').scrollIntoView({
          behavior: 'smooth'
      });
  });
  // Scroll to About Us section
  document.querySelector('a[href="#aboutus"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#aboutus').scrollIntoView({
          behavior: 'smooth'
      });
  });
    // Scroll to Home section
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#home').scrollIntoView({
          behavior: 'smooth'
      });
  });
  document.querySelector('a[href="#getaquote"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#getaquote').scrollIntoView({
        behavior: 'smooth'
    });
});
});