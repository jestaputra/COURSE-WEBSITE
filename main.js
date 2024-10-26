// --------------------------CAROUSEL---------------------------------
let countIndex = 0;

function handleSlide(index) {
  let images = document.querySelectorAll(".wraper-carousel img");
  let totalImages = images.length;
  const offset = -countIndex * 100;

  if (index >= totalImages) {
    countIndex = 0;
  } else {
    countIndex = index;
  }
  document.querySelector(
    ".wraper-carousel"
  ).style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  handleSlide(countIndex + 1);
}

setInterval(autoSlide, 5000);

handleSlide(countIndex);

// ------------------------------MENU ANIMATION---------------------------

// ---------------------------LINK-----------------------------------
document.addEventListener("scroll", () => {
  let contentSections = document.querySelectorAll("section");
  let allMenu = document.querySelectorAll("header ul li a");

  let idSection = "";

  contentSections.forEach((contentSection) => {
    sectionTop = contentSection.offsetTop;
    sectionHeight = contentSection.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / contentSections.length) {
      idSection = contentSection.getAttribute("id");
    }
  });

  allMenu.forEach((allMenus) => {
    allMenus.classList.remove("active");
    if (allMenus.getAttribute("href") === `#${idSection}`) {
      allMenus.classList.add("active");
    }
    if (allMenus.getAttribute("href") === `#about`) {
      allMenus.classList.remove("active")
    }
  });
});

// ---------------------------NAVBAR SCROLL-----------------------
let header = document.querySelector("header");
let boxMenu = document.querySelector(".box-menu");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
};

// -----------------------------MENU ANIMATION END------------------\\

// ----------------------------CHANGE IMG ABOUT-------------------------
let allImg = document.querySelectorAll(".img-box img");
let allBtn = document.querySelectorAll(".box-button button");
let allImg2 = 0;
let allBtn2 = 0;
function handleChangeImg(tabName) {
  for (allImg2 of allImg) {
    allImg2.classList.remove("active-img");
  }
  for (allBtn2 of allBtn) {
    allBtn2.classList.remove("active-link");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-img");
}

// ------------------------CAROUSEL COURSE----------------------------

let containerCarousel = document.querySelector(".container-carousel");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  containerCarousel.style.scrollBehavior = "smooth";
  containerCarousel.scrollLeft += 1220;
});
prev.addEventListener("click", () => {
  containerCarousel.style.scrollBehavior = "smooth";
  containerCarousel.scrollLeft -= 1220;
});

// --------------------------OPEN MENU--------------------------------

function openMenu() {
  boxMenu.classList.toggle("handle-box-menu");
}

// ---------------------------OPEN TABS--------------------------------

function openDetail(id, element) {
    const ul = document.getElementById(id);
    const icon = element.querySelector('i');


  if(ul.getAttribute("id") == "first-desc"){
    ul.classList.toggle("visible")
    icon.classList.toggle("rotatee")
  }else if(ul.getAttribute("id") == "second-desc"){
    ul.classList.toggle("visible")
    icon.classList.toggle("rotatee")
  }else if(ul.getAttribute("id") == "third-desc"){
    ul.classList.toggle("visible")
    icon.classList.toggle("rotatee")
  }else if(ul.getAttribute("id") == "fourth-desc"){
    ul.classList.toggle("visible")
    icon.classList.toggle("rotatee")
  }
}
