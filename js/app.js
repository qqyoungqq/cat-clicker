var clickNum=0;
var catelem = document.createElement("div");
var content = document.createTextNode('Number of clicks is ' + clickNum);
catelem.appendChild(content);
document.body.appendChild(catelem);

var elem = document.getElementById('cat-img');
elem.addEventListener('click', function() {
	clickNum++;
	catelem.innerHTML = "Number of click is " + clickNum;
	},false);