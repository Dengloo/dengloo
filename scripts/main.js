const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pic1.png") {
        myImage.setAttribute("src", "images/pic2.jpg");
    } else {
        myImage.setAttribute("src", "images/pic1.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please Enter Your Name.");
    localStorage.setItem("name", myName);
    myHeading.textContent= `Mozilla is cool , ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Moilla is cool ${storedName}`
}

myButton.onclick = () => {
    setUserName();
};