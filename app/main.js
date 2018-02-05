require('./main.css');

import webpack_svg from '../web/img/webpack.svg';
import nodejs_svg from '../web/img/nodejs.svg';
import docker_svg from '../web/img/docker.svg';
import github_svg from '../web/img/github.svg';

function loadContent() {
  document.getElementById('title').innerText = 'Hello webpack!';

  document.getElementById('webpack_icon').src = webpack_svg;
  document.getElementById('nodejs_icon').src = nodejs_svg;
  document.getElementById('docker_icon').src = docker_svg;
  document.getElementById('github_icon').src = github_svg;
};

document.body.onload = loadContent();
