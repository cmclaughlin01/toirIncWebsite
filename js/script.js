function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  
  console.log("bruhhhhhhhhhhhhhhhhh");
}
  
function closeNav() {
  document.body.style.backgroundColor = "white";
  document.getElementById("mySidenav").style.height = "0%";
}

function menuHover(){
  document.getElementById("infoHeader").style.color = "Black";
  document.getElementById("infoMenu").style.color = "Black";
}

function menuHide(){
  document.getElementById("infoHeader").innerHTML = "";
  document.getElementById("infoMenu").innerHTML = "";
}

function aboutHover(){
  document.getElementById("infoHeader").innerHTML = "ABOUT";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
}

function careerHover(){
  document.getElementById("infoHeader").innerHTML = "CAREER";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
}
function contactHover(){
  document.getElementById("infoHeader").innerHTML = "CONTACT";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
}
function servicesHover(){
  document.getElementById("infoHeader").innerHTML = "SERVICES";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);