function showBadge(id) {
  document.getElementById(id).classList.add("display");
}

function hideBadge(id) {
  document.getElementById(id).classList.remove("display");
}

function showFinalMessage() {
  document.getElementsByClassName("badge")[0].classList.add("hidden");
  document.getElementsByClassName("badge")[1].classList.add("hidden");
  document.getElementById("profile-section").innerHTML = `
    <div class="no-profiles">
    <p>There's no one new around you...</p>
    <p>Check your messages 🐶</p>
    </div>
    `;
}

export { showBadge, hideBadge, showFinalMessage };
