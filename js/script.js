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
  document.getElementById("infoMenu").innerHTML = "SEEs";
  menuInfoAn();
}

function contactHover() {
  document.getElementById("infoHeader").innerHTML = "CONTACT";
  document.getElementById("infoMenu").innerHTML = "We are so excited to chat with you! Find out about all the ways you can get into contact with us.";
  menuInfoAn();
}

function servicesHover() {
  document.getElementById("infoHeader").innerHTML = "SERVICES";
  document.getElementById("infoMenu").innerHTML = "At Toir we want to slove all of your businesses need. Take a look at all the services we can offer your company!";
  menuInfoAn();
}

function menuInfoAn() {
  var text = document.getElementById('infoMenu');
  var newDom = '';
  var animationDelay = 2;

  for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="textan" >' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    console.log(newDom);
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

var toggler = true;

function success(){
  window.location.href ='emailRedirect.html'
  document.getElementById('submit').classList.toggle("success");
  if (toggler){
    document.getElementById('submit').value = "Success!";
    toggler=false;
  } else{
    document.getElementById('submit').value = "Send us a message!";
    toggler=true;
  }
}
var toggler2 = true;

function failure(){
  document.getElementById('submit').classList.toggle("failure");
  if (toggler2){
    document.getElementById('submit').value = "Try Again!";
    toggler2=false;
  } else{
    document.getElementById('submit').value = "Send us a message!";
    toggler2=true;
  }
}
