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
  "url(images/gray-building.jpg)",
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
