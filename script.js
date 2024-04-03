function toggleProducts(id) {
    var element = document.getElementById(id);
    var isOpen = element.classList.contains('open');
    
    if (isOpen) {
        element.classList.remove('open');
        element.style.maxHeight = '0';
    } else {
        element.classList.add('open');
        // Здесь мы устанавливаем maxHeight в scrollHeight плюс немного дополнительного пространства
        element.style.maxHeight = element.scrollHeight + 'px';
    }
}
// Get the button:
let mybutton = document.getElementById("myBtn");

function topFunction() {
  const duration = 800; // Продолжительность скроллинга в миллисекундах
  const start = window.pageYOffset; // Текущая позиция скролла
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  // Функция для анимации
  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Убедимся, что прогресс не превышает 1

    // Вычисляем позицию скролла и применяем
    window.scrollTo(0, start * (1 - progress));

    // Если анимация не завершена, продолжаем
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  // Запускаем анимацию
  requestAnimationFrame(animateScroll);
}