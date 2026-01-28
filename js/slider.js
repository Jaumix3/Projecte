// Slider / Carrusel funcional

class Slider {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.images = this.container.querySelectorAll('.slider-image');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        
        // Obtener botones
        this.prevBtn = this.container.querySelector('.slider-prev');
        this.nextBtn = this.container.querySelector('.slider-next');
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());
        
        // Autoplay
        this.startAutoplay();
        
        // Parar autoplay al pasar el mouse
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Mostrar primera imagen
        this.showImage(0);
    }
    
    showImage(index) {
        // Asegurar que el índice esté en rango
        if (index >= this.images.length) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex = index;
        }
        
        // Ocultar todas las imágenes
        this.images.forEach((img, i) => {
            img.classList.remove('active');
            img.style.opacity = '0';
            img.style.transform = 'scale(0.95)';
        });
        
        // Mostrar imagen actual
        this.images[this.currentIndex].classList.add('active');
        this.images[this.currentIndex].style.opacity = '1';
        this.images[this.currentIndex].style.transform = 'scale(1)';
    }
    
    nextImage() {
        this.showImage(this.currentIndex + 1);
    }
    
    prevImage() {
        this.showImage(this.currentIndex - 1);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextImage();
        }, 4000); // Cambiar imagen cada 4 segundos
    }
    
    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

// Inicializar slider cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    new Slider('.carrusel');
});
