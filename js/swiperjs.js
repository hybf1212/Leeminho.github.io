var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });