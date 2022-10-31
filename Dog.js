class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogProfileHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;

    return `
     <img class="avatar-image" src="${avatar} "alt="Photo">
     <div class="bio-section"> 
      <div class="name-age">${name}, ${age}</div>
      <div class="bio">${bio}</div>
      </div>
        `;
  }
  addToChats() {
    const { name, avatar, message } = this;
    let chatHtml = "";
    chatHtml += `
    <div class="chats-section">
  <img src="${avatar}" alt="Avatar photo" class="avatar-chat">
  <div class="chat-info">
    <p><b>${name}</b></p>
    <p class="grey">${message}</p>
  </div>
  </div>
    `;
    return chatHtml;
  }
}

export default Dog;
