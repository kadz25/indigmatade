const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

// Добавляем обработчик события на бургер-меню
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active"); // Добавляем класс "active" для анимации иконки
  nav.classList.toggle("open"); // Показываем или скрываем меню
});

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.parentElement.nextElementSibling;

    // Если блок уже открыт
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.innerHTML = "&#x25BC;"; // Стрелочка вниз
    } else {
      // Задаем высоту блока равной его реальной высоте
      content.style.maxHeight = content.scrollHeight + "px";
      this.innerHTML = "&#x25B2;"; // Стрелочка вверх
    }
  });
});

// смена фото главной секции
const images = [
  "url(images/cans-in-the-window.jpg)",
  "url(images/smog.jpg)",
  "url(images/metro-shadow.jpg)",
  "url(images/szpiegowo-building.jpg)",
];

const slides = document.querySelectorAll(".slide");
let current = 0;

slides[0].style.backgroundImage = images[3];
slides[0].classList.add("active");

function goToSlide(index) {
  slides[current].classList.remove("active");
  current = index;
  slides[current].style.backgroundImage = images[current];
  slides[current].classList.add("active");
}

function nextSlide() {
  const next = (current + 1) % slides.length;
  goToSlide(next);
}

function prevSlide() {
  const prev = (current - 1 + slides.length) % slides.length;
  goToSlide(prev);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);

const indicatorsContainer = document.getElementById("indicators");

// Генерируем индикаторы
images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  indicatorsContainer.appendChild(dot);
});

function updateIndicators() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });
}

// Обновим функцию смены слайда:
function goToSlide(index) {
  slides[current].classList.remove("active");
  current = index;
  slides[current].style.backgroundImage = images[current];
  slides[current].classList.add("active");
  updateIndicators();
}

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы Lightbox
  const lightboxImages = document.querySelectorAll('[data-lightbox="gallery"]');

  // Проверяем, если на мобильном устройстве
  if (window.innerWidth <= 768) {
    lightboxImages.forEach(function (image) {
      const hammer = new Hammer(image);

      // Обработчик свайпа влево (следующее изображение)
      hammer.on("swipeleft", function () {
        const currentLightbox = lightbox.getInstance();
        currentLightbox.next();
      });

      // Обработчик свайпа вправо (предыдущее изображение)
      hammer.on("swiperight", function () {
        const currentLightbox = lightbox.getInstance();
        currentLightbox.prev();
      });
    });
  }
});
