var imageCount = 1;
var total = 26;

function photoA(x) {
	var image = document.getElementById('image1');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "imgEx/img"+ imageCount +".jpg";
	}
	
window.setInterval(function photoB() {
	var image = document.getElementById('image1');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "imgEx/img"+ imageCount +".jpg";
	},5000);