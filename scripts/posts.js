//the values on objects and the objects are for demontsration purposes only
//actual data will be provided by the backend server and database
export const post = [{
  id: 1,
  whoPosted: 'angelica',
  age: 65,
  location: 'London',
  pfp: '/profile-pictures/dionela.jpg', //file path
  postUserName: 'dionela_1',
  video: '/profile-pictures/dionela.jpg', //file path
  likes: 2,
  comments: [{}],
  caption: `magandang umaga sa inyo mga kapwa kong senior!`,
  timePosted: '12:43 PM',
  datePosted: 'March 13, 2025'
}, {
  id: 3,
  whoPosted: 'badet',
  age: 65,
  location: 'Canada',
  pfp: '/profile-pictures/dionela.jpg', //file path
  postUserName: 'dionela_1',
  video: '/profile-pictures/dionela.jpg', //file path
  likes: 59,
  comments: [{}],
  caption: `aking oksihina`,
  timePosted: '',
  datePosted: ''
}, {
  id: 4,
  whoPosted: 'nicole',
  age: 65,
  location: 'Japan',
  pfp: '/profile-pictures/dionela.jpg', //file path
  postUserName: 'dionela_1',
  video: '/profile-pictures/dionela.jpg', //file path
  likes: 73,
  comments: [{}],
  caption: `shawty u don' need no makeup`,
  timePosted: '12:42 PM',
  datePosted: ''
}];

/*
function previewFile() {
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
      preview.innerHTML = '';

      if (file.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = e.target.result;
          preview.appendChild(img);
      } else if (file.type.startsWith('video/')) {
          const video = document.createElement('video');
          video.src = e.target.result;
          video.controls = true;
          preview.appendChild(video);
      }
  };

  reader.readAsDataURL(file);
}
*/