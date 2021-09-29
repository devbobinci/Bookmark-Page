const bars = document.getElementById("bars");
const ul = document.getElementById("ul");
const barsEl = document.querySelectorAll(".bars-bar");
const navImg = document.getElementById("logo-img");
const navImgWhite = document.getElementById("logo-img-white");

bars.addEventListener("click", barsClick);

function barsClick() {
  ul.classList.toggle("desktop");
  barsEl.forEach((bar) => {
    bar.classList.toggle("cross");
  });
  bars.classList.toggle("cross-margin");

  navImg.classList.toggle("logo-off");
  navImgWhite.classList.toggle("logo-on");
}

const feature_opt_1 = document.getElementById("feature-option-1");
const feature_opt_2 = document.getElementById("feature-option-2");
const feature_opt_3 = document.getElementById("feature-option-3");

feature_opt_1.addEventListener("click", addBar1);
feature_opt_2.addEventListener("click", addBar2);
feature_opt_3.addEventListener("click", addBar3);

const opt_img = document.getElementById("option-img");
const sh_opt_h1 = document.querySelector(".show-option-h1");
const sh_opt_p = document.querySelector(".show-option-p");

const info_btn = document.querySelector(".more-info");

function addBar1() {
  feature_opt_1.classList.add("active-option");
  feature_opt_2.classList.remove("active-option");
  feature_opt_3.classList.remove("active-option");

  sh_opt_h1.innerHTML = "Bookmark in one click";
  opt_img.src = "./images/illustration-features-tab-1.svg";
  sh_opt_p.innerHTML = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites`;
  info_btn.classList.add("feature-info");
}

function addBar2() {
  feature_opt_2.classList.add("active-option");
  feature_opt_1.classList.remove("active-option");
  feature_opt_3.classList.remove("active-option");

  sh_opt_h1.innerHTML = "Intelligent search";
  sh_opt_p.innerHTML = `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`;
  opt_img.src = "./images/illustration-features-tab-2.svg";
  info_btn.classList.remove("feature-info");
}

function addBar3() {
  feature_opt_3.classList.add("active-option");
  feature_opt_1.classList.remove("active-option");
  feature_opt_2.classList.remove("active-option");

  sh_opt_h1.innerHTML = "Share your bookmarks";
  sh_opt_p.innerHTML = `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`;
  opt_img.src = "./images/illustration-features-tab-3.svg";
  info_btn.classList.remove("feature-info");
}

const arrow_1 = document.querySelector(".question-arrow-1");
const arrow_2 = document.querySelector(".question-arrow-2");
const arrow_3 = document.querySelector(".question-arrow-3");
const arrow_4 = document.querySelector(".question-arrow-4");

arrow_1.addEventListener("click", () => {
  document.querySelector(".list-p-1").classList.toggle("show");
  arrow_1.classList.toggle("rotate");
});
arrow_2.addEventListener("click", () => {
  document.querySelector(".list-p-2").classList.toggle("show");
  arrow_2.classList.toggle("rotate");
});
arrow_3.addEventListener("click", () => {
  document.querySelector(".list-p-3").classList.toggle("show");
  arrow_3.classList.toggle("rotate");
});
arrow_4.addEventListener("click", () => {
  document.querySelector(".list-p-4").classList.toggle("show");
  arrow_4.classList.toggle("rotate");
});

const email = document.getElementById("email");

function check() {
  const error_txt = document.querySelector(".error-text");
  const error_icon = document.querySelector(".icon1");
  let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(regExp)) {
    error_txt.style.display = "none";
    error_icon.style.display = "none";
  } else if (email.value == "") {
    error_txt.style.display = "flex";
    error_icon.style.display = "flex";
  } else {
    error_txt.style.display = "flex";
    error_icon.style.display = "flex";
  }
}

$(".features-li").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".features").offset().top,
    },
    1000
  );
});

$(".pricing-li").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".questions").offset().top,
    },
    1000
  );
});

$(".contact-li").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".email-box").offset().top,
    },
    1000
  );
});
