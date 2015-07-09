var catModel = {
	cats : [
		{
			name : "Bubbles",
			clickCount : 0,
			imgSrc : "bubbles.jpg"
		},
		{
			name : "Echo",
			clickCount : 0,
			imgSrc : "echo.jpg"
		}
	]
};


for (catind in catModel.cats) {
	$("#cat-names").append("<h4>"+catModel.cats[catind].name+"</h4>");
}
$("#cat-counts").append("<h5></h5>");

function getInd(catname) {
	for (var i = 0, len = catModel.cats.length; i < len; i++) {
		if (catname == catModel.cats[i].name) {
			return i;
		}
	}
}

var ind;
var patCount;

$("h4").click(function() {
	var catname=this.innerHTML;
	ind = getInd(catname);
	var imgsource = catModel.cats[ind].imgSrc;
	patCount = catModel.cats[ind].clickCount;
	var imgContent = '<img id="cat-imgs" class="catpic"' + ' src="' + imgsource +'" alt="cat image">';
	var countContent = '<h5>'+catModel.cats[ind].clickCount+'</h5>';
	$("h5").replaceWith(countContent);
	$("img").replaceWith(imgContent);
});


$( document ).on( 'click', '.catpic', function () {
	catModel.cats[ind].clickCount++;
	console.log(catModel.cats[ind].clickCount);
	var countContent = '<h5>'+catModel.cats[ind].clickCount+'</h5>';
	$("h5").replaceWith(countContent);
});