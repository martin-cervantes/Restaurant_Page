const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const div1 = document.createElement('div');

  const brand = document.createElement('img');
  brand.id = 'brand2';
  brand.setAttribute('src', '../src/img/name1.png');

  div1.appendChild(brand);

  const div2 = document.createElement('div');
  div2.classList.add('credits');

  const c1 = document.createElement('a');
  c1.setAttribute('href', '#');
  c1.classList.add('credits_link');
  c1.innerText = 'Privacy Policy';

  div2.appendChild(c1);

  const c2 = document.createElement('a');
  c2.setAttribute('href', '#');
  c2.classList.add('credits_link');
  c2.innerText = 'Terms & Conditions';

  div2.appendChild(c2);

  const c3 = document.createElement('p');
  c3.classList.add('credits_text');
  c3.innerHTML = "Copyleft <span class='copyleft'>&copy;</span> 2020 Martin Cervantes";

  div2.appendChild(c3);

  const div3 = document.createElement('div');
  div3.classList.add('contact');

  const co1 = document.createElement('p');
  co1.classList.add('text');
  co1.innerText = 'Contact with us:';

  div3.appendChild(co1);

  const co2 = document.createElement('a');
  co2.setAttribute('href', '#');
  co2.classList.add('contact_icons');
  co2.innerHTML = "<i class='fab fa-twitter'></i>";

  div3.appendChild(co2);

  const co3 = document.createElement('a');
  co3.setAttribute('href', '#');
  co3.classList.add('contact_icons');
  co3.innerHTML = "<i class='fab fa-instagram'></i>";

  div3.appendChild(co3);

  const co4 = document.createElement('a');
  co4.setAttribute('href', '#');
  co4.classList.add('contact_icons');
  co4.innerHTML = "<i class='fab fa-facebook-f'></i>";

  div3.appendChild(co4);

  footer.appendChild(div1);
  footer.appendChild(div2);
  footer.appendChild(div3);

  return footer;
};

export default footer;
