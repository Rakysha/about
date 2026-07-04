import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const slide1 = document.getElementById('slide-1');
  const slide2 = document.getElementById('slide-2');
  const slide3 = document.getElementById('slide-3');
  
  const typingText = document.getElementById('typing-text');
  const videoWrapper = document.getElementById('video-wrapper');
  const scrollIndicator = document.getElementById('scroll-indicator');
  const restOfSite = document.getElementById('rest-of-site');

  const textToType = "Я IT-специалист. Помогаю бизнесу работать без сбоев. Посмотрите короткое видео, чтобы узнать, как сэкономить на сисадмине и забыть про зависающие кассы и компьютеры.";
  const cursorHTML = '<span class="cursor"></span>';

  // --- СЛАЙД 1: Приветствую! ---
  setTimeout(() => {
    slide1.classList.add('fade-out-slide');
    
    // Переход ко второму слайду
    setTimeout(() => {
      slide1.style.display = 'none';
      slide2.style.display = 'flex';
      // Force reflow
      void slide2.offsetWidth;
      slide2.classList.remove('hidden-slide');
      
      // --- СЛАЙД 2: Меня зовут Руслан ---
      setTimeout(() => {
        slide2.classList.add('fade-out-slide');
        
        // Переход к третьему слайду (Видео и текст)
        setTimeout(() => {
          slide2.style.display = 'none';
          slide3.style.display = 'flex';
          // Force reflow
          void slide3.offsetWidth;
          slide3.classList.remove('hidden-slide');
          
          // --- СЛАЙД 3: Анимация печати ---
          setTimeout(() => {
            let i = 0;
            typingText.innerHTML = cursorHTML;
            
            const typeWriter = setInterval(() => {
              if (i < textToType.length) {
                typingText.innerHTML = typingText.innerHTML.replace(cursorHTML, textToType.charAt(i) + cursorHTML);
                i++;
              } else {
                clearInterval(typeWriter);
                
                setTimeout(() => {
                  const cursor = document.querySelector('.cursor');
                  if(cursor) cursor.style.display = 'none';
                }, 1000);

                // Показываем видео и скролл
                setTimeout(() => {
                  videoWrapper.classList.remove('hidden-opacity');
                  videoWrapper.classList.add('visible-opacity');
                  
                  if (scrollIndicator) {
                    scrollIndicator.classList.remove('hidden-opacity');
                    scrollIndicator.classList.add('visible-opacity');
                  }
                  
                  // Показываем остальной сайт
                  setTimeout(() => {
                    restOfSite.style.display = 'block';
                    void restOfSite.offsetWidth;
                    restOfSite.classList.remove('hidden-opacity');
                    restOfSite.classList.add('visible-opacity');
                  }, 1500);

                }, 800);
              }
            }, 40); // скорость печати

          }, 800);

        }, 1000); // время затухания слайда 2
      }, 2500); // сколько висит слайд 2

    }, 1000); // время затухания слайда 1
  }, 2500); // сколько висит слайд 1 (Приветствую!)
});
