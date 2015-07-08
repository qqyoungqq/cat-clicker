var catModel = {
	cats : [
		{
			name : "Bubbles",
			clickCount : 0,
			imgSrc : "bubbles.jpg"
		},
		{
			name : "Echo",
			clickCount : 1,
			imgSrc : "echo.jpg"
		}
	]
};

for (catind in catModel.cats) {
	$("#cat-names").append("<h4>"+catModel.cats[catind].name+"</h4>");
}

function getInd(catname) {
	for (var i = 0, len = catModel.cats.length; i < len; i++) {
		if (catname == catModel.cats[i].name) {
			return i;
		}
	}
}


$("h4").click(function() {
	var catname=this.innerHTML;
	var ind = getInd(catname);
	console.log(ind);
	var imgsource = catModel.cats[ind].imgSrc;
	var content = '<img id="cat-imgs"' + 'src="' + imgsource +'" alt="cat image">';
	$("img").replaceWith(content);
});