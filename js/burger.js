// Меню бургер
const btn = document.querySelector('.header-top__icon');
const menu = document.querySelector('.header-menu__items');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
	menu.classList.toggle('active');
	btn.classList.toggle('active');
	body.classList.toggle('lock');
});