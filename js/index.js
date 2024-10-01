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

// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
