const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if(player.style.backgroundImage == 'url("img/6.png")'){
      player.style.backgroundImage = 'url("img/5.png")';
    } else {
      player.style.backgroundImage = 'url("img/6.png")';
    }  
    player.style.top = (player.offsetTop - moveSize) + "px";

  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if(player.style.backgroundImage == 'url("img/8.png")'){
      player.style.backgroundImage = 'url("img/7.png")';
    } else {
      player.style.backgroundImage = 'url("img/8.png")';
    }  
    player.style.left = (player.offsetLeft + moveSize) + "px";

  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if(player.style.backgroundImage == 'url("img/2.png")'){
      player.style.backgroundImage = 'url("img/1.png")';
    } else {
      player.style.backgroundImage = 'url("img/2.png")';
    }  
    player.style.top = (player.offsetTop + moveSize) + "px";

  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if(player.style.backgroundImage == 'url("img/4.png")'){
      player.style.backgroundImage = 'url("img/3.png")';
    } else {
      player.style.backgroundImage = 'url("img/4.png")';
    }  
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});