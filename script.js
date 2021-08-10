const listButton = document.querySelector("#list");
const tilesButton = document.querySelector("#tiles");
const content = document.querySelector('.employees__content');

const data = [
  {
    name: 'Иванов Иван Иванович',
    email: 'ivanov@ivan.ivan',
    phone: '+70000000000'
  },
  {
    name: 'Петров Петр Петрович',
    email: 'petrov@petr.petr',
    phone: '+70000000001'
  },
  {
    name: 'Иванов Иван Иванович',
    email: 'sidorov@sidor.sidor',
    phone: '+70000000002'
  },
  {
    name: 'Александров Александр Александрович',
    email: 'alex280702@mail.ru',
    phone: '+81233211232'
  }
]

const createListItem = (info) => {
  // Основной блок элемента
  const itemBlock = document.createElement('div');
  itemBlock.classList.add('block-list__item');

  // Обёртка для контента элемента
  const itemBlockWrapper = document.createElement('div');
  itemBlockWrapper.classList.add('block-list__item__wrapper');

  // Блок с name
  const itemBlockName = document.createElement('div');
  itemBlockName.classList.add('block-list__item__wrapper__name');
  itemBlockName.innerHTML = info.name;
  itemBlockWrapper.appendChild(itemBlockName);

  // Блок с email
  const itemBlockEmail = document.createElement('div');
  itemBlockEmail.classList.add('block-list__item__wrapper__email');

  // Ссылка для email
  const itemBlockEmailAnchor = document.createElement('a');
  itemBlockEmailAnchor.href = `mailto:${info.email}`;
  itemBlockEmailAnchor.innerHTML = info.email;
  itemBlockEmail.appendChild(itemBlockEmailAnchor);
  itemBlockWrapper.appendChild(itemBlockEmail);

  // Блок с phone
  const itemBlockTel = document.createElement('div');
  itemBlockTel.classList.add('block-list__item__wrapper__tel');

  // Ссылка для phone
  const itemBlockTelAnchor = document.createElement('a');
  itemBlockTelAnchor.href = `tel:${info.phone}`;
  itemBlockTelAnchor.innerHTML = info.phone;
  itemBlockTel.appendChild(itemBlockTelAnchor);
  itemBlockWrapper.appendChild(itemBlockTel);

  itemBlock.appendChild(itemBlockWrapper);

  return itemBlock;
}


listButton.onclick = () => content.classList.contains('tiles') ? content.classList.remove('tiles') : null;
tilesButton.onclick = () => !content.classList.contains('tiles') ? content.classList.add('tiles') : null;

const createListContent = (users) => users.forEach(user => content.appendChild(createListItem(user)));

createListContent(data);