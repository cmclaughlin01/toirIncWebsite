
function test(){
    gsap.to('.mainText', {
        scrollTrigger: {
            trigger: '.pursuitHero',
            start: 'top 30%',
            end: 'bottom 35%',
            scrub: 2,
            //markers: true,
        },
        opacity: 0
    })
    gsap.to('.daIMAC',{
        scrollTrigger:{
            trigger: '.daIMAC',
            start: 'top 28%',
            end: 'top 25%',
            endTrigger: '#SearchBar',
            scrub: true,
            pin: '.daIMAC',
            //markers: true
        }
    })  
    gsap.to('.miniText', {
        scrollTrigger: {
            trigger: '.miniText',
            start: 'top 8%',
            end: 'bottom 15%',
            scrub: true,
            //markers: true,
        },
        opacity: 0
    })  
};
function test2(){
    gsap.to('.sideKickText', {
        scrollTrigger: {
            trigger: '.pursuitHero',
            start: 'top 38%',
            end: 'bottom 45%',
            scrub: 2,
            //markers: true,
        },
        opacity: 0
    })  
};
function daMac(){
    var t1 = gsap.timeline();
    var t2 = gsap.timeline();

    t1.to('.heroIMAC', {scale: 0.6,y:0,yPercent: '-30'}, 'start')
      .to('#screen',{scale: 0.6,y:0,yPercent: '-30'}, 'start')
      .to('.adsAni', {scale: 0.8}, 'start')
      .to('.adsText', {scale: 0.8}, 'start')
      .to('.marketingAni', {scale: 0.8}, 'start')
      .to('.marketingText', {scale: 0.8}, 'start')
      .to('.managerAni', {scale: 0.8}, 'start')
      .to('.managerText', {scale: 0.8}, 'start')
      .to('.googleSearchBar', {scale: 0.8}, 'start')
      
    t2.to('.daIMAC', {x:0,xPercent: '-20', duration: 2,})
    .to('.content-one-text',{opacity: 1,}, '<70%')


    ScrollTrigger.create({
        animation: t1,
        trigger: ".heroIMAC",
        start: "top 80%",
        end: "top 25%",
        scrub: 1,
        //pin: '.heroIMAC',
        //markers: true
    });

    ScrollTrigger.create({
        animation: t2,
        trigger: "#SearchBar",
        start: "top 60%",
        end: "top 25%",
        //endTrigger: '',
        scrub: 1,
        //pin: '#daIMAC',
        //markers: true
    });

}

function arrowz(){
    gsap.from('.material-symbols-outlined', {scale: 1.3,repeat: -1,duration:1,yoyo:true,})
}
function type(){
    var tl = gsap.timeline();
    
    var textTl = gsap.timeline({onComplete: () => {document.getElementById('lineEnding').classList.toggle('lineEnding')}});
    textTl.to('.cls-6', {duration:0, stagger:0.15, fill: "#000000"})
          .to('.cls-2', {duration:0, stagger:0.15, stroke: "#000000"}, "<")
          .to('.cls-2', {delay:0.15, duration:0, stagger:0.15, stroke: "none"}, "<")
          .to('#lineEnding', {duration:0, stroke: "#000000"});

    // var popdownTl = gsap.timeline();
    // popdownTl.from('.popDown', { scaleY:0, opacity:0})
    //          .from('.popDownText', {opacity:0},"<90%")
    //          .from('.searchBarLine', {opacity: 0},"<")
    //          .from('.popDown2', { scaleY:0, opacity:0})
    //          .from('.popDownText2', {opacity:0},"<90%")
    //          .from('.popDown3', { scaleY:0, opacity:0})
    //          .from('.popDownText3', {opacity:0},"<90%")
    //          .from('.popDown4', { scaleY:0, opacity:0})
    //          .from('.popDownText4', {opacity:0},"<90%")
             
             
    tl.add(textTl);
      //.add(popdownTl);


    ScrollTrigger.create({
        animation: tl,
        trigger: "#SearchBar",
        start: "top 60%",
        //markers: true
    });

    // ScrollTrigger.create({
    //     animation:popdownTl,
    //     trigger: "#SearchBar",
    //     start: "top 15%",
    //     end: "+=1000",
    //     scrub: 1,
    //     snap: {
    //         snapTo:0.25,
    //         duration:0.5,
    //         delay:0
    //     },
    //     pin: true,
    // });
}

