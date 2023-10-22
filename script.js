
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var boxbtn1 = document.getElementById("boxbtn1");
var boxbtn2 = document.getElementById("boxbtn2");
var boxbtn3 = document.getElementById("boxbtn3");
var boxbtn4 = document.getElementById("boxbtn4");

function openEducation() {
    content1.style.transform = "translateX(0%)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(150%)";
}

function openWORK() {
    content1.style.transform = "translateX(200%)";
    content2.style.transform = "translateX(0%)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(150%)";
}

function openCAMPUS() {
    content1.style.transform = "translateX(200%)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(0%)";
    content4.style.transform = "translateX(150%)";
}
function openOTHERS() {
    content1.style.transform = "translateX(200%)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(0%)";
}
