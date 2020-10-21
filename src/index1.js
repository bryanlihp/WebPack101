// index.js
var messages = require('./messages1');

function HelloComponent() {
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
