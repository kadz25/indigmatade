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
