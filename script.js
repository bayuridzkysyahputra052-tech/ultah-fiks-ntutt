// === BIRTHDAY PROJECT SCRIPTS ===

// Confetti Colors
const confettiColors = ['#ff6b6b', '#ffa502', '#ffd700', '#00ff7f', '#00bfff', '#ff69b4'];

// Current page
let currentPage = 1;
const totalPages = 5;

// Create Confetti
function createConfetti() {
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 5) + 's';
        confetti.style.animationDelay = (Math.random() * 5) + 's';
        
        document.body.appendChild(confetti);
    }
}

// Create Balloons
function createBalloons() {
    const balloonColors = ['#ff6b6b', '#ffa502', '#00ff7f', '#00bfff', '#ff69b4', '#ffd700'];
    const balloonCount = 15;
    
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        balloon.style.left = (Math.random() * 95 + 2) + 'vw';
        balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.animationDuration = (Math.random() * 5 + 8) + 's';
        balloon.style.animationDelay = (Math.random() * 10) + 's';
        
        document.body.appendChild(balloon);
    }
}

// Go to specific page
function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    document.getElementById('page' + pageNum).classList.add('active');
    
    // Update current page
    currentPage = pageNum;
    
    // Update navigation buttons
    updateNavigation();
    
    // Update dots
    updateDots();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Next page
function nextPage() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// Previous page
function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// Update navigation buttons state
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

// Update dots indicator
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        prevPage();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    createBalloons();
    goToPage(1);
});