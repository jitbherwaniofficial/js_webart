console.log("Hare Krishna");

const hero = document.querySelector(".hero_section")
const header = document.querySelector(".header")
// window.onscroll = function () {
//   let top = window.scrollY;
//   if (top > 600) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };



// ACCORDION //
let questions = document.querySelectorAll(".faq_question");

questions.forEach((question) => {
  let icon = question.querySelector(".icon-shape");

  question.addEventListener("click", (event) => {
    const active = document.querySelector(".faq_question.active");
    const activeIcon = document.querySelector(".icon-shape.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      activeIcon.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");
    icon.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
// ACCORDION //
