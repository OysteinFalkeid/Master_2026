// Dropdown menu functionality
function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Smooth scrolling for anchor links (if you add any internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current page in dropdown
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    
    dropdownLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#3498db';
            link.style.color = 'white';
        }
    });
});

// Simple fade-in animation for cards
function fadeInOnScroll() {
    const cards = document.querySelectorAll('.overview-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.overview-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
});

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
});


function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

// Load the header and footer
loadHTML("head", "assets/head.html");
loadHTML("header", "assets/header.html");
loadHTML("footer", "assets/footer.html");
