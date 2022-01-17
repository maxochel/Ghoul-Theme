const ButtonElem = document.querySelector(`#Btn1000-7`);
const PlayerElem = document.getElementById('player');
const MarqueeSongs = document.querySelector('#marqueesongs');

let SongID = 1;
let PicID = 1;
let count = 1000;
let AnimationIsPlaying = false;

const SongArr = ["Benedixhion - Toxin", "fem.love — Позвони", "fem.love — 1000-7",
  "fem.love — Меня не существует", "fem.love — Разбитые сердца", "fem.love — Фотографирую закат",
  "fem.love — Я вижу боль в твоих глазах", "fem.love — Я люблю тебя"
]

function playerControl() {
  if (PlayerElem.paused) {
    PlayerElem.play();
  } else {
    PlayerElem.pause();
  }
}

function Timer() {
  if (AnimationIsPlaying) return
  AnimationIsPlaying = true;
  document.getElementById('songs').setAttribute("src", "songs/1.mp3");
  PlayerElem.load();
  PlayerElem.play();
  const timerId = setInterval(AlreadyDead, 145);
  setTimeout(() => {
    AnimationIsPlaying = false;
    clearInterval(timerId);
    PlayerElem.pause();
    ButtonElem.style.transform = "scale(1,1)";
    document.querySelector(`#tab`).style.opacity = 1;
    ButtonElem.style.opacity = 1;
    document.querySelector(`#volume`).style.opacity = 1;
    count = 1000;
    ButtonElem.innerText = "1000-7";
    document.getElementById('BGID').setAttribute("src", "pictures/main.jpg");
  }, 32500);
}

function AlreadyDead() {
  if (count >= 0) {
    count -= 7;
    let ScaleFactor = (1000 - count) / 1000 * 3 + 1;
    ButtonElem.style.transform = "scale(" + ScaleFactor + "," + ScaleFactor + ")";
  } else {
    ButtonElem.style.opacity = 0.3;
    document.querySelector(`#tab`).style.opacity = 0.3;
    document.querySelector(`#volume`).style.opacity = 0.3;
    count = -1;
    TakeAPic();
  }
  ButtonElem.innerText = count;
}

function TakeASong() {
  if (SongID < 8) {
    SongID += 1;
  } else {
    SongID = 1;
  }
  document.getElementById('songs').setAttribute("src", "songs/" + SongID + ".mp3");
  MarqueeSongs.innerText = SongArr[SongID - 1] + ".mp3";
  PlayerElem.load();
  PlayerElem.play();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function TakeAPic() {

  PicID = getRandomInt(14) + 1;
  if (PicID > 15) {
    PicID = 1;
  }
  document.getElementById('BGID').setAttribute("src", "pictures/" + PicID + ".jpg");
}
