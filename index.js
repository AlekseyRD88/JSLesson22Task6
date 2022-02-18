let buttonElem = document.querySelector('.single-use-btn');
function getClick() {
  console.log('clicked');
}
buttonElem.addEventListener('click', getClick, { once: true });
