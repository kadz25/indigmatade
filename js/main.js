const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

// Добавляем обработчик события на бургер-меню
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active"); // Добавляем класс "active" для анимации иконки
  nav.classList.toggle("open"); // Показываем или скрываем меню
});
