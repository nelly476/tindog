import dogs from "./data.js";
import Dog from "./Dog.js";

let swipedDogs = [];
let likedDogs = [];

document.addEventListener("click", (e) => {
  if (dogs.length > 0) {
    if (e.target.dataset.reject) {
      render();
    } else if (e.target.dataset.like) {
      addToLiked(e.target);
      setTimeout(() => {
        render();
      }, 500);
    } else if (e.target.dataset.chat) {
      openChats();
    }
  }
});

function addToLiked(data) {
  const targetDog = swipedDogs.filter((dog) => dog.name === data.id);
  likedDogs.push(targetDog[0]);
}

function getChatsHtml() {
  let chatHtml = "";
  likedDogs.forEach((dog) => {
    chatHtml += `
     <div class="chat-section">
     <div>
  <img src="${dog.avatar}" alt="Avatar" class="chat-avatar">
  </div>
  <div class="chat-info">
    <p>${dog.name}</p>
    <p>${dog.message}</p>
  </div>
</div>`;
  });
  return chatHtml;
}

function openChats() {
  document.getElementById("profile-section").innerHTML = getChatsHtml();
}

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
    swipedDogs.push(newDog);
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
