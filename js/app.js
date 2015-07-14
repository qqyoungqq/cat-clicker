$(function() {

/* ======== Model ========== */
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

/* ======== Octopus ========== */
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
		//console.log(catModel.currentCat.clickCount);
	}, 

	init: function() {
		catModel.currentCat = catModel.cats[0];
		catlistView.renderList();
		catView.init();
	} 
}; // end octopus 

/* ======== View ========== */
var catView = {
	init: function() {
		catView.renderCat();
		$('.catpic').click(function() {
			octopus.updateClick();
			catView.renderCat();
		});
	}, // end init

	renderCat: function() {
		var currentCat = octopus.getCrtCat();
		$("#cat-imgs").attr('src',currentCat.imgSrc);
		var countMessage = 'Number of click on '+ currentCat.name + ": " + currentCat.clickCount;
		$("#cat-counts").text(countMessage);
	} // end renderCat
};

var catlistView = {
	getInd: function(cats, catname) {
		for (var i = 0, len = cats.length; i < len; i++) {
			if (catname == cats[i].name) {
				return i;
			}
		}
	}, // end getInd

	renderList: function( ) {
		var cats = octopus.getCat();
		for (var i=0, len=cats.length; i<len;i++) {
			$("#cat-names").append('<p>'+cats[i].name+'</p>');
		} // end for loop
		$('#cat-names p').click(function() {
			var catname = this.innerHTML;
			var ind = catlistView.getInd(cats,catname);
			octopus.resetCrtCat(cats[ind]);
			catView.renderCat();
		}); // end click
	} // end renderList
};
octopus.init();
}); //end function 