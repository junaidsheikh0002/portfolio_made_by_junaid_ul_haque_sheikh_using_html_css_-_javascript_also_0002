// Typing Animation Script
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = ['Web Developer', 'YouTuber', 'Teacher'];
let index = 0;

function playTypingAnimation() {
    typingAnimationElement.textContent = typingTexts[index];
    index = (index + 1) % typingTexts.length;
}

setInterval(playTypingAnimation, 2000); // Repeat every 2 seconds

// jQuery Plugin Scripts (if applicable)
// Example: Initializing Owl Carousel
$(document).ready(function() {
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});