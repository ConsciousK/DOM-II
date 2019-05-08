// Your code goes here
const mouseoverp1 = document.querySelector('.content-section .text-content .mouseoverp1');
const mouseoverp2 = document.querySelector('.content-section .text-content .mouseoverp2');
const mouseoverh2 = document.querySelector('.content-section .text-content h2');
const navlinks = document.querySelectorAll('.nav .nav-link');
const headerImage = document.querySelector('.intro img');
const keypressimage = document.querySelector('.adventure');
const heading = document.querySelector('.logo-heading');
const buttonsurprise = document.querySelectorAll('.btn');
const thirdimage = document.querySelector('.thirdimage');

mouseoverp1.addEventListener('mouseover', mouseoverCB);
mouseoverp2.addEventListener('mouseover', mouseoverCB);
mouseoverh2.addEventListener('mouseover', mouseoverCB);
mouseoverp1.addEventListener('mouseout', mouseoffCB);
mouseoverp2.addEventListener('mouseout', mouseoffCB);
mouseoverh2.addEventListener('mouseout', mouseoffCB);

for (var i = 0 ; i < navlinks.length; i++) {
    navlinks[i].addEventListener('mouseover' , mouseoverlinksCB); 
 }

for (var i = 0 ; i < navlinks.length; i++) {
    navlinks[i].addEventListener('mouseout' , mouseoutlinksCB); 
}

for (var i = 0 ; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click' , preventCB); 
}

headerImage.addEventListener('click', clickImageCB);
heading.addEventListener('click', headingCB);
window.addEventListener('keydown', keypressCB);
window.addEventListener('wheel', wheelCB);

for (var i = 0 ; i < buttonsurprise.length; i++) {
    buttonsurprise[i].addEventListener('click', buttonCB);
}

thirdimage.addEventListener('click', rotateCB);

function mouseoverCB(a) {
    mouseoverp1.style.color = 'red';
    mouseoverp2.style.color = 'red';
    mouseoverh2.style.color = 'red';
    a.stopPropagation();
}

function mouseoffCB(b) {
    mouseoverh2.style.color = 'black';
    mouseoverp1.style.color = 'black';
    mouseoverp2.style.color = 'black';
    b.stopPropagation();
}

function clickImageCB(){
    if (headerImage.style.border === "5px solid red") {
        headerImage.style.border = "";
    }
    else {
        headerImage.style.border = "5px solid red";
    }
}

function mouseoverlinksCB(){
    if (this.style.color === ""){
        this.style.color = "red";
    } else {
        this.style.color = "";
    }
}

function mouseoutlinksCB(){
    if (this.style.color === "red"){
        this.style.color = "";
    } else {
        this.style.color = "red";
    }
}

function keypressCB(e) {
    if (e.code === 'KeyD') {
        keypressimage.style.visibility = 'hidden';
    }
}

function wheelCB() {
    alert('You Found the Secret Mouse Wheel!!')
}

function preventCB(d) {
    d.preventDefault();
}

function headingCB() {
    alert(`You have touched ${this}`)
}

function buttonCB() {
    document.body.style.backgroundColor = "blue";
}

function rotateCB() {
    thirdimage.setAttribute('style','transform:rotate(20deg)');
}
