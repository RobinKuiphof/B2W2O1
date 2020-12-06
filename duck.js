var direction1 = 0;
var direction2 = 0;
var directions = ["N" , "NE", "E", "SE", "S" , "SW", "W", "NW"];

function fly(direction1, direction2){
var duckStyle = document.getElementById("duck1").style;

duckStyle.position = "relative";
duckStyle.top = direction1 + "px";
duckStyle.left = direction2 +"px";
}

var Timer = setInterval(move, 500)


function move(){
	var random = Math.random() * 7;
	var random = random.toFixed(0);
	var direction = directions[random];

	if(direction == "N"){

	var Number1 = direction1 + -75;
	var Number2 = direction2 + 0;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;
	}

	if(direction ==  "NE"){

	var Number1 = direction1 + -75;
	var Number2 = direction2 + 75;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;
	}
	if(direction == "E"){

	var Number1 = direction1 + 0;
	var Number2 = direction2 + 75;
	fly(Number1, Number2);

	}
	if(direction == "SE"){

	var Number1 = direction1 + 75;
	var Number2 = direction2 + 75;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;

	}
	if(direction == "S"){

	var Number1 = direction1 + 75;
	var Number2 = direction2 + 0;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;


	}
	if(direction == "SW"){

	var Number1 = direction1 + 75;
	var Number2 = direction2 + -75;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;

	}
	if(direction == "W"){

	var Number1 = direction1 + 0;
	var Number2 = direction2 + -75;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;

	}
	if(direction == "NW"){

	var Number1 = direction1 + -75;
	var Number2 = direction2 + -75;
	fly(Number1, Number2);
	direction1 = Number1;
	direction2 = Number2;
	}
	if(Number1 > 300){
		var Number1 = Number1 + -150;
		var Number2 = Number2 + 0;
		fly(Number1, Number2);
		direction1 = Number1;
		direction2 = Number2;
	}
	if(Number1 > 300){
		var Number1 = Number1 + 150;
		var Number2 = Number2 + 0;
		fly(Number1, Number2);
		direction1 = Number1;
		direction2 = Number2;
	}
	if(Number2 > 250){
		var Number1 = Number1 + 0;
		var Number2 = Number2 + -150;
		fly(Number1, Number2);
		direction1 = Number1;
		direction2 = Number2;
	}
	if(Number2 < 250){
		var Number1 = Number1 + 0;
		var Number2 = Number2 + 150;
		fly(Number1, Number2);
		direction1 = Number1;
		direction2 = Number2;
	}
}

var mis = 0;
var totaal = totaal + 0;
var score = document.getElementById("score");
var duckhit = document.getElementById("duck1");
var shots = document.getElementById("shots");

duckhit.addEventListener("click", function(){
	score.innerHTML++
	mis.innerHTML--
	if(shots.innerHTML >= 20){
		alert("Game over");
	}
});

var mis = document.getElementById("mis");
var back = document.getElementById("back");

back.addEventListener("click" , function(){
	mis.innerHTML++
	shots.innerHTML++
	if(shots.innerHTML >= 20){
		alert("Game over")
		location.reload();
	}
});


