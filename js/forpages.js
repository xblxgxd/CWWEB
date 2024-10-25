
const translations = {
    en: {
        city: "Moscow",
        phone: "8 495 018-32-10",
        orderCall: "Request a call",
        payment: "Payment",
        delivery: "Delivery",
        suppliers: "Suppliers",
        home: "Home",
        contacts: "Contacts",
        articles: "Articles",
        article1: "Article 1",
        article2: "Article 2",
        article3: "Article 3",
        article4: "Article 4",
        article5: "Article 5",
        article6: "Article 6"
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
        articles: "Статьи",
        article1: "Статья 1",
        article2: "Статья 2",
        article3: "Статья 3",
        article4: "Статья 4",
        article5: "Статья 5",
        article6: "Статья 6"
    }
};

let currentLang = 'ru';

document.getElementById('translateBtn').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[currentLang][key];
    });
    document.getElementById('translateBtn').textContent = currentLang === 'ru' ? 'EN' : 'RU';
});

document.getElementById('themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.getElementById('themeBtn').textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
