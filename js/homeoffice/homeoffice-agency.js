var helpNavHTML = '<nav class="secondary-nav js-help-nav u-display-on-desktop"><ul class="secondary-nav__ul"><a href="/content/index/help/california-notice/default.cshtml" title="Open California Notice"><li class="secondary-nav__li">California Notice</li></a><a href="/content/index/help/contact-us/default.cshtml" title="Open Contact Us page"><li class="secondary-nav__li">Contact Us</li></a><a href="/content/index/help/coupons/default.cshtml" title="Open Coupons page"><li class="secondary-nav__li">Coupons</li></a><a href="/content/index/help/frequently-asked-questions/default.cshtml" title="Open Frequently Asked Questions page"><li class="secondary-nav__li">Frequently Asked Questions</li></a><a href="/content/index/help/homeoffice-rewards/default.cshtml" title="Open HomeOffice Rewards page"><li class="secondary-nav__li">HomeOffice Rewards</li></a><a href="/content/index/help/ink-toner-price-match/default.cshtml" title="Open Ink &amp; Toner Price Match page"><li class="secondary-nav__li">Ink &amp; Toner Price Match</li></a><a href="/content/index/help/online-returns/default.cshtml" title="Open Online Returns page"><li class="secondary-nav__li">Online Returns</li></a><a href="/content/index/help/payment-information/default.cshtml" title="Open Payment Information page"><li class="secondary-nav__li">Payment Information</li></a><a href="/content/index/help/policies-security/default.cshtml" title="Open Policies and Security page"><li class="secondary-nav__li">Policies and Security</li></a><a href="/content/index/help/product-review-terms-of-use/default.cshtml" title="Open Product Review Terms of Use page"><li class="secondary-nav__li">Product Review Terms of Use</li></a><a href="/content/index/help/shipping-order-policies/default.cshtml" title="Open Shipping Order Policies page"><li class="secondary-nav__li">Shipping Order Policies</li></a><a href="/content/index/help/terms-and-conditions/default.cshtml" title="Open Terms and Conditions page"><li class="secondary-nav__li">Terms and Conditions</li></a><a href="/content/index/help/vulnerability/default.cshtml" title="Open Vulnerability Disclosure Policy page"><li class="secondary-nav__li">Vulnerability Disclosure Policy</li></a><a href="/content/index/help/warranty-recall-information/default.cshtml" title="Open Warranty and Recall Information page"><li class="secondary-nav__li">Warranty and Recall Information</li></a></ul></nav>';

function helpNavBuilder(pageURL){
	$('.main').prepend(helpNavHTML);
	$('[href*="'+pageURL+'"] .secondary-nav__li').unwrap().attr('class','secondary-nav__li--active');
}

function displayModToggle(displayed,mod){
	if(displayed){
		$(mod).css('display','none');
		return false;
	}else{
		$(mod).css('display','revert');
		return true;
	}
}