// function logos(){
//     var tl = gsap.timeline();

//     var marketingTl = gsap.timeline();

//     marketingTl.from('.marketingAni', {scale: 3, transformOrigin: "bottom",})
//                .to('.marketingAni', {ease:"power1.inOut", x:-500, }, "<");
    
//     ScrollTrigger.create({
//         animation:marketingTl,
//         trigger:'.marketingAni',
//         start: "top 10%",
//         end: "bottom 80%",
//         scrub: 0.5,
//         // markers: true
//     })

//     ScrollTrigger.create({
//         animation: gsap.from('.firstText',{opacity: 0,x: 100,},"<"),
//         trigger: '.firstText',
//         start: 'center 50%',
//         end: '+=200',
//         pin: '.firstText',
//         scrub: true
        
//     })
//     ScrollTrigger.create({
//         trigger: '.firstText',
//         start: 'center 55%',
//         end: '+=250',
//         pin: '.marketingAni',
//         scrub: true
        
//     })

//     gsap.from('.adsAni', {
//         scrollTrigger: {
//             trigger: '.adsAni',
//             start: 'bottom bottom'
//          },opacity:0, duration:1.5, x:100});
//     gsap.from('.managerAni', {
//         scrollTrigger: {
//             trigger: '.managerAni',
//             start: 'bottom bottom'
//          }, opacity:0, duration:1.5, x:-100});
//     gsap.from('.adsText', {
//         scrollTrigger: {
//             trigger: '.adsAni',
//             start: 'bottom bottom'
//         },opacity:0, duration:1.5, x:100});
//     gsap.from('.managerText', {
//         scrollTrigger: {   
//             trigger: '.managerAni',
//             start: 'bottom bottom'
//         }, opacity:0, duration:1.5, x:-100});
//     gsap.from('.marketingText', {
//         scrollTrigger: {   
//             trigger: '.marketingAni',
//             start: 'bottom bottom'
//         }, opacity:0, duration:1.5});
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
    
//}

function contact(){
    gsap.from('.contactBackground', {duration:1, ease: "power2", y:1000, stagger:-0.5})
}

// function phoneText(){
//     var phonetl = gsap.timeline();

//     phonetl.to('.phoneText1', {color:'#333'})
//       .to('.phoneText1', {color:'#fff'})
//       .to('.phoneText2', {color:'#333'},'<')
//       .to('.phoneText2', {color:'#fff'})
//       .to('.phoneText3', {color:'#333'},'<')
//       .to('.phoneText3', {color:'#fff'});

//     ScrollTrigger.create({
//         animation:phonetl,
//         trigger: '#graphSect',
//         start: 'top 8%',
//         end: 'bottom top',
//         scrub: true,
//         pin: true,
//         //markers: true
//     });
// }

function adsPhone(){
    gsap.from('.phoneImg', {
        scrollTrigger: {
            trigger: '#graphAni',
            start: 'top 50%',
            end: 'bottom 95%',
            scrub: 2,
            //markers: true,
        },
        ease: "power1",
        y:300,
        scale:1.5,
        transformOrigin: "bottom"
    })  
}

// function phoneSideImg(){
//     var phonetl = gsap.timeline();

//     phonetl.to('.image3', {rotateY: 90, transformOrigin: '50% 50%'})
//       .to('.image2', {rotateY: 0, transformOrigin: '50% 50%'},"-=50%")

//     ScrollTrigger.create({
//         animation: phonetl,
//         trigger: '.image2',
//         start: 'top top',
//         end: 'bottom 10%',
//         scrub: 2,
//         //markers: true
//     });
// }

