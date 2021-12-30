var imageMover = document.querySelector('img');
var moveMent = document.querySelector('html');
moveMent.addEventListener('keydown', moveCar);

function moveCar(event) {
  var control = event.key;
  if (control === 'ArrowUp') {
    imageMover.className = 'race-car north';
  } else if (control === 'ArrowDown') {
    imageMover.className = 'race-car south';
  } else if (control === 'ArrowLeft') {
    imageMover.className = 'race-car west';
  } else if (control === 'ArrowRight') {
    imageMover.className = 'race-car east';
  }
}
