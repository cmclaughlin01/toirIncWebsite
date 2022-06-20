
function test(){
    gsap.from('.justifyText', {opacity:0, duration:1, y:50});
    // gsap.from('g', {duration:0, stagger:0.2, attr: { fill: "#fff"},});
};

function type(){
    var tl = gsap.timeline();
    
    var textTl = gsap.timeline({onComplete: () => {document.getElementById('lineEnding').classList.toggle('lineEnding')}});
    textTl.to('.cls-6', {duration:0, stagger:0.15, fill: "#000000"})
          .to('.cls-2', {duration:0, stagger:0.15, stroke: "#000000"}, "<")
          .to('.cls-2', {delay:0.15, duration:0, stagger:0.15, stroke: "none"}, "<")
          .to('#lineEnding', {duration:0, stroke: "#000000"});

    var popdownTl = gsap.timeline();
    popdownTl.from('.popDown', { scaleY:0, opacity:0})
             .from('.popDownText', {opacity:0},"<90%")
             .from('.searchBarLine', {opacity: 0},"<")
             .from('.popDown2', { scaleY:0, opacity:0})
             .from('.popDownText2', {opacity:0},"<90%")
             .from('.popDown3', { scaleY:0, opacity:0})
             .from('.popDownText3', {opacity:0},"<90%")
             .from('.popDown4', { scaleY:0, opacity:0})
             .from('.popDownText4', {opacity:0},"<90%")
             
             
    
    tl.add(textTl)
      .add(popdownTl);


    ScrollTrigger.create({
        animation: tl,
        trigger: "#SearchBar"
    });

    ScrollTrigger.create({
        animation:popdownTl,
        trigger: "#SearchBar",
        start: "top 15%",
        end: "+=1000",
        scrub: 1,
        snap: {
            snapTo:0.25,
            duration:0.5,
            delay:0
        },
        pin: true,
    });
}

function logos(){
    gsap.from('.marketingAni', {
        scrollTrigger: {
            trigger: '.marketingAni',
            start: 'top 10%',
            end: 'bottom 70%',
            scrub: 0.5,
            // markers: true,
        },
        scale: 3,
        transformOrigin: "bottom",
    });
    gsap.to('.marketingAni', {
        scrollTrigger: {
            trigger: '.marketingAni',
            start: 'top 10%',
            end: 'bottom 70%',
            scrub: 0.5,
            // markers: true,
        },
        x:-500,
        ease:"power1.inOut"
    });
    gsap.from('.adsAni', {
        scrollTrigger: {
            trigger: '.adsAni',
            start: 'bottom bottom'
         },opacity:0, duration:1.5, x:100});
    gsap.from('.managerAni', {
        scrollTrigger: {
            trigger: '.managerAni',
            start: 'bottom bottom'
         }, opacity:0, duration:1.5, x:-100});
    gsap.from('.adsText', {
        scrollTrigger: {
            trigger: '.adsAni',
            start: 'bottom bottom'
        },opacity:0, duration:1.5, x:100});
    gsap.from('.managerText', {
        scrollTrigger: {   
            trigger: '.managerAni',
            start: 'bottom bottom'
        }, opacity:0, duration:1.5, x:-100});
    gsap.from('.marketingText', {
        scrollTrigger: {   
            trigger: '.marketingAni',
            start: 'bottom bottom'
        }, opacity:0, duration:1.5});
    // var tl = gsap.timeline();
    // tl.to('.marketingText', {opacity:0},"<")
    //   .to('.managerAni', {opacity:0},"<")
    //   .to('.managerText', {opacity:0},"<")
    //   .to('.adsAni', {opacity:0},"<")
    //   .to('.adsText', {opacity:0},"<")

    // ScrollTrigger.create({
    //     animation: tl,
    //     trigger: '.managerBlurb'
    // });
    
}

function contact(){
    gsap.from('.contactBackground', {duration:1, ease: "power2", y:1000, stagger:-0.5})
}