import { post } from "./posts.js";

//generates the code to div post
let postHTML = '';

post.forEach((post) => {
  postHTML += `
<!--Start of Main Post Division-->
      <div class="feed-post js-feed-post">
        <div class="post-header">
          <img class="profile-picture-icon" src="${post.pfp}">
          <div class="post-detail">
            <div class="header-self-name">
              ${post.whoPosted}
            </div>
            <div class="js-place-time">
             ${post.age} years old, ${post.location}
          
            </div>
          </div>  
        </div>

        <div class="image-container">
          <img class="post-image" src="${post.video}">
        </div>

        <div class="react-buttons-container">
          <button class="heart-button" onclick="toggleHeartButton();">
            <img class="heart-icon" src="icons/heart.svg">
          </button>
        </div>

        <div class="liked-by-container">
          <div class="liked-by-images">
            <img class="image-icon" src="/profile-pictures/dionela.jpg">
            <img class="image-icon" src="/profile-pictures/dionela.jpg">
            <img class="image-icon" src="/profile-pictures/dionela.jpg">
          </div>
        
          <div class="liked-by-texts">
            Liked by
          </div>
          <div class="self-name">
            dionela
          </div>
          <div class="liked-by-texts">
            and
          </div>
          <div class="js-react-count">
            ${post.likes} others
          </div>
        </div>

        <div class="post-caption-container">
          <div class="self-name">
            dionela
          </div>
          <div>
            ${post.caption}
          </div>
        </div>

        <div class="show-comments-container">
          <div>
            View all
          </div>
          <div class="js-comment-list">
            154 comments
          </div>
        </div>

        <!--Comment List Container-->
        <div class="comment-list-container">
          <ul id="commentList" class="comment-list"></ul>
        </div>

        <!--Comment Box Container-->
        <div class="comment-box-container">
          <input type="text" id="commentInput" class="comment-box" placeholder="Write a comment">
        </div>

        <!--Comment Button Container-->
        <div class="comment-button-container">
          <button class="comment-button" onclick="addComment()">
            <img class="send-icon" src="/icons/paper-plane-top.svg" alt="">
          </button>
        </div>
      </div>
      
      <!--End of Main Post Division--> 
`;


});

document.querySelector('.posts')
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


function toggleHeartButton() {
  let heartButtonElement = document.querySelector('.heart-button');

  if (!heartButtonElement.classList.contains('is-toggled')) {
    heartButtonElement.classList.add('is-toggled');
    heartButtonElement.innerHTML = `<img class="heart-icon" src="icons/heart-filled.svg">`;
  } else {
    heartButtonElement.classList.remove('is-toggled');
    heartButtonElement.innerHTML = `<img class="heart-icon" src="icons/heart.svg">`;
  }
}

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

