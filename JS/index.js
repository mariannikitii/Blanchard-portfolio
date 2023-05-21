'use strict'

window.addEventListener('DOMContentLoaded', function () {

  // Бургер меню

  document.querySelector(".header__menu-burger").addEventListener("click", function() {
    document.querySelector(".header-main__body").classList.add("active");
  })
  document.querySelector(".header-nav__close").addEventListener("click", function() {
    document.querySelector(".header-main__body").classList.remove("active");
  })

  // Поиск раскрытие

  document.querySelector(".header-form-btn__submit").addEventListener("click", function() {
    document.querySelector(".header-form").classList.add("active");
  })
  document.querySelector(".header-nav__close-search").addEventListener("click", function() {
    document.querySelector(".header-form").classList.remove("active");
  })


  // Свайпер банер

  const container = document.querySelector(".section-banner__container")
  const swiper = new Swiper('.section-banner__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".section-banner__swiper-button-next",
      prevEl: ".section-banner__swiper-button-prev"
    },
    pagination: {
      el: '.section-banner__swiper-bullet-pagination',
      type: 'bullets',
      clickable: true
    }

  })

  // Свайпер галерея

  let gallerySlider = new Swiper(".section-gallery__content", {

    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    pagination: {
      el: ".section-gallery__swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".section-gallery__swiper-button-next",
      prevEl: ".section-gallery__swiper-button-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });



  // Селект

  const element = document.querySelector('#choices');
  const choices = new Choices(element,{
    searchEnabled: false,
  });



  // let select = function () {
  //   let selectHeader = document.querySelectorAll
  //     (".select__header");

  //   let selectItem = querySelectorAll (".select__item");


  //   selectHeader.forEach(item => {
  //     item.addEventListener("click", selectToogle)
  //     });



  //   selectItem.forEach(item => {
  //     item.addEventListener("click", SelectChoose)
  //   });

  //   function selectToogle() {
  //     this.parentElement.classList.toogle
  //       ("is-active");
  //   }

  //   function SelectChoose () {
  //     let text = this.innerText,
  //      select = this.closest(".select"),
  //     currentText = select.querySelector(".select__curent");
  //     currentText.innerText = text;
  //     select.classList.remove("is-active");
  //   }
  // };



  // Раскрывашка
  document.querySelectorAll(".header-bottom__simplebar").forEach(item => {
    new SimpleBar(item, {
      /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,


  });
});
  // Меню


  document.querySelectorAll(".header-bottom__menu-link-btm").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header-bottom__simplebar-container");

      document.querySelectorAll(".header-bottom__menu-link-btm").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });

      document.querySelectorAll(".header-bottom__simplebar-container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header-bottom__menu-list")) {
      document.querySelectorAll(".header-bottom__simplebar-container").forEach(el => {
        el.classList.remove("active-list--item");
      })
      document.querySelectorAll(".header-bottom__menu-link-btm").forEach(el => {
        el.classList.remove("active--btn");
      });
    }
  })

  // Симплбар

  new SimpleBar(document.querySelector(".simplebar"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });


});




