const burgerIcon = document.querySelector('.header__burger__menu button'); // Кнопка бургера
const closeMenuButton = document.querySelector('.close-menu'); // Кнопка закрытия
const menu = document.querySelector('.header__mobile-menu'); // Меню
const body = document.body; // Тег body

// Открытие меню и изменение фона страницы
burgerIcon.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('menu-open'); // Добавляем класс для изменения фона
});

// Закрытие меню и возврат к стандартному фону
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('menu-open'); // Убираем класс, возвращая стандартный фон
});