function odometerRotate(){
    var arrowtl = gsap.timeline();
    arrowtl.from('.arrow', {
        rotation: -100,
        transformOrigin: "50% 68%",
        ease: "power1.in"
    }).to('.arrow', {
        rotation: 100,
        transformOrigin: "50% 68%",
        ease: "power1.out"
    }) 

    ScrollTrigger.create({
        animation:arrowtl,
        trigger:'#qualitySect',
        start:'top 50%',
        // end: '+=300',
        // pin: true,
        // scrub:0.5,
        //markers: true,
    })
}

function textUpdate(){
    gsap.to('#heroChange',{
        text: "TOIR INC",
    })
}

function textUpdate2(){
    const wordList = ["PURSUIT", "SIGHTS", "SEARCHES"];
    
    gsap.to('#heroChange',{
        text: wordList[Math.floor(Math.random()*3)],
    })
}

function cardToggle(cardNum){
    
}

var cardToggle = [true, true, true, true];

function flip(num){

    if (num == 1){
        cardNum = 'One'
    } else if (num == 2){
        cardNum = 'Two'
    } else if (num == 3){
        cardNum = 'Three'
    } else if (num == 4){
        cardNum = 'Four'
    }

    // document.getElementById('service'+cardNum).classList.toggle('service'+cardNum);
    // document.getElementById('service'+cardNum).classList.toggle('service'+cardNum+'Flipped');
    // if (cardToggle[num-1]){
    //     var tl = gsap.timeline();
    
    //     tl.to('.service'+cardNum, {
    //         scaleX:0,
    //         duration:0.3,
    //         ease:"power1.out",
    //     }).to('.content'+cardNum+"Flipped",{
    //         opacity:1,
    //         duration:0,
    //     }).to('.service'+cardNum,{
    //         backgroundColor:'#000',
    //         duration:0,
    //     }).to('.content'+cardNum,{
    //         opacity:0,
    //         duration:0,
    //     }).to('.service'+cardNum,{
    //         scaleX:1,
    //         duration:0.3,
    //         ease:"power1.in",
    //     });
    //     cardToggle[num-1] = false;
    // } else {
    //     // console.log("im runnin");
    //     var tlFlipped = gsap.timeline();
        
    //     tlFlipped.to('.service'+cardNum, {
    //         scaleX:0,
    //         duration:0.3,
    //         ease:"power1.out",
    //     }).to('.content'+cardNum,{
    //         opacity:1,
    //         duration:0,
    //     }).to('.service'+cardNum,{
    //         backgroundColor:'#e6e6e6',
    //         duration:0,
    //     }).to('.content'+cardNum+"Flipped",{
    //         duration:0,
    //         opacity:0,
    //     }).to('.service'+cardNum,{
    //         scaleX:1,
    //         duration:0.3,
    //         ease:"power1.in",
    //     });
    //     cardToggle[num-1] = true;
    // }
    if (cardToggle[num-1]){
        var tl = gsap.timeline();
    
        tl.to('.content'+cardNum, {
            scaleX:0,
            duration:0.3,
            ease:"power1.out",
        }).to('.content'+cardNum+"Flipped",{
            scaleX:0,
            opacity:1,
            duration:0,
            
        }).to('.content'+cardNum,{
            opacity:0,
            duration:0,
        }).to('.content'+cardNum+"Flipped",{
            scaleX:1,
            duration:0.3,
            ease:"power1.in",
        });
        cardToggle[num-1] = false;
    } else {
        // console.log("im runnin");
        var tlFlipped = gsap.timeline();
        
        tlFlipped.to('.content'+cardNum+"Flipped", {
            scaleX:0,
            duration:0.3,
            ease:"power1.out",
        }).to('.content'+cardNum,{
            opacity:1,
            duration:0,
        }).to('.content'+cardNum+"Flipped",{
            duration:0,
            opacity:0,
        }).to('.content'+cardNum,{
            scaleX:1,
            duration:0.3,
            ease:"power1.in",
        });
        cardToggle[num-1] = true;
    }
}