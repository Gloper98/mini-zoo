var image = document.getElementsByClassName('animal');
var select = document.getElementById('select');
select.onchange=function(event){
	if(select.value== 'original') {
		for (var i=0; i < image.length; i++) {
			image[i].setAttribute("class", "animal original");
		}
	} else if(select.value== 'white-black') {
		for (var i=0; i < image.length; i++) {
			image[i].setAttribute("class", "animal white-black");
		}
	}else if (select.value== 'negative-colors'){
		for (var i=0; i < image.length; i++) {
			image[i].setAttribute("class", "animal negative-colors");
		}
	} else if (select.value== 'sepia'){
		for (var i=0; i < image.length; i++) {
			image[i].setAttribute("class", "animal sepia");
		}
	}
}