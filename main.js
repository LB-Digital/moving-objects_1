const SPEED = 2;
const FPS = 60;

var key = "ArrowUp";
$(document).keyup(function(e) {
	key = e.key;
});

var pos = {x:0,y:0};
setInterval(function () {

	switch (key) {
		case "ArrowUp":
			pos.y--;
			break;
		case "ArrowDown":
			pos.y++;
			break
		case "ArrowLeft":
			pos.x--;
			break
		case "ArrowRight":
			pos.x++;
			break
	}

	$('#box').css({
		top: pos.y*SPEED + 'px',
		left: pos.x*SPEED + 'px'
	});

}, 1000/FPS); // 1000 milliseconds in a second / frames per second = delay
