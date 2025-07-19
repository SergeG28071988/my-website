// LANG-CURRENCY-SYNC.JS - ФУНКЦИОНАЛ СМЕНЫ ВАЛЮТЫ В ЗАВИСИМОСТИ ОТ ЯЗЫКА!!! 

// Карту валют по языкам можно редактировать здесь
const languageToCurrencyMap = {
    'ru': '₽',
    'en': '$',
    'fr': '€'
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.lang-flag');
    const prices = document.getElementsByClassName("service-price");
    const currencyBtn = document.getElementById("change-currency");
  
    const currencies = {
      '₽': 1,
      '$': 1 / 78.78,
      '€': 1 / 93.13
    };
  
    flags.forEach(flag => {
      flag.addEventListener('click', (event) => {
        const lang = event.target.dataset.lang;
        const targetSymbol = languageToCurrencyMap[lang];
  
        if (!targetSymbol || !currencies[targetSymbol]) return;
  
        // Смена символа на кнопке
        if (currencyBtn) currencyBtn.innerText = targetSymbol;
  
        // Обновление цен
        for (let i = 0; i < prices.length; i++) {
          const basePrice = parseFloat(prices[i].getAttribute("data-base-price"));
          const converted = (basePrice * currencies[targetSymbol]).toFixed(2);
          prices[i].innerText = `${converted} ${targetSymbol}`;
        }
      });
    });
  });
  
  