function webMod(mod, obj){
	console.log(mod);
	if(obj.div || obj.src){
		/*for (var prop in obj){	// log all properties of obj
			console.log(mod+' '+prop+': '+obj[prop]);
		}*/
        loadFiles('/content/iw/styles/agency5.min.css');
		if(obj.card){
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
        	obj.class = 'h3--coupon margin__bottom--12-5';
        	obj.num = '3';
        	obj.a += render(template.heading, obj);
        }
        if(obj.subTitle){
        	obj.p = obj.subTitle;
        	obj.class = 'margin__bottom--12-5 p--coupon';
        	obj.a += render(template.p, obj);
        }
        if(obj.exception){
        	obj.p = obj.exception;
        	obj.class = 'p--exception';
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
		obj.heading = obj.headingText;
		if(obj.linkText){
			obj.a = obj.linkText;
			obj.class = 'hn__a margin__left--50 ' + obj.linkClass;
			obj.css = obj.linkCss;
			obj.events = linkEvents;
			obj.href = obj.linkHref;
			obj.title = obj.linkTitle;
			obj.heading += ' ' + render(template.a, obj);
		}
		if(obj.backToTop){
			obj.a = 'Back to top';
			obj.class = 'hn__a hn__a--right';
			obj.css = '';
			obj.end = '#Body';
			obj.offset = 0;
			obj.events = render(template.event.AnimateScroll, obj);
			obj.href = template.void;
			obj.title = 'Go back to the top of the page';
			obj.heading += ' ' + render(template.a, obj);
		}
		obj.class = 'agency grid__unit--100 ' + obj.headingClass;
		obj.css = obj.headingCss;
		obj.events = '';
		obj.id = obj.headingId;
		obj.num = obj.headingNum;
		obj.html = render(template.heading, obj);
		if(obj.paragraphHtml || obj.accordionHtml){
			obj.divHtml = obj.paragraphHtml ? obj.paragraphHtml : '';
			if(obj.accordionHtml){
				obj.class = 'accordion';
				obj.css = '';
				obj.id = obj.accordionId;
				obj.div = obj.accordionHtml;
				obj.divHtml += render(template.div, obj);
				obj.a = obj.accordionOpen;
				obj.class = 'hn__a';
				obj.close = obj.accordionClose;
				obj.open = obj.accordionOpen;
				obj.target = '$(\'#' + obj.accordionId + '\')';
				obj.events = render(template.event.accordion);
				obj.events += '';
				obj.href = template.void;
				obj.id = '';
				obj.title = obj.accordionClosed;
				obj.p = render(template.a, obj);
				obj.class = 'margin__bottom--50';
				obj.events = '';
				obj.divHtml += render(template.p, obj);
			}
			obj.class = 'grid__unit--100 margin__bottom--0';
			obj.css = '';
			obj.div = obj.divHtml;
			obj.events = '';
			obj.id = '';
			obj.html += render(template.div, obj);
		}
		return obj.html;
	}else{
		console.log('removing '+mod);
        $('#' + mod).remove();
    }
}
function webModIcc(obj){
	if(obj.icc){	// if iccs
       	loadFiles('/content/iw/styles/agency5.min.css');
		obj.class = '';
	    obj.iccHtml = '';
		obj.iccMultiple = webModFormat(obj.icc).split('+');
		for(var i = 0, max = obj.iccMultiple.length; i < max; i++){
			obj.iccArray = obj.iccMultiple[i].split(',');
			obj.code = obj.iccArray[0] ? obj.iccArray[0].toUpperCase() : '??ICC!??';
			obj.disclaimer = obj.iccArray[1] ? obj.iccArray[1] : 'Disclaimer missing';
	        obj.expiry = obj.iccArray[2] ? obj.iccArray[2] : 'Offer good through XX/XX/XX.';
	        obj.usage = obj.iccArray[3] ? obj.iccArray[3] : 'One-time use per customer.';
	        obj.url = obj.iccArray[4] ? obj.iccArray[4] : '/default.aspx';
	        obj.color = obj.iccArray[5] ? obj.iccArray[5] : '#000';
	        obj.gift = webModPopUp(obj);
	        obj.class = '';
	        obj.css = obj.iccArray[6] ? obj.iccArray[6] : 'bottom:5%;';
			obj.iccHtml += render(template.icc, obj);
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
		obj.absolute = obj.linkArray[2];
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
	obj.src = obj.srcArray[0];
	if(obj.srcArray.length > 1){
		obj.srcset = obj.srcArray[1];
		obj.media = '(max-width: ';
		switch(obj.unit){
			case '33':
				obj.media += size.tabPort;
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
	obj.card && console.log('obj.card: ' + obj.card);
	obj.class += obj.card ? '__webModCard--' : '--';
	obj.class += obj.unit;
	obj.srcset = '';
	obj.picture += render(template.img, obj);
	obj.class = 'webModPicture';
	obj.class += obj.align ? ' align--' + obj.align : ' align--left';
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