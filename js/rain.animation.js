


function rain() {

    var spriteBuffer = 50;

  var sprite = document.getElementById("rainAnimate");
    var ypos = 25;
    var xpos = Math.random();
  var id = setInterval(updateSprite, 20);

    sprite.style.left = (($(window).width() - spriteBuffer)*xpos) + 'px';
    sprite.style.top = 0 + 'px';
              
  function updateSprite() {
      if (ypos >= $(window).height() - spriteBuffer) {
                   
          ypos = 0;
          xpos = Math.random();
          sprite.style.left = (($(window).width() - spriteBuffer) * xpos) + 'px';

                } else {
                     ypos++;
                     sprite.style.top = ypos + 'px';
            }
          }
}
   

var runOnce = false;
var waitForIt = function () {
  

    if (runOnce) {
        rain();
    }
    else {
        setTimeout(waitForIt, 1500); // check again in a second
        runOnce = true;
    }
}

window.onload = waitForIt;