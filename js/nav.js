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
            } else {
            	obj.events = render(template.event.dropDown, obj);	// render dropdown onmouseentger/onmouseleav events for li element
            }
			obj.class = 'nav--tabs__item';	// set class attribute for li element
			obj.html += render(template.li, obj);	// render li element
		} else {
			obj.events = '';
			if(pageUrl !== items[i].navLink.substring(items[i].navLink.indexOf('/'),items[i].navLink.lastIndexOf('.'))){	// if href attribute of li element not the same as the url of the current page
				if(lvl === 1){	// if at tab level
					if(i === 0){
						obj.class = 'nav--tabs__a--first';	// set anchor element class attribute to first tab style
					} else {
						obj.class = 'nav--tabs__a';	// set anchor element class attribute to tab style
					}
				} else {
					obj.class = 'nav--drop__a';	// set anchor element class attribute to drop down style
				}
				if(trackingCode){
					if(lvl === 1){
						obj.mcode = '?cm_sp='+trackingCode+'-_-'+i+'-'+trackingNum;	// add tracking code for level 1 item
					} else {
						obj.mcode = '?cm_sp='+trackingCode+'-_-'+trackingNum+'-'+i;	// add tracking code for level > 1 item
					}
				} else {
					obj.mcode = '';	// no tracking code
				}	
				obj.title = 'Click to open '+items[i].navName+' page';	// set title attribute for anchor element
				obj.url = items[i].navLink;	// set url for anchor element href attribute
				obj.href = render(template.href, obj);	// render href attribute for anchor element
				obj.li = render(template.a, obj);	// render anchor element
			} else {
				if(lvl === 1){
					if(i === 0){
						obj.class = 'nav--tabs__span--first';	// set span element class attribute to first tab style
					} else {
						obj.class = 'nav--tabs__span';	// set span element class attribute to tab style
					}
				} else {
					obj.class = 'nav--drop__span';	// set span element class attribute to dropdown span
				}
				obj.span = obj.a;	// set tab content for span element
				obj.li = render(template.span, obj);	// set tab content for li element
			}
			if(lvl === 1){	// if at tab level
				obj.class = 'nav--tabs__item';	// set li element class attribute to tab style
			} else {
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
	} else {
		if(trackingCode === 'undefined'){
			trackingCode = '';
		}
		pageUrl = window.location.href.substring(window.location.href.indexOf('.com')+4,window.location.href.lastIndexOf('.'));
		if(node.attr('data-nav-format') === 'bc'){
			node.append(addBcNav(obj.items, pageUrl, trackingCode));
		} else {
			node.append(addTabNav(obj.items, pageUrl, trackingCode));
		}
	}
}
// function webModJumpNav(mod, obj){

// }