$(function() {
/* Model */
var catModel = {
	currentCat: null,
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

/* Octopus */
var octopus = {
	getCrtCat: function() {
		return catModel.currentCat;
	},

	getCat: function() {
		return catModel.cats;
	},

	resetCrtCat: function(cat) {
		catModel.currentCat = cat;
	},

	updateClick: function() {
		catModel.currentCat.clickCount++;
		catView.renderCat();
	}, 

	init: function() {
		catModel.currentCat = catModel.cats[0];
		catlistView.init();
		catView.init();
	} 
}; // end octopus 

/* View  */
var catView = {
	init: function() {
		$('.catpic').click(function() {
			octopus.updateClick();
		});
		catView.renderCat();
	}, // end init

	renderCat: function() {
		var currentCat = octopus.getCrtCat();
		$("#cat-imgs").attr('src',currentCat.imgSrc);
		var countMessage = 'Number of click on '+ currentCat.name + ": " + currentCat.clickCount;
		$("#cat-counts").text(countMessage);
	} // end renderCat
}; 

var catlistView = {
	init: function() {
		this.catListElem = $('#cat-list');
		this.renderList();
	},

	renderList: function() {
		var cats = octopus.getCat();
		for (var i=0, len=cats.length; i<len;i++) {
			$("#cat-list").append('<p>'+cats[i].name+'</p>');
			$('#cat-list p').last().click((function(catCopy) {
				return function() {
					octopus.resetCrtCat(catCopy);
					catView.renderCat();
				};
			})(cats[i]));
		} // end for loop
	} // end renderList
};
octopus.init();
}); //end function 