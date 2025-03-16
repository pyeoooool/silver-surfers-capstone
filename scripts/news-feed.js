import { post } from "./posts.js";

//generates the code to div post
let postHTML = '';

post.forEach((post) => {
  postHTML += `
      <div class="feed-post js-feed-post-${post.id}">
        <div class="post-header">
          <img class="profile-picture-icon" src="${post.pfp}">
          <div class="post-detail">
            <div class="header-self-name">
              ${post.whoPosted}
            </div>
            <div class="js-place-time">
              ${post.location}, ${post.age} years old
            </div>
          </div>
          <div class="bookmark-container">
            <img class="bookmark-icon" src="icons/circle-bookmark.svg">
          </div>
        </div>

        <div class="image-container">
          <img class="post-image" src="${post.image}">
        </div>

        <div class="reader-count-container">
          <img class="reader-count-icon" src="icons/sunglasses-alt.svg">
          <span class="reader-count">
              8,965 readers
          </span>
        </div>

        <div class="liked-by-container">
          <div class="liked-by-images">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
            <img class="image-icon" src="/profile-pictures/random-woman-1.jpg">
          </div>
        
          <div class="liked-by-texts">
            Bookmarked by
              <span class="self-name">
                dionela
              </span>
            and
              <span class="like-count">
                ${post.likeCount} others
              </span>
          </div>
        </div>

        <div class="post-caption-container">
          <span class="self-name">
            ${post.location}
          </span>
          <span class="caption">
            ${post.caption}
          </span>
        </div>

        <div class="show-comments-container">
          View all
            <span class="js-comment-list">
              ${post.commentCount} reviews
            </span>
        </div>

        <div class="comment-container">
          <input type="text" id="commentInput" class="comment-box" placeholder="Write a review">
          <button class="comment-button" onclick="addComment()">
            <img class="send-icon" src="/icons/paper-plane-top.svg">
          </button>
        </div>
      </div>
`;
});

document.querySelector('.news-feed-grid')
  .innerHTML = postHTML;


function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');

  if (commentInput.value.trim() !== "") {
    const newComment = document.createElement('li');
    newComment.className = 'comment-item';
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
  } else {
    alert("Please enter a comment before submitting.");
  }
}

/* For the heart button
document.querySelector('.js-heart-button-${postId}')
  .forEach((post) => {
    post.addEventListener('click', () => {
      let heartButtonElement = document.querySelector('.heart-button');

      if (!heartButtonElement.classList.contains('is-toggled')) {
        heartButtonElement.classList.add('is-toggled');
        heartButtonElement.innerHTML = `<img class="heart-icon" src="icons/heart-filled.svg">`;
      } else {
        heartButtonElement.classList.remove('is-toggled');
        heartButtonElement.innerHTML = `<img class="heart-icon" src="icons/heart.svg">`;
      }
    });
  })
*/

function openFileExplorer() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.style.display = "none"; // Optional: to keep it invisible
  fileInput.onchange = (event) => {
    // Handle the selected file(s) here
    console.log(event.target.files);
  };
  fileInput.click();
}

