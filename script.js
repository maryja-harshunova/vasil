const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const animationZone = document.querySelector('.animation-zone');

console.log(sounds);
console.log(pads);

const colors=[
  "rgb(61, 194, 199)",
  "rgb(43, 41, 148)",
  "rgb(136, 25, 80)",
  "rgb(41, 148, 27)",
  "rgb(255, 255, 0)"
]

for (let i = 0; i < pads.length; i += 1) {
  pads[i].addEventListener('click', playSound(i));
}

function playSound(item) {
  return function () {
    if (sounds[item].loop) {
      sounds[item].pause()
      sounds[item].currentTime = 0;
      sounds[item].loop = false;
    } else {
      sounds[item].currentTime = 0;
      sounds[item].play();
      sounds[item].loop = true;
      createBubble(item);
    }
  }
}

function createBubble(item){
  let bubble = document.createElement('div');
  animationZone.appendChild(bubble);
  bubble.style.backgroundColor(colors[item]);
  bubble.style.animation="jump 5s linear"
  bubble.addEventListener('animtionend,function(){animationZone.removeChild(bubble)}')
}