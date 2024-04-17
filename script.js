gsap.to(".image-container",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:10,
    stagger:10,
})

gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:10,
    top:0
})

gsap.to(".text h1",{
    delay:10,
    ease:Expo.easeInOut,
    stagger:10,
    top:"-100%"
})

