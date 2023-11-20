var active = 3;
var mncircle = document.querySelectorAll(".mncircle"); 

gsap.to(mncircle[active-1],{
 opacity:1
})


gsap.to(".circle",{
    scrollTrigger: {
        trigger: `.circle`,       
        scroll:`#section`,
        start: 'top top+=50',
        // markers: true
       
    },
    
    rotate:0,
    ease: Expo.easeInOut,
    duration:1.7,
} )
gsap.to("#page2>h1",{
    scrollTrigger: {
        trigger: `#page2>h1`,       
        scroll:`#main`,
        start: 'top top+=200',
               
    },
    stagger:.2,
    duration: .5,
    color:`#fff`
  } )