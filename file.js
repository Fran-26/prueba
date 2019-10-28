document.addEventListener('DOMContentLoaded', () => {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://io.adafruit.com/api/v2/veintiseis/feeds/command', true); 
	req.onreadystatechange = function () {
		if (req.readyState == 4)
  		if  (req.status == 200) {
   			obj = JSON.parse(req.responseText);
   			html.innerHTML = req.last_value;
  		}
			else {
	   html.innerHTML+="<p>error "+req.status;
 			}
		};
req.send(null);
});
