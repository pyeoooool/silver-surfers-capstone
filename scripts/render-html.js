import { diaries } from '../data/diaries.js';
import { fetchUser } from '../data/user-object.js';

const user = fetchUser();

export function generateDiariesHTML() {
  let diariesHTML = '';
  document.title = `Silver Surfers - Diary Feed`;
  diaries.forEach((diary) => {
    diariesHTML += `
      <div class="news-feed-grid">
        <div class="feed-post js-feed-post-${diary.id}">
            <div class="post-header">
              <img class="profile-picture-icon" src="${diary.author.photo}">
              <div class="post-detail">
                <div class="header-self-name">
                  ${diary.title}
                </div>
                <div class="js-place-time">
                  ${diary.author.location}, ${diary.author.age} years old
                </div>
              </div>
              <div class="bookmark-container">
                <img class="bookmark-icon" src="icons/circle-bookmark.svg">
              </div>
            </div>
    
            <div class="image-container">
              <img class="post-image" src="${diary.cover}">
            </div>
    
            <div class="reader-count-container">
              <img class="reader-count-icon" src="icons/sunglasses-alt.svg">
              <span class="reader-count">
                  ${diary.stats.readerCount} readers
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
                    ${diary.stats.bookmarkCount} others
                  </span>
              </div>
            </div>
    
            <div class="post-caption-container">
              <span class="self-name">
                ${diary.author.name}
              </span>
              <span class="caption">
                ${diary.description}
              </span>
            </div>
    
            <div class="show-comments-container">
              View all
                <span class="js-comment-list">
                  ${diary.stats.reviewCount} reviews
                </span>
            </div>
    
            <div class="comment-container">
              <input type="text" id="commentInput" class="comment-box" placeholder="Write a review">
              <button class="comment-button" onclick="addComment()">
                <img class="send-icon" src="/icons/paper-plane-top.svg">
              </button>
            </div>
          </div>
      </div>
        
  `;
  });

  return diariesHTML;
}

export function generateSettingsHTML() {
  document.title = `Settings - ${user.username}`;
  const formattedDate = user.birthdate.toISOString().split("T")[0];

  let settingsHTML = '';

  settingsHTML = `
    <div class="settings-page">
        <h1>Edit your account</h1>
        <div class="settings-container">
            <form>
              <div class="form-group">
                  <label for="full-name">First Name</label>
                  <input type="text" id="full-name" placeholder="${user.firstName}">
              </div>

              <div class="form-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="${user.lastName}">
              </div>

              <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" id="username" placeholder="${user.username}">
              </div>

              <div class="form-group">
                  <label for="email">Change your email</label>
                  <input type="email" id="email" name="email" placeholder="${user.email}" required>
              </div>

              <div class="form-group">
                  <label for="birthday">Birthdate</label>
                  <input type="date" id="birthday" value="${formattedDate}">
              </div>

              <div class="form-group">
                  <label for="age">Age</label>
                  <input type="number" id="age" value="${user.age}" readonly>
              </div>

              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" value="${user.password}">
              </div>

              <button class="save-button" type="submit">Save Changes</button>
            </form>
        </div>
    </div>
  `;

  return settingsHTML;
}

export function generateProfileHTML() {
  let profileHTML = '';
  document.title = `Profile - ${user.username}`;
  profileHTML = `
    <div class="profile-page">
      <div class="cover-photo-container">
        <img class="cover-photo" src="${user.cover}">
      </div>

      <div class="profile-feed">
        <div class="profile-content-container">
          <div class="profile-picture-container">
            <img class="profile-picture" src="${user.photo}">
          </div>
          <div class="profile-name">
            ${user.firstName} ${user.lastName}
          </div>
          <div class="hometown">
            ${user.country}, ${user.age} years old
          </div>

          <div class="profile-bio-container">
            <div class="profile-bio">
              ${user.description}
            </div> 
          </div>

          <div class="stats-container">
            <div class="stats-sub-container">
              <div class="stats-count">
              ${user.stats.diariesCount}
              </div>
              <div>
                Diaries
              </div>
            </div>
            
            <div class="stats-sub-container">
              <div class="stats-count">
                ${user.stats.reviewsCount}
              </div>
              <div>
                Reviews
              </div>
            </div>
            
          </div>

          <div class="wall-button-container">
            <button class="wall-button">
              Profile Wall
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return profileHTML;
}