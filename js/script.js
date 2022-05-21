function openNav() {
  document.getElementById("mySidenav").style.height = "100%";

  console.log("bruhhhhhhhhhhhhhhhhh");
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0%";
}

function menuHover() {
  document.getElementById("infoHeader").style.color = "Black";
  document.getElementById("infoMenu").style.color = "Black";
}

function menuHide() {
  document.getElementById("infoHeader").innerHTML = "";
  document.getElementById("infoMenu").innerHTML = "";
}

function aboutHover() {
  document.getElementById("infoHeader").innerHTML = "ABOUT";
  document.getElementById("infoMenu").innerHTML = "Come find out what sets our company apart from the rest. From the story of how Toir began; to the mission we commit ourselves to.";
  menuInfoAn();
}

function careerHover() {
  document.getElementById("infoHeader").innerHTML = "CAREER";
  document.getElementById("infoMenu").innerHTML = "Does this just happen after an amount of text for some reason because this is terrible im not sure why it wont just rap like a normal thing";
  menuInfoAn();
}

function contactHover() {
  document.getElementById("infoHeader").innerHTML = "CONTACT";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
  menuInfoAn();
}

function servicesHover() {
  document.getElementById("infoHeader").innerHTML = "SERVICES";
  document.getElementById("infoMenu").innerHTML = "New text! NEW TEXT AND MORE WORDS!";
  menuInfoAn();
}

function menuInfoAn() {
  var text = document.getElementById('infoMenu');
  var newDom = '';
  var animationDelay = 2;

  for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="textan">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);