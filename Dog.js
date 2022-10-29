class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogProfileHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;

    return `
        <div class="photo-section">
     <img src="${avatar}" alt="Photo">
     <div class="bio-section">
      <div class="name-age">${name}, ${age}</div>
      <div class="bio">${bio}</div>
      </div>
    </div>
        `;
  }
}

export default Dog;
