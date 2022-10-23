gsap.registerPlugin(ScrollTrigger);

// home
gsap.to(".desctext",{
    x: 20,
    duration:1,
    scrollTrigger:{
        trigger:"text1",
        start: "bottom center",
    }
})

gsap.to(".heroIMG",{
    x: 20,
    duration:1,
    scrollTrigger:{
        trigger:"text",
        start: "top center",
        delay: 1
    }
})

gsap.to(".homeDesc",{
    x: -20,
    duration:1,
    scrollTrigger: {
        trigger:"text",
        start: "top centre"
    }
})

gsap.to(".aboutIMG",{
    x:-20,
    duration:1,
    scrollTrigger: {
        trigger:"block1",
        start: "bottom centre",
    }
})

//menu button

const exampleBtn = document.getElementById('.menubtn');

exampleBtn.addEventListener('click', () => {
  window.open('src=Images/secondslicemenu.jpg', '_blank');
});
