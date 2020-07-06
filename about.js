const menuBar = document.getElementById('menu-bar-icon', slideMenu);


// Slides the mobile version menu in and out
let slideOut = false; // Slide Toggle Control
function slideMenu() {
  menuBar.addEventListener('click', () => {
    if(slideOut === false) {
      // Slides the menu out
      document.getElementById('sm-menu-block').className = 'animate-menu-slide-in';
      document.getElementById('sm-menu-block').style.display = 'block';
      // console.log('Clicked..');
      slideOut = true;
    } else if(slideOut === true) {
      // Slides the menu in
      document.getElementById('sm-menu-block').className = 'animate-menu-slide-out';
      
      setTimeout(() => document.getElementById('sm-menu-block').style.display = 'none', 900);

      // console.log('Clicked Back In..');
      slideOut = false;
    };
  });
};

slideMenu();


let slideIndex = 0;
function autoSlideTestimonial() {
  const items = document.getElementsByClassName('slideshow-content-block');
  for(let i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  slideIndex++;
  if(slideIndex > items.length) {slideIndex = 1};
  items[slideIndex - 1].style.display = 'block';
  setTimeout(autoSlideTestimonial, 5000)
}

autoSlideTestimonial();
