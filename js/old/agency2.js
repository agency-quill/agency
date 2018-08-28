/* ACCORDION */
$(".toggleAccordion").click(function(){
	console.log("this.text(): "+$(this).text());
	console.log("accordionState: "+$(this).siblings('.accordionContent').attr('accordionState'));
	if ($(this).siblings(".accordionContent").attr("accordionState")==="open"){
		$(this).siblings(".accordionContent").slideUp(300).attr("accordionState","closed");
	} else {
		$(".accordionContent").slideUp(300).attr("accordionState","closed");
		$(this).siblings(".accordionContent").slideDown(300).attr("accordionState","open");
	}
});

/* ANCHOR SCROLL */
function anchorScroll(start, end, offset){
    offset = offset === null ? -60 : offset - 60;   // adjust for sticky header
    $('html, body').animate({
        scrollTop: end.offset().top + offset
    }, Math.abs(end.offset().top - start.offset().top) * 150 / 1000);
}

/* BREADCRUMBS BUILD FROM JSON FILE */
function buildCrumbs(crumbObject) {
	if(typeof crumbObject != "undefined") {
		if (crumbObject.length) {
			for (var i=0; i < crumbObject.length; i++) {
				if (crumbObject[i].breadcrumbsUrl != "") {
					$('ul#breadcrumbs').append('<li id="breadcrumb'+i+'"><a href="'+crumbObject[i].breadcrumbsUrl+'" title="Return to '+crumbObject[i].breadcrumbsText+'">'+crumbObject[i].breadcrumbsText+'</a></li>');
				} else {
					$('ul#breadcrumbs').append('<li id="breadcrumb'+i+'">'+crumbObject[i].breadcrumbsText+'</li>');
				}
				if (i != crumbObject.length-1) {
					$('li#breadcrumb'+i).append(' &gt;');
				}
			}
		}
	}
}

/* CLASS SPLITTER 
returns an array of all of the classes associated to the jQuery object variable */
function classSplitter(node) {
	return node.attr('class').split(' ');
}

/* DIALOG BOX */
function openDialog(contents,node,width,height){
	var $dialog = $('<div id="dialogOverlay" onclick="closeDialog()"><div class="dialogBox"><div class="closeDialog" onclick="closeDialog()"></div></div></div>');
	$dialog.find('.dialogBox').append(contents);
	$(node).append($dialog);
	if(width){
		width = parseInt(width);
	} else {
		width = $(contents).width();
	}
	width += parseInt($('.dialogBox').css('padding-right'))+parseInt($('.dialogBox').css('padding-left'));
	if(height){
		height = parseInt(height);
	} else {
		height = $(contents).height();
	}
	height += parseInt($('.dialogBox').css('padding-top'))+parseInt($('.dialogBox').css('padding-bottom'));
	$('.dialogBox').css({
		marginTop : '-'+(height/2)+'px',
		marginLeft : '-'+(width/2)+'px'
	});
	$('#dialogOverlay').fadeIn(400);	
}
function closeDialog(){
	$("#dialogOverlay").fadeOut(400,function(){
		$(this).remove();
	});
}

/*$(".openDialog").click(function(){
	$(".dialogVisible").fadeOut(400).removeClass("dialogVisible");
	$(this).siblings(".dialogBox").fadeIn(400).addClass("dialogVisible");
});
$(".closeDialog").click(function(){
	$(".dialogVisible").fadeOut(400).removeClass("dialogVisible");
});*/

/* DISCLAIMER DIALOG BOX */
$(".openDisclaimer").click(function(){
	if (!$(this).parent().hasClass("ss-test-banner")){
		if ($(".disclaimer")) {
			var disclaimerString = "";
			if ($(this).attr("custom")) {
				disclaimerString = $(this).attr("custom");
			} else {
				if ($(this).attr("expiry")) {
					disclaimerString += "Good through "+$(this).attr("expiry")+". ";
				}
				if ($(this).attr("usage")) {
					disclaimerString += "One-time use per "+$(this).attr("usage")+". ";
				}
				disclaimerString += disclaimerText[$(this).attr("disclaimer")];
				if ($(this).attr("extra")) {
					disclaimerString += " "+$(this).attr("extra")+". ";
				}
				if ($(this).attr("exclusion")) {
					disclaimerString = disclaimerString+" Excludes "+$(this).attr("exclusion")+". ";
				}
			}
			$(".disclaimerBox .disclaimer p").html(disclaimerString);
		}
		$("#disclaimerOverlay").fadeIn(400).addClass("disclaimerVisible");
	}
});
$(".closeDisclaimer, #disclaimerOverlay").click(function(){
	$("#disclaimerOverlay").fadeOut(400).removeClass("disclaimerVisible");
	if ($(".disclaimerBox .disclaimer")) {
		setTimeout(function(){
			$(".disclaimerBox .disclaimer p").html("");
		}, 400);	
	} 
});

