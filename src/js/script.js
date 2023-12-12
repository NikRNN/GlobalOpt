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

  //настройка slick-clider
  $(".reviews__carousel").slick({
    centerMode: true,
    infinity: true,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/carousel/btn_prev.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"> <img src="../icons/carousel/btn_next.png"></button>',
  });
});
