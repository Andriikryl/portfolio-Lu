const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
})

    // OVERLAY
    TweenMax.to(".first", 1, {
        delay: .5,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".second", 1, {
        delay: .7,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".third", 1, {
        delay: .9,
        top: "-100%",
        ease: Expo.easeInOut
      });

TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    ease: Power2.easeInOut
  })

  TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut
  })

  TweenMax.from('.figur__box', 3, {
    delay: .8,
    x: -1000,
    ease: Expo.easeInOut
  })


  TweenMax.from('.main__text', 3, {
    delay: .8,
    x: 1000,
    ease: Expo.easeInOut
  })


  TweenMax.from('.media', 6, {
    delay: .8,
    opacity:0,
    ease: Expo.easeInOut
  })


//   new fullpage('#fullpage', {
//     autoScrolling:true,
//     navigation:true,
//     scrollingSpeed:700,
//     controlArrows:false,
//     slidesNavigation:true,
// });



const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});



  