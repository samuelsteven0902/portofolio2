// ===== SHOW SCROLL ====
function scrollUp() {
    const scrollUp = document.getElementById('scroll-Up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

$(document).ready(function() {
    $(this).scrollTop(0);
});

