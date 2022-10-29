import dogs from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", (e) => {
  if (dogs.length > 0) {
    if (e.target.dataset.reject) {
      render();
    } else if (e.target.dataset.like) {
      setTimeout(() => {
        render();
      }, 500);
    }
  }
});

document.addEventListener("mouseover", (e) => {
  if (dogs.length > 0) {
    if (e.target.dataset.reject) {
      showBadge("nope-badge");
    } else if (e.target.dataset.like) {
      showBadge("like-badge");
    }
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
  document.getElementById(id).classList.add("transition");
}

function hideBadge(id) {
  document.getElementById(id).classList.remove("transition");
}

function getNewDog() {
  if (dogs.length > 0) {
    let newDog = new Dog(dogs.shift());
    if (newDog.name === "Last") {
      return `
      <p class="no-profiles">There's no one new around you...</p>
      <p class="no-profiles">Come back a little later 🐶</p>
      `;
    }
    return newDog.getDogProfileHtml();
  }
}

function render() {
  document.getElementById("profile-section").innerHTML = getNewDog();
}

render();
