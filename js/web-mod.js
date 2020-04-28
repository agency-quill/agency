function webMod(mod, obj){
	console.log(mod);
	if(obj.src || obj.div){
		/* for (var prop in obj){console.log(mod+' '+prop+': '+obj[prop])}; // log all properties of obj */
        loadFiles('/content/iw/styles/agency5.min.css');
		if(parseInt(obj.card)){
			console.log(mod+' obj.card: '+obj.card);
			$('#' + mod).attr('class', $('#' + mod).attr('class') + ' webModCard');
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
		console.log('removing ' + mod);
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
		switch(obj.unit){
			case '33':
				obj.media += size.tabPort + 'px) and (min-width: ' + size.mobPort;
				break;
			case '66':
				obj.media += size.tabPort;
				break;
			case '100':
				obj.media += size.tabPort;
				break;
		}
		obj.media += 'px)';
		obj.picture = render(template.source, obj);
	}else{
		obj.picture = '';
	}
	obj.class = 'webModImg';
	parseInt(obj.card) && console.log('obj.card: ' + obj.card);
	obj.class += parseInt(obj.card) ? '__webModCard--' : '--';
	obj.class += obj.unit;
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