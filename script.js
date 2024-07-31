const menu = document.querySelector("#nav i");
const close = document.querySelector("#menu i");

const tl = gsap.timeline();

tl.from("#menu",{
    x:300,
    duration:1,
})

tl.pause();

menu.addEventListener("click", () =>{
    tl.play();
})

close.addEventListener("click", () =>{
    tl.reverse();
})


gsap.from("#page1 img",{
    x: -100,
    duration:1,
    opacity: 0,
    scrollTrigger:{
        trigger:"#page1 img",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#page1 #diet-coke",{
    x: 300,
    duration:1,
    opacity: 0,
    scrollTrigger:{
        trigger:"#page1 #diet-coke",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#page2 img",{
    y: -100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#page2 #normal-coke",{
    y: -100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page2 #normal-coke",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})









