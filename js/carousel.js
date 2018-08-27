function carouselAutoRun(node, direction, interval){
	/*	automatically rotates carousel in given direction periodically based on given interval
		parameters: 
			node: dom object of parent carousel element
			direction: the direction - 'left' or 'right' - that the carousel will rotate
			interval: number of miliseconds between rotations
	*/
	direction = direction ? direction : 'right';	// default direction = right
	interval = interval ? interval : '3000';
	carouselStopObj[node.attr('id')] = setInterval(function(){
		carouselRotate(node, direction)
		}, interval);	// call carouselRotate periodically based on interval value
}
function carouselButtons(node, widthObj){
	/*	checks to see if the combined contents are wide enough to require a carousel
		parameters: 
			node: dom object of parent carousel element
			widthObj: object of carousel width measurements
		returns: boolean representing whether or not a carousel in needed
	*/
	if(widthObj.panelWidth <= widthObj.frameWidth){	// if total carousel elements <= containing frame
		node.addClass('carouselMod--noButtons');	//  apply hidden button css
		return 'no';
	} else {
		node.removeClass('carouselMod--noButtons');	// remove hidden button css
		return 'yes';
	}
}
function carouselGetWidth(node, direction){
	/*	gets the width of the carousel frame (element with carouselMod__frame class), width of sliding panel (first child element of carouselMod__frame), number of panes to shift per screen and the width in px of the shifted panes
		parameters: 
			node: dom object of parent carousel element
			direction: the direction - 'left' or 'right' - that the carousel should rotate
		returns: widthObj
	*/
	var widthObj = {
			'frameWidth': 0,	// width of carousel window
			'panelWidth': 0,	// width of sliding panel
			'paneNum': 0,	// number of panes shifted to front/back of list
			'panePx': 0	// width of panes shifted to front/back of list
		},
		i = 0;	// iterator
	widthObj.frameWidth = node.find('.carouselMod__frame').width();	// get carousel window width
	node.find('.carouselMod__pane').each(function(){
		widthObj.panelWidth += $(this).outerWidth(true);	// add pane widths together
		if(direction === 'right' && widthObj.panelWidth <= widthObj.frameWidth){	// if right shift
			widthObj.paneNum = i + 1;	// increment number of panes to be shifted
			widthObj.panePx = widthObj.panelWidth;	// get width of panes to be shifted
		}
		i++;	// increment counter
	});
	if(direction === 'left'){	// if left shift
		widthObj.liArray = node.find('.carouselMod__pane').toArray();	// create array of panes to process in reverse
		for(i = widthObj.liArray.length - 1; i >= 0; i--){	// go through panes in reverse
			if(widthObj.panePx + $(widthObj.liArray[i]).outerWidth(true) <= widthObj.frameWidth){
				widthObj.paneNum++;	// get number of panes to be shifted
				widthObj.panePx += $(widthObj.liArray[i]).outerWidth(true);	// get width of panes to be shifted
			} else {
				break;
			}
		}
	}
	return widthObj;
}
/* function carouselIndicator(node, widthObj){} */
function carouselInit(node){
	/*	initializes carousels by getting the width of elements, applying default attributes, testing width to see if rotation necessary and calls auto run function if data-carousel-direction set to 'left' or 'right'
		parameters:
			node: dom object of parent carousel element
		data attributes: 
			data-carousel-direction: the direction 'left' or 'right' that the carousel should rotate
			data-carousel-interval: number of miliseconds between rotations
	*/
	var widthObj = carouselSetWidth(node, carouselGetWidth(node));	// get carousel width
	defaultAttr(node, carouselAttr);	// set default attributes
	/*carouselIndicator(node, widthObj);*/	// set indicator
	console.log('carouselInit '+node.attr('id'));
	if(carouselButtons(node, widthObj) === 'yes' && node.attr('data-carousel-direction') !== undefined){	// if auto rotate
		var direction = node.attr('data-carousel-direction') === 'left' ? 'left' : 'right',
			interval = node.attr('data-carousel-interval') !== undefined ? node.attr('data-carousel-interval') : '3000'; 
		carouselAutoRun(node, direction, interval);	// call auto rotate
	}
}
function carouselResize(node){
	/*	
		parameters: 
			node: dom object of parent carousel element
		data attributes: 
		returns: 
	*/
	clearInterval(carouselStopObj[node.attr('id')]);
	var widthObj = carouselSetWidth(node, carouselGetWidth(node));	// get carousel width
	//carouselIndicator(node, widthObj);	 set indicator
	if(carouselButtons(node, widthObj) === 'yes' && node.attr('data-carousel-direction') !== undefined && carouselStopObj[node.attr('id') + '-clicked'] !== 'yes'){	// if auto rotate
		var direction = node.attr('data-carousel-direction') === 'left' ? 'left' : 'right',
			interval = node.attr('data-carousel-interval') !== undefined ? node.attr('data-carousel-interval') : '3000';
		carouselAutoRun(node, direction, interval);	// call auto rotate
	}
}
function carouselRotate(node, direction){
	/*	
		parameters: 
			node: dom object of parent carousel element
			direction: the direction 'left' or 'right' that the carousel should rotate
		data attributes: 
		returns: 
	*/
	if(node.find('ul').is(':animated')){
		return false;	// if in the middle of animation ignore click
	}
	if(direction){
		var widthObj = carouselGetWidth(node, direction);
		if(direction === 'left'){
			node.find('ul').prepend(node.find('li').slice(-widthObj.paneNum).clone());	// copy mods from end and put them at start
			node.find('ul').css({
				'left' : '-'+widthObj.panePx+'px',	// set one frame to the right
				'width' : widthObj.panelWidth + widthObj.panePx + 'px'	// adjust width to max-content for ie/edge
			});
			node.find('ul').animate({
			left : '0'	// move list one frame to the left 
			}, widthObj.frameWidth * 500 / 1000, function(){
				node.find('li').slice(-widthObj.paneNum).detach();	// remove mods from end
				node.find('ul').css('width', widthObj.panelWidth);	// adjust width to max-content for ie/edge
			});	
		} else if(direction === 'right'){
			node.find('ul').append(node.find('li').slice(0,widthObj.paneNum).clone());	// copy mods from start and put them at end
			node.find('ul').css('width', (widthObj.panelWidth + widthObj.panePx) + 'px');	// adjust width to max-content for ie/edge
			node.find('ul').animate({
				left : '-' + widthObj.panePx + 'px'	// set one frame to the left
			}, widthObj.panePx * 500 / 1000, function(){
				node.find('li').slice(0,widthObj.paneNum).detach();	// remove mods from start of list
				node.find('ul').css({
					'left' : '0',	// set list one frame to the left
					'width' : widthObj.panelWidth + 'px'	// adjust width to max-content for ie/edge
				});
			});
		} else {
			alert(errorMsgs[0]);	// direction value missing or misspelled
		}
	}
}
function carouselSetWidth(node, widthObj){
	/*	
		parameters: 
			node: dom object of parent carousel element
			widthObj: object of carousel width measurements
		returns: widthObj
	*/
	node.find('.carouselMod__panel').css('width', widthObj.panelWidth + widthObj.panePx);	// adjust width to max-content for ie/edge
	return widthObj;
}
function carouselStop(node){
	/*	
		parameters: 
			node: dom object of parent carousel element
		data attributes: 
			data-carousel-stop: 
		returns: 
	*/
	if(node.attr('data-carousel-stop') === 'yes'){	// if should be stopped
		clearInterval(carouselStopObj[node.attr('id')]);	// stop carousel
		carouselStopObj[node.attr('id') + '-clicked'] = 'yes';	// set flag to prevent autorun
	}
}