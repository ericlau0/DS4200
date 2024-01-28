const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dup1.jpeg") {
    myImage.setAttribute("src", "images/dup2.jpeg");
  } else {
    myImage.setAttribute("src", "images/dup1.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Dhendup welcomes you, ${myName}`;
    }
  }

setUserName();

  myButton.onclick = () => {
    setUserName();
  };
