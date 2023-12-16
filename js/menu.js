window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var background = document.querySelector('.background-container');
    background.style.transform = 'translateY(' + -(scrolled * 0.5) + 'px)';
});