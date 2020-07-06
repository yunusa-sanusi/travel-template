const menuBar = document.getElementById('menu-bar-icon', slideMenu);
const btnPlay = document.getElementById('btn-play-block', playBlockScale);
const btnBookTour = document.querySelector('#book-description-block div button', btnBookTourFade);
const btnExplore = document.querySelectorAll('.tour-content button', btnExploreFade);

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

// Changes the color of the header when scroll position is more than 557
function changeHeaderStyle() {
  window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 557) {
      document.getElementById('header').className = 'dark-background-header';
    } else if(window.scrollY < 557 && document.getElementById('header').classList.contains('dark-background-header')) {
      document.getElementById('header').classList.remove('dark-background-header');
      document.getElementById('header').className = 'transparent-background-header';
    };
  });
};

changeHeaderStyle();

// Animates the play button on the hero section of the page
let scaleIn = false // Scale Toggle Control
function playBlockScale() {
  btnPlay.addEventListener('mouseenter', () => {
    if(scaleIn === false) {
      document.getElementById('btn-play-block').className = 'scale-in';
      document.getElementById('btn-play-block').style.transform = 'scale(1)';
      scaleIn = true;
    };
  });

  btnPlay.addEventListener('mouseleave', () => {
    if(scaleIn === true) {
      document.getElementById('btn-play-block').className = 'scale-out';
      document.getElementById('btn-play-block').style.transform = 'scale(1.1)';
      scaleIn = false;
    };
  });
};

playBlockScale();

// Animate the hover effect of the buttons in the tour section
let fadeIn = false // Fade Toggle Control
function btnExploreFade() {
  Array.from(btnExplore).forEach((element) => {
    element.addEventListener('mouseenter', () => {
      if(fadeIn === false) {
        element.className = 'btn-explore-fade-in';
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        element.style.color = '#292929';
        fadeIn = true;
      };
    });

    element.addEventListener('mouseleave', () => {
      if(fadeIn === true) {
        element.className = 'btn-explore-fade-out';
        element.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        element.style.color = 'white';
        fadeIn = false;
      };
    });
  });
};

btnExploreFade();

// Animates hover effect on the button in the book tour section
let bookTourFadeIn = false; // Fade Toggle Control
function btnBookTourFade() {
  btnBookTour.addEventListener('mouseenter', () => {
    if(bookTourFadeIn === false) {
      btnBookTour.className = 'book-tour-btn-fade-in';
      btnBookTour.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      btnBookTour.style.border = '1px solid rgba(0, 0, 0, 0.8)';
      bookTourFadeIn = true;
    }
  })

  btnBookTour.addEventListener('mouseleave', () => {
    if(bookTourFadeIn === true) {
      btnBookTour.className = 'book-tour-btn-fade-out';
      btnBookTour.style.backgroundColor = '#292929';
      btnBookTour.style.color = 'white';
      bookTourFadeIn = false;
    }
  })
}

btnBookTourFade();