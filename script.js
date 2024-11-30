

const tl = gsap.timeline();

tl.from(".line h1",{
   y: 100,
   stagger:0.2, 
});
tl.from(".line h3",{
    opacity:0,
    onStart:function(){
        let count = 1;
        let stopCounter = setInterval(()=>{
            if(count<=100){
                document.querySelector('.counts').textContent = count++
            }
            else{
                clearInterval(stopCounter);
            }
        },30)
       }
});
tl.to(".line h2",{
    animationName: "anime",
    opacity:1,
});
tl.to("#loader",{
    opacity:0,
    duration:0.35,
    delay:1.8
});
tl.from("#page1",{
    y: "100vh",
    opacity: 0,
    ease: Power4,
    duration: 0.5,
});
tl.to("#loader",{
    display: "none",
})