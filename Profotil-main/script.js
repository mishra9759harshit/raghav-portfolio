let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 


window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150; 
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
 
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

function toggleDescription() {
  var description = document.getElementById('description');
  var button = document.querySelector('.btn-toggle');

  if (description.style.display === 'none') {
      description.style.display = 'block';
      button.textContent = 'Hide Description';
  } else {
      description.style.display = 'none';
      button.textContent = 'Show Description';
  }
}

// Get Links and Pop-Ups
const faqLink = document.getElementById('faq-link');
const servicesLink = document.getElementById('services-link');
const aboutMeLink = document.getElementById('about-me-link');

const faqPopup = document.getElementById('faq-popup');
const servicesPopup = document.getElementById('services-popup');
const aboutMePopup = document.getElementById('about-me-popup');

const closeButtons = document.querySelectorAll('.close-popup');

// Function to Show Pop-Up
function showPopup(popup) {
  popup.classList.remove('hidden');
}

// Function to Hide Pop-Up
function hidePopup(popup) {
  popup.classList.add('hidden');
}

// Event Listeners for Links
faqLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPopup(faqPopup);
});

servicesLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPopup(servicesPopup);
});

aboutMeLink.addEventListener('click', (e) => {
  e.preventDefault();
  showPopup(aboutMePopup);
});

// Event Listeners for Close Buttons
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    hidePopup(e.target.closest('.popup'));
  });
});

// Close on Outside Click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    hidePopup(e.target);
  }
});

// Get elements
const hireMeBtn = document.getElementById('hire-me-btn');
const hireMePopup = document.getElementById('hire-me-popup');
const closePopup = hireMePopup.querySelector('.close-popup');

// Show popup on button click
hireMeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  hireMePopup.classList.remove('hidden');
});

// Close popup on close button click
closePopup.addEventListener('click', () => {
  hireMePopup.classList.add('hidden');
});

// Close popup on clicking outside of content
window.addEventListener('click', (e) => {
  if (e.target === hireMePopup) {
    hireMePopup.classList.add('hidden');
  }
});
// Show popup after 10 seconds
setTimeout(() => {
  document.getElementById('popup-container').style.display = 'flex';
}, 10000);

// Handle form submission
document.getElementById('new-year-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Show GIF animation and hide the popup
  document.getElementById('popup-container').style.display = 'none';  // Hide the popup container
  document.getElementById('gif-container').style.display = 'flex';  // Show the GIF container

  // Wait for 3 seconds, submit the form, and close the popup
  setTimeout(() => {
    e.target.submit();

    // Close the popup after form submission (if still open)
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('gif-container').style.display = 'none'; // Optionally hide the GIF after 3 seconds
  }, 3000);
});

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggle the active class to show or hide the menu
}


