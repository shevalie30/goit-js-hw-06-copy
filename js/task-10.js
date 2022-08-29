function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount = 1) {
  const boxes = []
  for (let i = 0; i < amount; i++) {
    let size = 30
    if (i > 0) size = (i * 10) + size
    const box = document.createElement('div')
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor()
    boxes.push(box)
  };
  boxesContainer.append(...boxes)
};

function destroyBoxes() {
  boxesContainer.innerHTML = ''
};

controls.addEventListener('click', e => {
  let amount = controls.querySelector('input').value
  if ('create' in e.target.dataset) createBoxes(amount)
  if ('destroy' in e.target.dataset) destroyBoxes()
});