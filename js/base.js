function accordionSet(accordion){
	accordion.each(function(index){
		var $accordionBody = $(this).find('.accordionList'),
			$accordionButton = $(this).find('[data-accordion-button-open]');
		if($accordionBody.attr('data-accordion-open') === 'yes'){
			$accordionBody.css('height', 'auto').attr('data-accordion-height-opened', $accordionBody.height());
			if(!$accordionButton.attr('data-accordion-button-close')){
				$accordionButton.attr('data-accordion-button-close', 'close -');
			}
			$accordionButton.text($accordionButton.attr('data-accordion-button-close'));
		} else {
			if(!$accordionBody.attr('data-accordion-height-closed')){
				$accordionBody.attr('data-accordion-height-closed', '0');
			}
			$accordionBody.css('height', $accordionBody.attr('data-accordion-height-closed'));
			if(!$accordionButton.attr('data-accordion-button-open')){
				$accordionButton.attr('data-accordion-button-open', 'open +');
			}
			$accordionButton.text($accordionButton.attr('data-accordion-button-open'));
		}
	});
}
function accordionToggle(accordion, button){
	if(accordion.attr('data-accordion-open') !== 'yes'){
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
	} else {
		if(!accordion.attr('data-accordion-height-closed')){
			accordion.attr('data-accordion-height-closed', 0);
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
function buildCustomPrint(arr) {
    var out = "";
    for(var i = 0, max = arr.length; i < max; i++){
        var ob = function(e){return e.hasOwnProperty('productPriceStart'); }
        if (arr.some(ob)){
            out += "<div class=\"grid__unit--25\"><div class=\"align--center\">" + "<a class=\"a--noHighlight\" href=\"" + arr[i].productUrl + "\"><picture class=\"align--center\"><img src=\"" + arr[i].productImage +"\" alt=\"" + arr[i].productName + "\" class=\"img margin__bottom--25\"></picture>" + "<h4 class=\"h4 margin__bottom--0\">" + arr[i].productName + "</h4>" + "<p class=\"p--small\">" + arr[i].productPriceStart + "</p></a></div></div>";
            }
        else{
                out += "<div class=\"grid__unit--25\"><div class=\"align--center\">" + "<a class=\"a--noHighlight\" href=\"" + arr[i].productUrl + "\"><picture class=\"align--center\"><img src=\"" + arr[i].productImage +"\" alt=\"" + arr[i].productName + "\" class=\"img margin__bottom--25\"></picture>" + "<h4 class=\"h4 margin__bottom--50\">" + arr[i].productName + "</h4></a></div></div>";
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
		} else {
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
			return disclaimers[match.toLowerCase()];
		}) : disclaimer;
}
function disclaimerLoad(){
	var toolTipElements = $('.icc a[onclick*="Tooltip"]');
	if(toolTipElements.length){
		if(typeof disclaimers === 'undefined'){
			$.ajax({
	    		dataType: 'json',
	    		error: function(jqXHR, status, error) {
	        		alert('Error: ' + status + ' - ' + error);
	    		},
	    		success: function(data, status, d) {
		            disclaimers = data;
		            toolTipElements.each(function(){
		            	$(this).attr('onclick', disclaimerInsert($(this).attr('onclick')));
		            });
	    		},
	    		url: '/content/iw/scripts/disclaimers.js'
	    	});
		} else {
			toolTipElements.each(function(){
            	$(this).attr('onclick', disclaimerInsert($(this).attr('onclick')));
            });
		}
	}
}
function dropDown(target, action){
	if(action === 'open'){
		target.fadeIn(100);
	} else {
		target.fadeOut(100);
	}
}
function fixDynPrice(node, price){
	if(price && /\{\{dynPrice\}\}/.test(node.html())){
		node.html().replace(/\{\{dynPrice\}\}/, price);
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
	for (var prop in obj){
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
	} else {
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
    	} else {
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
	} else {
		cardLayout($('#agency .grid--1205__unit--33 .card'), 'desktop');
		unTuck($('#agency #introP'), $('#agency #introAccordion'));
	}
}
function popupToggle(popup){
	var popupObj = new Object();
	if(popup.attr('data-popup-state') === 'open'){
		popup.children().animate({opacity: '0'}, 250, function(){
			popup.animate({height: '0', 'opacity': '0'}, popup.attr('data-popup-height') * 500 / 1000, function(){
				popup.removeAttr('data-popup-state').removeAttr('data-popup-height');
				if(popup.children('iframe').length){
					popupObj.src = popup.children('iframe').attr('src');
					popup.children('iframe').attr('src','').attr('src', popupObj.src);
				}
			});
		});
	} else {
		popupObj.button = 'close';
		popupObj.class = 'button--close';
		popupObj.css = '';
		popupObj.id = popup.attr('id') + '-close';
		popupObj.popup = '#' + popup.attr('id');
		popupObj.events = render(template.event.popup, popupObj);
		if(!popup.attr('data-popup-height')){
			console.log('popup height provided');
			popup.css('height','auto').attr('data-popup-height', popup.height() - parseInt(popup.css('padding-bottom')) + 30).css('height','0');

		} else {
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
		}
		else {inside.clone().appendTo(outside);
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