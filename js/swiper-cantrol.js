var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide : 2,
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
});