/* DROPDOWN */
$(".dropDownRollover").mouseenter(function(){
	$(this).find(".dropDownMenu").slideDown(500);
});
$(".dropDownRollover").mouseleave(function(){
	$(this).find(".dropDownMenu").slideUp(500);
});

/* HOVER FADE */
$(".hoverFade").mouseenter(function(){
	$(this).find(".hoverContent").fadeIn(400);
});
$(".hoverFade").mouseleave(function(){
	$(this).find(".hoverContent").fadeOut(400);
});

/* GET QUERY STRING BY NAME*/
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/* MORE PRODUCTS FORMATTING 
hides the module in the "more products" section that links to the current page by pulling the value of the attribute hide, matching it with the id of the module to be hidden in the include more.html and adding the inline style display:none to it */
if ($(".section.more").attr("hide")) {
	$('#'+$(".section.more").attr("hide")).css("display","none");
}

/* MODULE MARGIN FIX 
finds all the left-most promo modules and removes the left margin to make them flush */
$(".quarter, .third, .half, .threeQuarter, .full").each(function() {
	if ($(this).position().left < 100) {
      $(this).css("margin-left","0");
    }
});
$(".article .quarter, .article .third, .article .half, .article .threeQuarter, .article .coupon").each(function() {
	if ($(this).position().left < 300) {
      $(this).css("margin-left","0");
    }
});

