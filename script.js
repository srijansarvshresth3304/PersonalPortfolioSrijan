function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function toggleCircles(show = true) {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
        if (show) {
            circle.classList.add('open'); // Center se bahar explode
        } else {
            circle.classList.remove('open'); // Bahar se center implode
        }
        circle.style.opacity = show ? '1' : '0';
        circle.style.pointerEvents = show ? 'auto' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profile-image');
    const circles = document.querySelectorAll('.circle');
    let circlesActive = false;

    if (profileImage && circles.length) {
        profileImage.addEventListener('click', (e) => {
            if (!isMobile()) return;
            e.stopPropagation();
            circlesActive = !circlesActive;
            toggleCircles(circlesActive);
        });

        document.addEventListener('click', (e) => {
            if (!circlesActive || e.target.closest('.circle')) return;
            circlesActive = false;
            toggleCircles(false);
        });

        // circles.forEach((circle) => {
        //     circle.addEventListener('click', (e) => {
        //         e.stopPropagation();
        //         // Add circle click functionality here
        //         alert('Circle clicked!');
        //     });
        // });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
});
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const sparkCount = 30;

    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';

        // Random position and animation delay
        spark.style.left = Math.random() * 100 + '%';
        spark.style.top = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 2 + 's';

        sparklesContainer.appendChild(spark);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // ...पहले वाला कोड...

    // Sparkles initialization
    createSparkles();
});

// baaki aur kuch bhi mat cherna
// Image par click ka listener
document.querySelector('#hero-part img').addEventListener('click', function() {
  const circles = document.querySelectorAll('.circle');
  const isOpen = this.classList.toggle('active'); // Toggle state
  
  circles.forEach(circle => {
    circle.classList.toggle('open', isOpen); // Open/close circles
    circle.style.pointerEvents = isOpen ? 'auto' : 'none'; // Click enable/disable
  });
});