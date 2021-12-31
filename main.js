var timeID = null;
var theDistance = 1;
var imageMover = document.querySelector('img');
var moveMent = document.querySelector('html');
moveMent.addEventListener('keydown', moveCar);

var moveCarX = document.querySelector('style.x');
// var moveCarY = document.querySelector('style.y');

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
  theDistance += 20;
  moveCarX.textContent = '.x {left: ' + theDistance + 'px;}';
  clearInterval(timeID);
  return theDistance;
}
