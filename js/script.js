var menuText = document.querySelector(".nav-menu");
var menuList = document.querySelector(".nav-list");
var menuOpen = document.querySelector(".header-nav__btn--open");
var menuClose = document.querySelector(".header-nav__btn--close");

if (menuText) {
  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuText.classList.add("nav-menu--active");
    menuList.classList.add("nav-list--active");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuText.addEventListener("click", function(event) {
    event.stopPropagation();
    menuText.classList.remove("nav-menu--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  menuClose.addEventListener("click", function() {
    menuText.classList.remove("nav-menu--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuText.classList.remove("nav-menu--active");
      menuList.classList.remove("nav-list--active");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  });
}
/*Открытие попапа*/
var popupBody = document.querySelector(".popup-howto");
var popupOpen = document.querySelector(".nav-list__link--howto");
var popupClose = document.querySelector(".popup-howto__close");

if (popupBody) {
  popupOpen.addEventListener("click", function(event) {
    event.preventDefault();
    popupBody.classList.add("popup-howto--active");
  });

  popupBody.addEventListener("click", function(event) {
    event.stopPropagation();
    popupBody.classList.remove("popup-howto--active");
  });

  popupClose.addEventListener("click", function() {
    popupBody.classList.remove("popup-howto--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popupBody.classList.remove("popup-howto--active");
    }
  });
}

/*Открытие попапа*/
var popup2Body = document.querySelector(".popup-prize");
var popup2Open = document.querySelector(".nav-list__link--prize");
var popup2Close = document.querySelector(".popup-prize__close");

if (popup2Body) {
  popup2Open.addEventListener("click", function(event) {
    event.preventDefault();
    popup2Body.classList.add("popup-prize--active");
  });

  popup2Body.addEventListener("click", function(event) {
    event.stopPropagation();
    popup2Body.classList.remove("popup-prize--active");
  });

  popup2Close.addEventListener("click", function() {
    popup2Body.classList.remove("popup-prize--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popup2Body.classList.remove("popup-prize--active");
    }
  });
}

$(document).ready( function() {
    $("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });
});

// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $("#gallery-slider").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 1024){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('#gallery-slider').slick({
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: '<div class="prev-g"></div>',
        nextArrow: '<div class="next-g"></div>'
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('#gallery-slider').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

$(window).on('resize', function(e){
  if(window.innerWidth < 1600){
    $(document).ready(function() {
      $("#up").click(function(event) {
        $("#gallery-slider").scrollTop($("#gallery-slider").scrollTop() - 330);
      });

      $("#down").click(function(event) {
        $("#gallery-slider").scrollTop($("#gallery-slider").scrollTop() + 330);
      });
    })
  }

  else {
    $("#up").click(function(event) {
      $("#gallery-slider").scrollTop($("#gallery-slider").scrollTop() - 290);
    });

    $("#down").click(function(event) {
      $("#gallery-slider").scrollTop($("#gallery-slider").scrollTop() + 290);
    });
  }
}).trigger('resize');
