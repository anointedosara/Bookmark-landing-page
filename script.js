const navigations = document.querySelector(".navigations");
const featureSlides = document.querySelector(".feature-slides");
const data = [
  {
    img: "/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    writeUp:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "/images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    writeUp:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    writeUp:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const navigation = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

navigations.innerHTML = navigation
  .map(
    item => `
    <p class="navigation-btn">${item}</p>
    `,
  )
  .join("");

featureSlides.innerHTML += data
  .map(
    item => `
    <div class="slide">
        <img src=${item.img} alt="">
        <div>
            <h2>${item.title}</h2>
            <p>${item.writeUp}</p>
            <button>More Info</button>
        </div>
    </div>
    `,
  )
  .join("");

const slide = document.querySelectorAll(".slide");
const navigationBtn = document.querySelectorAll(".navigation-btn");

slide[0].classList.add("showSlide");
navigationBtn[0].classList.add("btnStyle");

for (let i = 0; i < navigationBtn.length; i++) {
  navigationBtn[i].addEventListener("click", e => {
    for (let j = 0; j < navigationBtn.length; j++) {
      navigationBtn[j].classList.remove("btnStyle");
      slide[j].classList.remove("showSlide");
    }
    slide[i].classList.add("showSlide");
    navigationBtn[i].classList.add("btnStyle");
  });
}

const extensionsData = [
  {
    img: "/images/logo-chrome.svg",
    title: "Add to Chrome",
    version: "Minimum version 62",
    style: "",
  },
  {
    img: "/images/logo-firefox.svg",
    title: "Add to Firefox",
    version: "Minimum version 55",
    style: "second",
  },
  {
    img: "/images/logo-opera.svg",
    title: "Add to Opera",
    version: "Minimum version 46",
    style: "last",
  },
];

const extensions = document.querySelector(".extensions");

extensions.innerHTML = extensionsData
  .map(
    item => `
    <div class="extension ${item.style}">
        <img src=${item.img} alt="">
        <h3>${item.title}</h3>
        <p>${item.version}</p>
        <button>Add & Install Extension</button>
    </div>
    `,
  )
  .join("");

const faqData = [
  {
    style: "first",
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const questions = document.querySelector(".questions");

questions.innerHTML = faqData
  .map(
    item => `
    <div class="question ${item.style}">
        <p class="question-btn">${item.question} <img src="/images/icon-arrow.svg" alt=""></p>
        <div class="answer">${item.answer}</div>
    </div>
    `,
  )
  .join("");

const questionBtn = document.querySelectorAll(".question-btn");

for (let i = 0; i < questionBtn.length; i++) {
  questionBtn[i].addEventListener("click", () => {
    let isOpen =
      questionBtn[i].nextElementSibling.classList.contains("showAnswer");
    for (let j = 0; j < questionBtn.length; j++) {
      questionBtn[j].nextElementSibling.classList.remove("showAnswer");
      questionBtn[j].firstElementChild.classList.remove("changeColor");
    }
    if (!isOpen) {
      questionBtn[i].nextElementSibling.classList.add("showAnswer");
      questionBtn[i].firstElementChild.classList.add("changeColor");
    }
  });
}

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".list");

open.classList.add("show");
const handleOpenNav = () => {
  document.body.classList.add("scroll");
  nav.classList.add("showNav");
  open.classList.remove("show");
  close.classList.add("show");
};
open.addEventListener("click", handleOpenNav);

const handleCloseNav = () => {
  document.body.classList.remove("scroll");
  nav.classList.remove("showNav");
  open.classList.add("show");
  close.classList.remove("show");
};
close.addEventListener("click", handleCloseNav);
