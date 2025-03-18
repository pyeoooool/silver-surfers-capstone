import { generateDiariesHTML } from './render-html.js';

document.querySelector('.news-feed')
  .innerHTML = generateDiariesHTML();

const homeIcon = document.querySelector('.js-home-icon');
/*
homeIcon.addEventListener('click', () => {
  const diaryFeed = generateDiariesHTML();
  document.querySelector('.news-feed').innerHTML = diaryFeed;
});
*/

homeIcon.addEventListener('click', () => {
  const diaryFeed = generateDiariesHTML();
  console.log(diaryFeed); // Check if valid HTML is being generated
  if (diaryFeed) {
    document.querySelector('.news-feed').innerHTML = diaryFeed;
    console.log(diaryFeed);
  } else {
    console.error("No HTML content generated.");
  }
});



document.querySelector('.header-settings-icon')
  .addEventListener('click', () => {
    const contentDiv = document.querySelector('.news-feed');
    document.title = `Settings - ${'Angelica Parilla'}`;
    contentDiv.innerHTML = `
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
  });



const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalContainer = document.querySelector('.create-diary-modal-container');


openModal.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
})

window.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

const addImageIcon = document.querySelector(".add-image-icon");
const imageUpload = document.getElementById("imageUpload");

addImageIcon.addEventListener("click", () => {
  imageUpload.click(); // Trigger the hidden file input
})


const addVideoIcon = document.querySelector(".add-video-icon");
const videoUpload = document.getElementById("videoUpload");
addVideoIcon.addEventListener("click", () => {
  videoUpload.click(); // Trigger the hidden file input
})

