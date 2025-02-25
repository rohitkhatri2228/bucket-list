
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');
        const thumbnails = document.querySelectorAll('.thumbnail');

        let currentIndex = 0;
        let interval;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function startAutoSlide() {
            interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.dataset.index);
                currentIndex = index;
                updateSlider();
                stopAutoSlide();
                startAutoSlide();
            });
        });

        startAutoSlide(); // Start auto-sliding when the page loads
