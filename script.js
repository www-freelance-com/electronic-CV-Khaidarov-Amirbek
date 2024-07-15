document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = dots.length;

    function updateSlide(index) {
        const slideWidth = document.querySelector('.slide').offsetWidth;
        gsap.to(slides, { duration: 0.5, x: -index * slideWidth });
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateSlide(index));
    });

    // Добавление поддержки свайпа
    const hammer = new Hammer(slides);
    hammer.on('swipeleft', () => {
        if (currentIndex < totalSlides - 1) {
            updateSlide(currentIndex + 1);
        }
    });
    hammer.on('swiperight', () => {
        if (currentIndex > 0) {
            updateSlide(currentIndex - 1);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray('.section').forEach(section => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    const cardsWrapper = document.querySelector(".cards-wrapper");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0;
    const cardWidth = document.querySelector(".card").offsetWidth;
    const cardCount = document.querySelectorAll(".card").length;
    
    // Переход к предыдущей карточке
    prevBtn.addEventListener("click", function() {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSliderPosition();
    });
    
    // Переход к следующей карточке
    nextBtn.addEventListener("click", function() {
      currentIndex = Math.min(currentIndex + 1, cardCount - 1);
      updateSliderPosition();
    });
  
    // Обновление позиции слайдера
    function updateSliderPosition() {
      const newPosition = -currentIndex * cardWidth;
      cardsWrapper.style.transform = `translateX(${newPosition}px)`;
    }
  });