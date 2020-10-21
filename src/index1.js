// index.js
import {messages} from './messages1'

class HelloComponent 
{
    constructor(message)
    {
        this.message = message;
    }
    appendMessage() {
        var p = document.createElement('p');
        p.innerText = this.message;
        var main = document.getElementById('app');
        main.appendChild(p);
      }
}

var component1 = new HelloComponent(messages.hello);
component1.appendMessage();
