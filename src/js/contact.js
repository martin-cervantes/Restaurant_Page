const contact = () => {
  const contact = document.createElement('div');
  contact.classList.add('none');
  contact.id = 'content2';

  const title = document.createElement('h2');
  title.classList.add('label');
  title.innerText = 'Leave your feedback to help us improve the service we provide you. We treat all complaints in confidence.';

  contact.appendChild(title);

  const form = document.createElement('form');

  const l1 = document.createElement('label');
  l1.classList.add('label');
  l1.setAttribute('for', 'name');
  l1.innerText = 'Name';

  form.appendChild(l1);

  const i1 = document.createElement('input');
  i1.setAttribute('id', 'name');
  i1.setAttribute('name', 'name');
  i1.setAttribute('type', 'text');

  form.appendChild(i1);

  const l2 = document.createElement('label');
  l2.classList.add('label');
  l2.setAttribute('for', 'email');
  l2.innerText = 'Email';

  form.appendChild(l2);

  const i2 = document.createElement('input');
  i2.setAttribute('id', 'email');
  i2.setAttribute('name', 'email');
  i2.setAttribute('type', 'email');

  form.appendChild(i2);

  const l3 = document.createElement('label');
  l3.classList.add('label');
  l3.setAttribute('for', 'feedback');
  l3.innerText = 'Feedback';

  form.appendChild(l3);

  const i3 = document.createElement('textarea');
  i3.setAttribute('name', 'feedback');
  i3.setAttribute('rows', '8');
  i3.setAttribute('cols', '80');

  form.appendChild(i3);

  const i4 = document.createElement('input');
  i4.setAttribute('type', 'submit');
  i4.setAttribute('value', 'Send');
  i4.id = 'button';

  form.appendChild(i4);

  contact.appendChild(form);

  return contact;
};

export default contact;
