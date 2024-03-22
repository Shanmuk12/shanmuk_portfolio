export const setAnimations = () => {
  const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showX");
      } else {
        // entry.target.classList.remove("showX");
      };
    })
  });

  const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showY");
      } else {
        // entry.target.classList.remove("showY");
      };
    })
  });

  const noJsHiddenXElements = document.querySelectorAll(".no-js-hiddenX");
  const noJsHiddenYElements = document.querySelectorAll(".no-js-hiddenY");

  noJsHiddenXElements.forEach((el) => {
    el.classList.remove("no-js-hiddenX");
    el.classList.add("hiddenX");
    observerX.observe(el);
  });

  noJsHiddenYElements.forEach((el) => {
    el.classList.remove("no-js-hiddenY");
    el.classList.add("hiddenY");
    observerY.observe(el);
  });
};