/* NAV MENU BUILD FROM JSON FILE */
function buildNav(navObject) {
	if(typeof navObject.items != "undefined") {
		// if navObject exists
		if(navObject.items.length) {
			// if threre are menu items in navObject
			var navLinkUrl;
			var pageUrl = window.location.href.substring(window.location.href.indexOf('.com')+4,window.location.href.lastIndexOf('/')+1);
			if(typeof trackingCode == 'undefined') trackingCode = '';
			for(var i=0; i < navObject.items.length; i++) {
				if(navObject.items[i].menuTabUrl != "") {	
					// if menu tab has link
					navLinkUrl = navObject.items[i].menuTabUrl.substring(navObject.items[i].menuTabUrl.indexOf('/'),navObject.items[i].menuTabUrl.lastIndexOf('/')+1);
					if(pageUrl == navLinkUrl) { 	
						// if menu tab link is to current page, highlight and don't add <a>
						$('#mainNav').append('<li id="menuTab'+i+'" class="menuRollOver '+ (typeof navObject.items[i].class !== "undefined" ? navObject.items[i].class: "") +'"><span>'+navObject.items[i].menuTabText+'</span></li>');
					} else {
						$('#mainNav').append('<li id="menuTab'+i+'" class="menuRollOver"><a href="'+navObject.items[i].menuTabUrl+'" title="Click to open '+navObject.items[i].menuTabText+' page"><span>'+navObject.items[i].menuTabText+'</span></a></li>');
						if(trackingCode) {
							// if there is a tracking code, append it to <a href>
							
							var tagStart = navObject.items[i].menuTabUrl.search(/#/);
							console.log('tagStart: '+tagStart);
							if(tagStart >= 0){
								var tagEnd = navObject.items[i].menuTabUrl.indexOf('?', tagStart);
								console.log('tagEnd: '+tagEnd);
								var tagText = tagEnd >= 0 ? navObject.items[i].menuTabUrl.substring(tagStart, tagEnd) : navObject.items[i].menuTabUrl.substring(tagStart);
								console.log('tagText: '+tagText);
								navObject.items[i].menuTabUrl = navObject.items[i].menuTabUrl.substring(0, tagStart);
								console.log('navObject.items[i].menuTabUrl: '+navObject.items[i].menuTabUrl);
								if(tagEnd >= 0){
									navObject.items[i].menuTabUrl += navObject.items[i].menuTabUrl.substring(tagEnd);
								}
							}

							if(navObject.items[i].menuTabUrl.search('\\?') != -1){
								console.log('navObject.items['+i+'].menuTabUrl.search(\'\\?\')= '+navObject.items[i].menuTabUrl.search('\\?'));
								// if there is a '?' in the link, add tracking code using '&'
								$('#menuTab'+i+' a').attr('href',$('#menuTab'+i+' a').attr('href')+'&cm_sp='+trackingCode+'-_-'+i);
							} else {
								// if there is not a '?' in the link, add tracking code using '?'
								$('#menuTab'+i+' a').attr('href',$('#menuTab'+i+' a').attr('href')+'?cm_sp='+trackingCode+'-_-'+i);
							}

							console.log('navObject.items['+i+'].menuTabUrl: '+navObject.items[i].menuTabUrl);

						}	
						if(navObject.scType) $('#menuTab'+i+' a').attr({
							'class':'scTrack scLink' + (typeof navObject.items[i].class !== "undefined" ? navObject.items[i].class: ""),
							'scType':navObject.scType,
							'scValue':navObject.items[i].menuTabText.replace(/\s/g,"").toLowerCase()});
							// if there is a scType & scValue add attributes to <a>
						}
				} else {	
					// if menu tab doesn't have link
					$('#mainNav').append('<li id="menuTab'+i+'" class="menuRollOver"><a href="javascript:void(0)" title="Make your selection below"><span>'+navObject.items[i].menuTabText+'</span></a></li>');
				}
				if(navObject.items[i].menuDropDown[0]) {
					// if there are menu items
					$('#mainNav #menuTab'+i).append('<ul class="subNav menuDropDown"></ul>');
					for(var j=0; j < navObject.items[i].menuDropDown.length; j++) {
						// add menu items
						navLinkUrl = navObject.items[i].menuDropDown[j].menuItemUrl.substring(navObject.items[i].menuDropDown[j].menuItemUrl.indexOf('/'),navObject.items[i].menuDropDown[j].menuItemUrl.lastIndexOf('/')+1);
						if(pageUrl == navLinkUrl) {
							// if menu item link is to current page, highlight and don't add <a>
							$('#menuTab'+i+' .subNav').append('<li id="menuItem'+j+'"><span>'+navObject.items[i].menuDropDown[j].menuItemText+'</span></li>');
						} else {
							// if menu item link is not to current page, add <a>
							$('#menuTab'+i+' .subNav').append('<li id="menuItem'+j+'"><a href="'+navObject.items[i].menuDropDown[j].menuItemUrl+'" title="Click to open '+navObject.items[i].menuDropDown[j].menuItemText+' page"><span>'+navObject.items[i].menuDropDown[j].menuItemText+'</span></a></li>');
							if(trackingCode) {
								// if there is a tracking code, append it to <a href>
								if(navObject.items[i].menuDropDown[j].menuItemUrl.search('\\?') != -1){
									// if there is a '?' in the link, add tracking code using '&'
									$('#menuTab'+i+' #menuItem'+j+' a').attr('href',$('#menuTab'+i+' #menuItem'+j+' a').attr('href')+'&cm_sp='+trackingCode+'-_-'+i+'-_-'+j);
								} else {
									// if there is not a '?' in the link add, tracking code using '?'
									$('#menuTab'+i+' #menuItem'+j+' a').attr('href',$('#menuTab'+i+' #menuItem'+j+' a').attr('href')+'?cm_sp='+trackingCode+'-_-'+i+'-_-'+j);
								}
							}
							if(navObject.scType) $('#menuTab'+i+' #menuItem'+j+' a').attr({
										'class':'scTrack scLink',
										'scType':navObject.scType,
										'scValue':navObject.items[i].menuDropDown[j].menuItemText.replace(/\s/g,"").toLowerCase()});
								// if there is a scType & scValue add attributes to <a>
						}
					}
				}
				if(i < 1) $('#mainNav li span').attr('id','firstTab');
					// if menu tab is the first apply firstTab style
			}
		}
	}
}

/* NAV MENU TOGGLE */
function menuToggle($menuTrigger,menuAction) {
	/*if ($menuTrigger.find(".menuDropDown").is(':animated')){return false;}*/
	if (menuAction == "open") {
		$menuTrigger.find(".menuDropDown").fadeIn(100);
	} else {
		$menuTrigger.find(".menuDropDown").fadeOut(100);
	}
}

/* ON-PAGE NAV BUILD FROM JSON FILE */
function buildOnPageNav(onPageNavObject,linkText,linkUrl) {
	if(onPageNavObject.length) {
		for (var i=0; i < onPageNavObject.length; i++) {
			$('ul#onPageNav').append('<li id="onPageNav'+i+'"><a class="scTrack" href="javascript:void(0)" onclick="AnimateScroll(\'#'+onPageNavObject[i].onPageNavAnchor+'\')" scType="scLink" scValue="jumpto:'+onPageNavObject[i].onPageNavText+'" title="Scroll to '+onPageNavObject[i].onPageNavText+'">'+onPageNavObject[i].onPageNavText+'</a></li>');
		}
	}
	if(linkText && linkUrl){
		console.log('linkText: '+linkText+' linkUrl: '+linkUrl);
		// $('#jumpDiv').append('<div class="navLink"><a href="javascript:void(0)" onclick="anchorScroll($(this),$(\'#'+linkUrl+'\'),offset)" title="Scroll to '+linkText+'">'+linkText+'</a></div>');
	}
}

/* PARAGRAPH WIDOW FIX
replaces the last space in all h1 - h6, p and li text with a &nbsp; (non-breaking space) so the word prior to the last space wraps with the last word, eliminating paragraph widows */
$("#agency #agency p").not("#agency p.openDisclaimer, #agency div.bizCard p.bizType").each(function() {
	$(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,"&nbsp;$1"));
});

