//запуск jQuery и validate plugin + его настройка

$(document).ready(function () {
  $(".prices__consultation-form").validate({
    rules: {
      name: "required",
      tel: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Пожалуйста, введите Ваше имя",
      tel: "Пожалуйста, введите Ваш номер телефона",
      email: {
        required: "Пожалуйста, введите свой электронный адрес",
        email: "Ваш электронный адрес должен быть в формате example@domain.com",
      },
    },
  });
});
