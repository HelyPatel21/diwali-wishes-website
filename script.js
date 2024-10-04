const form = document.querySelector('form');
const wishesDiv = document.getElementById('wishes');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const wish = document.getElementById('wish').value;

  const wishItem = document.createElement('p');
  wishItem.textContent = `${name}: ${wish}`;
  wishesDiv.appendChild(wishItem);

  form.reset();
});
