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
  });

  //настройка маски для ввода номера телефона - плагин maskedinput
  $("input[name=tel]").mask("+7(999) 999-99-99");

  //настройка отправки писем на сервер
  $("form").submit(function (e) {
    e.preventDefault(); //отменили стандартное поведение браузера при нажатии на кнопку (страница не перезагружается)
    $.ajax({
      type: "POST", //указываем, получаем мы данные с сервера или отправляем
      url: "mailer/smart.php", //тут указали обработчик нашей отправки, это будет файл смарт php
      data: $(this).serialize(), //указали, какие данные отправляем на сервер; для каждого e будут свои данные - this ссылается на каждый конкретный e; serialize - форматирует данные в понятный для сервера формат
    }).done(function () {
      //тут указали, что делать дальше, когда запрос выполнен
      $(this).find("input").val(""); //находим инпуты, их значения приводим к пустой строке

      $("form").trigger("reset");
    });
    return false;
  });
});
