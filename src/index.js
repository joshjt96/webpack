// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

import './style.css';
import Icon from './icon.png';

import myName from './myName';

function component() {
  const element = document.createElement('div');

  
  element.textContent = myName('Josh');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());