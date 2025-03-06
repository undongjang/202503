// pc frame
$(document).ready(function () {
  let totalPages = 104;
  let book = $("#book");
  let pageAspectRatio = 1.35; // 세로:가로 비율
  let bookWidth = window.innerHeight * 0.55 * 2;
  let bookHeight = (bookWidth * pageAspectRatio) / 2;

  for (let i = 1; i <= totalPages; i++) {
    book.append(
      `<div class="page" style="background-image: url('./images/page${i}.png');"></div>`
    );
  }

  $("#book").turn({
    // 1512 × 2244
    width: bookWidth,
    height: bookHeight,
    autoCenter: true,
  });

  $("#prevBtn").click(function () {
    $("#book").turn("previous");
  });

  $("#nextBtn").click(function () {
    $("#book").turn("next");
  });
});

// mobile frame
let totalPages = 104;
let book_mobile = document.getElementById("book_mobile");
for (let i = 1; i <= totalPages; i++) {
  let imageElement = document.createElement("div");
  imageElement.classList.add("swiper-slide");

  let img = document.createElement("img");
  img.setAttribute("src", `./images/page${i}.png`);
  img.classList.add("swiper-lazy");
  img.setAttribute("width", "100%");
  let lazyPreloader = document.createElement("div");
  lazyPreloader.classList.add("swiper-lazy-preloader");

  imageElement.appendChild(img);
  imageElement.appendChild(lazyPreloader);
  book_mobile.appendChild(imageElement);
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: false,
    lazy: {
      enabled: true, // Lazy Loading 활성화
      loadPrevNext: true, // 이전/다음 슬라이드 미리 로드
      loadPrevNextAmount: 2, // 총 2개의 이전/다음 슬라이드 로드
      loadOnTransitionStart: true, // 슬라이드 전환 시작 시 로드
      checkInView: true, // 화면에 보이는 슬라이드만 로드
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      slideChange: function () {
        currentPage = swiper.realIndex + 1;
        pageNumber.innerText = `${currentPage} / ${totalPages}`;
      },
    },
  });
});

let pageNumber = document.getElementById("pageNumber");
pageNumber.innerText = `1 / ${totalPages}`;
let currentPage = 1;
