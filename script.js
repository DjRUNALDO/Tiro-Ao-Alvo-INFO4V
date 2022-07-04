m = 0;
s = 0;
c = 0;

point = 0;
shots = 0;

playing = false;

let timeID;

//histórico

function addEntry(){
	let list      = document.querySelector("#list");
	list.innerHTML = "<li>" + prompt('Digite seu nome aqui:') + " | " + m + ":" + s + ":" + c + " (" + point + "/" + shots + ")</li>" + list.innerHTML;
}

//posição

function changePosition(){
	let target  = document.querySelector(".target");
	target.style.top  = (Math.random() * 416) + "px";
	target.style.left = (Math.random() * 576) + "px";
}

function hitShot(){
	if(playing == false) return;
	
	point++; shots++;
	changePosition();
}

function missShot(){
	if(playing == false) return;
	shots++;
}

//cronometro

function startTime(){
	playing = true;
	if(timeID != null) return;
	setTime();
	changePosition();
}

function setTime(){
	checkTime();
	document.querySelector("#crono").value = m + ":" + s + ":" + c + " (" + point + "/" + shots + ")";
	timeID = setTimeout(setTime, 10);
}

function checkTime(){
	c++;
	s = parseInt(s);
	m = parseInt(m);
	
	if(c == 100){
		c = 0;
		s++;
	}
	
	if(s == 60){
		s = 0;
		m++;
	}
}

function resetTime(){
	if(playing == false) return;
	
	clearTimeout(timeID);
	addEntry();
	
	m = s = c = 0;
	shots = point = 0;
	timeID = null;
	playing = false;
	
	document.querySelector("#crono").value = "PAUSADO";
}