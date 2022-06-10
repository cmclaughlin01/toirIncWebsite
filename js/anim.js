
function test(){
    gsap.from('.justifyText', {opacity:0, duration:1, y:50});
    // gsap.from('g', {duration:0, stagger:0.2, attr: { fill: "#fff"},});
};

function type(){
    gsap.to('.g', {duration:0, stagger:0.15, fill: "#757575"});
    gsap.to('.c', {duration:0, stagger:0.15, stroke: "#757575"});
    gsap.to('.c', {delay:0.15, duration:0, stagger:0.15, stroke: "none"});
    setTimeout(function(){document.getElementById('lineEnding').classList.toggle('lineEnding');}, 4300);
}

function logos(){
    gsap.from('.adsAni', {opacity:0, duration:2, x:100});
    gsap.from('.managerAni', {opacity:0, duration:2, x:-100});
}