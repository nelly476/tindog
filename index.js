import dogs from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", (e) => {
  if (e.target.dataset.reject) {
    dog.hasBeenSwiped = true;
    if (dog.name === "Teddy" && dog.hasBeenSwiped === true) {
      showFinalMessage();
    } else {
      dog = getNewDog();
      render();
    }
  } else if (e.target.dataset.like) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;

    if (dog.name === "Teddy" && dog.hasBeenSwiped === true) {
      showFinalMessage();
    } else {
      dog = getNewDog();
      setTimeout(() => {
        render();
      }, 500);
    }
  } else if (e.target.dataset.chat) {
    openChats();
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.dataset.reject) {
    showBadge("nope-badge");
  } else if (e.target.dataset.like) {
    showBadge("like-badge");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.dataset.reject) {
    hideBadge("nope-badge");
  } else if (e.target.dataset.like) {
    hideBadge("like-badge");
  }
});

function showBadge(id) {
  document.getElementById(id).classList.add("display");
}

function hideBadge(id) {
  document.getElementById(id).classList.remove("display");
}

function showFinalMessage() {
  document.getElementById("profile-section").innerHTML = `
  <p class="no-profiles">There's no one new around you...</p>
  <p class="no-profiles">Come back a little later 🐶</p>
  `;
}

function getNewDog() {
  const nextDogsData = dogs.shift();
  return new Dog(nextDogsData);
}

let dog = getNewDog();

function render() {
  document.getElementById("profile-section").innerHTML =
    dog.getDogProfileHtml();
}

render();
