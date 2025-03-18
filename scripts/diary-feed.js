import { generateDiariesHTML, generateSettingsHTML } from './render-html.js';

document.querySelector('.news-feed')
  .innerHTML = generateDiariesHTML();

const homeIcon = document.querySelector('.js-home-icon');
homeIcon.addEventListener('click', () => {
  const diaryFeed = generateDiariesHTML();
  document.querySelector('.news-feed').innerHTML = diaryFeed;
});

const settingsIcon = document.querySelector('.js-settings-icon');
settingsIcon.addEventListener('click', () => {
  const settingsFeed = generateSettingsHTML();
  document.querySelector('.news-feed').innerHTML = settingsFeed;
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

