const caculator = {
    add:function(a,b){
        console.log("heello");
    return (a+b);
    },
    minus:function(a,b){
    return (a-b);
    },
    divide:function(a,b){
    return (a/b);
    },
    multi:function(a,b){
    return (a*b);
    },
    squre:function(a,b){
    return (a**b);
    },
}; 

const plusResult = caculator.add(2,3);
console.log(plusResult);


const age =parseInt( prompt("How old are you?"));

console.log( isNaN (age))

if(isNaN(age)){
    /// condition === true
    console.log("plese write your number");
}
else if(age < 18){
    console.log("You are too young")
}
else{
    // condition === false
    console.log(
        "you can drink!"
    );
}





const age =parseInt( prompt("How old are you?"));

console.log( isNaN (age))

if(isNaN(age)){
    /// condition === true
    console.log("plese write your number");
}
else if(age < 18){
    console.log("You are too young")
}
else if(age >= 18 && age<=50){
    console.log("You can drink!")
}
else{
    // condition === false
    console.log(
        "you can't drink!"
    );
}








const age =parseInt( prompt("How old are you?"));

console.log( isNaN (age))

if(isNaN(age) || age<0){
    /// condition === true
    console.log("plese write your real positive number");
}
else if(age < 18){
    console.log("You are too young")
}
else if(age >= 18 && age<=50){
    console.log("You can drink!")
}
else if(age > 50 && age<=80 ){
    // condition === false
    console.log(
        "you should exercise"
    );
}
else if (age > 80){
    console.log("you can do everything!")
}












const age =parseInt( prompt("How old are you?"));

console.log( isNaN (age))

if(isNaN(age) || age<0){
    /// condition === true
    console.log("plese write your real positive number");
}
else if(age < 18){
    console.log("You are too young")
}
else if(age >= 18 && age<=50){
    console.log("You can drink!")
}
else if(age > 50 && age<=80 ){
    // condition === false
    console.log(
        "you should exercise"
    );
}
else if (age === 100){
    console.log("wow you are wise")
}
else if (age > 80){
    console.log("you can do everything!")
}




const h1 = document.querySelectorAll(".Donghae h1");
console.log(h1);
h1.innerText = "hello";

document.title="nice"

document.getElementById("title");

console.dir(title);

title.innerText="gotyou"

console.log(title.id);

const difh1 = document.querySelector(".hi h1");
console.log(difh1);
difh1.innerText = "nicetoo";



const title = document.querySelector(".hello h1");

title.innerText = "hello";

console.dir(title);

title.style.color = "blue";





const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    console.log("h1 was clicked");
    h1.style.color = "blue";
}
function handlemouseenter(){
h1.innerText="mouseis here";
}
function handleTitleLeave(){
    console.log("leave");
    h1.style.color = "red";
    h1.innerText="mouseis gone";
}
function handlewindow (){
    document.body.style.backgroundColor = "tomato";
}
function handlewindowcopy (){
   alert("copied!")
}
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter",handlemouseenter);
h1.addEventListener("mouseleave", handleTitleLeave);

window.addEventListener("resize", handlewindow);
window.addEventListener("copy", handlewindowcopy);

console.dir(h1);    




const h1 = document.querySelector(".hello h1");


function handleTitleClick() {
    const currentColor = h1.style.color
    let newColor;
if(currentColor === "blue"){
    newColor = "tomato";
} else{
    newColor = "blue";
}
h1.style.color= newColor;
}

h1.addEventListener("click",handleTitleClick);
console.dir(h1);   






const loginInput =document.querySelector("#Login-form input");
const loginButton =document.querySelector("#Login-form button");

function btnClick()  {
console.log("hello",loginInput.value);
}

loginButton.addEventListener("click",btnClick);
document.get















const title = document.querySelector(".title h2");
function handleTitleenter() {
  title.innerText = "mouse is here";
}
function handleTitleleave() {
  title.innerText = "mouse is leave";
}
function handleTitleresize() {
  title.innerText = "you just resized!";
}

title.addEventListener("mouseenter", handleTitleenter);
title.addEventListener("mouseleave", handleTitleleave);
window.addEventListener("resize", handleTitleresize);










const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
h1.classList.remove(clickedClass);
    }
    else{
    h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click",handleTitleClick);
