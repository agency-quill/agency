function accordionSet(accordion){
	accordion.each(function(index){
		var $accordionBody = $(this).find('.accordionList'),
			$accordionButton = $(this).find('[data-accordion-button-open]')
			$carouselInner = $(this).find('.carouselInner');
		if($accordionBody.attr('data-accordion-open') === 'yes'){
			$accordionBody.css('height', 'auto').attr('data-accordion-height-opened', $accordionBody.height());
			$carouselInner.css('height', 'auto');
			if(!$accordionButton.attr('data-accordion-button-close')){
				$accordionButton.attr('data-accordion-button-close', 'Hide');
			}
			$accordionButton.text($accordionButton.attr('data-accordion-button-close'));
		}else{
			if(!$accordionBody.attr('data-accordion-height-closed')){
				$accordionBody.attr('data-accordion-height-closed', '488');
			}
			$accordionBody.css('height', $accordionBody.attr('data-accordion-height-closed'));
			$carouselInner.css('height', $accordionBody.attr('data-accordion-height-closed'));
			if(!$accordionButton.attr('data-accordion-button-open')){
				$accordionButton.attr('data-accordion-button-open', 'See all');
			}
			$accordionButton.text($accordionButton.attr('data-accordion-button-open'));
		}
	});
}
function accordionToggle(accordion, button){
	if(accordion.attr('data-accordion-open') !== 'yes'){
		accordion.find('.carouselInner').css('height', 'auto');
		if(!accordion.attr('data-accordion-height-closed')){
			accordion.attr('data-accordion-height-closed', accordion.height());
		}
		if(!accordion.attr('data-accordion-height-opened')){
			accordion.css('height', 'auto').attr('data-accordion-height-opened', accordion.height()).css('height', accordion.attr('data-accordion-height-closed'));
		}
		accordion.animate({height: accordion.attr('data-accordion-height-opened')}, 400, function(){
			accordion.css('height', 'auto');
			accordion.attr('data-accordion-open', 'yes');
			if(button.attr('scValue')){
				button.attr('scValue', button.attr('scValue').replace('See All', 'Hide'));
			}
			if(button.attr('data-accordion-button-close')){
				button.html(button.attr('data-accordion-button-close'));
			}
		});
	}else{
		if(!accordion.attr('data-accordion-height-closed')){
			accordion.attr('data-accordion-height-closed', '488');
		}
		if(!accordion.attr('data-accordion-height-opened')){
			accordion.attr('data-accordion-height-opened', accordion.height());
		}
		accordion.css('height', accordion.attr('data-accordion-height-opened') + 'px');
		accordion.animate({height: accordion.attr('data-accordion-height-closed')}, 400, function(){
			if(button.attr('data-accordion-button-open')){
				button.html(button.attr('data-accordion-button-open'));
			}
			accordion.removeAttr('data-accordion-open');
			if(button.attr('scValue')){
				button.attr('scValue', button.attr('scValue').replace('Hide', 'See All'));
			}
		});
	}
}
function addFlag(flag){
	$('#agency .' + flag + ' .div--coupon').each(function(){
		$(this).append(template.flag[flag]);
	});
}
function anchorScroll(start, end, offset){
    offset = offset === null ? -60 : offset - 60;
    $('html, body').animate({
        scrollTop: end.offset().top + offset
    }, Math.abs(end.offset().top - start.offset().top) * 150 / 1000);
}
function buildCustomPrint(arr) {
    var out = "";
    for(var i = 0, max = arr.length; i < max; i++){
        var ob = function(e){return e.hasOwnProperty('productPriceStart'); }
        if(arr.some(ob)){
            out += "<div class=\"grid__unit--25\"><div class=\"align--center\">" + "<a class=\"a--noHighlight\" href=\"" + arr[i].productUrl + "\"><picture class=\"align--center\"><img src=\"" + arr[i].productImage +"\" alt=\"" + arr[i].productName + "\" class=\"webModImg__webModCard--25 margin__bottom--25\"></picture>" + "<h4 class=\"h4 margin__bottom--0\">" + arr[i].productName + "</h4>" + "<p class=\"p--small\">" + arr[i].productPriceStart + "</p></a></div></div>";
            }
        else{
                out += "<div class=\"grid__unit--25\"><div class=\"align--center\">" + "<a class=\"a--noHighlight\" href=\"" + arr[i].productUrl + "\"><picture class=\"align--center\"><img src=\"" + arr[i].productImage +"\" alt=\"" + arr[i].productName + "\" class=\"webModImg__webModCard--25 margin__bottom--25\"></picture>" + "<h4 class=\"h4 margin__bottom--50\">" + arr[i].productName + "</h4></a></div></div>";
            }
    }
    document.getElementById("pList").innerHTML = out;
}
function cardLayout(node, state){
	node.each(function(){
		if(state === 'mobile'){
			if(!node.find('.card__body').hasClass('card--horizontal__body')){
				node.find('.card__body').addClass('card--horizontal__body').css({
					'width': '48.25%',
					'vertical-align': 'top'
				});
				node.find('.card__img').addClass('card--horizontal__img').css({
					'width': '48.25%',
					'vertical-align': 'top'
				});
			}
		}else{
			if(node.find('.card__body').hasClass('card--horizontal__body')){
				node.find('.card__body').removeClass('card--horizontal__body').css({
					'width': '100%',
					'vertical-align': 'middle'
				});
				node.find('.card__img').removeClass('card--horizontal__img').css({
					'width': '100%',
					'vertical-align': 'middle'
				});
			}
		}
	});
}
function calcSavePrice(str){
	var indexEnd,
		indexStart,
		priceArray = ['wasPrice','isPrice'],
		savePrice;
	for(var i = 0, max = priceArray.length; i < max; i++){
		indexStart = str.indexOf(priceArray[i])+priceArray[i].length+2;
		indexEnd = str.indexOf('</span>',indexStart);
		priceArray[i] = parseFloat(str.substring(indexStart,indexEnd));
	}
	savePrice = parseFloat(Math.round((priceArray[0] - priceArray[1]) * 100) / 100).toFixed(2);
	str = str.replace(/\{\{savings\}\}/g, savePrice);
	console.log('str: '+str);
	return str;
}
function classSplitter(node){
	return node.attr('class').split(' ');
}
function copyToClipboard(node){
	node.select();
	return document.execCommand('copy');
}
function defaultAttr(node, attrArray){
	for(var i = 0, max = attrArray.length; i < max; i++){
		if(node.attr(attrArray[i][0]) === 'undefined'){
			node.attr(attrArray[i][0],attrArray[i][1]);
		}
	}
}
function disclaimerInsert(disclaimer){
	return /[dD]\d+[a-zA-Z]*/.test(disclaimer) ? disclaimer.replace(/[dD]\d+[a-zA-Z]*/g, function(match){
			// return disclaimers[match.toLowerCase()];
			return cpnDisclaimers[match.toLowerCase()];
		}) : disclaimer;
}
function disclaimerLoad(){
	var toolTipElements = $('.icc a[onclick*="Tooltip"]');
	if(toolTipElements.length){
		toolTipElements.each(function(){
        	$(this).attr('onclick', disclaimerInsert($(this).attr('onclick')));
        });
	}
		/* if(typeof disclaimers === 'undefined'){
			$.ajax({
	    		dataType: 'json',
	    		error: function(jqXHR, status, error) {
	    			console.log('Error: ' + status + ' - ' + error);
	    		},
	    		success: function(data, status, d) {
		            disclaimers = data;
		            toolTipElements.each(function(){
		            	$(this).attr('onclick', disclaimerInsert($(this).attr('onclick')));
		            });
	    		},
	    		url: '/content/iw/scripts/disclaimers.js'
	    	});
		}else{
			toolTipElements.each(function(){
            	$(this).attr('onclick', disclaimerInsert($(this).attr('onclick')));
            });
		}
	} */
}
function dropDown(target, action){
	if(action === 'open'){
		target.fadeIn(100);
	}else{
		target.fadeOut(100);
	}
}
function fixDynPrice(node, price, defPrice){
	if(price && /{{dynPrice}}/.test(node.html())){
		node.html(node.html().replace(/{{dynPrice}}/, price));
	}
	if(defPrice && /{{defaultPrice}}/.test(node.html())){
		node.html(node.html().replace(/{{defaultPrice}}/, defPrice));
	} else if (/{{defaultPrice}}/.test(node.html())) {
		node.html(node.html().replace(/{{defaultPrice}}/, ''));
	}
}
function getParamVal(string, param){
	var paramArray = string.split(';');
    for(var i = 0, max = paramArray.length; i < max; i++){ 
        if(paramArray[i].indexOf(param) > 0){
            return paramArray[i].split('=')[1];
        }
    }
    return false;
}
function initObj(obj){
	for(var prop in obj){
    	obj[prop] = '';
    }
}
function initMod(fileArray, content, node){
	var result = 0;
    if(node){
        if(!isEmpty(content, node) && fileArray){
        	loadFiles(fileArray);
        	result = 1;
        }
    }
    return result;
}
function isEmpty(content, element){
	if(content === '' || content.trim() === ''){
		if(element.length){
			element.remove();
		}
		return 1;
	}else{
		return 0;
	}
}
function loadFiles(fileArray){
    fileArray = fileArray.split(',');
    for(var i = 0, max = fileArray.length; i < max; i++){
    	if(fileArray[i].indexOf('.css')){
	        if(!$('link[href="' + fileArray[i] + '"]').length){
	        	$('head').append('<link href="' + fileArray[i] + '" rel="stylesheet">');
	        }
    	}else{
    		if(!$('script[src="' + fileArray[i] + '"]').length){
	        	$('head').append('<script src="' + fileArray[i] + '"></script>');
	        }
    	}
    }
}
function mobileLayout(screenWidth){
	if(screenWidth <= 552){
		cardLayout($('#agency .grid--1205__unit--33 .card'), 'mobile');
		tuck($('#agency #introP'), $('#agency #introAccordion'), 'top');
	}else{
		cardLayout($('#agency .grid--1205__unit--33 .card'), 'desktop');
		unTuck($('#agency #introP'), $('#agency #introAccordion'));
	}
}
function popupToggle(popup){
	var popupObj = new Object();
	if(popup.attr('data-popup-state') === 'open'){
		popup.children().animate({opacity: '0'}, 250, function(){
			popup.animate({height: '0', 'opacity': '0'}, popup.attr('data-popup-height') * 500 / 1000, function(){
				popup.attr('data-popup-state','closed').removeAttr('data-popup-height');
				if(popup.children('iframe').length){
					popupObj.src = popup.children('iframe').attr('src');
					popup.children('iframe').attr('src','').attr('src', popupObj.src);
				}
			});
		});
	}else{
		popupObj.button = 'close';
		popupObj.class = 'button--close';
		popupObj.css = '';
		popupObj.id = popup.attr('id') + '-close';
		popupObj.popup = '#' + popup.attr('id');
		popupObj.events = render(template.event.popup, popupObj);
		if(!popup.attr('data-popup-height')){
			console.log('popup height provided');
			popup.css('height','auto').attr('data-popup-height', popup.height() - parseInt(popup.css('padding-bottom')) + 30).css('height','0');

		}else{
			popup.attr('data-popup-height', parseInt(popup.attr('data-popup-height')) - parseInt(popup.css('padding-bottom')) + 30);
		}
		popup.animate({'height': popup.attr('data-popup-height'), 'opacity': '1'}, popup.attr('data-popup-height') * 250 / 1000, function(){
			popup.children().animate({opacity: '1'}, 250);
			if(!popup.children('#' + popupObj.id).length){
				popup.append(render(template.button, popupObj));
			}
			setTimeout(function(){popup.children('#' + popupObj.id).animate({opacity: '1'}, 250)}, 250);
		});
		popup.attr('data-popup-state', 'open');
	}
}
function previewClean(){
	$('.hdr_banner') && $('.hdr_banner').remove();
	$('#DynamicAlley') && $('#DynamicAlley').remove();
}
function removeEachAttr(element, attr){
	if(element){
		element.each(function(){
			$(this).removeAttr(attr);
		});
	}
}
function render(html, obj){
    for(var k in obj){
        html = html.replace(new RegExp('{{' + k + '}}','g'),obj[k]);
    }
    return html;  
}
function tuck(inside, outside, place){
	inside.css('display','none');
	if(!$('#' + outside.attr('id') + ' #' + inside.attr('id'))[0]){
		if(place =='beginning' || place === 'start' || place === 'top'){
			inside.clone().prependTo(outside);
		}else{
			inside.clone().appendTo(outside);
		}
	}
	$('#' + outside.attr('id') + ' #' + inside.attr('id')).css('display','block');
}
function unTuck(inside, outside){
	$('#' + inside.attr('id')).css('display','block');
	$('#' + outside.attr('id') + ' #' + inside.attr('id')).css('display','none');
}
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
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
	}else{
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
			}else{
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
		}else if(direction === 'right'){
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
		}else{
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
function jsonFetch(obj, term){
	/* 	recursive function that searches json object/array for given value
			parameters:
				obj/array: object to be searched
				term: term to be searched for
			returns: object or array containing term | undefined
	*/
	var result;
	$.each(obj, function(index, value){	// go through each element of object or array
		if(Array.isArray(value) || typeof value === 'object'){	// if element contains an array or an object
			result = jsonFetch(value, term);	// call this function passing the array or object
			if(result) return false;	// if data returned break loop
		}else{
			if(value === term){	// if element value matched search term
				result = obj;	// add data to result variable
			}
		}
	});
	return result;	// return data
}
function jsonLoad(fileUrl, callback){
	/* 	loads json file and adds it to array of loaded json
		parameters:
			fileUrl: url of json file to load
			callback: function to call after successful load
			additional undeclared parameters for callback
	*/
	var data = jsonFetch(objBank, fileUrl),	// call jsonFetch to see if json already loaded
		args = Array.prototype.slice.call(arguments).splice(2);	// copy undeclared parameters to pass to callback function
	if(data){	// if json already loaded
        console.log('json already loaded');
		callback(data.obj, args);	// call callback function passing json object and undeclared parameters
	}else{
		$.ajax({ // load json
            url: fileUrl,
            dataType: 'json',
            success: function(data){	// if json load succeeds
            	console.log('json loaded');
				objBank.push({'url':fileUrl, 'obj':data});	// add json to objBank
				if(typeof callback === 'function'){	// if callback is a function
					callback(data, args);	// call callback function passing json object and undeclared parameters
				}
            },
            error: function(jqXHR, textStatus, errorThrown){	// is json load fails
            	console.log('json failed to load');
                alert('Error: ' + textStatus + ' - ' + errorThrown);	// alert message
            }
        });
	}
}
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
function addTabNav(items, pageUrl, trackingCode, lvl, trackingNum){
	/*	recursive function that adds tab nav tabs to page
		parameters: 
			items: array of nav items
			pageUrl: string of page url
			trackingCode: string of tracking code
			lvl: number of nested layer
		returns: tab nav element html
	*/
	var obj = {
			'buttonClosedHtml': '',
			'css': '',
			'events': '',
			'html': '',
			'id': '',
			'mcode': '',
			'number': '',
			'tag': '',
			'target': '$(this).children(\'.nav--drop\')'
		};
	if(typeof lvl === 'undefined'){
		lvl = 0;	// if first time through, set to top/tab level
	}
	if(typeof trackingNum === 'undefined'){
		trackingNum = 0;	// if first time through, set to 0
	}
	lvl += 1;	// increment lvl to diferentiate between tab, dropdown, etc. nav components
	for(var i = 0, max = items.length; i < max; i++){	// iterate through items array
		obj.a = items[i].navName;	// set tab content
		if(Array.isArray(items[i].navLink)){	// if link is an array
			obj.a += '<img alt="closed" class="nav--tabs__img" src="/content/iw/images/nav-arrow-closed.png">';	// add arrow image to tab content (only visible for mobile)
			obj.class = i === 0 ? 'nav--tabs__a--first' : 'nav--tabs__a';	// set anchor class
			obj.href = template.void;	// set href attribute to void for anchor element
			obj.title = 'Make your selection below';	// set title attribute for anchor element
			obj.li = render(template.a, obj);	// render anchor element
			obj.ul = addTabNav(items[i].navLink, pageUrl, trackingCode, lvl, i);	// call addTabNav to build next level of nav
			obj.class = 'nav--drop';	// set class attribute for ul element
			obj.li += render(template.ul, obj);	// render ul element
			if($(window).width() <= size.mobLand){   // if mobile
                obj.button = '$(this).children(\'nav--drop\')';  // set accordion event button parameter for li element
                obj.closed = '';
                obj.open = items[i].navName+'<img class="nav--tabs__img" src="/content/iw/images/nav-arrow-open.png" alt="opened">'; // set accordion event data-accordion-button-open attribute for li element
            	obj.target = '$(this).children(\'nav--drop\')';	// set target for dropdown event
                obj.events = render(template.event.accordion, obj);    // render accordion onclick event for li element
            }else{
            	obj.events = render(template.event.dropDown, obj);	// render dropdown onmouseentger/onmouseleav events for li element
            }
			obj.class = 'nav--tabs__item';	// set class attribute for li element
			obj.html += render(template.li, obj);	// render li element
		}else{
			obj.events = '';
			if(pageUrl !== items[i].navLink.substring(items[i].navLink.indexOf('/'),items[i].navLink.lastIndexOf('.'))){	// if href attribute of li element not the same as the url of the current page
				if(lvl === 1){	// if at tab level
					if(i === 0){
						obj.class = 'nav--tabs__a--first';	// set anchor element class attribute to first tab style
					}else{
						obj.class = 'nav--tabs__a';	// set anchor element class attribute to tab style
					}
				}else{
					obj.class = 'nav--drop__a';	// set anchor element class attribute to drop down style
				}
				if(trackingCode){
					if(lvl === 1){
						obj.mcode = '?cm_sp='+trackingCode+'-_-'+i+'-'+trackingNum;	// add tracking code for level 1 item
					}else{
						obj.mcode = '?cm_sp='+trackingCode+'-_-'+trackingNum+'-'+i;	// add tracking code for level > 1 item
					}
				}else{
					obj.mcode = '';	// no tracking code
				}	
				obj.title = 'Click to open '+items[i].navName+' page';	// set title attribute for anchor element
				obj.url = items[i].navLink;	// set url for anchor element href attribute
				obj.href = render(template.href, obj);	// render href attribute for anchor element
				obj.li = render(template.a, obj);	// render anchor element
			}else{
				if(lvl === 1){
					if(i === 0){
						obj.class = 'nav--tabs__span--first';	// set span element class attribute to first tab style
					}else{
						obj.class = 'nav--tabs__span';	// set span element class attribute to tab style
					}
				}else{
					obj.class = 'nav--drop__span';	// set span element class attribute to dropdown span
				}
				obj.span = obj.a;	// set tab content for span element
				obj.li = render(template.span, obj);	// set tab content for li element
			}
			if(lvl === 1){	// if at tab level
				obj.class = 'nav--tabs__item';	// set li element class attribute to tab style
			}else{
				obj.class = 'nav--drop__item margin__bottom--25';	// set li element class attribute to drop down style
			}
			obj.html += render(template.li, obj);	// render li element
		}
	}
	return obj.html;	// return html
}
function buildNavMod(obj, args){
	/*	determines type of nav, sets variables, calls appropriate function to build nav and then inserts into DOM
		parameters:
			args: array of parameters
			obj: object of data formatted for navigation
		data-attributes:
			data-nav-format: type of navigation to be built
	*/
	var node = args[0],
		pageUrl,
		trackingCode = args[1];
	if(node.attr('data-nav-format') === 'jump'){
		node.append(addJumpNav(obj.items));
	}else{
		if(trackingCode === 'undefined'){
			trackingCode = '';
		}
		pageUrl = window.location.href.substring(window.location.href.indexOf('.com')+4,window.location.href.lastIndexOf('.'));
		if(node.attr('data-nav-format') === 'bc'){
			node.append(addBcNav(obj.items, pageUrl, trackingCode));
		}else{
			node.append(addTabNav(obj.items, pageUrl, trackingCode));
		}
	}
}
// function webModJumpNav(mod, obj){

// }
var carouselAttr = [ // array of carousel attributes with default values
		['data-carousel-rotate-auto','no'], // does the carousel rotate automatically
		['data-carousel-rotate-buttons','yes'], // should the left & right buttons be visible
		['data-carousel-rotate-click-stop','yes'], // should the carousel stop when contents have been clicked
		['data-carousel-rotate-direction','right'], // what direction should the carousel automatically rotate
		['data-carousel-rotate-indicator','no'], // should a rotation idicator be visible
		['data-carousel-rotate-interval','3000']
	], // how long should the carousel pause between automatic rotations
	carouselStopObj = new Object(), // object of clearInterval variables
	/*errorMsgs = [ // array of error messages
		'data-rotate-direction must be "left" or "right"' // direction value missing or misspelled
	],*/
	cB = {hasCloseButton:true}, // close button object for Tooltip()
	objBank = [], // array of loaded objects
	pP = '<img src=\'/content/iw/adv/sandbox/images/promise-badge.png\' style=\'float:left;margin_bottom:5px;margin-right:10px;width:120px\'><p class=\'p\' style=\'font-size:14px;font-weight:100;line-height:1.5em;\'>If you find a lower, publicly available price on a competitor\'s* website on a comparable copy paper than paper marked with our Paper Price Promise badge, contact us and we\'ll adjust 2 cartons of our Paper Price Promise paper so that it\'s 50 cents lower than the competitor\'s price. You must be able to verify the price at the time of your call.</p><p class=\'p\' style=\'font-size:14px;font-weight:100;line-height:1.5em;\'>If you\'ve found a lower qualifying price, contact us at 800-982-3400.</p><p class=\'p\' style=\'font-size:10px;font-weight:100;line-height:1.5em;\'>*Applies to lower prices found on Staples.com, Amazon.com (shipped &amp; sold by Amazon), Officedepot.com, Costco.com, Samsclub.com. Delivered product only, not in-store price.</p>', // paper promise string for Tooltip()
	size = {
		'mobPort': '499',
		'mobLand': '765',
		'tabPort': '1011',
		'tabLand': '1279',
		'laptop': '1519'
	},
	template = { // object of html templates for render()
	    'a': '<a class="{{class}}" href="{{href}}" id="{{id}}" {{events}} style="{{css}}" title="{{title}}">{{a}}</a>',
	    'area': '<area class="{{class}}" coords="{{coords}}" href="{{href}}" id="{{id}}" {{events}} shape="{{shape}}" style="{{css}}" title="{{title}}">',
	    'button': '<button class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{button}}</button>',
	    'div': '<div class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{div}}</div>',
	    'em': '<em class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{em}}</em>',
	    'event': {
	    	'accordion': 'data-accordion-button-close="{{close}}" data-accordion-button-open="{{open}}" onclick="accordionToggle({{target}},$(this))"',
	    	'addToCart': 'bindtype="dom" ctatype="addtocart" data-effortcode="{{effort}}" data-findnumber="{{item}}" data-pagetype="Content" data-promocode="989989999" data-sku="{{sku}}" itemindex="0" onclick="$(this).AddItemsToCart({mode: \'qviewatc\', skuid: \'{{sku}}\'})" rel="QViewAddToCart_{{sku}}" tabindex="1"',
	    	'AnimateScroll': 'onClick="AnimateScroll(\'{{end}}\')"',
	    	'carousel': 'onClick="carouselRotate($(this).parent(\'{{carousel}}\'),\'{{direction}}\')"',
	    	'disclaimer': 'onclick="$(this).Tooltip(disclaimerInsert(\'{{text}}\'),{{width}},{hasCloseButton:true})"',
	    	'dropDown': 'onmouseenter="dropDown({{target}},\'open\')" onmouseleave="dropDown({{target}},\'close\')"',
	    	'popup': 'onclick="popupToggle($(\'{{popup}}\'))"',
	    	'qView': 'onclick="showPriceInCart(this, \'{{sku}}\', \'{{effort}}\', \'{{item}}\')"',
	    	'toolTip': 'onclick="$(this).Tooltip(\'{{text}}\',{{width}},{hasCloseButton:true})"'
	    },
	    'flag': {
	    	'outOfStock': '<img alt="Out of Stock" class="img__flag--coupon" src="/content/iw/images/out-of-stock.png">',
	    	'soldOut': '<img alt="Sold Out" class="img__flag--coupon" src="/content/iw/images/sold-out2.png">',
	    },
	    'heading': '<h{{num}} class="h{{num}} {{class}}" id="{{id}}" {{events}} style="{{css}}">{{heading}}</h{{num}}>',
	    'hr': '<hr class="{{class}}" style="{{css}}">',
	    'href': '{{url}}{{mcode}}{{number}}{{tag}}',
	    'icc': '<div class="icc {{class}}" id="icc-{{code}}" {{events}} style="{{css}}">{{gift}}<div id="couponWrap_{{code}}" class="cpn-clipper-wrap"><button type="button" id="cpnCode_{{code}}" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" data-cpncode="{{code}}" sctype="cta" ctatype="savetoclipboard" locater="featured">Save to Clipboard</button><a id="unclip_cpn_{{code}}" data-cpncode="{{code}}" class="button shopNow-btn scTrack" sctype="cta" ctatype="removefromclipboard" locater="Un-Clip-Coupon" onclick="CouponClipper.removeCoupon($(this))" style="display:none">Unclip Coupon</a></div><div class="dv-coupon-code icc__div ST_s" style="color:{{color}}"><span>Code: </span><strong class="strong">{{code}}</strong></div><p class="icc__p--conditions" style="color:{{color}}">{{usage}}</p><p class="icc__p--conditions" style="color:{{color}}">{{expiry}} <a class="icc__a" data-tooltips="" href="javascript:void(0)" id="disclaimer-{{code}}" onclick="$(this).Tooltip(disclaimerInsert(\'{{disclaimer}}\'),400,{hasCloseButton:true})" style="color:{{color}}">Disclaimer</a></p></div>',
		'img': '<img alt="{{alt}}" class="{{class}}" id="{{id}}" {{events}} src="{{src}}" srcset="{{srcset}}" style="{{css}}" usemap="{{usemap}}">',
		'li': '<li class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{li}}</li>',
	    'locator': 'locater="{{locator}}" sctype="{{sctype}}" sku="{{sku}}"',
	    'map': '<map name="{{usemap}}">{{mapAreas}}</map>',
	    'ol': '<ol class="{{class}}" id="{{id}}" {{events}} style="{{css}}>{{ol}}</ol>',
	    'p': '<p class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{p}}</p>',
	    'picture': '<picture class="{{class}}">{{picture}}</picture>',
	    'source': '<source media="{{media}}" srcset="{{srcset}}">',
	    'span': '<span class={{class}} id="{{id}}" {{events}} style="{{css}}">{{span}}</span>',
	    'strong': '<strong class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{strong}}</strong>',
	    'ul': '<ul class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{ul}}</ul>',
	    'void': 'javascript:void(0)'
	};
if(typeof navBar === 'undefined'){
	navBar = {};
}
function webMod(mod, obj){
	// console.log(mod);
	if(obj.src || obj.div){
		/* for (var prop in obj){console.log(mod+' '+prop+': '+obj[prop])}; // log all properties of obj */
        loadFiles('/content/iw/styles/agency5.min.css');
		if(parseInt(obj.card)){
			// console.log(mod+' obj.card: '+obj.card);
			$('#' + mod).attr('class', $('#' + mod).attr('class') + ' webModCard');
		} else if(parseInt(obj.home)){
			$('#' + mod).attr('class', $('#' + mod).attr('class') + ' webModHome');
		}
		obj.class = obj.class ? obj.class : '';
		obj.html = '<div class="webModInner ' + obj.class + '" id="' + obj.id + '" style="' + obj.css + '">';
		obj.a = '';
		obj.css = '';
		obj.events = '';
		obj.id = '';
		if(obj.src){
			obj.usemap = obj.map ? '#webModMap-' + mod : '';
        	obj.a += webModPicture(obj);
		}
    	if(obj.div){
    		obj.class = obj.src ? 'div__html--absolute' : 'div__html--static';
    		if(/wasPrice/.test(obj.div) && /savePrice/.test(obj.div) && /\{\{savings\}\}/.test(obj.div)){
	    		obj.div = calcSavePrice(obj.div);
	    	}
    		obj.a += render(template.div, obj);
    	}
		if(obj.link){
			obj.number = '';
			obj.html += render(template.a, webModLink(obj));
		}else{
			if(obj.map){
				obj.a += webModMap(mod, obj);
			}
			obj.html += obj.a;
		}
		obj.html += webModPopUp(obj);
		obj.html += webModIcc(obj);
		return obj.html + '</div>';
	}else{
		// console.log('removing ' + mod);
        $('#' + mod).remove();
    }
}
function webModCard(mod, obj){
	if(obj.src){
		if(!obj.span){
			$('#' + mod).attr('class', $('#' + mod).attr('class') + ' webModCard');
		}
		obj.cardHtml = obj.icc ? '<div class="div--coupon ' : '<div class="div--card ';
		obj.cardHtml += obj.class + '" id="' + obj.id + '" style="' + obj.css + '">';
		obj.align = 'center';
		obj.card = '1';
		obj.css = '';
		obj.events = '';
		obj.id = '';
		obj.usemap = '';
        obj.cardHtml += webModPicture(obj);
        if(obj.flagSrc){
        	obj.alt = obj.flagAlt ? obj.flagAlt : '';
        	obj.class = obj.flagClass ? obj.flagClass : 'img__flag--card';
        	obj.src = obj.flagSrc;
        	obj.cardHtml += render(template.img, obj);
        }
        if(obj.heading){
        	obj.class = 'h3--coupon margin__bottom--12-5';
        	obj.num = '3';
        	obj.cardHtml += render(template.heading, obj);
        }
        if(obj.subTitle){
        	obj.p = obj.subTitle;
        	obj.class = 'margin__bottom--12-5 p--coupon';
        	obj.cardHtml += render(template.p, obj);
        }
        if(obj.details){
        	obj.p = obj.details;
        	obj.class = 'icc__p--details';
        	obj.cardHtml += render(template.p, obj);
        }
        if(obj.link){
        	obj.button = /,/.test(obj.link) ? 'Add to Cart' : 'Shop Now';
        	obj.class = 'button btn-clip-coupon BtnO';
        	obj.a = render(template.button, obj);
        	obj.number = '';
        	obj.title = obj.button;
			obj.div = render(template.a, webModLink(obj));
			if(obj.exception){
				obj.exception = obj.exception.split(',');
				obj.a = obj.exception[0] ? obj.exception[0] : 'Disclaimer';
				obj.text = obj.exception[1] ? obj.exception[1] : 'Text missing';
				obj.width = 400;
				obj.events = render(template.event.toolTip, obj);
				obj.class = 'icc__a';
				obj.css = 'color:#000;'
				obj.href = template.void;
				obj.p = render(template.a, obj);
				obj.events = '';
				obj.class = 'icc__p--conditions ST_s';
				obj.div += render(template.p, obj)
			}
        	obj.class = 'icc'
        	obj.css = obj.exception ? 'bottom:8.875%' : 'bottom:12.5%;';
        	obj.cardHtml += render(template.div, obj);
		} else {
			obj.cardHtml += obj.popup ? webModPopUp(obj) : '';
			obj.cardHtml += obj.icc ? webModIcc(obj) : '';
		}
		return obj.cardHtml + '</div>';
	}else{
        $('#' + mod).remove();
    }
}
function webModCarousel(mod, obj){
	if(obj.div1 || obj.src1){
		if(obj.src2){
			console.log('webMod'+mod+' carousel');
		}else{
			obj.align = obj.align1 ? obj.align1 : '';
			obj.alt = obj.alt1 ? obj.alt1 : '';
	        obj.div = obj.div1 ? obj.div1 : '';
	        obj.icc = obj.icc1 ? obj.icc1 : '';
	        obj.link = obj.link1 ? obj.link1 : '';
	        obj.map = obj.map1 ? obj.map1 : '';
	        obj.popup = obj.popup1 ? obj.popup1 : '';
	        obj.src = obj.src1 ? obj.src1 : '';
	        obj.title = obj.title1 ? obj.title1 : '';
	        return webMod(mod, obj);
		}
	}else{
		$('#' + mod).remove();
	}
}
function webModCoupon(mod, obj){
	if(obj.src){
		if(!obj.span){
			$('#' + mod).attr('class', $('#' + mod).attr('class') + ' webModCard');
		}
		obj.div = '<div class="div--coupon ' + obj.class + '" id="' + obj.id + '" style="' + obj.css + '">';
		obj.align = 'center';
		obj.card = '1';
		obj.css = '';
		obj.events = '';
		obj.id = '';
		obj.usemap = '';
        obj.a = webModPicture(obj);
        if(obj.heading){
        	obj.class = 'h3--coupon margin__bottom--12-5 margin__top--25';
        	obj.num = '3';
        	obj.a += render(template.heading, obj);
        }
        if(obj.subTitle){
        	obj.p = obj.subTitle;
        	obj.class = 'margin__bottom--12-5 p--coupon';
        	obj.a += render(template.p, obj);
        }
        if(obj.details){
        	obj.p = obj.details;
        	obj.class = 'icc__p--details';
        	obj.a += render(template.p, obj);
        }
		if(obj.link){
			obj.number = '';
			obj.div += render(template.a, webModLink(obj));
		}else{
			obj.div += obj.a;
		}
		obj.div += webModPopUp(obj);
		obj.div += webModIcc(obj);
		return obj.div + '</div>';
	}else{
        $('#' + mod).remove();
    }
}
function webModFormat(data, format){
	if(format === 'link'){
		return data.replace(/(\w)\s+([\w\?])/g,'$1,$2').replace(/\s*([,+])\s*/g,'$1').replace(/([^,])([\?&]cm_sp)/g,'$1,$2').replace(/([^,:])(#\w+)/g,'$1,$2').trim();
	}else{
		return data.replace(/\s*([,+])\s*/g,'$1').trim();
	}
}
function webModHeader(mod, obj){
	console.log(mod);
	if(obj.headingText){
		loadFiles('/content/iw/styles/agency5.min.css');
		obj.css = '';
		obj.events = '';
		obj.id = '';
		obj.div = obj.paragraphHtml ? obj.paragraphHtml : '';
		obj.div += obj.accordionHtml ? webModHeaderAccordion(obj.accordionHtml, obj.accordionId) : '';
		if(obj.accordionHtml && obj.paragraphHtml){
			obj.p = webModHeaderReadMore(obj.accordionClose, obj.accordionId, obj.accordionOpen, obj.inHeader);
			obj.class = 'margin__bottom--50';
			obj.div += render(template.p, obj);
		}else{
			obj.inHeader = true;
			obj.headingText += ' ' + webModHeaderReadMore(obj.accordionClose, obj.accordionId, obj.accordionOpen, obj.inHeader);
		}
		obj.headingText += obj.linkText ? ' ' + webModHeaderLink(obj.linkClass, obj.linkCss, obj.linkEvents, obj.linkHref, obj.linkText, obj.linkTitle) : '';
		obj.headingText += obj.backToTop ? ' ' + webModHeaderBackToTop() : '';
		obj.html = webModHeaderHeading(obj.headingClass, obj.headingCss, obj.headingId, obj.headingNum, obj.headingText, obj.inHeader);
		obj.class = 'grid__unit--100 margin__bottom--0';
		obj.html += render(template.div, obj);
		return obj.html;
	}else{
		console.log('removing '+mod);
        $('#' + mod).remove();
    }
}
function webModHeaderAccordion(accordionHtml, accordionId){
	return render(template.div, {
		class : 'accordion',
		css : '',
		div : accordionHtml,
		events : '',
		id : accordionId,
	});
}
function webModHeaderBackToTop(){
	var scroll = render(template.event.AnimateScroll, {
			end : '#Body'
		});
	return render(template.a, {
		a : 'Back to top',
		class : 'hn__a hn_a--right',
		css : '',
		events : scroll,
		href : template.void,
		id : '',
		title : ''
	});
}
function webModHeaderHeading(headingClass, headingCss, headingId, headingNum, headingText, inHeader){
	headingClass += inHeader ? ' margin__bottom--50' : ' margin__bottom--12-5';
	return render(template.heading, {
		class : 'agency grid__unit--100 ' + headingClass,
		css : headingCss,
		events : '',
		heading : headingText,
		id : headingId,
		num : headingNum
	});
}
function webModHeaderLink(linkClass, linkCss, linkEvents, linkHref, linkText, linkTitle){
	return render(template.a, {
		a : linkText,
		class : 'hn__a margin__left--50 ' + linkClass,
		css : linkCss,
		events : linkEvents,
		href : linkHref,
		id : '',
		title : linkTitle
	});
}
function webModHeaderReadMore(accordionClose, accordionId, accordionOpen, inHeader){
	var readMoreEvents = render(template.event.accordion, {
			close : accordionClose,
			open : accordionOpen,
			target : '$(\'#' + accordionId + '\')'
		}),
		readMoreClass = inHeader ? 'hn__a margin__left--50' : 'hn__a';
	return render(template.a, {
		a : accordionOpen,
		class : readMoreClass,
		css : '',
		events : readMoreEvents,
		href : template.void,
		id : '',
		title : accordionClose
	});
}
function webModIcc(obj){
	if(obj.icc){	// if iccs
       	loadFiles('/content/iw/styles/agency5.min.css');
		obj.class = '';
	    obj.iccHtml = '';
		obj.iccMultiple = webModFormat(obj.icc).split('+');
		for(var i = 0, max = obj.iccMultiple.length; i < max; i++){
			if(obj.iccMultiple[i].length > 1){
				console.log('obj.iccMultiple[i].length: '+obj.iccMultiple[i].length+' obj.iccMultiple[i]: '+obj.iccMultiple[i]);
				obj.iccArray = obj.iccMultiple[i].split(',');
				obj.code = obj.iccArray[0] ? obj.iccArray[0].toUpperCase() : '??ICC??!';
				obj.disclaimer = obj.iccArray[1] ? obj.iccArray[1] : 'Disclaimer missing';
		        obj.expiry = obj.iccArray[2] ? obj.iccArray[2] : 'Offer good through XX/XX/XX.';
		        obj.usage = obj.iccArray[3] ? obj.iccArray[3] : 'One-time use per customer.';
		        obj.url = obj.iccArray[4] ? obj.iccArray[4] : '/default.aspx';
		        obj.color = obj.iccArray[5] ? obj.iccArray[5] : '#000';
		        obj.gift = webModPopUp(obj);
		        obj.class = '';
		        obj.css = obj.iccArray[6] ? obj.iccArray[6] : 'bottom:3%;';
				obj.iccHtml += render(template.icc, obj);
			}
		}
		obj.code = '';
		obj.css = '';
		return obj.iccHtml;
	}else{
		return ''; 
	}
}
function webModLink(obj){
	obj.class = 'a';
	obj.events = '';
	obj.link = /^[A-Za-z]/.test(obj.link) ? '/' + obj.link : obj.link;
	obj.linkArray = webModFormat(obj.link, 'link').split(',');
	if(obj.linkArray[0].indexOf('/') === 0){
		obj.mcode = '';
		obj.tag = '';
		obj.url = obj.linkArray[0];
		obj.linkArrayLength = obj.linkArray.length;
		if(obj.linkArrayLength > 1){
			for(var i = 1; i < obj.linkArrayLength; i++){
				if(obj.linkArray[i].indexOf('cm_sp') === 1){
					obj.mcode =  obj.linkArray[i];
				}else if(obj.linkArray[i].indexOf('#') === 0){
					obj.tag =  obj.linkArray[i];
				}
			}
		}
		obj.href = render(template.href, obj);
		obj.skuIndex = obj.linkArray[0].indexOf('cbs');
		if(obj.skuIndex !== -1){
			obj.class += ' pfm scTrack';
			obj.locator = 'carousel_1';
			obj.sctype = 'pfm';
			obj.sku = obj.linkArray[0].slice(obj.skuIndex + 4, obj.linkArray[0].indexOf('.'));
			obj.events = render(template.locator, obj);
		}
	}else if(obj.linkArray[0].indexOf('#') === 0){
		obj.href = template.void;
		obj.end = obj.linkArray[0];
		obj.events = render(template.event.AnimateScroll, obj);
	}else{
		obj.href = template.void;
		obj.locator = 'carousel_1';
		obj.sku = obj.linkArray[0];
		obj.effort = obj.linkArray[1];
		obj.item = obj.linkArray[2];
		if(obj.linkArray[3].toLowerCase() === 'qview'){
			obj.class += ' pfm scTrack';
			obj.sctype = 'pfm';
			obj.events = render(template.event.qView, obj) + ' ' + render(template.locator, obj);
		}else{
			obj.class += ' cta scTrack';
			obj.sctype = 'cta';
			obj.events = render(template.event.addToCart, obj) + ' ' + render(template.locator, obj);
		}
	}
	return obj;
}
function webModMap(mod, obj){
	obj.class = '';
	obj.mapAreas = '';
	obj.map = webModFormat(obj.map);
	obj.mcodeIndex = obj.map.indexOf('?cm_sp') - 1;
	obj.mcode = obj.map.slice(obj.mcodeIndex);
	obj.map = obj.map.slice(0, obj.mcodeIndex);
	obj.mapMultiple = obj.map.split('+');
	for(var i = 0, max = obj.mapMultiple.length; i < max; i++){
		obj.shapeIndex = obj.mapMultiple[i].search(/circle|default,|poly|rect/);
		obj.titleIndex = obj.mapMultiple[i].indexOf(',', obj.shapeIndex) + 1;
		obj.coordsIndex = obj.mapMultiple[i].indexOf(',', obj.titleIndex) < 0 ? obj.mapMultiple[i].length + 1 : obj.mapMultiple[i].indexOf(',', obj.titleIndex) + 1;
		obj.link = obj.mapMultiple[i].slice(0, obj.shapeIndex - 1) + obj.mcode;
		obj.shape = obj.mapMultiple[i].slice(obj.shapeIndex, obj.titleIndex - 1);
		obj.title = obj.mapMultiple[i].slice(obj.titleIndex, obj.coordsIndex - 1);
		obj.coords = obj.mapMultiple[i].slice(obj.coordsIndex);
		obj.number = '-_-' + i;
		if(obj.shape === 'default'){
			obj.coords = '';
			obj.default = render(template.area, webModLink(obj));
		}else{
			obj.mapAreas += render(template.area, webModLink(obj));
		}
	}
	obj.mapAreas += obj.default ? obj.default : '';
	return render(template.map, obj);
}
function webModPicture(obj){
	obj.srcArray = webModFormat(obj.src).split(',');
	for(var i = 0, max = obj.srcArray.length; i < max; i++){
		obj.srcArray[i] = /^https|\//.test(obj.srcArray[i]) ? obj.srcArray[i] : '/' + obj.srcArray[i];
	}
	obj.src = obj.srcArray[0];
	if(obj.srcArray.length > 1){
		obj.srcset = obj.srcArray[1];
		obj.media = '(max-width: ';
		if(obj.unit == '33'){
			obj.media += size.tabPort + 'px) and (min-width: ' + size.mobPort;
		} else {
			obj.media += size.tabPort;
		}
		obj.media += 'px)';
		obj.picture = render(template.source, obj);
	}else{
		obj.picture = '';
	}
	obj.class = 'webModImg';


	if(!parseInt(obj.home)){
		if(parseInt(obj.card)){
			obj.class += '__webModCard--';
		} else {
			obj.class += '--';
		}
		obj.class += obj.unit;
	}


	/*if(parseInt(obj.card)){
		obj.class += '__webModCard--';
	} else if(parseInt(obj.home)){
		obj.class += '__webModHome--';
	} else {
		obj.class += '--';
	}
	obj.class += obj.unit;*/
	obj.srcset = '';
	obj.picture += render(template.img, obj);
	obj.class = 'webModPicture';
	obj.class += obj.align ? ' align--' + obj.align.toLowerCase() : ' align--left';
	return render(template.picture, obj);
}
function webModPopUp(obj){
	if(obj.popup){
		obj.href = template.void;
		obj.popUpHtml = '';
		obj.popUpMultiple = webModFormat(obj.popup).split('+');
		obj.width = 400;
		for(var i = 0, max = obj.popUpMultiple.length; i < max; i++){
			obj.popUpArray = obj.popUpMultiple[i].split(',');
			



			if(obj.popUpArray.length < 3 || obj.popUpArray[2].search(/[A-Z0-9]{8}/) < 0){
				if(obj.code === undefined){
					obj.a = obj.popUpArray[0] ? obj.popUpArray[0] : 'Gift Details';
					obj.class = 'a';
					obj.colorIndexStart = obj.popUpArray[2].search(/[Cc]olor:/) + 6;
					if(obj.colorIndexStart > 5){
						obj.colorIndexEnd = obj.popUpArray[2].indexOf(';', obj.colorIndexStart) >= 0 ? obj.popUpArray[2].indexOf(';', obj.colorIndexStart) : obj.popUpArray[2].length;
						obj.color = obj.popUpArray[2].slice(obj.colorIndexStart, obj.colorIndexEnd);
					}else{
						obj.color = '#000';
					}
					obj.css = 'color:' + obj.color + ';';
					obj.text = obj.popUpArray[1];
					obj.events = render(template.event.toolTip, obj);
					obj.p = render(template.a, obj);
					obj.class = 'p--details';
					obj.css = obj.popUpArray[2];
					obj.events = '';
					obj.popUpHtml += render(template.p, obj);
				}
			}else{
				if(obj.code !== undefined){
					if(obj.popUpArray[2] === obj.code){
						obj.a = obj.popUpArray[0] ? obj.popUpArray[0] : 'Gift Details';
						obj.class = 'icc__a';
						obj.css = 'color:' + obj.color;
						obj.text = obj.popUpArray[1];
						obj.events = render(template.event.toolTip, obj);
						obj.p = render(template.a, obj);
						obj.class = 'icc__p--details';
						obj.events = '';
						return render(template.p, obj);
					}
				}
			}
		}
		obj.css = '';
		return obj.popUpHtml;
	}else{
		return '';
	}
}