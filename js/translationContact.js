const translations = {
    ru: {
        city: "Москва",
        orderCall: "Заказать звонок",
        payment: "Оплата",
        delivery: "Доставка",
        suppliers: "Поставщикам",
        home: "Главная",
        contacts: "Контакты",
        contactTitle: "Связаться с нами",
        contactInfo: "Если у вас есть вопросы, свяжитесь с нами по телефону:",
        emailInfo: "Или напишите нам по электронной почте:"
    },
    en: {
        city: "Moscow",
        orderCall: "Request a call",
        payment: "Payment",
        delivery: "Delivery",
        suppliers: "Suppliers",
        home: "Home",
        contacts: "Contacts",
        contactTitle: "Contact Us",
        contactInfo: "If you have any questions, contact us by phone:",
        emailInfo: "Or email us at:"
    }
};

document.getElementById('translateBtn').addEventListener('click', function() {
    const lang = this.textContent === 'EN' ? 'en' : 'ru';
    document.getElementById('city').textContent = translations[lang].city;
    document.getElementById('orderCall').textContent = translations[lang].orderCall;
    document.getElementById('payment').textContent = translations[lang].payment;
    document.getElementById('delivery').textContent = translations[lang].delivery;
    document.getElementById('suppliers').textContent = translations[lang].suppliers;
    document.getElementById('home').textContent = translations[lang].home;
    document.getElementById('contacts').textContent = translations[lang].contacts;
    document.getElementById('contactTitle').textContent = translations[lang].contactTitle;
    document.getElementById('contactInfo').textContent = translations[lang].contactInfo;
    document.getElementById('emailInfo').textContent = translations[lang].emailInfo;

    this.textContent = lang === 'en' ? 'RU' : 'EN';
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.classList.toggle('dark-mode');
});