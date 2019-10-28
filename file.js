document.addEventListener('DOMContentLoaded', () => {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://pastebin.com/raw/45M08KT7', true); 
	req.onreadystatechange = function () {
		if (req.readyState == 4)
  		if  (req.status == 200) {
   			obj = JSON.parse(req.responseText);
   			display(obj,"");
  		}
			else {
	   html.innerHTML+="<p>error "+req.status;
 			}
		};
req.send(null);
});
