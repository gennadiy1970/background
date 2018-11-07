const controls = document.querySelector('.controls');
const wrapper = document.querySelector('.wrapper');
const h1 = wrapper.querySelector('h1');

controls.addEventListener('click', attachmentUpdate);

function attachmentUpdate (e) {
  let name = e.target.dataset.name;
  wrapper.style.backgroundAttachment = name;
  h1.textContent = name.toUpperCase();
}