const header = () => {
  const nav = document.createElement('nav');

  const div1 = document.createElement('div');

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.setAttribute('src', '../src/img/logo.png');

  div1.appendChild(logo);

  const div2 = document.createElement('div');
  div2.id = 'brand_name';

  const div3 = document.createElement('div');

  const name = document.createElement('img');
  name.id = 'brand1';
  name.setAttribute('src', '../src/img/name2.png');

  div3.appendChild(name);

  const div4 = document.createElement('div');
  div4.classList.add('links');

  const link1 = document.createElement('a')
  link1.setAttribute('href', '#');
  link1.classList.add('nav_link');
  link1.innerText = 'Menu';
  link1.id = 'menu';
  div4.appendChild(link1);

  const link2 = document.createElement('a')
  link2.setAttribute('href', '#');
  link2.classList.add('nav_link');
  link2.innerText = 'Contact us';
  link2.id = 'contact';
  div4.appendChild(link2);


  div2.appendChild(div3);
  div2.appendChild(div4);

  nav.appendChild(div1);
  nav.appendChild(div2);

  return nav;
}

export default header;
