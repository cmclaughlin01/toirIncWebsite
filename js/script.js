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
  document.getElementById("infoMenu").innerHTML = "Come find out what sets our company apart from the rest. From the story of how Toir emerged; to the obligations we make to our clients.";
  menuInfoAn();
}

function careerHover() {
  document.getElementById("infoHeader").innerHTML = "CAREER";
  document.getElementById("infoMenu").innerHTML = "Come see if you will make the right fit for Toir";
  menuInfoAn();
}

function contactHover() {
  document.getElementById("infoHeader").innerHTML = "CONTACT";
  document.getElementById("infoMenu").innerHTML = "We are so excited to chat with you! Find out about all the &nbsp ways you can get into contact with us.";
  menuInfoAn();
}

function servicesHover() {
  document.getElementById("infoHeader").innerHTML = "SERVICES";
  document.getElementById("infoMenu").innerHTML = "At Toir we want to slove all of your businesses needs. Take a look at all the services we can offer your company!";
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

function redirectWait(){
  setTimeout(homepage, 5000);
  setTimeout(secondWrite, 1000, 4);
  setTimeout(secondWrite, 2000, 3);
  setTimeout(secondWrite, 3000, 2);
  setTimeout(secondWrite, 4000, 1);
}

function homepage(){
  window.location.href ='index.html';
}

function secondWrite(i){
  document.getElementById('seconds').innerHTML = i.toString();
}


let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)