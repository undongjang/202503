// pc frame
$(document).ready(function () {
  let totalPages = 62;
  let book = $("#book");
  let pageAspectRatio = 1.4841; // 세로:가로 비율
  let bookWidth = window.innerHeight * 0.55 * 2;
  let bookHeight = (bookWidth * pageAspectRatio) / 2;

  for (let i = 0; i <= totalPages; i++) {
    book.append(
      `<div class="page" style="background-image: url('./images/page${i}.png');"></div>`
    );
  }

  $("#book").turn({
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
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: false,
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

let totalPages = 62;
let book = document.getElementById("book_mobile");
for (let i = 0; i <= totalPages; i++) {
  let imageElement = document.createElement("div");
  imageElement.classList.add("swiper-slide");
  imageElement.style.backgroundImage = `url('./images/page${i}.png')`;
  book.appendChild(imageElement);
}

let pageNumber = document.getElementById("pageNumber");
pageNumber.innerText = `1 / ${totalPages}`;
let currentPage = 1;
