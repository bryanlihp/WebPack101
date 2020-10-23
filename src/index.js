// index.js
import './style.css';
var messages = require('./messages');

function HelloComponent(message) {
    this.message = message;
}

HelloComponent.prototype.appendMessage = function() {
  var p = document.createElement('p');
  p.innerText = this.message;
  var main = document.getElementById('app');
  main.appendChild(p);
}

var component1 = new HelloComponent(messages.hello);
component1.appendMessage();