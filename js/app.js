// cat Model 
var catModel = {
	cats : [
		{
			name : "Bubble",
			clickCount : 0,
			imgSrc : "bubble.jpg"
		},
		{
			name : "Echo",
			clickCount : 0,
			imgSrc : "echo.jpg"
		},
		{
			name : "Berty",
			clickCount : 0,
			imgSrc : "berty.jpg"
		},
		{
			name : "Snow",
			clickCount : 0,
			imgSrc : "snow.jpg"
		},
		{
			name : "Tigar",
			clickCount : 0,
			imgSrc : "tigar.jpg"
		}						
	]
};

//function getInd: loop through catModel to find the index of the cat in catModel given the cat name
function getInd(catname) {
	for (var i = 0, len = catModel.cats.length; i < len; i++) {
		if (catname == catModel.cats[i].name) {
			return i;
		}
	}
}

//display a list of cat names 
for (catind in catModel.cats) {
	$("#cat-names").append('<p>'+catModel.cats[catind].name+'</p>');
}

//display initial cat picture and number of click (default: the data for the first cat)
var ind=0;
$("#cat-imgs").attr('src',catModel.cats[ind].imgSrc);
var countMessage = 'Number of click on '+ catModel.cats[ind].name + ": " + catModel.cats[ind].clickCount;
$("#cat-counts").append('<p>' + countMessage + '</p>');

//updata the cat display area to show the data (image and cumulative number of clicks) for the selected cat  
$("#cat-names p").click(function() {
	var catname=this.innerHTML;
	ind = getInd(catname);
	var imgsource = catModel.cats[ind].imgSrc;
	var imgContent = '<img id="cat-imgs" class="catpic"' + ' src="' + imgsource +'" alt="cat image">';
	var countMessage = 'Number of click on '+ catModel.cats[ind].name + ": " + catModel.cats[ind].clickCount;
	$("#cat-counts p").text(countMessage);
	$("img").replaceWith(imgContent);
});

//updata the number of clicks in the cat area when the cat's picture is clicked
$( document ).on( 'click', '.catpic', function () {
	catModel.cats[ind].clickCount++;
	var countMessage = 'Number of click on '+ catModel.cats[ind].name + ": " + catModel.cats[ind].clickCount;
	$("#cat-counts p").text(countMessage);
});