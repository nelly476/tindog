class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogProfileHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;

    return `
     <img src="${avatar}" alt="Photo">
     <div class="bio-section">
      <div class="name-age">${name}, ${age}</div>
      <div class="bio">${bio}</div>
      </div>
      <div class="bottom-buttons" id="bottom-buttons">
      <div class="reject-button hover" id="reject-btn" data-reject="reject">
        <img
          class="hover"
          src="./images/icon-cross.png"
          alt="Reject"
          data-reject="reject"
        />
      </div>
      <div class="like-button hover" data-like="like">
        <img
        id="${name}"
          class="hover"
          src="./images/icon-heart.png"
          alt="Like"
          data-like="like"
        />
      </div>
    </div>
        `;
  }
  getChatsHtml(data) {
    const targetProfile = data.forEach((element) => {
      return `
      <div class="chats-section">
    <img src="${avatar}" alt="Avatar photo" class="avatar-chat">
    <div class="chat-info">
      <p>${name}</p>
      <p>${message}</p>
    </div>
    </div>
      `;
    });
    console.log(targetProfile);
  }
}

export default Dog;
