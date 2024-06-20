/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener(
    "click",
    () => {
        alert("Pokey from Earthbound?");
    }
);
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc==="") {
        myImage.setAttribute("src", "");
    }
    else {
        myImage.setAttribute("src", "");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("requesting enter a name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = 'this is Owlboy! '+myName;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'this is Owlboy! '+storedName;
}

myButton.onclick = () => {
    setUserName();
}