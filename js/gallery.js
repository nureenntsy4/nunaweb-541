const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
