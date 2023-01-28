window.onscroll = function () { myFunction() };
var header = document.querySelector(".navbar");


// Get the offset position of the navbar
var sticky = header.offsetTop

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");

  }
}

$('nav li a').on('click', function () {
  $('nav li a.active').removeClass('active');
  $(this).addClass('active');
})

$(document).ready(function () {
  if ($(window).width() < 767) {

    $('nav li a').on('click', function () {
      $('#navbarNav').removeClass('show');
    })

  }
});

function readMore(city) {
  let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
  let moreText = document.querySelector(`.card[data-city="${city}"] .more`);
  let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less";
    moreText.style.display = "inline";
  }
}







(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "September 1, 2022 15:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());

$(document).ready(function () {
  $("a.fancybox").fancybox()
});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.body.classList.add("opacity");
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-530px";
  document.body.classList.remove("opacity");
}
// (function blink() {
//   $('.blink_me').fadeOut(500).fadeIn(500, blink);
// })();