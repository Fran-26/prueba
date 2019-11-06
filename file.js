document.addEventListener('DOMContentLoaded', () => {
	setInterval (update, 3000);
});

function update (){
	var reqURL = '	https://io.adafruit.com/api/v2/veintiseis/groups/default?x-aio-key=5515a3ad171c4034afe4ec86ed34999f'
	var req = new XMLHttpRequest();
	req.open('GET', reqURL, true);
	req.onreadystatechange = function () {
	if (req.readyState == 4)
		if  (req.status == 200) {
			obj = JSON.parse(req.responseText);
			obj.feeds.forEach(myFunction)
		}
		else {
	  	html.innerHTML+="<p>error "+req.status;
 		}
	};
	req.send(null);
}

function myFunction (item) {
	if (item.name == "sensor_1")
		sensor_1.innerHTML = "Puerta Principal: " + item.last_value;
	if (item.name == "sensor_2")
		sensor_2.innerHTML = "Ventana Sala: " + item.last_value;
	if (item.name == "sensor_3")
		sensor_3.innerHTML = "Ventana Atras: " + item.last_value;
	if (item.name == "temperature")
		sensor_4.innerHTML = "Temperatura de la Sala: " + item.last_value;				
}
