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
	helpNav = '<nav class="secondary-nav js-help-nav u-display-on-desktop"><ul class="secondary-nav__ul"><a href="/content/index/help/california-notice.cshtml" title="Learn more about our California Notice"><li class="secondary-nav__li secondary-nav__li--first">California Notice</li></a><a href="/contact-us/cbi/25.cshtml" title="Learn how to contact us"><li class="secondary-nav__li">Contact Us</li></a><a href="/content/index/help/coupons.cshtml" title="Learn about our coupons"><li class="secondary-nav__li">Coupons</li></a><a href="/frequently-asked-questions/cbi/95.cshtml" title="Read answers to frequently asked questions"><li class="secondary-nav__li">Frequently Asked Questions</li></a><a href="/content/index/help/technology-leasing-program.cshtml" title="Learn about our Technology Leasing Program"><li class="secondary-nav__li">Technology Leasing Program</li></a><a href="/MenuRedirect/RedirectTo?routeAction=2" title="Click to open your My Orders page (you may need to log in)"><li class="secondary-nav__li">Order Tracking &amp; History</li></a><a href="/payment-information/cbi/94.cshtml" title="Learn more about our payment terms"><li class="secondary-nav__li">Payment Information</li></a><a href="/policies-security/cbi/98.cshtml" title="Learn more about our privacy notice"><li class="secondary-nav__li">Privacy Notice</li></a><a href="/content/index/help/product-review-terms-of-use.cshtml" title="Learn more about our Product Review Terms of Use"><li class="secondary-nav__li">Product Review Terms of Use</li></a><a href="/frequently-asked-purchasing-manager-questions/cbi/70.cshtml" title="Learn more about Quill.com Purchasing Manager"><li class="secondary-nav__li">Purchasing Manager</li></a><a href="/quillcash/cbi/99.cshtml" title="Learn more about QuillCASH&trade; Rewards"><li class="secondary-nav__li">QuillCASH&trade; Rewards</li></a><a href="/quill-guarantees/cbi/96.cshtml" title="Learn more about our Quill promises and guarantees"><li class="secondary-nav__li">Quill Promises &amp; Guarantees</li></a><a href="/Catalog/rebate/rebatecenter.aspx" title="Click to find a rebate form"><li class="secondary-nav__li">Rebate Forms</li></a><a href="/free-online-returns/cbi/100.cshtml" title="Learn more about making a return"><li class="secondary-nav__li">Returns</li></a><a href="/content/index/help/safesender.cshtml" title="Learn how to keep Quill.com emails from being marked as spam"><li class="secondary-nav__li">Safe Sender List</li></a><a href="/shipping-order-policies/cbi/101.cshtml" title="Learn more about our shipping and order policies"><li class="secondary-nav__li">Shipping and Order Policies</li></a><a href="/content/index/help/sweepstakes-rules.cshtml" title="Learn more about our sweepstakes rules"><li class="secondary-nav__li">Sweepstakes Rules</li></a><a href="/content/index/help/terms-and-conditions.cshtml" title="Learn more about our Terms and Conditions"><li class="secondary-nav__li">Terms and Conditions</li></a><a href="/content/index/help/vulnerability.cshtml" title="Learn more about our Vulnerability Disclosure Policy"><li class="secondary-nav__li">Vulnerability Disclosure Policy</li></a><a href="/warranty-recall-information/cbi/102.cshtml" title="Learn more about our Warranty and Recall Policy"><li class="secondary-nav__li">Warranty and Recall</li></a></ul></nav>',
	helpPrivacyNav = '<nav class="secondary-nav js-help-nav u-display-on-desktop"><ul class="secondary-nav__ul"><a href="/content/index/help/privacy/california-notice.cshtml" title="Learn more about our California Notice"><li class="secondary-nav__li secondary-nav__li--first">California Notice</li></a><a href="/content/index/help/privacy/privacy-policy.cshtml" title="Learn more about our privacy notice"><li class="secondary-nav__li">Privacy Notice</li></a><a href="/content/index/help/privacy/vulnerability.cshtml" title="Learn more about our Vulnerability Disclosure Policy"><li class="secondary-nav__li">Vulnerability Disclosure Policy</li></a></ul></nav>',
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
	    	'disclaimer': 'onclick="tooltip.init($(this),\'{{text}}\',{{width}},{hasCloseButton:true,unique:true,extDisclaimer:true})"',
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
	    'icc': '<div class="icc {{class}}" id="icc-{{code}}" {{events}} style="{{css}}">{{gift}}<div id="couponWrap_{{code}}" class="cpn-clipper-wrap"><button type="button" id="cpnCode_{{code}}" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" data-cpncode="{{code}}" sctype="cta" ctatype="savetoclipboard" locater="featured">Save to Clipboard</button><a id="unclip_cpn_{{code}}" data-cpncode="{{code}}" class="button shopNow-btn scTrack" sctype="cta" ctatype="removefromclipboard" locater="Un-Clip-Coupon" onclick="CouponClipper.removeCoupon($(this))" style="display:none">Unclip Coupon</a></div><div class="dv-coupon-code icc__div ST_s" style="color:{{color}}"><span>Code: </span><strong class="strong">{{code}}</strong></div><p class="icc__p--conditions" style="color:{{color}}">{{usage}}</p><p class="icc__p--conditions" style="color:{{color}}">{{expiry}} <a class="icc__a" data-tooltips="" href="javascript:void(0)" id="disclaimer-{{code}}" onclick="tooltip.init($(this),\'{{disclaimer}}\', 400, {hasCloseButton:true, extDisclaimer:true})" style="color:{{color}}">Disclaimer</a></p></div>',
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