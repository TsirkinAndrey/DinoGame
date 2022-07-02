const player = document.getElementById('player');
const wall = document.getElementById('wall');

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
   }, 1100)
}

let isAlive = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue('left'))

    if (wallLeft < 50 && wallLeft > 0 && playerTop >= 140) {
        alert('game over');
    }
}, 10)