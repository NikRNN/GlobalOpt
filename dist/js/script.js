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
});
