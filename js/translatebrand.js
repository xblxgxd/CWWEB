const translations = {
    en: {
        city: "Moscow",
        phone: "8 495 018-32-10",
        orderCall: "Order a call",
        payment: "Payment",
        delivery: "Delivery",
        suppliers: "Suppliers",
        home: "Home",
        contacts: "Contacts",
        popularBrands: "Popular Brands",
    },
    ru: {
        city: "Москва",
        phone: "8 495 018-32-10",
        orderCall: "Заказать звонок",
        payment: "Оплата",
        delivery: "Доставка",
        suppliers: "Поставщикам",
        home: "Главная",
        contacts: "Контакты",
        popularBrands: "Популярные бренды",
    }
};

const translateBtn = document.getElementById('translateBtn');
let currentLang = 'ru';

translateBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    translatePage(currentLang);
    translateBtn.textContent = currentLang === 'en' ? 'RU' : 'EN';
});

function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}
const themeToggleBtn = document.getElementById('themeToggleBtn');
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.querySelectorAll('.header-top__city, .header-top__phone, .header-top__order-call, .header-menu__link, .brands__item').forEach(el => {
                el.classList.toggle('dark-theme');
            });
            themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        });