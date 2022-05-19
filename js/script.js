function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0%";
    document.body.style.backgroundColor = "white";
  }

function menuHover(){
  document.getElementById("tryHard").style.color = "Black";
}

function menuHide(){
  document.getElementById("tryHard").style.color = "#fefefe";

}

function aboutHover(){
  document.getElementById("tryHard").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
}
function careerHover(){
  document.getElementById("tryHard").innerHTML = "New text! NEW TEXT!";
}
function contactHover(){
  document.getElementById("tryHard").innerHTML = "New text! NEW TEXT AND less WORDS!";
}
function servicesHover(){
  document.getElementById("tryHard").innerHTML = "New text! NEW TEXT AND medium WORDS!";
}

