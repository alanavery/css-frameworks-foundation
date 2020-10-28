$(document).foundation()

document.addEventListener('DOMContentLoaded', () => {

let divIntro = document.querySelector('.intro');

let createNewElement = (tagName, text) => {
  let newElement = document.createElement(tagName);
  newElement.textContent = text;
  return newElement;
};

let divHeadings = createNewElement('div', '');
divHeadings.classList.add('cell', 'small-10', 'large-4');

let h1 = createNewElement('h1', 'Chicago');

let h2 = createNewElement('h2', 'Sky-high style meets midwestern charisma');

let divP = createNewElement('div', '');
divP.classList.add('cell', 'small-10', 'large-6');

let p = createNewElement('p', 'With envelope-pushing chefs, devoted sports fans, a rib-splitting comedy scene, and some of the best museums on the world, you might find that Chicagoland is your kind of town.');

let a = createNewElement('a', 'Check Availability City Wide');
a.classList.add('button');
a.setAttribute('href', '#');

divHeadings.appendChild(h1);
divHeadings.appendChild(h2);

divP.appendChild(p);
divP.appendChild(a);

divIntro.appendChild(divHeadings);
divIntro.appendChild(divP);

})