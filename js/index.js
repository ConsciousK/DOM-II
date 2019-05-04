// Your code goes here
const mouseoverp1 = document.querySelector('.content-section .text-content .mouseoverp1');
const mouseoverp2 = document.querySelector('.content-section .text-content .mouseoverp2');
const mouseoverh2 = document.querySelector('.content-section .text-content h2');

const headerImage = document.querySelector('.intro img');

mouseoverp1.addEventListener('mouseover', mouseoverCB);
mouseoverp2.addEventListener('mouseover', mouseoverCB);
mouseoverh2.addEventListener('mouseover', mouseoverCB);

mouseoverp1.addEventListener('mouseout', mouseoffCB);
mouseoverp2.addEventListener('mouseout', mouseoffCB);
mouseoverh2.addEventListener('mouseout', mouseoffCB);

headerImage.addEventListener('click', clickImage)

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
//    b.stopPropagation();
}

function clickImage(){
    if (headerImage.style.border === "5px solid red") {
        headerImage.style.border = "";
    }
    else {
        headerImage.style.border = "5px solid red";
    }
}

