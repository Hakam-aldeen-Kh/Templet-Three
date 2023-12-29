let ourSkills = document.querySelector(".our-skills");
let progressSkills = document.querySelectorAll(".skill .the-progress span");
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop) {
    progressSkills.forEach((skill) => {
      skill.style.width =  skill.dataset.width;
    });
  }
};
