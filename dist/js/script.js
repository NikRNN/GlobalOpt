//запуск jQuery (после того, как будет готов html-документ)
$(document).ready(function () {
  //настройка validate plugin

  $(".prices__consultation-form").validate({
    rules: {
      name: "required",
      tel: "required",
      email: {
        required: true,
        email: true,
      },
      message: "required",
    },
    messages: {
      name: "Пожалуйста, введите имя",
      tel: "Пожалуйста, введите номер телефона",
      email: {
        required: "Пожалуйста, введите электронный адрес",
        email: "Электронный адрес должен быть в формате example@domain.com",
      },
    },
  }),
    $(".questions-form").validate({
      rules: {
        name: "required",
        tel: "required",
        email: {
          required: true,
          email: true,
        },
        message: "required",
      },
      messages: {
        name: "Пожалуйста, введите имя",
        tel: "Пожалуйста, введите номер телефона",
        email: {
          required: "Пожалуйста, введите электронный адрес",
          email: "Электронный адрес должен быть в формате example@domain.com",
        },
        message: "Пожалуйста, укажите вопрос",
      },
    });

  //настройка owlCarousel
  $(".owl-carousel").owlCarousel({
    items: 3,
    // margin: 40,
    loop: true,
    autoplay: false,
    nav: true,
    center: true,
    navText: [
      "<img src='icons/carousel/btn_prev.png' />",
      "<img src='icons/carousel/btn_next.png' />",
    ],
    responsive: {
      992: {
        items: 3,
      },
    },
  });

  //настройка маски для ввода номера телефона - плагин maskedinput
  $("input[name=tel]").mask("+7(999) 999-99-99");

  //настройка отправки писем на сервер
  $("form").submit(function (e) {
    e.preventDefault(); //отменили стандартное поведение браузера при нажатии на кнопку (страница не перезагружается)

    if (!$(this).valid()) {
      return;
    } //если поля в форме пустые, то этот код позволит прекратить функцию и не отправлять пустые данные

    $.ajax({
      type: "POST", //указываем, получаем мы данные с сервера или отправляем
      url: "mailer/smart.php", //тут указали обработчик нашей отправки, это будет файл смарт php
      data: $(this).serialize(), //указали, какие данные отправляем на сервер; для каждого e будут свои данные - this ссылается на каждый конкретный e; serialize - форматирует данные в понятный для сервера формат
    }).done(function () {
      $("#thanks").fadeIn("slow"); //после успешной отправки всплывает модальное окно с благодарностью
      //тут указали, что делать дальше, когда запрос выполнен
      $(this).find("input").val(""); //находим инпуты, их значения приводим к пустой строке

      $("form").trigger("reset");
    });
    return false;
  });

  new WOW().init();

  //закрываем модальное окно при нажатии на крестик
  $(".modal__close").on("click", function () {
    $("#thanks").fadeOut("slow");
  });

  //при нажатии на кнопку подробнее в ценах переворачивает слайд с информацией
  $(".prices__btn").each(function (i) {
    //тут мы выбираем все элементы с этим классом
    $(this).on("click", function (e) {
      //при клике на конкретный элемент отменяем поведение браузера
      e.preventDefault();
      $(".prices__item-content")
        .eq(i) //ВЫБИРАЕМ КОНКРЕТНЫЙ ЭЛЕМЕНТ (А НЕ ВСЕ С УКАЗАННЫМ КЛАССОМ)
        .toggleClass("prices__item-content_active"); //ДОБАВЛЯЕМ ИЛИ УБИРАЕМ КЛАСС
      $(".prices__item-list").eq(i).toggleClass("prices__item-list_active");
    });
  });
  //при нажатии на кнопку назад слайд возвращается
  $(".prices__btn-back").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".prices__item-content")
        .eq(i)
        .toggleClass("prices__item-content_active");
      $(".prices__item-list").eq(i).toggleClass("prices__item-list_active");
    });
  });
});

//настройка открытия меню при нажатии на гамбургер
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".promo__menu"), //в переменную помещаем элемент с определенным классом
    menuLink = document.querySelectorAll(".promo__menu-link"), // аналогично
    hamburger = document.querySelector(".promo__hamburger"); //аналогично

  hamburger.addEventListener("click", () => {
    //добавили событие: при клике добавляется класс гамбургеру и меню
    hamburger.classList.toggle("promo__hamburger-active");
    menu.classList.toggle("promo__menu-active");
  });

  menuLink.forEach((item) => {
    //для каждого элемента меню мы добавляем обработчик событий:при клике на элемент класс активности переключается, а меню закрывается
    item.addEventListener("click", () => {
      hamburger.classList.toggle("promo__hamburger-active");
      menu.classList.toggle("promo__menu-active");
    });
  });
});
