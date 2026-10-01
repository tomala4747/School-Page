function checkSlide() {
    document.querySelectorAll('.anim-lewa, .anim-prawa').forEach(el => {
        const rect = el.getBoundingClientRect();
        const visible = rect.top < window.innerHeight - 50;
        if (visible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkSlide);
checkSlide();