var imageCount = 1;
var total = 12;
function Show(c){
	
	var image = document.getElementById('image');
	imageCount=imageCount+c;
	
	if(imageCount>total){imageCount=1;}
	if(imageCount<1){imageCount=total;}
	image.src="/media/views/game1/images/img"+ imageCount +".jpg";
}

window.setInterval(function photoA() {
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "/media/views/game1/images/img"+ imageCount +".jpg";
	},6500);

