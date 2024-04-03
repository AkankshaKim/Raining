document.addEventListener("DOMContentLoaded", function() {
function makeItRain() {
    // Clear out everything
    document.querySelector('.rain').innerHTML = '';

    // Generate raindrops
    for (let i = 0; i < 100; i++) {
        // Randomize position and animation delays
        const left = Math.floor(Math.random() * 98) + 1;
        const bottom = Math.floor(Math.random() * 100) + 1;
        const delay = Math.floor(Math.random() * 100) / 100;
        const duration = Math.floor(Math.random() * 50) / 100 + 0.5; // Random duration between 0.5 and 1 second

        // Create raindrop element
        const raindrop = document.createElement('div');
        raindrop.className = 'drop';
        raindrop.style.left = `${left}%`;
        raindrop.style.bottom = `${bottom}%`;
        raindrop.style.animationDelay = `${delay}s`;
        raindrop.style.animationDuration = `${duration}s`;

        // Create stem and splat elements
        const stem = document.createElement('div');
        stem.className = 'stem';
        const splat = document.createElement('div');
        splat.className = 'splat';

        // Append stem and splat to raindrop
        raindrop.appendChild(stem);
        raindrop.appendChild(splat);

        // Append raindrop to front row
        document.querySelector('.rain.front-row').appendChild(raindrop);
    }
}

// Initialize rain effect
makeItRain();
});