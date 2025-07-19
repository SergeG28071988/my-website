// // LANG.JS - ФУНКЦИОНАЛ СМЕНЫ ЯЗЫКОВ! 

var arrLang = {
  'en': {
    'home': 'Home',
    'about-us': 'About Me',
    'portfolio': 'Portfolio',
    'catalog': 'Services',
    'sign-up': 'Sign Up',
    'contact-number': '+7 906 665 02 49',
    'mainTitle': 'Sergei Galkin — Accountant and Developer',
    'mainText': 'Reliable. Professional. Honest.',
    'viewCatalogButton': 'View Catalog',
    'about-me': 'ABOUT ME',
    'work-result': 'WORKING FOR RESULTS!!!',
    'born': 'Born on July 28th, 1988 in Mtsensk, Oryol region...',
    'manager-education': 'In 2008, entered the State University-UNPK studying management...',
    'freelance-it': 'From 2017 to 2019 provided remote accounting services...',
    'experience': 'Experience: 8 years in accounting and 5 years in IT...',
    'go-to-telegram': 'Go to Telegram Channel',
    'portfolioTitle': 'Examples of My Works',
    'portfolioDescription':
      'All projects started with plain HTML, CSS, and JavaScript. Below are final versions implemented using React or Angular:',
    'project1': 'Auto Service Website "Optimus Prime"',
    'project2': 'VR Games Store',
    'project3': 'Burger and Pizza Delivery Website',
    'project4': 'Optics Shop #1',
    'project5': 'Optics Shop #2',
    'project6': 'Car Rental Website',
    'project7': 'Cookie Sales Website',
    'chooseService': 'MY SERVICES',
    'allCategories': 'ALL SERVICES',
    'IT-development': 'IT Development',
    'Accounting': 'Accountancy',
    'Frames': 'Personnel Records',
    'serviceTitle1': 'Website Layout',
    'serviceDesc1': 'Creation of high-quality responsive websites using HTML, CSS, and JavaScript.',
    'serviceTitle2': 'Development in C#',
    'serviceDesc2': 'Desktop and web applications development using .NET platform (WinForms, WPF, ASP.NET).',
    'serviceTitle3': 'Development in Python',
    'serviceDesc3': 'Web apps and server-side solutions built with Django and Flask frameworks.',
    'serviceTitle4': 'Frontend Development with React/Vue.js',
    'serviceDesc4': 'Interactive user interfaces created with modern frontend technologies like React and Vue.js.',
    'serviceTitle5': 'Bookkeeping and Tax Accounting',
    'serviceDesc5': 'Full range of bookkeeping and tax accounting services for your company.',
    'serviceTitle6': 'HR Documentation',
    'serviceDesc6': 'Organization of personnel record keeping and maintenance of HR documents.',
    'orderService': 'Order This Service',
    'modalTitle': 'Service Information',
    'modalText': 'Here is detailed information about this particular service.',
    'signUpTitle': 'Consultation Booking',
    'signUpText': 'Please fill out your contact details below, and I will personally call you back to schedule a consultation.',
    'placeholderName': 'Your Name',
    'placeholderPhone': 'Your Phone Number',
    'placeholderService': 'Service You Are Interested In',
    'signUpButton': 'Book Consultation',
    'contactMe': 'Contact Me',
    'phone': 'Phone: +7 906 665 02 49',
    'address': 'Address: Moscow, Akademika Koroleva str., 1',
    'navigation': 'Navigation',
    'navServices': 'Services',
    'navAbout': 'About Me',
    'navSignUp': 'Sign Up',
    'socialMedia': 'Social Media',
    'copyright': '© 2025 Sergei Galkin. All rights reserved.'
  },
  'ru': {
    'home': 'Главная',
    'about-us': 'Обо мне',
    'portfolio': 'Портфолио',
    'catalog': 'Услуги',
    'sign-up': 'Записаться',
    'contact-number': '+7 906 665 02 49',
    'mainTitle': 'Сергей Галкин — бухгалтер и разработчик',
    'mainText': 'Надёжно. Профессионально. Честно.',
    'viewCatalogButton': 'Посмотреть каталог',
    'about-me': 'ОБ МОЁМ ОПЫТЕ',
    'work-result': 'РАБОТАЮ НА РЕЗУЛЬТАТ!!!',
    'born': 'Родился 28 июля 1988 года в городе Мценск, Орловская область...',
    'manager-education': 'В 2008 году поступил в Госуниверситет-УНПК на специальность Менеджмент...',
    'freelance-it': 'С 2017 по 2019 годы оказывал бухгалтерские услуги удалённо...',
    'experience': 'Опыт работы: 8 лет в бухгалтерии и 5 лет в IT...',
    'go-to-telegram': 'Перейти в Telegram-канал',
    'portfolioTitle': 'Примеры моих работ',
    'portfolioDescription':
      'Все проекты начинались с чистого HTML, CSS и JavaScript. Ниже представлены финальные версии на React или Angular, размещённые на GitHub Pages:',
    'project1': 'Сайт автосервиса «Optimus Prime»',
    'project2': 'Магазин VR-игр',
    'project3': 'Сайт доставки бургеров и пиццы',
    'project4': 'Магазин оптики #1',
    'project5': 'Магазин оптики #2',
    'project6': 'Сайт аренды автомобилей',
    'project7': 'Сайт по продаже печенья',
    'chooseService': 'МОИ УСЛУГИ',
    'allCategories': 'ВСЕ УСЛУГИ',
    'IT-development': 'IT-разработка',
    'Accounting': 'Бухгалтерия',
    'Frames': 'Кадры',
    'serviceTitle1': 'Верстка сайтов',
    'serviceDesc1': 'Создание качественных адаптивных сайтов на HTML, CSS и JavaScript.',
    'serviceTitle2': 'Разработка на C#',
    'serviceDesc2': 'Создание десктопных и веб-приложений на платформе .NET с использованием WinForms, WPF и ASP.NET.',
    'serviceTitle3': 'Разработка на Python',
    'serviceDesc3': 'Создание веб-приложений и серверных решений на Django и Flask.',
    'serviceTitle4': 'Frontend-разработка на React и Vue.js',
    'serviceDesc4': 'Создание интерактивных интерфейсов с современными технологиями фронтенд-разработки.',
    'serviceTitle5': 'Ведение бухгалтерии и налогового учета',
    'serviceDesc5': 'Полный комплекс услуг по ведению бухгалтерского и налогового учета вашей компании.',
    'serviceTitle6': 'Кадровый учет',
    'serviceDesc6': 'Организация кадрового делопроизводства и ведение кадровых документов.',
    'orderService': 'Заказать услугу',
    'modalTitle': 'Информация о услуге',
    'modalText': 'Подробная информация о выбранной услуге.',
    'signUpTitle': 'Запись на консультацию',
    'signUpText': 'Заполните контактные данные ниже, и я лично свяжусь с вами для обсуждения деталей и подтверждения записи на консультацию.',
    'placeholderName': 'Ваше имя',
    'placeholderPhone': 'Ваш контактный номер',
    'placeholderService': 'Интересующая услуга',
    'signUpButton': 'Записаться на консультацию',
    'contactMe': 'Свяжитесь со мной',
    'phone': 'Телефон: +7 906 665 02 49',
    'address': 'Адрес: г. Москва, ул. Академика Королёва, д. 1',
    'navigation': 'Навигация',
    'navServices': 'Услуги',
    'navAbout': 'Обо мне',
    'navSignUp': 'Записаться',
    'socialMedia': 'Социальные сети',
    'copyright': '© 2025 Сергей Галкин. Все права защищены.'
  },
  'fr': {
    'home': 'Accueil',
    'about-us': 'À propos de moi',
    'portfolio': 'Portfolio',
    'catalog': 'Services',
    'sign-up': 'S\'inscrire',
    'contact-number': '+7 906 665 02 49',
    'mainTitle': 'Sergeï Galkin — Comptable et Développeur',
    'mainText': 'Fiable. Professionnel. Honnête.',
    'viewCatalogButton': 'Voir le catalogue',
    'about-me': 'À PROPOS DE MOI',
    'work-result': 'JE TRAVAILLE POUR UN RÉSULTAT !!!',
    'born': 'Je suis né le 28 juillet 1988 à Mtsensk, oblast d\'Orel...',
    'manager-education': 'En 2008, j\'ai intégré l\'Université nationale d\'administration publique où j\'ai suivi la formation gestionnaire...',
    'freelance-it': 'De 2017 à 2019, j\'ai offert des services comptables à distance...',
    'experience': 'Expérience : 8 ans en comptabilité et 5 ans en informatique...',
    'go-to-telegram': 'Accéder au canal Telegram',
    'portfolioTitle': 'Exemples de mes œuvres',
    'portfolioDescription':
      'Tous les projets ont commencé avec un simple HTML, CSS et JavaScript. Voici les versions finales utilisant React ou Angular, disponibles sur GitHub Pages:',
    'project1': 'Site web de garage automobile « Optimus Prime »',
    'project2': 'Boutique de jeux vidéos VR',
    'project3': 'Site de livraison de burgers et pizza',
    'project4': 'Magasin d\'optique #1',
    'project5': 'Magasin d\'optique #2',
    'project6': 'Site de location de voitures',
    'project7': 'Site de vente de biscuits',
    'chooseService': 'MES SERVICES',
    'allCategories': 'TOUS LES SERVICES',
    'IT-development': 'Développement IT',
    'Accounting': 'Comptabilité',
    'Frames': 'Documents RH',
    'serviceTitle1': 'Création de sites Web',
    'serviceDesc1': 'Conception de sites adaptatifs de haute qualité avec HTML, CSS et JavaScript.',
    'serviceTitle2': 'Développement en C#',
    'serviceDesc2': 'Applications bureau et web sous plateforme .NET (WinForms, WPF, ASP.NET).',
    'serviceTitle3': 'Développement en Python',
    'serviceDesc3': 'Web apps et serveur-side solutions construites avec Django et Flask.',
    'serviceTitle4': 'Développement front-end avec React/Vue.js',
    'serviceDesc4': 'Interfaces interactives basées sur les technologies modernes de front-end telles que React et Vue.js.',
    'serviceTitle5': 'Tenue de la comptabilité et fiscalité',
    'serviceDesc5': 'Offre complète de tenue de la comptabilité et de la fiscalité de votre société.',
    'serviceTitle6': 'Gestion des ressources humaines',
    'serviceDesc6': 'Organisation de la gestion administrative des employés et suivi des documents RH.',
    'orderService': 'Commander ce service',
    'modalTitle': 'Informations sur le service',
    'modalText': 'Voici les informations détaillées concernant ce service précis.',
    'signUpTitle': 'Préinscription à la consultation',
    'signUpText': 'Veuillez remplir vos données ci-dessous, et je prendrai personnellement contact avec vous pour organiser une consultation.',
    'placeholderName': 'Votre nom',
    'placeholderPhone': 'Numéro de téléphone',
    'placeholderService': 'Service qui vous intéresse',
    'signUpButton': 'Prendre RDV',
    'contactMe': 'Contactez-moi',
    'phone': 'Téléphone: +7 906 665 02 49',
    'address': 'Adresse: Moscou, rue Akademika Koroleva, 1',
    'navigation': 'Navigation',
    'navServices': 'Services',
    'navAbout': 'À propos de moi',
    'navSignUp': 'S\'inscrire',
    'socialMedia': 'Réseaux sociaux',
    'copyright': '© 2025 Sergeï Galkin. Tous droits réservés.'
  }
};

