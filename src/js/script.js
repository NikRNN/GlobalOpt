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
      name: "Пожалуйста, введите имя",
      tel: "Пожалуйста, введите номер телефона",
      email: {
        required: "Пожалуйста, введите электронный адрес",
        email: "Электронный адрес должен быть в формате example@domain.com",
      },
    },
  });
});
