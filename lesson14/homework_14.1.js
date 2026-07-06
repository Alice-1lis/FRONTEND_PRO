const slides = document.querySelectorAll('.slide');
const dotsEl = document.getElementById('dots');
let current = 0;

// Генеруємо крапки за кількістю слайдів у HTML
slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', 'Слайд ' + (i + 1));
    btn.onclick = () => goToSlide(i);
    dotsEl.appendChild(btn);
});
function goToSlide(idx) {
    slides[current].classList.remove('active');
    dotsEl.children[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsEl.children[current].classList.add('active');
    next.style.display = (current === slides.length - 1) ? 'none' : 'block';
}
document.getElementById('prev').onclick = () => goToSlide(current - 1);
document.getElementById('next').onclick = () => goToSlide(current + 1);
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goToSlide(current - 1);
    if (e.key === 'ArrowRight') goToSlide(current + 1);


});

