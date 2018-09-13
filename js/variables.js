var carouselAttr = [	// array of carousel attributes with default values
		['data-carousel-rotate-auto','no'],	// does the carousel rotate automatically
		['data-carousel-rotate-buttons','yes'],	// should the left & right buttons be visible
		['data-carousel-rotate-click-stop','yes'],	// should the carousel stop when contents have been clicked
		['data-carousel-rotate-direction','right'],	// what direction should the carousel automatically rotate
		['data-carousel-rotate-indicator','no'],	// should a rotation idicator be visible
		['data-carousel-rotate-interval','3000']
	],	// how long should the carousel pause between automatic rotations
	carouselStopObj = new Object(),	// object of clearInterval variables
	/*errorMsgs = [	// array of error messages
		'data-rotate-direction must be "left" or "right"'	// direction value missing or misspelled
	],*/
	objBank = [],	// array of loaded objects
	size = {
		'mobPort': '499',
		'mobLand': '765',
		'tabPort': '1011',
		'tabLand': '1279',
		'laptop': '1519'
	},
	template = {	// object of html templates for render()
	    'a': '<a class="{{class}}" href="{{href}}" id="{{id}}" {{events}} style="{{css}}" title="{{title}}">{{a}}</a>',
	    'area': '<area class="{{class}}" coords="{{coords}}" href="{{href}}" id="{{id}}" {{events}} shape="{{shape}}" style="{{css}}" title="{{title}}">',
	    'button': '<button class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{button}}</button>',
	    'div': '<div class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{div}}</div>',
	    'em': '<em class="{{class}}" id="{{id}}" {{events}} style="{{css}}">{{em}}</em>',
	    'event': {
	    	'accordion': 'data-accordion-button-close="{{close}}" data-accordion-button-open="{{open}}" onclick="accordionToggle({{target}},$(this))"',
	    	'addToCart': 'bindtype="dom" ctatype="addtocart" data-effortcode="{{effort}}" data-findnumber="{{absolute}}" data-pagetype="Content" data-promocode="989989999" data-sku="{{sku}}" itemindex="0" onclick="$(this).AddItemsToCart({mode: \'qviewatc\', skuid: \'{{sku}}\'})" rel="QViewAddToCart_{{sku}}" tabindex="1"',
	    	'AnimateScroll': 'onClick="AnimateScroll(\'{{end}}\')"',
	    	'carousel': 'onClick="carouselRotate($(this).parent(\'{{carousel}}\'),\'{{direction}}\')"',
	    	'dropDown': 'onmouseenter="dropDown({{target}},\'open\')" onmouseleave="dropDown({{target}},\'close\')"',
	    	'popup': 'onclick="popupToggle($(\'{{popup}}\'))"',
	    	'qView': 'onclick="showPriceInCart(this, \'{{sku}}\', \'{{effort}}\', \'{{absolute}}\')"',
	    	'toolTip': 'onclick="$(this).Tooltip(\'{{text}}\',{{width}},{hasCloseButton:true})"'
	    },
	    'flag': {
	    	'outOfStock': '<img alt="Out of Stock" class="img__flag--coupon" src="/content/iw/images/out-of-stock.png">',
	    	'soldOut': '<img alt="Sold Out" class="img__flag--coupon" src="/content/iw/images/sold-out2.png">',
	    },
	    'heading': '<h{{num}} class="h{{num}} {{class}}" id="{{id}}" {{events}} style="{{css}}">{{heading}}</h{{num}}>',
	    'hr': '<hr class="{{class}}" style="{{css}}">',
	    'href': '{{url}}{{mcode}}{{number}}{{tag}}',
	    'icc': '<div class="icc {{class}}" {{events}} id="icc-{{code}}" style="{{css}}">{{gift}}<div id="couponWrap_{{code}}" class="cpn-clipper-wrap"><div class="coupon_code"><span>Code: </span><b>{{code}}</b><a id="unclip_cpn_{{code}}" data-cpncode="{{code}}" class="unclip-coupon scTrack" scType="cta" ctaType="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a></div><button type="button" id="cpnCode_{{code}}" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" scType="cta" ctaType="savetoclipboard" data-cpncode="{{code}}">Save to Clipboard</button><a href="{{url}}" class="button shopNow-btn scTrack" scType="scLink" scValue="shopnow:{{code}}" id="shopNowBtn_{{code}}" style="display:none">Shop Now</a></div><p class="icc__p--conditions" style="color:{{color}}">{{usage}}</p><p class="icc__p--conditions" style="color:{{color}}">{{expiry}} <a class="icc__a" href="javascript:void(0)" id="disclaimer-{{code}}" onclick="$(this).Tooltip(\'{{disclaimer}}\',400,{hasCloseButton:true})" style="color:{{color}}">Disclaimer.</a></p></div>',
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