const swiper = new Swiper(".carousel-slider", {
  // Optional parameters
  direction: "horizontal",
  effect: "coverflow",
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 2,
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    depth: 20,
    modifier: 0.6,
    scale: 0.7,
  },
  spaceBetween: -60,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".index-swiper-next",
    prevEl: ".index-swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const mobileSliderDetailCard = new Swiper(".carousel-mobile", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".index-swiper-next",
    prevEl: ".index-swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const featureSwiper = new Swiper(".featured-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const indexSlider = new Swiper(".index-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".index-swiper-next",
    prevEl: ".index-swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const indexPageSlider = new Swiper(".index-page-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      autoHeight: true,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".index-slider-next",
    prevEl: ".index-slider-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const indexSliderPartners = new Swiper(".index-slider-partners", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      autoHeight: true,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-partners-next",
    prevEl: ".slider-partners-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        let error = document.querySelector(".error-login");
        error.style.display = "inline-block";
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
//на главной переключение вкладок на стрелочки

const navTab = document.getElementById("nav-tab");
//const tabPanel = document.querySelectorAll("#nav-tab a");
const tabBtns = document.querySelectorAll("#nav-tab a").length - 1;
const nextTab = document.querySelector(".national-tabs-next");
const prevTab = document.querySelector(".national-tabs-prev");

/* nextTab.addEventListener("click", function () {
  const triggerEl = document.querySelector('#nav-tab a[data-bs-target="#russiaTab"]');
  bootstrap.Tab.getInstance(triggerEl).show(); */ // Select tab by name

/*  const triggerFirstTabEl = document.querySelector("#nav-tab li:first-child a");
 bootstrap.Tab.getInstance(triggerFirstTabEl).show(); */ // Select first tabs
/*   let cur = document.querySelectorAll("#nav-tab a.active");
            let element = cur[0];
            let index = Array.prototype.indexOf.call(cur, element);
            console.log(cur);

            if (index == tabBtns) {
              var next = document.querySelectorAll("#nav-tab a")[0];
              console.log(next);
            } else {
              let next = cur.nextElementSibling;
              //let next = document.querySelector(".national-tab.active").nextElementSibling;
              console.log(next);
            }
            next.show(); */
/* }); */
//загрузка продукта  на странице аккаунта. Блок добавления компании
let dropArea = document.getElementById("drop-area");

/* ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
 */
/* function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
} */
/* ["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}
dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files);
}
 */
/* function handleFiles(files) {
  [...files].forEach(uploadFile);
}
 */
/* function uploadFile(file) {
  let url = "";
  let formData = new FormData();
  formData.append("file", file);
  fetch(url, {
    method: "POST",
    body: formData,
  }) */
/*  .then(() => { */
/* Готово. Информируем пользователя */
/* }) */
/*  .catch(() => { */
/* Ошибка. Информируем пользователя */
/*     });
}
 */
/* function uploadFile(file) {
  var url = "";
  var xhr = new XMLHttpRequest();
  var formData = new FormData();
  xhr.open("POST", url, true);
  xhr.addEventListener("readystatechange", function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) { */
// Готово. Информируем пользователя
/*  } else if (xhr.readyState == 4 && xhr.status != 200) { */
// Ошибка. Информируем пользователя
/*     }
  });
  formData.append("file", file);
  xhr.send(formData);
} */
//End.загрузка продукта  на странице аккаунта. Блок добавления компании

/* Fancybox.bind("[data-fancybox]", {
 ы
}); */
