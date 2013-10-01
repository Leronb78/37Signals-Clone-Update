$(document).ready(function(){
	$('.alt_tag').hide();

	$('#bc_product, #bc_tag').hover(function(){
		$('#main_tag').toggle();
		$('#bc_tag').toggle();
	});

	$('#hr_product, #hr_tag').hover(function(){
		$('#main_tag').toggle();
		$('#hr_tag').toggle();
	});

	$('#cf_product, #cf_tag').hover(function(){
		$('#main_tag').toggle();
		$('#cf_tag').toggle();
	});
});