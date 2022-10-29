import dogs from "./data.js";
import Dog from "./Dog.js";

function getNewDog() {
  const newDog = new Dog(dogs[0]);

  return newDog.getDogProfileHtml();
}

const doggo = getNewDog();

function render() {
  document.getElementById("profile-section").innerHTML = getNewDog();
}

render();
