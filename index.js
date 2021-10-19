// Your code goes here
const pTarget = document.getElementById("text");
document.addEventListener("DOMContentLoaded", textChange);

function textChange() {
    console.log("The DOM has loaded - initiating text change!");
    pTarget.textContent = "This is really cool!";
}