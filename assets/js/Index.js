const Home = (function(){

    document.addEventListener("DOMContentLoaded", start);

    function start(){
        Carrosel.start();
    }

    const Carrosel = (function(){

        const conteudo = document.querySelector('.conteudo-carousel');
        const carousel = document.querySelector('.carousel');
        const container = carousel.querySelector('.carousel-container');
        const prevBtn = conteudo.querySelector('.carousel-arrow.left');
        const nextBtn = conteudo.querySelector('.carousel-arrow.right');
    
        let currentIndex = 0;

        function start(){
            configuraInteracao();
        }

        function configuraInteracao() {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + 23) % 23;
                updateCarousel();
            });
    
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % 23;
                updateCarousel();
            });
        }
    
        function updateCarousel() {
            container.style.transform = `translateX(-${currentIndex * 150}px)`;
        }

        return {
            start
        }

    })();


})();