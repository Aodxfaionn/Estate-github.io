// Бургерное меню
const burger = document.querySelector(".burger");
menu = document.querySelector(".submenu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

// Якорные ссылки
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Слайдеры
$(".slider-reels").slick({
  infinite: true,
  swipe: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="reels-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="reels-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
});

const allReels = $(".slider-reels").slick("getSlick").slideCount;
$(".slider-reels + .slider__num > .slider__num-all").text(`0 ${allReels}`);
$(".slider-reels").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-reels + .slider__num > .slider__num-start").text(
    `0 ${currentSlide + 1}`
  );
});

$(".slider-lake").slick({
  infinite: true,
  swipe: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="lake-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="lake-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});

const allLake = $(".slider-lake").slick("getSlick").slideCount;
$(".slider-lake + .slider__num > .slider__num-all").text(`0 ${allLake}`);
$(".slider-lake").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-lake + .slider__num > .slider__num-start").text(
    `0 ${currentSlide + 1}`
  );
});

$(".slider-where").slick({
  infinite: true,
  swipe: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="where-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="where-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
});

$(".slider-master").slick({
  infinite: true,
  swipe: false,
  centerMode: true,
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="master-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="master-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
});

const allMaster = $(".slider-master").slick("getSlick").slideCount;
$(".slider-master + .master__lastText > .slider__num > .slider__num-all").text(
  `0 ${allMaster}`
);
$(".slider-master").on("afterChange", function (event, slick, currentSlide) {
  $(
    ".slider-master + .master__lastText > .slider__num > .slider__num-start"
  ).text(`0 ${currentSlide + 1}`);
});

$(".slider-spa").slick({
  infinite: true,
  swipe: false,
  centerMode: true,
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="spa-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="spa-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
});

const allSpa = $(".slider-spa").slick("getSlick").slideCount;
$(".slider-spa + .master__lastText > .slider__num > .slider__num-all").text(
  `0 ${allSpa}`
);
$(".slider-spa").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-spa + .master__lastText > .slider__num > .slider__num-start").text(
    `0 ${currentSlide + 1}`
  );
});

$(".slider-near").slick({
  infinite: true,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="near-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="near-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
});

const allNear = $(".slider-near").slick("getSlick").slideCount;
$(".slider-near + .slider__num > .slider__num-all").text(`0 ${allNear}`);
$(".slider-near").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-near + .slider__num > .slider__num-start").text(
    `0 ${currentSlide + 1}`
  );
});

$(".slider-guest-one").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  arrows: false,
  asNavFor: ".slider-guest-all",
});
$(".slider-guest-all").slick({
  // infinite: true,
  swipe: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
  prevArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="guest-arrow slider__arrow-left"><path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"></path></svg>',
  nextArrow:
    '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" class="guest-arrow slider__arrow-right"><path d="M29 17L0.5 0.545517L0.5 33.4545L29 17Z"></path></svg>',
  asNavFor: ".slider-guest-one",
});
