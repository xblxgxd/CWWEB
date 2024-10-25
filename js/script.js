const popupCall = document.querySelector('.popup_type_call');
const popupLocation = document.querySelector('.popup_type_location');
const popupUser = document.querySelector('.popup_type_user');
const popupBasket = document.querySelector('.popup_type_basket');

const userButton = document.querySelector('.header-bottom__user_1');
const basketButton = document.querySelector('.header-bottom__user_3');
const callButton = document.querySelector('.header-top__order-call');
const callButton2 = document.querySelector('.footer-top__order-call');
const cityButton = document.querySelector('.header-top__city');

const popup = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close');

function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Закрытие попапов через все кнопки closeButtons
if (closeButtons.length > 0) {
	for (let i = 0; i < closeButtons.length; i++) {
		const closeButton = closeButtons[i];
		closeButton.addEventListener('click', () => closePopup(closeButton.closest('.popup')));
	}
};

// Закрытие попапа по всей области страницы
document.addEventListener('click', (e) => {
	const popup = e.target.closest('.popup');
	if (e.target === popup) {
		closePopup(popup);
	}
});

basketButton.addEventListener('click', () => openPopup(popupBasket));
userButton.addEventListener('click', () => openPopup(popupUser));
cityButton.addEventListener('click', () => openPopup(popupLocation));
callButton.addEventListener('click', () => openPopup(popupCall));
callButton2.addEventListener('click', () => openPopup(popupCall));

/*!=====================================================================================*/

// Меню бургер
const btn = document.querySelector('.header-top__icon');
const menu = document.querySelector('.header-menu__items');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
	menu.classList.toggle('active');
	btn.classList.toggle('active');
	body.classList.toggle('lock');
});

/*!=====================================================================================*/
// Выбор города в попап
function customSelect() {
	let selectItem = document.querySelectorAll('.popup-location__item');

	selectItem.forEach(item => {
		item.addEventListener("click", function () {
			let text = this.innerText;
			let currentText = document.querySelector('.header-top__city');
			currentText.innerText = text;
			closePopup(popupLocation)
			selectItem.forEach(item => {
				item.classList.remove("_active");
			});

			this.classList.add("_active");
		});
	});

	document.addEventListener("click", function (e) {
		const elementTarget = e.target;

		if (elementTarget.closest(".popup-location-select__item")) {
			document.querySelector(".popup-item").classList.remove("_active");
			document.body.classList.remove("_lock-scroll");
		}
	})
};
customSelect();

/*!=====================================================================================*/
//Переключение табов в user popup
function userTabs() {
	const btnTabs = document.querySelectorAll(".popup-user__select-tab");
	const bodyTabs = document.querySelectorAll(".popup-user__tab-item");
	let userData;

	btnTabs.forEach(btn => {
		btn.addEventListener("click", function () {
			userData = this.getAttribute("data-user-tab");

			btnTabs.forEach(btn => {
				btn.classList.remove("_active");
			});

			this.classList.add("_active");

			function userSelect(userData) {
				bodyTabs.forEach(item => {
					if (item.classList.contains(userData)) {
						item.classList.add("_active");
					} else {
						item.classList.remove("_active");
					}
				});
			}
			userSelect(userData)

		});
	});
}
userTabs()

//Показать и убрать пароль в инпуте
function showPassword() {
	const inputImg = document.querySelector('.popup__input_password');
	const inputPass = document.querySelector('.popup__input_pass');
	const img = document.querySelector('.password__img');

	img.addEventListener('click', () => {
		inputImg.classList.toggle('active')

		if (inputPass.getAttribute('type') === 'password') {
			inputPass.setAttribute('type', 'text')
		} else {
			inputPass.setAttribute('type', 'password')
		}
	})
}
showPassword();

function showPassword2() {
	const inputImg2 = document.querySelector('.popup__input_password2');
	const inputPass2 = document.querySelector('.popup__input_pass2');
	const img2 = document.querySelector('.password__img2');

	img2.addEventListener('click', () => {
		inputImg2.classList.toggle('active')

		if (inputPass2.getAttribute('type') === 'password') {
			inputPass2.setAttribute('type', 'text')
		} else {
			inputPass2.setAttribute('type', 'password')
		}
	})
}
showPassword2();
/*!=====================================================================================*/
function scrollTop() {
	const scrollBtn = document.querySelector(".scroll-top");

	if (scrollBtn) {
		window.addEventListener("scroll", function () {
			if (window.scrollY > 100) {
				scrollBtn.classList.add("_active");
			} else {
				scrollBtn.classList.remove("_active");
			}
		});

		scrollBtn.addEventListener("click", function () {
			if (scrollBtn.classList.contains("_active")) {

				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}
		});
	}
}
scrollTop()
/*!=====================================================================================*/

// слайдер
$(document).ready(function () {
	$('.main-block-slider').slick({
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,

	});
});

$(document).ready(function () {
	$('.products-slider').slick({
		speed: 500,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 341,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.article__slider').slick({
		speed: 500,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1171,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 371,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

/*!=====================================================================================*/

// Динамичесий адаптив
function dynamicAdaptive() {
	function DynamicAdapt(type) {
		this.type = type;
	}

	DynamicAdapt.prototype.init = function () {
		const _this = this;
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		this.nodes = document.querySelectorAll("[data-da]");

		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}

		this.arraySort(this.оbjects);

		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});

		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};

	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};

	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}

	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}

	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};

	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};

	const da = new DynamicAdapt("max");
	da.init();

}
dynamicAdaptive()

/*!=====================================================================================*/
