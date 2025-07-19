// SCRIPTS.JS - ОСНОВНОЙ ФУНКЦИОНАЛ!!!!!!!
// Получаем элемент изображения
const mainImage = document.querySelector('.main-image');

// Функция для обновления позиции изображения при прокрутке страницы
window.addEventListener('scroll', function () {
    // Рассчитываем новое значение свойства 'right' в зависимости от положения скролла
    const offsetRight = -276 + window.scrollY * 0.2;

    // Устанавливаем новый стиль для изображения
    mainImage.style.right = `${offsetRight}px`;
});

const filterItems = document.querySelectorAll('.services-filter li');
const serviceItems = document.querySelectorAll('.service');
const serviceContent = document.getElementById('services-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    serviceItems.forEach((service) => {
      const serviceCategory = service.dataset.category?.toLowerCase();
      if (filterText === 'все услуги' || serviceCategory === filterText) {
        service.style.display = 'flex';
      } else {
        service.style.display = 'none';
      }
    });

    serviceContent.scrollIntoView({ behavior: 'smooth' });
  };
});

const prices = document.getElementsByClassName("service-price");

const currencies = [
    { symbol: "₽", ratio: 1 },
    { symbol: "$", ratio: 1 / 78.78 },
    { symbol: "€", ratio: 1 / 93.13 }
];

let currentIndex = 0;

document.getElementById("change-currency").onclick = function (e) {
    currentIndex = (currentIndex + 1) % currencies.length;
    const { symbol, ratio } = currencies[currentIndex];
    e.target.innerText = symbol;

    for (let i = 0; i < prices.length; i++) {
        const basePrice = parseFloat(prices[i].getAttribute("data-base-price"));
        const converted = (basePrice * ratio).toFixed(2);
        prices[i].innerText = `${converted} ${symbol}`;
    }
};

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("service-modal");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".service").forEach((serviceCard) => {
    serviceCard.addEventListener("click", () => {
      // Заголовок и текст
      const title = serviceCard.querySelector("h4")?.innerText || "";
      const text = serviceCard.querySelector("p")?.innerText || "";

      document.getElementById("modal-title").innerText = title;
      document.getElementById("modal-text").innerText = text;

      // Цены
      const modalPrices = document.getElementById("modal-price");
      modalPrices.innerHTML = ""; // Очистка

      const priceElement = serviceCard.querySelector(".service-price");
      if (priceElement) {
        const priceText = priceElement.innerText.trim();

        const priceBlock = document.createElement("div");
        priceBlock.classList.add("modal-price-line");
        priceBlock.innerHTML = `<span>Базовая цена</span> <strong>${priceText}</strong>`;

        modalPrices.appendChild(priceBlock);
      }

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


// Получаем поля формы заранее
const serviceField = document.getElementById('service');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

document.querySelectorAll('.button.white-button').forEach((button) => {
    button.addEventListener('click', function () {
      const serviceArticle = this.closest('article.service');
      const serviceTitle = serviceArticle.querySelector('h4');
      const serviceField = document.getElementById('service');
  
      if (serviceTitle && serviceField) {
        serviceField.value = serviceTitle.textContent.trim();
      }
    });
  });

// Обработчик для кнопки с id sign-up-action
document.getElementById('sign-up-action').addEventListener('click', function () {
  // Собираем поля в массив
  const fields = [serviceField, nameField, phoneField];

  // Флаг для проверки валидности
  let hasError = false;

  // Проверяем поля циклом
  fields.forEach((field) => {
    if (field.id === 'phone' && field.value.length < 10) {
      field.style.borderColor = 'red';
      hasError = true;
    } else if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });

  // Если все поля валидны
  if (!hasError) {
    alert('Спасибо за заявку! Я скоро свяжусь с вами!!!');

    // Очищаем поля
    fields.forEach((field) => (field.value = ''));

    const btn = document.getElementById('sign-up-action');
    btn.disabled = true;
    setTimeout(() => (btn.disabled = false), 20000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector(".sign-up-image");
  document.addEventListener("mousemove", (event) => {
    layer.style.transform =
      "translate3d(" +
      (event.clientX * 0.4) / 7 +
      "px," +
      (event.clientY * 0.4) / 7 +
      "px,0px)";
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = "0" + 0.4 * window.scrollY + "px";
  });
});

// Бургер меню
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuItems = document.querySelectorAll('.menu-list li');

function closeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('open');
    overlay.classList.remove('visible');
}

burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    burger.classList.toggle('open');
    overlay.classList.toggle('visible');

    if (isOpen) {
        menuItems.forEach((item, i) => {
            item.style.animation = `fadeInUp 0.4s ease forwards`;
            item.style.animationDelay = `${(i + 1) * 0.1}s`;
        });
    } else {
        menuItems.forEach(item => {
            item.style.opacity = 0;
            item.style.animation = 'none';
        });
    }
});

// ⏬ Вот это добавляем:
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

// Также можно закрывать при клике на overlay:
overlay.addEventListener('click', () => {
    closeMenu();
});

