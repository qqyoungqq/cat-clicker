$(function() {
/* Model */
var catModel = {
	currentCat: {cat: null, ind: null},
	cats : [
		{
			name : "Bubble",
			clickCount : 0,
			imgSrc : "bubble.jpg",
			imgURL : "https://lh3.googleusercontent.com/AS2uZx8tVOvFXlPqvtApZZy8MtLFJHKklzQ4v4Dsppk=w640-h426-no"
		},
		{
			name : "Echo",
			clickCount : 0,
			imgSrc : "echo.jpg",
			imgURL : "https://lh3.googleusercontent.com/7XMEBEfXw0oIRrDC082ZLX9rvS79df-RDlUkWGOQrC4=w640-h496-no"
		},
		{
			name : "Berty",
			clickCount : 0,
			imgSrc : "berty.jpg",
			imgURL : "https://lh3.googleusercontent.com/c4dVlRhqHVP93RhnnKRnLgt6rxk4-OpHGSxUp9xuyQ4=w640-h454-no"
		},
		{
			name : "Snow",
			clickCount : 0,
			imgSrc : "snow.jpg",
			imgURL : "https://lh3.googleusercontent.com/01WZTh1hVkxm2RAgXTbNa-1e43T9-Fogh0z4-RPkSqo=w634-h400-no"
		},
		{
			name : "Tigar",
			clickCount : 0,
			imgSrc : "tigar.jpg",
			imgURL : "https://lh3.googleusercontent.com/JyXjFxw_NjESy30ufuGTFjotIBAzz47GKimQejv-vZQ=w632-h475-no"
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

	resetCrtCat: function(cat,ind) {
		catModel.currentCat.cat = cat;
		catModel.currentCat.ind = ind;
	},

	updateClick: function() {
		catModel.currentCat.cat.clickCount++;
		catView.renderCat();
	}, 

	updateModel: function(newcat,ind) {
		catModel.cats[ind] = newcat;
	},

	openForm: function() {
		$('form').show();
	},

	closeForm: function() {
		$('form').hide();
	},

	init: function() {
		catModel.currentCat.cat = catModel.cats[0];
		catModel.currentCat.ind = 0;
		catlistView.init();
		catView.init();
		catadminView.init();
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
		var currentCat = octopus.getCrtCat().cat;
		//$("#cat-imgs").attr('src',currentCat.imgSrc);
		$("#cat-imgs").attr('src',currentCat.imgURL);
		var countMessage = 'Number of click on '+ currentCat.name + ": " + currentCat.clickCount;
		$("#cat-counts").text(countMessage);
	} // end renderCat
}; // end catView

var catlistView = {
	init: function() {
		this.renderList();
	},

	renderList: function() {
		// empty the cat list
		$('#cat-list p').remove();
		var cats = octopus.getCat();
		for (var i=0, len=cats.length; i<len;i++) {
			$("#cat-list").append('<p>'+cats[i].name+'</p>');
			$('#cat-list p').last().click((function(catCopy,icopy) {
				return function() {
					octopus.resetCrtCat(catCopy,icopy);
					catView.renderCat();
				};
			})(cats[i],i));
		} // end for loop
	} // end renderList
}; // end catlistView

var catadminView = {
	init: function() {
		$('form').hide();
		$('#admin-button').click(function() {
			octopus.openForm();
		});// end click
		$('#cancel').click(function() {
			octopus.closeForm();
		});// end click
		$('#save').click(function() {
			var catname = $('#catname').val();
			var caturl = $('#caturl').val();
			var catcount = $('#catcount').val();
			var newCat = {
				name : catname,
				clickCount : catcount,
				imgSrc : null,
				imgURL : caturl
			};
			var ind=octopus.getCrtCat().ind;
			octopus.closeForm();
			octopus.resetCrtCat(newCat,ind);
			catView.renderCat();
			octopus.updateModel(newCat,ind);
			catlistView.renderList();
		});// end click		
	} // end init
}; // end catadminView 
octopus.init();
}); //end function 