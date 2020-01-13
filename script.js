/*Sunday, 12, January, 2020
Teresa Costa
I am a basic clock! :)
*/

function setDate(){
	const now = new Date();
	const padding = `0`;
	
	//Full Date
	
	//0 = January, 1=February, ...
	let month = now.getMonth() + 1; 
	if (month < 10)
		month = padding + month;
	
	// getDate() = day of the month
	let day = now.getDate(); 
	if (day < 10)
		day = padding + day;
	
	document.getElementById("fullDate").innerHTML = `${now.getFullYear()}`  + `-` + `${month}`  + `-` + `${day}`;
	
	//Full Time
	
	let hours = now.getHours(); 
	if (hours < 10)
		hours = padding + hours;
	
	let minutes = now.getMinutes(); 
	if (minutes < 10)
		minutes = padding + minutes;
	
	let seconds = now.getSeconds();
	if (seconds < 10)
		seconds = padding + seconds;
		  
    document.getElementById("time").innerHTML = `${hours}` + `:` + `${minutes}` + `:` + `${seconds}`;
	
	//Day of the Week
	
	const wordDayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	 
    document.getElementById("dayOfWeek").innerHTML = `${wordDayOfWeek[now.getDay()]}`;
}

setInterval(setDate, 1000);
setDate();