/* About Page Slider*/
$(document).ready(function(){
		// Sticky Menu
	$('.js--sticky-section').waypoint(function(direction){
		if(direction == 'down'){
					$('.stiacky_menu').addClass('sticky');
			 } else {
					$('.stiacky_menu').removeClass('sticky');
		}
	});
		// Sticky Menu
	$('#contact_jquery').click(function(){
		$('#hide_part').hide(1000);
	});
});
