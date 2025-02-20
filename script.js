// Initialize Lucide icons
lucide.createIcons();

// Get DOM elements
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');

// Update city name when input changes
cityInput.addEventListener('input', (e) => {
    cityName.textContent = e.target.value;
});

// Make icons responsive to hover
document.querySelectorAll('.detail-card, .forecast-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
