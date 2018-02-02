require('./main.css');

function hw() {
  var div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = 'Hello webpack!';

  return div;
};

document.body.appendChild(hw());
