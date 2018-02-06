require('./main.css');

function loadContent() {
  document.getElementById('title').innerText = 'Hello webpack!';
  document.getElementById('text').innerText = 'Created with';
};

document.body.onload = loadContent();
