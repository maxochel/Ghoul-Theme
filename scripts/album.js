
function AlbumTimer() {

  const timerId = setInterval(AlbumBack, 145);
  setTimeout(() => {
    clearInterval(timerId);
  }, 1500);
}

let colorisation = 0;
let x = 123456;

function AlbumBack() {
  colorisation += 10;
  document.body.style.background = "#" + colorisation;
}