/* RENDER */
function render(html,obj){
    for(var k in obj){
        html = html.replace(new RegExp('{{'+k+'}}','g'),obj[k]);
    }
    return html;  
}

/* SELECTED MENU ITEM FORMATTING
for the informational page navigation to adjust the html and css for selected menu item when using include */
if ($("ul.main li#"+$("ul.main").attr("active"))){
	$("ul.main li#"+$("ul.main").attr("active")).html(function(){
		return $(this).text();
	}).addClass("selected");
}

/* SHOW DETAILS */
function showDetails(contents,node,width,height){
	if (node.find('.frame').length) {
		return;
	} else {
		// closeDetails();
		var $frame = $('<div class="frame"><div class="contents"></div><button class="close" onclick="closeDetails($(this))">close</button></div>');
		$frame.find('.contents').append(contents);
		if(width && height){
			$(node).append($frame);
			width = parseInt(width);
			height = parseInt(height);
			node.find('.frame').css({
				'margin-left' : '-'+width/2+'px',
				'margin-top' : '-'+height/2+'px'
			}).animate({
				'height' : height,
				'opacity' : 1,
				'width' : width
			},300,function(){
				$(this).find('.contents').fadeIn(200,function(){
					$(this).parent().find('.close').fadeIn(600);
				});
			});
		} else {
			return;
		}
	}
}
function closeDetails($button){
	$button.fadeOut(100).siblings('.contents').fadeOut(100,function(){
		$button.parent('.frame').animate({
			'height' : 0,
			'opacity' : 0
		},250,function(){
			$(this).remove();
		});
	});
}

/* SOCIAL MEDIA */
/* GOOGLE+ */
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

/* TWITTER */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/* FACEBOOK */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* SOLD OUT FLAG */
$('.soldOut img').unwrap();
$('.soldOut .callToAction, .soldOut .openDisclaimer, .soldOutIcc .openDisclaimer, .soldOut .iccCode, .soldOutIcc .iccCode,.soldOutIcc .icc').remove();
$('.soldOut, .soldOutIcc').append('<img src="/content/iw/images/sold-out.png" alt="Sold out" class="flag"/>');

/* UNWRAP ACTIVE TABS 
if ($("#tabPanel").length) {
	var activeItems = $("#tabPanel").attr("active").split(",");
	for (i = 0; i < activeItems.length; i++) {
		var activeHtml = $("#"+activeItems[i]+" a:first > *").unwrap();
	}
}*/

/* DISCLAIMER POPULATE 
on page load this script finds all instrances of .disclaimer and tests to see if the attribute "disclaimer" is present.  If it is, it takes the value of the disclaimer attribute, cross references it against the disclaimerText object, and  appends the appropriate property to the <p> tag in .disclaimer 
$(".footer .disclaimer p").each(function() {
	$(this).append(disclaimerText[$(this).attr("disclaimer")]);
}); */