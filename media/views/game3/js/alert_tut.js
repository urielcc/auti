var imageCount = 1;
var total = 26;



	
window.setInterval(
	function photoA() {
	var image = document.getElementById("image");
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "imgABC/i"+ imageCount +".png";
	},
	1800);

var imageCount1 = 1;
var total1 = 26;

window.setInterval(
	function photoB() {
	var image = document.getElementById("image1");
	imageCount1 = imageCount1 + 1;
	if(imageCount1 > total1){imageCount1 = 1;}
	if(imageCount1 < 1){imageCount1 = total1;}	
	image.src = "imgEx/a"+ imageCount1 +".jpg";
	},
	1800);

var imageCount2 = 1;
var total2 = 7;

window.setInterval(
	function photoC() {
	var image = document.getElementById("image2");
	imageCount2 = imageCount2 + 1;
	if(imageCount2 > total2){imageCount2 = 1;}
	if(imageCount2 < 1){imageCount2 = total2;}	
	image.src = "guia/oracion/e"+ imageCount2 +".png";
	},
	290);



/*function addLoadEvent(photo) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = photo;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      photo();
    }
  }
}
addLoadEvent(photoA);
addLoadEvent(photoB);
addLoadEvent(photoC);


*/