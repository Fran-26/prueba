document.addEventListener('DOMContentLoaded', () => {
	setInterval (update, 3000);
});

function update (){
	var reqURL = 'https://io.adafruit.com/api/v2/veintiseis/groups/sensores?x-aio-key=5515a3ad171c4034afe4ec86ed34999f'
	var req = new XMLHttpRequest();
	req.open('GET', reqURL, true);
	req.onreadystatechange = function () {
	if (req.readyState == 4)
		if  (req.status == 200) {
   		obj = JSON.parse(req.responseText);
			sensor_1.innerHTML += obj.feeds[0].last_value;
			sensor_2.innerHTML += obj.feeds[1].last_value;
			sensor_3.innerHTML += obj.feeds[2].last_value;
		}
		else {
	  	html.innerHTML+="<p>error "+req.status;
 		}
	};
	req.send(null);
}
