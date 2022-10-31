import dogs from "./data.js";
import Dog from "./Dog.js";
import { showBadge, hideBadge, showFinalMessage } from "./utils.js";

let chatsHtml = "";

document.addEventListener("click", (e) => {
  if (e.target.dataset.reject) {
    dog.hasBeenSwiped = true;
    hideBadge();
    if (dog.name === "Teddy" && dog.hasBeenSwiped === true) {
      showFinalMessage();
    } else {
      dog = getNewDog();
      setTimeout(() => {
        render();
      }, 250);
    }
  } else if (e.target.dataset.like) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    hideBadge();
    chatsHtml += dog.addToChats();
    if (dog.name === "Teddy" && dog.hasBeenSwiped === true) {
      setTimeout(() => {
        showFinalMessage();
      }, 250);
    } else {
      dog = getNewDog();
      setTimeout(() => {
        render();
      }, 250);
    }
  } else if (e.target.dataset.chat) {
    hideBadge();
    openChats();
  } else if (e.target.dataset.profiles) {
    openProfiles();
  }
});

function openChats() {
  document.getElementById("messages-title").classList.remove("hidden");
  document.getElementById("profile-section").innerHTML = chatsHtml;
}

function openProfiles() {
  if (dog.name === "Teddy" && dog.hasBeenSwiped === true) {
    showFinalMessage();
  } else {
    document.getElementById("messages-title").classList.add("hidden");
    render();
  }
}

document.addEventListener("mouseover", (e) => {
  if (e.target.dataset.reject) {
    showBadge("nope-badge");
  } else if (e.target.dataset.like) {
    showBadge("like-badge");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.dataset.reject || e.target.dataset.like) {
    hideBadge();
  }
});

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
