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



  