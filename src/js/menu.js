const menu = () => {
  const content = document.getElementById('content');
  content.classList.add('grid');

  const dishes = [{src: '../src/img/chilaquiles.jpg', title:'Chilaquiles'},
  { src:'../src/img/enchiladas.jpg', title:'Enchiladas'},
  { src:'../src/img/tortas_ahogadas.jpg', title:'Tortas ahogadas'},
  { src:'../src/img/mole.jpg', title:'Mole'},
  { src:'../src/img/flautas.jpg', title:'Flautas'},
  { src:'../src/img/sopes.jpg', title:'Sopes'},
  { src:'../src/img/chiles_en_nogada.jpg', title:'Chiles en nogada'},
  { src:'../src/img/tostadas.jpg', title:'Tostadas'},
  { src:'../src/img/chiles_rellenos.jpg', title:'Chiles rellenos'},
  { src:'../src/img/tamales.jpg', title:'Tamales'},
  { src:'../src/img/barbacoa.jpg', title:'Barbacoa'},
  { src:'../src/img/pastor.jpg', title:'Pastor'},
  { src:'../src/img/menudo.jpg', title:'Menudo'},
  { src:'../src/img/pozole.jpg', title:'Pozole'}];


  for(let i = 0; i < dishes.length; i += 1)
  {
    let dish = document.createElement('div');
    dish.classList.add('plates');

    let img = document.createElement('img');
    img.setAttribute('src', dishes[i].src);
    img.classList.add('plate');

    dish.appendChild(img);

    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = dishes[i].title;

    card.appendChild(title);

    let price = document.createElement('p');
    price.classList.add('price');
    price.innerText = '$$';

    card.appendChild(price);

    dish.appendChild(card);

    content.appendChild(dish);
  }

  return menu;
}

export default menu;
