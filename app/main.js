function hw() {
  var div = document.createElement('div');
  div.innerHTML = 'Hello webpack!';

  return div;
};

document.body.appendChild(hw());
