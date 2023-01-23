/* MAIN JAVASCRIPT FILE */

/* VARIABLE BANK */
const navList = document.querySelector('.nav-list');
const navBtn = document.querySelector('.nav-btn');

// navList.style.visibility = 'visible'

/* HEADER FUNCTIONS */

function toggleNav() {
  if (navList.style.visibility === 'hidden') {
    navList.style.visibility = 'visible'; 
  } else {
    navList.style.visibility = 'hidden';
  };
};

navBtn.onclick = toggleNav;