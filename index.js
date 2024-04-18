const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');
ClickToStart.addEventListener('click', Start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
let keys = {
ArrowUp: false,
ArrowDown: false,
ArrowLeft: false,
ArrowRight: false,
}
let player = {
    speed: 5,
    score: 0,
    highScore: 0
};
function keydown(e) {
    keys[e.key] = true
}
function keyup(e) {
    keys[e.key] = false;
}
function Start() {
    gameArea.innerHTML = "";
    startScreen.classList.add('hide');
    player.isStart = true;
    player.score = 0;
    window.requestAnimationFrame(Play);
}
for (i = 0; i < 5; i++) {
    let roadLines = document.createElement('div');
    roadLines.setAttribute('class', 'roadLines');
    roadLines.y = (i * 140);
    roadLines.style.top = roadLines.y + "px";
    gameArea.appendChild(roadLines);
}
for (i = 0; i < 3; i++) {
    let Opponents = document.createElement('div');
    Opponents.setAttribute('class', 'Opponents');
    Opponents.y = ((i) * -300);
    Opponents.style.top = Opponents.y + "px";
    gameArea.appendChild(Opponents);
    Opponents.style.left = Math.floor(Math.random() * 350) + "px";
    Opponents.style.backgroundColor = randomColor();
}

