(function(){

  // Navigation Fixed
  let navbar = document.querySelector('.navbar');
  let navbarToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');

  function show(){
    let pageYOffset = window.pageYOffset;
    let toTopShow = document.querySelector('#to-top');
    let intro = document.querySelector('#intro');

    intro.style.backgroundPositionY = pageYOffset * 0.7 + 'px';

    // Show/Hide Navbar
    if (pageYOffset >= 200) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }

    // Show/Hide to Top Button
    if (pageYOffset >= 600) {
      toTopShow.classList.add('topShow');
    } else {
      toTopShow.classList.remove('topShow');
    }
  }

  function slideDown() {
    navbarCollapse.classList.toggle('slideDown')
  }

  window.addEventListener('scroll', show);
  navbarToggler.addEventListener('click', slideDown);

  // console.log(navbarCollapse)
})()