// on load
$(window).on('load', function(){
	// carousel
	if($('#agency .carouselMod').length){	// if there is a carousel
		$('#agency .carouselMod').each(function(){
			carouselInit($(this));	// initialize each carousel
		});
	}
	if($('#agency [data-nav-json]')){
		$('#agency [data-nav-json]').each(function(index){
			if(!isEmpty($(this).attr('data-nav-json'),$(this))){
				jsonLoad($(this).attr('data-nav-json'), buildNavMod, $(this), $(this).attr('data-nav-code'));
			}
		});
	}
    if($('#agency [data-cat-json]')){
		$('#agency [data-cat-json]').each(function(index){
			if(!isEmpty($(this).attr('data-cat-json'),$(this))){				
                jsonLoad($(this).attr('data-cat-json'), buildCustomPrint, $(this));
			}
		});
	}
	$('#agency .outOfStock').length && addFlag('outOfStock');
	$('#agency .soldOut').length && addFlag('soldOut');
	$('.accordionDiv').length && accordionSet($('.accordionDiv'));
	// disclaimerLoad();
	mobileLayout($(window).width());
});
// on resize
$(window).resize(function(){
	// carousel
	if($('#agency .carouselMod')){	// if there is a carousel
		$('#agency .carouselMod').each(function(){
			carouselResize($(this));	// resize each carousel
		});
	}
	mobileLayout($(window).width());
	removeEachAttr($('#agency [data-accordion-height-open]'), 'data-accordion-height-open');
});
// on carousel content click
$('#agency .carouselMod').find('*').click(function(){	// stop carousel if any element in carousel clicked
	carouselStop($(this).parent('#agency .carouselMod'));	// stop carousel
});