// Переменная хранения текущего языка
var currentLanguage = 'ru'; // Изначально выбираем русский язык

// Функция обновления содержимого страниц
function updateText(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    const key = el.getAttribute('data-key');
    const value = arrLang[lang][key];

    if (!value) {
      console.warn(`⚠️ Нет значения для ключа: "${key}"`);
      return;
    }

    if (el.tagName === 'INPUT') {
      el.placeholder = value; // ⬅️ вот эта строка нужна
    } else if (value.includes('<br')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

// Функция для обновления текста фильтров
function updateFilters() {
  const filters = document.querySelectorAll('#category-filter li');
  filters.forEach(filter => {
    const key = filter.getAttribute('data-key');
    if (key) {
      filter.textContent = arrLang[currentLanguage][key];
    }
  });
}

function updateCategoryAttributes(lang) {
  document.querySelectorAll('[data-i18n-category-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-category-key');
    const translated = arrLang[lang][key];
    if (translated) {
      el.setAttribute('data-category', translated);
    } else {
      console.warn(`⚠️ Не найден перевод для data-category ключа: ${key}`);
    }
  });
}

// Обновление фильтров при смене языка
document.querySelectorAll('.lang-flag').forEach(flag => {
  flag.addEventListener('click', event => {
    currentLanguage = event.target.dataset.lang;
    updateText(currentLanguage); // Обновляем текст на странице
    updateFilters(); // Обновляем фильтры
    updateCategoryAttributes(currentLanguage);
    
    // Отмечаем новый язык активным
    document.querySelectorAll('.lang-flag').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  });
});

// Изначально применяем русские переводы
updateText(currentLanguage);
updateFilters();
