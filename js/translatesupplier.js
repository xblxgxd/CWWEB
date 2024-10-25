const translations = {
    en: {
        city: "Moscow",
        phone: "8 495 018-32-10",
        orderCall: "Order a call",
        payment: "Payment",
        delivery: "Delivery",
        suppliers: "For Suppliers",
        home: "Home",
        contacts: "Contacts",
        forSuppliers: "For Suppliers",
        description1: "Our companies are engaged in the sale of goods for home, office, construction, etc. We are happy to cooperate with reliable suppliers of goods and services.",
        dearSupplier: "Dear Supplier!",
        fillForm: "Please fill out the form below to send information about your product.",
        questionnaire: "Questionnaire",
        quantityLabel: "Quantity:",
        contactLabel: "Contact Person:",
        phoneLabel: "Phone:",
        emailLabel: "Email:",
        categoryLabel: "Product Category:",
        selectCategory: "Select a category",
        electronics: "Electronics",
        furniture: "Furniture",
        clothing: "Clothing",
        preferencesLabel: "Preferred Terms:",
        saveButton: "Save as JSON"
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
        forSuppliers: "Для поставщиков",
        description1: "Наши компании занимаются реализацией товаров для дома, офиса, строительства и т. п., мы рады сотрудничать с надежными поставщиками товаров и услуг.",
        dearSupplier: "Уважаемый поставщик!",
        fillForm: "Заполните, пожалуйста, данную форму ниже, чтобы отправить информацию о вашем товаре.",
        questionnaire: "Опросный лист",
        quantityLabel: "Количество:",
        contactLabel: "Контактное лицо:",
        phoneLabel: "Телефон:",
        emailLabel: "Почта:",
        categoryLabel: "Категория товара:",
        selectCategory: "Выберите категорию",
        electronics: "Электроника",
        furniture: "Мебель",
        clothing: "Одежда",
        preferencesLabel: "Предпочтительные сроки:",
        saveButton: "Сохранить в JSON"
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
			});