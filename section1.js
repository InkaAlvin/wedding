$(document).ready(function() {
    let slideIndex = 0;
    const interval = 3000; // Change slide every 3 seconds

    // Set your wedding date here (format: YYYY-MM-DD HH:MM:SS)
    const weddingDate = new Date('2025-02-01 12:00:00').getTime();

    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));

        if (distance < 0) {
            clearInterval(timer);
            $('.countdown').html('<h2>The Wedding Day Has Arrived!</h2>');
        }
    }



    function showSlide(n) {
        const slides = document.querySelector('#home').querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex = n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        
        slides[slideIndex].classList.add('active');
    }
    
    function currentSlide(n) {
        showSlide(n);
        resetTimer();
    }
    
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    let slideTimer = setInterval(nextSlide, interval);
    
    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, interval);
    }
});


