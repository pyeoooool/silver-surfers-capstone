import { diaries } from './diaries.js';

export function generateDiariesHTML() {
  let diariesHTML = '';

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
  let settingsHTML = '';
  document.title = `Settings - ${'Angelica Parilla'}`;
  settingsHTML = `
      <h1>Edit your account</h1>
      <div class="settings-container">
          <form>
            <div class="form-group">
                <label for="full-name">First Name</label>
                <input type="text" id="full-name" placeholder="Angelica">
            </div>

            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Parilla">
            </div>

            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Change username">
            </div>

            <div class="form-group">
                <label for="email">Change your email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>

            <!-- Birthdate Input -->
            <div class="form-group">
                <label for="birthday">Birthdate</label>
                <input type="date" id="birthday" value="1964-01-19">
            </div>

            <!-- Age Input (Auto-Calculated) -->
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password">
            </div>

            <button class="save-button" type="submit">Save Changes</button>
          </form>
      </div>
    `;

  return settingsHTML;
}

export function generateProfileHTML() {
  let profileHTML = '';
  profileHTML = `
    <div class="profile-page">
      <div class="cover-photo-container">
        <img class="cover-photo" src="cover-photos/cover-photo-1.jpg">
      </div>

      <div class="profile-feed">
        <div class="profile-content-container">
          <div class="profile-picture-container">
            <img class="profile-picture" src="profile-pictures/dionela.jpg">
          </div>
          <div class="profile-name">dionela</div>
          <div class="hometown">
            New York, United States
          </div>

          <div class="profile-bio-container">
            <div class="profile-bio">
              ako si dionela ikaw na ba ang aking marilag ang krimen ay sa'yo ibibintang
            </div> 
          </div>

          <div class="stats-container">
            <div class="stats-sub-container">
              <div class="stats-count">
                43
              </div>
              <div>
                Posts
              </div>
            </div>
            
            <div class="stats-sub-container">
              <div class="stats-count">
                21
              </div>
              <div>
                Photos
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