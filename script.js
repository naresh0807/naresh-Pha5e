import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initial Animations
        gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 1 });

        const images = document.querySelectorAll('.gallery-image');

        images.forEach(image => {
            image.addEventListener('mouseenter', function() {
                try {
                    images.forEach(img => {
                        if (img !== this) {
                            gsap.to(img, {
                                filter: 'grayscale(100%)',
                                width: '100px',
                                height: '100px',
                                duration: 0.3
                            });
                        } else {
                            gsap.to(img, {
                                filter: 'grayscale(0%)',
                                width: '200px',
                                height: '200px',
                                duration: 0.3
                            });
                        }
                    });
                } catch (error) {
                    console.error('Error in mouseenter event:', error);
                }
            });

            image.addEventListener('mousemove', function(e) {
                try {
                    const x = (e.offsetX - this.offsetWidth / 2) / this.offsetWidth;
                    const y = (e.offsetY - this.offsetHeight / 2) / this.offsetHeight;
                    gsap.to(this, {
                        rotateX: 20 * y,
                        rotateY: 20 * x,
                        duration: 0.1
                    });
                } catch (error) {
                    console.error('Error in mousemove event:', error);
                }
            });

            image.addEventListener('mouseleave', function() {
                try {
                    gsap.to(this, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.1
                    });
                    images.forEach(img => {
                        gsap.to(img, {
                            filter: 'grayscale(100%)',
                            width: '150px',
                            height: '150px',
                            duration: 0.3
                        });
                    });
                } catch (error) {
                    console.error('Error in mouseleave event:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error during DOMContentLoaded:', error);
    }
});
