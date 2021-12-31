var timeID = null;
var theXDistance = 0;
var imageMover = document.querySelector('img');
var moveMent = document.querySelector('html');
moveMent.addEventListener('keydown', moveCar);

function moveCar(event) {
  var control = event.key;
  if (control === 'ArrowUp') {
    imageMover.className = 'race-car north location x y';
  } else if (control === 'ArrowDown') {
    imageMover.className = 'race-car south location x y';
  } else if (control === 'ArrowLeft') {
    imageMover.className = 'race-car west location x y';
  } else if (control === 'ArrowRight') {
    imageMover.className = 'race-car east location x y';
  } else if (control === 'd') {
    justDriveForward();
  } else if (control === 'w') {
    // console.log(control);
  }
}
function justDriveForward(control) {
  timeID = setInterval(gottaDriveForward, 15);
}

function gottaDriveForward() {
  theXDistance += 30;
  imageMover.setAttribute('style', 'left: ' + theXDistance + 'px');
  clearInterval(timeID);
}
