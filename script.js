function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
});

fadeInElements.forEach(element => {
    observer.observe(element);
});



let currentSlide = 0;

function changeSlide(direction) {
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
slides.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}
function scrollToSection() {

    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection() {

    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
}