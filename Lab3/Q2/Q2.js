
setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";
    
    setGreeting(hour);
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}
    
   
	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}
function setGreeting(hour){
    let greet = document.getElementById("greeting");
    let txt = ""
    if(hour < 4) txt= "Go Sleep";
    else if(hour<12) txt = "Good Morning!";
    else if(hour <16) txt = "It's Noon!";
    else if(hour<20) txt = "Pack up work!";
    else txt = "Wind down, it's bed time!";
    greet.innerHTML=txt;
}

showTime();
