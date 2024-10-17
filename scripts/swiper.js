swiperSettingsMobile = {
  direction: 'horizontal',
  spaceBetween: 16,
  loop: true,
  allowTouchMove: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

swiperSettingsIpad = {
    direction: 'horizontal',
    spaceBetween: 24,
    loop: true,
    allowTouchMove: true,
    slidesPerView: 'auto',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
}

swiperSettingsBasic = {
    direction: 'horizontal',
    spaceBetween: 24,
    loop: false,
    allowTouchMove: false,
    slidesPerView: 3,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}

let swiper = null 
swiperElements = ['.effects__slider', '.problems__slider']

for (let i = 0; i < swiperElements.length; i++) {
  const element = swiperElements[i];
  if (window.innerWidth >= 1024) {
      swiper = new Swiper(element, swiperSettingsBasic);
  }
  
  else if (window.innerWidth <= 1024 && window.innerWidth > 431) {
      swiper = new Swiper(element, swiperSettingsIpad);
  }
  
  else {
      swiper = new Swiper(element, swiperSettingsMobile);
  }
}

