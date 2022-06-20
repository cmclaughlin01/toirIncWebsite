
function test(){
    gsap.from('.justifyText', {opacity:0, duration:1, y:50});
    // gsap.from('g', {duration:0, stagger:0.2, attr: { fill: "#fff"},});
};

function type(){
    var tl = gsap.timeline();
    
    var textTl = gsap.timeline({onComplete: () => {document.getElementById('lineEnding').classList.toggle('lineEnding')}});
    textTl.to('.cls-6', {duration:0, stagger:0.15, fill: "#757575"})
          .to('.cls-2', {duration:0, stagger:0.15, stroke: "#757575"}, "<")
          .to('.cls-2', {delay:0.15, duration:0, stagger:0.15, stroke: "none"}, "<")
          .to('#lineEnding', {duration:0, stroke: "#757575"});

    var popdownTl = gsap.timeline();
    popdownTl.from('.popDown', { scaleY:0, opacity:0})
             .from('.searchBarLine', {opacity: 0})
             .from('.popDown2', { scaleY:0, opacity:0})
    
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
        end: "+=200",
        scrub: 1,
        snap: {
            snapTo:1,
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
        transformOrigin: "bottom"
    })
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
}

function contact(){
    gsap.from('.contactBackground', {duration:1, ease: "power2", y:1000, stagger:-0.5})
}

function adsPhone(){
    gsap.from('.phoneImg', {
        scrollTrigger: {
            trigger: '#graphAni',
            start: 'top 40%',
            end: 'bottom 100%',
            scrub: 0.5,
            //markers: true,
        },
        ease: "power1",
        y:300,
        scale:1.5,
        transformOrigin: "bottom"
    })
}

function phoneText(){
    var tl = gsap.timeline();

    tl.to('.phoneText1', {color:'#333'})
      .to('.phoneText1', {color:'#fff'})
      .to('.phoneText2', {color:'#333'},'<')
      .to('.phoneText2', {color:'#fff'})
      .to('.phoneText3', {color:'#333'},'<')
      .to('.phoneText3', {color:'#fff'});

    ScrollTrigger.create({
        animation:tl,
        trigger: '#graphSect',
        start: 'top 8.5%',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true
    })
    // gsap.to('.phoneText1', {
    //     scrollTrigger: {
    //         trigger: '.phoneText1',
    //         start: 'top 40%',
    //         end: 'bottom 70%',
    //         scrub: 0.5,
    //         markers: true,
    //     },
    //     color: "#333",  
    // })
    // gsap.to('.phoneText2', {
    //     scrollTrigger: {
    //         trigger: '.phoneText2',
    //         start: 'top 50%',
    //         end: 'bottom 80%',
    //         scrub: 0.5,
    //         markers: true,
    //     },
    //     color: "#333",  
    // })
    // gsap.to('.phoneText3', {
    //     scrollTrigger: {
    //         trigger: '.phoneText3',
    //         start: 'top 70%',
    //         end: 'bottom 99%',
    //         scrub: 0.5,
    //         //markers: true,
    //     },
    //     color: "#333",  
    // })
    // gsap.to('.phoneText1', {
    //     scrollTrigger: {
    //         trigger: '.phoneText1',
    //         start: 'top 30%',
    //         end: 'bottom 60%',
    //         scrub: 0.5,
    //         //markers: true,
    //     },
    //     color: "white",  
    // })
    // gsap.to('.phoneText2', {
    //     scrollTrigger: {
    //         trigger: '.phoneText2',
    //         start: 'top 30%',
    //         end: 'bottom 60%',
    //         scrub: 0.5,
    //         //markers: true,
    //     },
    //     color: "white",  
    // })
    // gsap.to('.phoneText3', {
    //     scrollTrigger: {
    //         trigger: '.phoneText3',
    //         start: 'top 30%',
    //         end: 'bottom 60%',
    //         scrub: 0.5,
    //         //markers: true,
    //     },
    //     color: "white",  
    // })

}