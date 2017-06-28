// Тут будуть розміщені всі скрипти з сайту, бо я ще не знайшов іншого зручного способу.


/*
	=================================== search ===========================================
*/

 // Викликаємо функцію-клас Search
    var s1 = new Search (".search");

    // Функція-клас поля пошуку
    	function Search (sSelector){
    		var s 			= this;
    		s.search 		= $(sSelector);

    		s.search__form 	= s.search.find(".search__form");
    		s.btn 			= s.search.find(".search__control");

    		// метод при кліку додає та видаляє клас, щоб відобразити або сховати поле пошуку
    		s.openClose 	= function(){
    			s.search__form.toggleClass('search__form--open');
    		}

    		s.btn.bind("click", s.openClose);
    	}
/*
	=================================== menu ===========================================
*/

// Викликаємо функцію-клас showHideMenu
	var s1 = new showHideMenu("#nav");

	// Функція клас роботи мобільного меню
	function showHideMenu (sSelector){
		var s 		= this;
		s.menu 		= $(sSelector);
		s.navToggle = s.menu.find("#nav__toggle");

		// якщо у користувача буде вимкнений js, то клас не видалиться і меню постійно буде відображатися.
		s.menu.removeClass("nav--nojs");

		// метод замінює клас в меню, відкриваючи чи зачиняючи його
		s.showHide = function(){
			if(s.menu.hasClass("nav--closed")){
				s.menu
					.removeClass("nav--closed")
					.addClass("nav--opened");
			} else {
				s.menu
					.addClass("nav--closed")
					.removeClass("nav--opened");
			}
		}

		s.navToggle.click(s.showHide);
	}
/*
	=================================== slider ===========================================
*/

// Викликаємо функцію-клас Slider
var slider1 = new Slider(".slider");

		function Slider(sSelector){
			var s 		= this;
			s.slider 	= $(sSelector);
			s.wrap 		= s.slider.find(".slider__wrap");
			s.items 	= s.slider.find(".slider__items");
			s.item 		= s.slider.find(".slider__item");
			s.leftBtn 	= s.slider.find(".slider__left");
			s.rightBtn 	= s.slider.find(".slider__right");
			
			s.blockWidth 	= s.item.outerWidth();

			s.sliderRight 		= function(){
				s.items.animate({left: "-"+ s.blockWidth +"px"}, 200);
				s.slider.find(".slider__item").eq(0).clone().appendTo(s.items); 
				s.slider.find(".slider__item").eq(0).remove();
				s.items.css({"left":"0px"});
			}

			s.sliderLeft 		= function(){
				s.slider.find(".slider__item").eq(-1).clone().prependTo(s.items);
				s.items.css({"left":"-" + s.blockWidth + "px"});
				s.slider.find(".slider__item").eq(-1).remove();
				s.items.animate({left: "0px"}, 200);
			}

			s.sliderAutoRight 	= function(){
				setInterval(function(){
					if (!s.slider.is(".hover")){
						s.sliderRight();
					}
				}, 3000)
			}

			s.sliderAutoRight();

			s.leftBtn.bind("click", s.sliderLeft);
			s.rightBtn.bind("click", s.sliderRight);

			s.slider.bind("mouseenter", function(){
				s.slider.addClass("hover");
			});
			s.slider.bind("mouseleave", function(){
				s.slider.removeClass("hover");
			})
		}