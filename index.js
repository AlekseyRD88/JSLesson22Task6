document.querySelector('.single-use-btn').addEventListener('click', getClick, { once: true });
function getClick() {
  console.log('clicked');
}
