const player = document.getElementById('player');
const wall = document.getElementById('wall');
const spanscore = document.getElementById('score');
let score = 0;

document.addEventListener('keydown', function(event) {
    jump();
})

function jump() {
   if (player.classList != 'jump')
   {
       player.classList.add('jump');
   }
   setTimeout(function (){
       player.classList.remove('jump')
   }, 1000)
}

let isAlive = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue('left'))

    score++;
    spanscore.innerText = "your score = " + score;

    if (wallLeft < 50 && wallLeft > 0 && playerTop >= 140) {
        alert('game over your score: ' + score);
        score = 0;
        location.reload();
    }
    if (score == 1500) {
        wall.style.animationDuration = "1.2s";

    }

}, 10)