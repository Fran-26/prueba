document.addEventListener('DOMContentLoaded', () => {
	var reqURL = 'https://io.adafruit.com/api/v2/veintiseis/groups/sensores?x-aio-key=5515a3ad171c4034afe4ec86ed34999f'
	var req = new XMLHttpRequest();
	req.open('GET', reqURL, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4)
  		if  (req.status == 200) {
   			obj = JSON.parse(req.responseText);
   			html.innerHTML = obj.last_value;
  		}
			else {
	   html.innerHTML+="<p>error "+req.status;
 			}
		};
req.send(null);
});
