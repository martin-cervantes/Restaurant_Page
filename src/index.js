import './css/reset.css';
import './css/style.css';
import './css/header.css';
import './css/content.css';
import './css/footer.css';

import header from './js/header';
import menu from './js/menu';
import contact from './js/contact';
import footer from './js/footer';

const content = document.getElementById('content');

document.body.insertBefore(header(), content);

menu();

document.body.appendChild(contact());

document.body.appendChild(footer());

const content2 = document.getElementById('content2');
const linkMenu = document.getElementById('menu');
const linkContact = document.getElementById('contact');

linkMenu.addEventListener('click', () => {
  content.classList.remove('none');
  content.classList.add('grid');
  content2.classList.add('none');
});

linkContact.addEventListener('click', () => {
  content.classList.remove('grid');
  content.classList.add('none');
  content2.classList.remove('none');
});
