# ADCore modules
Last updated 12/12/18 by A. Edmonds
---

To support the new responsive grid we have developed some new ADCore modules. They are rich in functionality. They support images with or without links, and HTML that floats on top of an image or with no image at all. Links can be standard, jump-to, QView or add to cart. You can add as many image maps, iccs or pop-ups as you want too.

You can see an example of each of these modules, and how they interact, on the [Responsive Web Ads](http://qpreview.quillcorp.com/content/iw/tools/responsive-grid/responsive-web-ads.cshtml) page.

## How to read descriptions
For the new modules, offer code fields accept different types of data. Some take URLs, some take text, some take HTML and some take arrays. For every field in an offer code there is a description of the type of content that goes in the field. You can see it by clicking on the _ADCore field name (e.g. "u_ad_img_src")_. Some of these descriptions use special characters to explain how the data should be formatted.

### Commas ( ,,, )
Several of the fields accept comma-separated arrays as input. Commas separate the data into individual array elements.

##### Example
`QQ6PNT96, d9p, Offer good through 9/2/18., 5-time use per customer&#44; 1 per order., /daily-deals/cbx/35.html, , bottom:2%;right:2%;`

### Brackets ( \[ \] )
Brackets are used to denote optional values. In the example below, everything from the comma after 'expiry' through 'css' is optional. 

##### Example
`icc, disclaimer, expiry[, usage, url, color, css]`

### Pipes ( || )
The pipe symbol is used to separate a list of options. It means 'or'. In a list separated by pipes one of the items must be chosen. In the example below are the possible values for an `<area>` `shape` attribute. You can chose 'circle', 'default', 'poly' or 'rect'. One of them must be used. 

##### Example
`circle | default | poly | rect`

### Plus Signs ( ++ )
The plus sign is used to separate arrays. When you put the data in to the `u_ad_icc` field, you put in an array with each element separated by commas. That array is used to render an ICC. If you want more ICCs you need to add more arrays. The way to do that is by separating the arrays with plus signs.

##### Example
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

### CSS selector notation
In the descriptions below CSS selector notation has been used as shorthand for element/class/id code. The example below refers to a `<div>` element with a class of `webModInner` and an id of `thisIsAnId`. You can learn more about CSS selectors on the [Mozilla Developers Network (MDN) CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) page.

##### Example
`div.webModInner#thisIsAnId`

## Grid Units/Web Ads
Instead of offer codes to be used strictly for web ads, we have built grid unit-based offer codes. They can hold traditional web ad images or more complex HTML. Below each of the offer codes is defined and each of its fields is explained. Most of the modules have fields in common.

#### Warning!
* __Apostrophes, or single quotes, needs to be preceded by a backslash (e.g. `\'`).__

* __Commas need to be replaced with the ASCII value `&#044;`.__

* __Positioning using `px` can pose an issue for responsive design.__

### 2018-eighth-mod
This unit should always follow the card-based pattern. It renders between 2-up under 500px through 12-up at 1520px and above. This unit is best used for jump-to links. It isn't really wide enough for a lot of content.

This offer code renders HTML similar to the below examples.
```html
<div class="agency grid__unit--12-5 searchOffer webModCard">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<img alt="web ad img alt tag" class="webModImg--12-5" src="/img/src/image.gif">
			</picture>
		</a>
	</div>
</div>
```

```html
<div class="agency grid__unit--12-5 searchOffer webModCard">
	<div class="webModInner">
		<div class="div__html--static">
			<a class="a" href="javascript:void(0)" onclick="AnimateScroll('#thisIsAnId')" title="Scroll to Section header">
				<picture class="webModPicture align--left">
					<img alt="web ad img alt tag" class="webModImg__webModCard--12-5" src="/img/src/image.gif">
				</picture>
				<p class="a p--jump">Call to action</p>
			</a>
		</div>
	</div>
</div>
```

#### u\_ad\_card
This is a flag that, when set, will render the web ad in the card-based pattern by adding the `webModCard` class to the grid unit. The number `1` will set the flag. Leaving the field blank or using the number `0` will not. The `2018-eighth-mod` module should always follow the card-based pattern. It is not wide enough to support the static pattern.

There is more info on the card-based and static patterns in the [Responsive grid](https://github.com/agency-quill/agency-project-files/blob/master/documentation/responsive-grid.md) doc.

##### Example
`1`

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`) should be populated here.

##### Examples
`className`

`listOf classNames`

#### u\_ad\_css
This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image designated in the `u_ad_img_src` field. If not, the HTML is treated as `display: inline`. ADCore will remove any carriage returns or tabs, so indented HTML like the second example below is acceptable.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#thisIsAnId\')" title="Scroll to Section header">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/content/iw/adv/2018/08/022/W18_08_022_HPST06125.png">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_id
This field adds an `id` attribute to the `div.webModInner` element. You can only have one id.

##### Example
`idName`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad images. It governs how the image is cropped at different viewport widths. (i.e. a `u_ad_img_align` of 'left' will crop the right-hand side of the image.) It also applies to any HTML whether superimposed on an image or not. If the `u_ad_card` flag is set the image will not be cropped, but will still be aligned.

##### Format
`left | center | right`

##### Examples
`left`

`center`

`right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image for users that can't see it.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`).__

#### u\_ad\_img\_src
This is the URL of the image file used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty, the offer code is not rendered. The surrounding HTML 'collapses'. 

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView pop-up or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are three numbers used to identify the product.  They are, in order, the SKU number, effort number and item number. That is followed by 'qview' for the QView pop-up or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`

`#filteredContainer`

`181004, 723, 105007CT, qview`

`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`.__

##### Examples
`Click to see our selection of gel pens`

`Scroll to All Deals`

`Learn more about Quill Brand&reg; 8&quot; Stainless-Steel Scissors`

`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_popup
This field creates text links that, upon clicking, generate pop-up overlays. The rendered pop-up is the same as the one used for disclaimers. The pop-up can free free-standing, with it's own CSS for positioning and formatting, or it can be locked into an ICC for gift details.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`[cta], html[, css][ + cta...]`

__cta (position 1):__ This position is the call to action text that opens the pop-up when clicked. If omitted the default value is `Gift Details`.

__html (position 2):__ This position is the HTML that displays in the pop-up when the call to action is clicked.

__css (position 3):__ This position can hold the in-line CSS that governs the appearance and position of the call to action. If omitted, the default value is: `color:#000`.

##### Example
`More information, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Sunt saepe magni commodi&#44; necessitatibus quas&#44; eligendi magnam exercitationem sequi ipsum at iure officiis praesentium sed blanditiis iste! Nostrum ex quidem cumque!, bottom:15px;color:#fff;`

### 2018-half-mod
This module spans half of the width of the viewport if it's over 1011px wide and the full width if it is under 1012px. If the card flag is set, the module will render 3-up if the viewport is over 1520px, 2-up if it's over 1012px and 1-up under that. 

This offer code renders HTML similar to the below example.
```html
<div class="agency grid__unit--50 searchOffer">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<img alt="web ad img alt tag" class="webModImg--50" src="/img/src/image.gif">
			</picture>
		</a>
	</div>
</div>
```

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`, etc.) should be populated here.

##### Examples
`className`

`listOf classNames`

#### u\_ad\_css
This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image designated in the `u_ad_img_src` field. If not, the HTML is treated as `display: inline`. ADCore will remove any carriage returns or tabs, so indented HTML like the second example below is acceptable.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#thisIsAnId\')" title="Scroll to Section header">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/img/src/image.gif">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_icc
This field accepts one or more arrays of data used to build coupon clipper ICCs. Each of the elements in an array represent specific information. __The position of the data is important.__ Some of the array elements have default values that will render if the element is left blank. If an element is left blank, _the comma still needs to be included_. Otherwise the data will not line up with the script and it will fail.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__icc (position 1):__ An eight character alphanumeric string&mdash;an ICC (e.g 'QP7DLR27').

__disclaimer (position 2):__ This content renders the text that appears in the 'Disclaimer' pop-up. It can be HTML, raw text, disclaimer numbers (the number of a disclaimer preceded by the lowercase letter 'd') or a combination.

##### Examples
`d9`

`This is a disclaimer`

```html
d1<br><br>d2<br><br>d3 Excludes Epson<sup class="sup">&reg;</sup>
```

```html
<ul><li>d1</li><li>d2</li><li>d3</li>
```

__expiry (position 3):__ This is a string of text that includes the expiry day of the offer (e.g. 'Offer good through 1/1/18.'). ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__usage (position 4):__ This is a string of text that describes the usage conditions of the ICC (e.g. 'One-time use per order.', 'Five-time use per customer.', etc.). If left blank the default value is 'One-time use per order.'. ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__url (position 5):__ Once the coupon is clipped, the call to action changes from 'Save to Clipboard' to 'Shop Now'. This is where you put the URL to which the 'Shop Now' call to action will link. If left blank the default value is the URL of the home page (i.e. '/default.aspx').

__color (position 6):__ This defines the color of the expiry, usage and disclaimer link text. It can use any of the formats acceptable in CSS (i.e. hexadecimal, RGB or name). If left blank the default value is '#000' (black).

##### Examples
`#ffffff`

`#fff`

`rgb(255,255,255)`

`white`

__css (position 7):__ This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

This entry will render the HTML below it:

```
ICCICC01, d3 Excludes Epson<sup class="sup">&reg;</sup>., Offer good through 1/1/18., , /ink-toner-finder, #fff, bottom:2%;left:2%; + ICCICC02, d9, Offer good through 12/31/18., Five-time use per customer., , #aaa, bottom:2%;right:2%;
```

```html
<div class="icc" id="icc-ICCICC01" style="bottom:2%;left:2%;">
	<div id="couponWrap_ICCICC01" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC01</b>
			<a id="unclip_cpn_ICCICC01" data-cpncode="ICCICC01" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC01" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC01">Save to Clipboard</button>
		<a href="/ink-toner-finder" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC01" id="shopNowBtn_ICCICC01" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#fff">One-time use per order.</p>
	<p class="icc__p--conditions" style="color:#fff">Offer good through 1/1/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC01" onclick="$(this).Tooltip('Waives $7.99 small-order handling fee on orders less than $45 within the 48 contiguous United States. Excludes Epson<sup class="sup">&reg;</sup>.',400,{hasCloseButton:true})" style="color:#fff">Disclaimer.</a></p>
</div>
<div class="icc " id="icc-ICCICC02" style="bottom:2%;right:2%;">
	<div id="couponWrap_ICCICC02" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC02</b>
			<a id="unclip_cpn_ICCICC02" data-cpncode="ICCICC02" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC02" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC02">Save to Clipboard</button>
		<a href="/default.aspx" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC02" id="shopNowBtn_ICCICC02" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#aaa">Five-time use per customer.</p>
	<p class="icc__p--conditions" style="color:#aaa">Offer good through 12/31/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC02" onclick="$(this).Tooltip('While quantities last. Premiums subject to availability. A substitution of equal or greater value may be made. BIOFREEZE&reg; products&#044; QuillSUBSCRIBE orders&#044; special order items beginning with the prefix &rdquo;SPW&ldquo; or &rdquo;UNI&#044;&ldquo; and some free gift offers are excluded from this offer. Excludes HP and Epson&reg;. Minimum spend requirement applies to merchandise only; it does not include furniture assembly&#044; packaging&#044; applicable taxes or shipping &amp; handling charges.',400,{hasCloseButton:true})" style="color:#aaa">Disclaimer.</a></p>
</div>
```

#### u\_ad\_id
This field adds an `id` attribute to the `div.webModInner` element. You can only have one id.

##### Example
`idName`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad images. It governs how the image is cropped at different viewport widths. (i.e. a `u_ad_img_align` of 'left' will crop the right-hand side of the image.) It also applies to any HTML whether superimposed on an image or not. If the `u_ad_card` flag is set the image will not be cropped, but will still be aligned.

##### Format
`left | center | right`

##### Examples
`left`

`center`

`right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image for users that can't see it.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`).__

#### u\_ad\_img\_src
This is the URL of the image file used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty, the offer code is not rendered. The surrounding HTML 'collapses'. 

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView pop-up or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id attribute value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are three numbers used to identify the product.  They are, in order, the SKU number, effort number and item number. That is followed by 'qview' for the QView pop-up or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`

`#filteredContainer`

`181004, 723, 105007CT, qview`

`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`.__

##### Examples
`Click to see our selection of gel pens`

`Scroll to All Deals`

`Learn more about Quill Brand&reg; 8&quot; Stainless-Steel Scissors`

`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_map\_href
This field generates an image map and as many `<area>` elements as you need. _This functionality is not responsive at this point and should probably be avoided._ For more info on the `<area>` element check out the [Mozilla Developers Network (MDN) `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) reference.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`link, (circle | default | poly | rect), title, [coord1, coordX][ + link...]`

__link (position 1):__ This is a link, and follows the same format as `u_ad_link_href`. It can be a URL, anchor, QView or add to cart link.

__circle | default | poly | rect (position 2):__ For an image map the `<map>` element is populated with `<area>` elements that define the space(s) within the map that are clickable. `<area>` elements have a `shape` attribute that tells the browser the shape of the area. The possible options are 'circle', 'default', 'poly' and 'rect'. The choice of shape affects the `coords` attribute below.

__title (position 3):__ This field adds a `title` attribute to the `<area>` element. This text should describe the result of clicking the `<area>`. This text appears in a tooltip when the cursor hovers over the `<area>`.

__coord1, coordX (position 4-):__ This is a series of numbers, separated by commas. They define the pixel coordinates for the image map `<area>`. Depending on the value of position 2, the `<area>` `shape` attribute, the numbers represent different things.

* _circle -_ creates a circle. It requires 3 numbers, `x,y,r` where `x,y` is a pair specifying the center of the circle and `r `is a value for the radius.
* _default -_ requires no numbers. The image map extends to the full height and width of the image. This is useful if you want to give the majority of the image one link. Then you use the plus sign (`+`) to add `<area>` elements for the smaller regions. The additional `<area>` elements sit on top of the default `<area>`
* _poly -_ creates a complex polygon. It requires as many numbers as necessary where every two numbers is a set of `x,y` pairs for each point in the polygon: `x1,y1,x2,y2,x3,y3`, and so on.
* _rect -_ creates a rectangle.  It requires 4 numbers, two `x,y` pairs: left, top, right, bottom.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html, circle, Shop our selection of printer paper, 100, 100, 50`

`#filteredContainer, rect, Scroll to All Products, 0, 0, 100, 50`

`181004, 723, 105007CT, qview, poly, Learn more about HammerMill&reg; Copy Plus Copy Paper, 0, 0, 100, 100, 0, 100, 0, 0`

#### u\_ad\_popup
This field creates text links that, upon clicking, generate pop-up overlays. The rendered pop-up is the same as the one used for disclaimers. The pop-up can free free-standing, with it's own CSS for positioning and formatting, or it can be locked into an ICC for gift details.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`cta, html[, (css | icc)][ + cta...]`

__cta (position 1):__ This position is the call to action text that opens the pop-up when clicked. If omitted the default value is `Gift Details`.

__html (position 2):__ This position is the HTML that displays in the pop-up when the call to action is clicked.

__(css | icc) (position 3):__ This position can hold the in-line CSS that governs the appearance and position of the call to action or the ICC that this pop-up will be tied to. If omitted, the default value is: `color:#000`.

##### Examples
`Gift details, <ul><li>4 Ceramic mugs with tapered shape</li><li>Contemporary designs</li><li>12 oz. capacity</li><li>Microwave and dishwasher safe</li></ul>, ICCICC01`

`More information, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Sunt saepe magni commodi&#44; necessitatibus quas&#44; eligendi magnam exercitationem sequi ipsum at iure officiis praesentium sed blanditiis iste! Nostrum ex quidem cumque!, bottom:15px;color:#fff;`

### 2018-quarter-mod
This module spans a quarter of the width of the viewport if it's over 1011px wide and half of the width if it is under 1012px. If the card flag is set, the module will render 6-up if the viewport is over 1520px, 5-up if it's over 1280px, 4-up if it over 1012px, 3-up if it's over 766px and 2-up under that. 

This offer code renders HTML similar to the below examples.
```html
<div class="agency grid__unit--25 searchOffer">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<img alt="web ad img alt tag" class="webModImg--25" src="/img/src/image.gif">
			</picture>
		</a>
	</div>
</div>
```

```html
<div class="agency grid__unit--25 searchOffer webModCard">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<img alt="web ad img alt tag" class="webModImg__webModCard--25" src="/img/src/image.gif">
			</picture>
		</a>
	</div>
</div>
```

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`, etc.) should be populated here.

##### Examples
`className`

`listOf classNames`

#### u\_ad\_css
This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image designated in the `u_ad_img_src` field. If not, the HTML is treated as `display: inline`. ADCore will remove any carriage returns or tabs, so indented HTML like the second example below is acceptable.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#thisIsAnId\')" title="Scroll to Section header">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/img/src/image.gif">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_icc
This field accepts one or more arrays of data used to build coupon clipper ICCs. Each of the elements in an array represent specific information. __The position of the data is important.__ Some of the array elements have default values that will render if the element is left blank. If an element is left blank, _the comma still needs to be included_. Otherwise the data will not line up with the script and it will fail.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__icc (position 1):__ An eight character alphanumeric string&mdash;an ICC (e.g 'QP7DLR27').

__disclaimer (position 2):__ This content renders the text that appears in the 'Disclaimer' pop-up. It can be HTML, raw text, disclaimer numbers (the number of a disclaimer preceded by the lowercase letter 'd') or a combination.

##### Examples
`d9`

`This is a disclaimer`

```html
d1<br><br>d2<br><br>d3 Excludes Epson<sup class="sup">&reg;</sup>
```

```html
<ul><li>d1</li><li>d2</li><li>d3</li>
```

__expiry (position 3):__ This is a string of text that includes the expiry day of the offer (e.g. 'Offer good through 1/1/18.'). ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__usage (position 4):__ This is a string of text that describes the usage conditions of the ICC (e.g. 'One-time use per order.', 'Five-time use per customer.', etc.). If left blank the default value is 'One-time use per order.'. ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__url (position 5):__ Once the coupon is clipped, the call to action changes from 'Save to Clipboard' to 'Shop Now'. This is where you put the URL to which the 'Shop Now' call to action will link. If left blank the default value is the URL of the home page (i.e. '/default.aspx').

__color (position 6):__ This defines the color of the expiry, usage and disclaimer link text. It can use any of the formats acceptable in CSS (i.e. hexadecimal, RGB or name). If left blank the default value is '#000' (black).

##### Examples
`#ffffff`

`#fff`

`rgb(255,255,255)`

`white`

__css (position 7):__ This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

This entry will render the HTML below it:

```
ICCICC01, d3 Excludes Epson<sup class="sup">&reg;</sup>., Offer good through 1/1/18., , /ink-toner-finder, #fff, bottom:2%;left:2%; + ICCICC02, d9, Offer good through 12/31/18., Five-time use per customer., , #aaa, bottom:2%;right:2%;
```

```html
<div class="icc" id="icc-ICCICC01" style="bottom:2%;left:2%;">
	<div id="couponWrap_ICCICC01" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC01</b>
			<a id="unclip_cpn_ICCICC01" data-cpncode="ICCICC01" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC01" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC01">Save to Clipboard</button>
		<a href="/ink-toner-finder" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC01" id="shopNowBtn_ICCICC01" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#fff">One-time use per order.</p>
	<p class="icc__p--conditions" style="color:#fff">Offer good through 1/1/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC01" onclick="$(this).Tooltip('Waives $7.99 small-order handling fee on orders less than $45 within the 48 contiguous United States. Excludes Epson<sup class="sup">&reg;</sup>.',400,{hasCloseButton:true})" style="color:#fff">Disclaimer.</a></p>
</div>
<div class="icc " id="icc-ICCICC02" style="bottom:2%;right:2%;">
	<div id="couponWrap_ICCICC02" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC02</b>
			<a id="unclip_cpn_ICCICC02" data-cpncode="ICCICC02" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC02" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC02">Save to Clipboard</button>
		<a href="/default.aspx" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC02" id="shopNowBtn_ICCICC02" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#aaa">Five-time use per customer.</p>
	<p class="icc__p--conditions" style="color:#aaa">Offer good through 12/31/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC02" onclick="$(this).Tooltip('While quantities last. Premiums subject to availability. A substitution of equal or greater value may be made. BIOFREEZE&reg; products&#044; QuillSUBSCRIBE orders&#044; special order items beginning with the prefix &rdquo;SPW&ldquo; or &rdquo;UNI&#044;&ldquo; and some free gift offers are excluded from this offer. Excludes HP and Epson&reg;. Minimum spend requirement applies to merchandise only; it does not include furniture assembly&#044; packaging&#044; applicable taxes or shipping &amp; handling charges.',400,{hasCloseButton:true})" style="color:#aaa">Disclaimer.</a></p>
</div>
```

#### u\_ad\_id
This field adds an `id` attribute to the `div.webModInner` element. You can only have one id.

##### Example
`idName`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad images. It governs how the image is cropped at different viewport widths. (i.e. a `u_ad_img_align` of 'left' will crop the right-hand side of the image.) It also applies to any HTML whether superimposed on an image or not. If the `u_ad_card` flag is set the image will not be cropped, but will still be aligned.

##### Format
`left | center | right`

##### Examples
`left`

`center`

`right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image for users that can't see it.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`).__

#### u\_ad\_img\_src
This is the URL of the image file used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty, the offer code is not rendered. The surrounding HTML 'collapses'. 

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView pop-up or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id attribute value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are three numbers used to identify the product.  They are, in order, the SKU number, effort number and item number. That is followed by 'qview' for the QView pop-up or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`

`#filteredContainer`

`181004, 723, 105007CT, qview`

`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`.__

##### Examples
`Click to see our selection of gel pens`

`Scroll to All Deals`

`Learn more about Quill Brand&reg; 8&quot; Stainless-Steel Scissors`

`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_map\_href
This field generates an image map and as many `<area>` elements as you need. _This functionality is not responsive at this point and should probably be avoided._ For more info on the `<area>` element check out the [Mozilla Developers Network (MDN) `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) reference.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`link, (circle | default | poly | rect), title, [coord1, coordX][ + link...]`

__link (position 1):__ This is a link, and follows the same format as `u_ad_link_href`. It can be a URL, anchor, QView or add to cart link.

__circle | default | poly | rect (position 2):__ For an image map the `<map>` element is populated with `<area>` elements that define the space(s) within the map that are clickable. `<area>` elements have a `shape` attribute that tells the browser the shape of the area. The possible options are 'circle', 'default', 'poly' and 'rect'. The choice of shape affects the `coords` attribute below.

__title (position 3):__ This field adds a `title` attribute to the `<area>` element. This text should describe the result of clicking the `<area>`. This text appears in a tooltip when the cursor hovers over the `<area>`.

__coord1, coordX (position 4-):__ This is a series of numbers, separated by commas. They define the pixel coordinates for the image map `<area>`. Depending on the value of position 2, the `<area>` `shape` attribute, the numbers represent different things.

* _circle -_ creates a circle. It requires 3 numbers, `x,y,r` where `x,y` is a pair specifying the center of the circle and `r `is a value for the radius.
* _default -_ requires no numbers. The image map extends to the full height and width of the image. This is useful if you want to give the majority of the image one link. Then you use the plus sign (`+`) to add `<area>` elements for the smaller regions. The additional `<area>` elements sit on top of the default `<area>`
* _poly -_ creates a complex polygon. It requires as many numbers as necessary where every two numbers is a set of `x,y` pairs for each point in the polygon: `x1,y1,x2,y2,x3,y3`, and so on.
* _rect -_ creates a rectangle.  It requires 4 numbers, two `x,y` pairs: left, top, right, bottom.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html, circle, Shop our selection of printer paper, 100, 100, 50`

`#filteredContainer, rect, Scroll to All Products, 0, 0, 100, 50`

`181004, 723, 105007CT, qview, poly, Learn more about HammerMill&reg; Copy Plus Copy Paper, 0, 0, 100, 100, 0, 100, 0, 0`

#### u\_ad\_popup
This field creates text links that, upon clicking, generate pop-up overlays. The rendered pop-up is the same as the one used for disclaimers. The pop-up can free free-standing, with it's own CSS for positioning and formatting, or it can be locked into an ICC for gift details.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`cta, html[, (css | icc)][ + cta...]`

__cta (position 1):__ This position is the call to action text that opens the pop-up when clicked. If omitted the default value is `Gift Details`.

__html (position 2):__ This position is the HTML that displays in the pop-up when the call to action is clicked.

__(css | icc) (position 3):__ This position can hold the in-line CSS that governs the appearance and position of the call to action or the ICC that this pop-up will be tied to. If omitted, the default value is: `color:#000`.

##### Examples
`Gift details, <ul><li>4 Ceramic mugs with tapered shape</li><li>Contemporary designs</li><li>12 oz. capacity</li><li>Microwave and dishwasher safe</li></ul>, ICCICC01`

`More information, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Sunt saepe magni commodi&#44; necessitatibus quas&#44; eligendi magnam exercitationem sequi ipsum at iure officiis praesentium sed blanditiis iste! Nostrum ex quidem cumque!, bottom:15px;color:#fff;`

### 2018-third-mod
This module spans a third of the width of the view port if it's over 499px and full width under 500px. To do this it requires two image files. One image (600px) is used under 500px, and over 1011px.  The other (320px) is used between 500px and 1011px. 

This offer code renders HTML similar to the below example.
```html
<div class="agency grid__unit--100 searchOffer">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<source media="(max-width: 1011px)" srcset="/img/src/image-lg.gif">
				<img alt="web ad img alt tag" class="webModImg--100" src="/img/src/image-sm.gif">
			</picture>
		</a>
	</div>
</div>
```

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`, etc.) should be populated here.

##### Examples
`className`

`listOf classNames`

#### u\_ad\_css
This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image designated in the `u_ad_img_src` field. If not, the HTML is treated as `display: inline`. ADCore will remove any carriage returns or tabs, so indented HTML like the second example below is acceptable.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#thisIsAnId\')" title="Scroll to Section header">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/img/src/image.gif">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_icc
This field accepts one or more arrays of data used to build coupon clipper ICCs. Each of the elements in an array represent specific information. __The position of the data is important.__ Some of the array elements have default values that will render if the element is left blank. If an element is left blank, _the comma still needs to be included_. Otherwise the data will not line up with the script and it will fail.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__icc (position 1):__ An eight character alphanumeric string&mdash;an ICC (e.g 'QP7DLR27').

__disclaimer (position 2):__ This content renders the text that appears in the 'Disclaimer' pop-up. It can be HTML, raw text, disclaimer numbers (the number of a disclaimer preceded by the lowercase letter 'd') or a combination.

##### Examples
`d9`

`This is a disclaimer`

```html
d1<br><br>d2<br><br>d3 Excludes Epson<sup class="sup">&reg;</sup>
```

```html
<ul><li>d1</li><li>d2</li><li>d3</li>
```

__expiry (position 3):__ This is a string of text that includes the expiry day of the offer (e.g. 'Offer good through 1/1/18.'). ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__usage (position 4):__ This is a string of text that describes the usage conditions of the ICC (e.g. 'One-time use per order.', 'Five-time use per customer.', etc.). If left blank the default value is 'One-time use per order.'. ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__url (position 5):__ Once the coupon is clipped, the call to action changes from 'Save to Clipboard' to 'Shop Now'. This is where you put the URL to which the 'Shop Now' call to action will link. If left blank the default value is the URL of the home page (i.e. '/default.aspx').

__color (position 6):__ This defines the color of the expiry, usage and disclaimer link text. It can use any of the formats acceptable in CSS (i.e. hexadecimal, RGB or name). If left blank the default value is '#000' (black).

##### Examples
`#ffffff`

`#fff`

`rgb(255,255,255)`

`white`

__css (position 7):__ This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

This entry will render the HTML below it:

```
ICCICC01, d3 Excludes Epson<sup class="sup">&reg;</sup>., Offer good through 1/1/18., , /ink-toner-finder, #fff, bottom:2%;left:2%; + ICCICC02, d9, Offer good through 12/31/18., Five-time use per customer., , #aaa, bottom:2%;right:2%;
```

```html
<div class="icc" id="icc-ICCICC01" style="bottom:2%;left:2%;">
	<div id="couponWrap_ICCICC01" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC01</b>
			<a id="unclip_cpn_ICCICC01" data-cpncode="ICCICC01" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC01" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC01">Save to Clipboard</button>
		<a href="/ink-toner-finder" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC01" id="shopNowBtn_ICCICC01" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#fff">One-time use per order.</p>
	<p class="icc__p--conditions" style="color:#fff">Offer good through 1/1/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC01" onclick="$(this).Tooltip('Waives $7.99 small-order handling fee on orders less than $45 within the 48 contiguous United States. Excludes Epson<sup class="sup">&reg;</sup>.',400,{hasCloseButton:true})" style="color:#fff">Disclaimer.</a></p>
</div>
<div class="icc " id="icc-ICCICC02" style="bottom:2%;right:2%;">
	<div id="couponWrap_ICCICC02" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC02</b>
			<a id="unclip_cpn_ICCICC02" data-cpncode="ICCICC02" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC02" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC02">Save to Clipboard</button>
		<a href="/default.aspx" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC02" id="shopNowBtn_ICCICC02" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#aaa">Five-time use per customer.</p>
	<p class="icc__p--conditions" style="color:#aaa">Offer good through 12/31/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC02" onclick="$(this).Tooltip('While quantities last. Premiums subject to availability. A substitution of equal or greater value may be made. BIOFREEZE&reg; products&#044; QuillSUBSCRIBE orders&#044; special order items beginning with the prefix &rdquo;SPW&ldquo; or &rdquo;UNI&#044;&ldquo; and some free gift offers are excluded from this offer. Excludes HP and Epson&reg;. Minimum spend requirement applies to merchandise only; it does not include furniture assembly&#044; packaging&#044; applicable taxes or shipping &amp; handling charges.',400,{hasCloseButton:true})" style="color:#aaa">Disclaimer.</a></p>
</div>
```

#### u\_ad\_id
This field adds an `id` attribute to the `div.webModInner` element. You can only have one id.

##### Example
`idName`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad images. It governs how the image is cropped at different viewport widths. (i.e. a `u_ad_img_align` of 'left' will crop the right-hand side of the image.) It also applies to any HTML whether superimposed on an image or not. If the `u_ad_card` flag is set the image will not be cropped, but will still be aligned.

##### Format
`left | center | right`

##### Examples
`left`

`center`

`right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image for users that can't see it.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`).__

#### u\_ad\_img\_src
This is an array of URLs of the image files used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty the offer code is not rendered. The surrounding HTML 'collapses'. For a `2018-third-mod` based offer code two image files are required. The first URL is for the main (600px) image, the second for the secondary (320px) image. For more info on image sizes see the [Web ad image sizes](https://github.com/agency-quill/agency-project-files/blob/master/documentation/web-ad-img-sizes.md) doc.

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT-1.jpg, /content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT-2.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView pop-up or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id attribute value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are three numbers used to identify the product.  They are, in order, the SKU number, effort number and item number. That is followed by 'qview' for the QView pop-up or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`

`#filteredContainer`

`181004, 723, 105007CT, qview`

`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`.__

##### Examples
`Click to see our selection of gel pens`

`Scroll to All Deals`

`Learn more about Quill Brand&reg; 8&quot; Stainless-Steel Scissors`

`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_map\_href
This field generates an image map and as many `<area>` elements as you need. _This functionality is not responsive at this point and should probably be avoided._ For more info on the `<area>` element check out the [Mozilla Developers Network (MDN) `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) reference.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`link, (circle | default | poly | rect), title, [coord1, coordX][ + link...]`

__link (position 1):__ This is a link, and follows the same format as `u_ad_link_href`. It can be a URL, anchor, QView or add to cart link.

__circle | default | poly | rect (position 2):__ For an image map the `<map>` element is populated with `<area>` elements that define the space(s) within the map that are clickable. `<area>` elements have a `shape` attribute that tells the browser the shape of the area. The possible options are 'circle', 'default', 'poly' and 'rect'. The choice of shape affects the `coords` attribute below.

__title (position 3):__ This field adds a `title` attribute to the `<area>` element. This text should describe the result of clicking the `<area>`. This text appears in a tooltip when the cursor hovers over the `<area>`.

__coord1, coordX (position 4-):__ This is a series of numbers, separated by commas. They define the pixel coordinates for the image map `<area>`. Depending on the value of position 2, the `<area>` `shape` attribute, the numbers represent different things.

* _circle -_ creates a circle. It requires 3 numbers, `x,y,r` where `x,y` is a pair specifying the center of the circle and `r `is a value for the radius.
* _default -_ requires no numbers. The image map extends to the full height and width of the image. This is useful if you want to give the majority of the image one link. Then you use the plus sign (`+`) to add `<area>` elements for the smaller regions. The additional `<area>` elements sit on top of the default `<area>`
* _poly -_ creates a complex polygon. It requires as many numbers as necessary where every two numbers is a set of `x,y` pairs for each point in the polygon: `x1,y1,x2,y2,x3,y3`, and so on.
* _rect -_ creates a rectangle.  It requires 4 numbers, two `x,y` pairs: left, top, right, bottom.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html, circle, Shop our selection of printer paper, 100, 100, 50`

`#filteredContainer, rect, Scroll to All Products, 0, 0, 100, 50`

`181004, 723, 105007CT, qview, poly, Learn more about HammerMill&reg; Copy Plus Copy Paper, 0, 0, 100, 100, 0, 100, 0, 0`

#### u\_ad\_popup
This field creates text links that, upon clicking, generate pop-up overlays. The rendered pop-up is the same as the one used for disclaimers. The pop-up can free free-standing, with it's own CSS for positioning and formatting, or it can be locked into an ICC for gift details.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`cta, html[, (css | icc)][ + cta...]`

__cta (position 1):__ This position is the call to action text that opens the pop-up when clicked. If omitted the default value is `Gift Details`.

__html (position 2):__ This position is the HTML that displays in the pop-up when the call to action is clicked.

__(css | icc) (position 3):__ This position can hold the in-line CSS that governs the appearance and position of the call to action or the ICC that this pop-up will be tied to. If omitted, the default value is: `color:#000`.

##### Examples
`Gift details, <ul><li>4 Ceramic mugs with tapered shape</li><li>Contemporary designs</li><li>12 oz. capacity</li><li>Microwave and dishwasher safe</li></ul>, ICCICC01`

`More information, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Sunt saepe magni commodi&#44; necessitatibus quas&#44; eligendi magnam exercitationem sequi ipsum at iure officiis praesentium sed blanditiis iste! Nostrum ex quidem cumque!, bottom:15px;color:#fff;`

### 2018-two-third-mod
This module hasn't been developed yet.

### 2019-full-mod
This module spans the full width of the view port at all viewport sizes. To do this it requires two image files. The smaller, or mobile, image (966px wide) renders for viewports under 1012px wide.  The larger (1858px wide) image renders for viewports 1012px and over. There is no option for a card-based pattern.

This offer code renders HTML similar to the below example.
```html
<div class="agency grid__unit--100 searchOffer">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<source media="(max-width: 1011px)" srcset="/img/src/image-lg.gif">
				<img alt="web ad img alt tag" class="webModImg--100" src="/img/src/image-sm.gif">
			</picture>
		</a>
	</div>
</div>
```

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`, etc.) should be populated here.

##### Examples
`className`

`listOf classNames`

#### u\_ad\_css
This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image designated in the `u_ad_img_src` field. If not, the HTML is treated as `display: inline`. ADCore will remove any carriage returns or tabs, so indented HTML like the second example below is acceptable.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#thisIsAnId\')" title="Scroll to Section header">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/img/src/image.gif">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_icc
This field accepts one or more arrays of data used to build coupon clipper ICCs. Each of the elements in an array represent specific information. __The position of the data is important.__ Some of the array elements have default values that will render if the element is left blank. If an element is left blank, _the comma still needs to be included_. Otherwise the data will not line up with the script and it will fail.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__icc (position 1):__ An eight character alphanumeric string&mdash;an ICC (e.g 'QP7DLR27').

__disclaimer (position 2):__ This content renders the text that appears in the 'Disclaimer' pop-up. It can be HTML, raw text, disclaimer numbers (the number of a disclaimer preceded by the lowercase letter 'd') or a combination.

##### Examples
`d9`

`This is a disclaimer`

```html
d1<br><br>d2<br><br>d3 Excludes Epson<sup class="sup">&reg;</sup>
```

```html
<ul><li>d1</li><li>d2</li><li>d3</li>
```

__expiry (position 3):__ This is a string of text that includes the expiry day of the offer (e.g. 'Offer good through 1/1/18.'). ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__usage (position 4):__ This is a string of text that describes the usage conditions of the ICC (e.g. 'One-time use per order.', 'Five-time use per customer.', etc.). If left blank the default value is 'One-time use per order.'. ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__url (position 5):__ Once the coupon is clipped, the call to action changes from 'Save to Clipboard' to 'Shop Now'. This is where you put the URL to which the 'Shop Now' call to action will link. If left blank the default value is the URL of the home page (i.e. '/default.aspx').

__color (position 6):__ This defines the color of the expiry, usage and disclaimer link text. It can use any of the formats acceptable in CSS (i.e. hexadecimal, RGB or name). If left blank the default value is '#000' (black).

##### Examples
`#ffffff`

`#fff`

`rgb(255,255,255)`

`white`

__css (position 7):__ This field applies in-line CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self: start; height: 25%;`

This entry will render the HTML below it:

```
ICCICC01, d3 Excludes Epson<sup class="sup">&reg;</sup>., Offer good through 1/1/18., , /ink-toner-finder, #fff, bottom:2%;left:2%; + ICCICC02, d9, Offer good through 12/31/18., Five-time use per customer., , #aaa, bottom:2%;right:2%;
```

```html
<div class="icc" id="icc-ICCICC01" style="bottom:2%;left:2%;">
	<div id="couponWrap_ICCICC01" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC01</b>
			<a id="unclip_cpn_ICCICC01" data-cpncode="ICCICC01" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC01" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC01">Save to Clipboard</button>
		<a href="/ink-toner-finder" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC01" id="shopNowBtn_ICCICC01" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#fff">One-time use per order.</p>
	<p class="icc__p--conditions" style="color:#fff">Offer good through 1/1/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC01" onclick="$(this).Tooltip('Waives $7.99 small-order handling fee on orders less than $45 within the 48 contiguous United States. Excludes Epson<sup class="sup">&reg;</sup>.',400,{hasCloseButton:true})" style="color:#fff">Disclaimer.</a></p>
</div>
<div class="icc " id="icc-ICCICC02" style="bottom:2%;right:2%;">
	<div id="couponWrap_ICCICC02" class="cpn-clipper-wrap">
		<div class="coupon_code">
			<span>Code: </span><b>ICCICC02</b>
			<a id="unclip_cpn_ICCICC02" data-cpncode="ICCICC02" class="unclip-coupon scTrack" sctype="cta" ctatype="removefromclipboard" locater="undo" onclick="CouponClipper.removeCoupon($(this))" style="display:none"><i class="unclip-icon"></i>Undo</a>
		</div>
		<button type="button" id="cpnCode_ICCICC02" class="button BtnO js-clipCpnBtn btn-clip-coupon scTrack" sctype="cta" ctatype="savetoclipboard" data-cpncode="ICCICC02">Save to Clipboard</button>
		<a href="/default.aspx" class="button shopNow-btn scTrack" sctype="scLink" scvalue="shopnow:ICCICC02" id="shopNowBtn_ICCICC02" style="display:none">Shop Now</a>
	</div>
	<p class="icc__p--conditions" style="color:#aaa">Five-time use per customer.</p>
	<p class="icc__p--conditions" style="color:#aaa">Offer good through 12/31/18. <a class="icc__a" href="javascript:void(0)" id="disclaimer-ICCICC02" onclick="$(this).Tooltip('While quantities last. Premiums subject to availability. A substitution of equal or greater value may be made. BIOFREEZE&reg; products&#044; QuillSUBSCRIBE orders&#044; special order items beginning with the prefix &rdquo;SPW&ldquo; or &rdquo;UNI&#044;&ldquo; and some free gift offers are excluded from this offer. Excludes HP and Epson&reg;. Minimum spend requirement applies to merchandise only; it does not include furniture assembly&#044; packaging&#044; applicable taxes or shipping &amp; handling charges.',400,{hasCloseButton:true})" style="color:#aaa">Disclaimer.</a></p>
</div>
```

#### u\_ad\_id
This field adds an `id` attribute to the `div.webModInner` element. You can only have one id.

##### Example
`idName`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad images. It governs how the image is cropped at different viewport widths. (i.e. a `u_ad_img_align` of 'left' will crop the right-hand side of the image.) It also applies to any HTML whether superimposed on an image or not. If the `u_ad_card` flag is set the image will not be cropped, but will still be aligned.

##### Format
`left | center | right`

##### Examples
`left`

`center`

`right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image for users that can't see it.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`).__

#### u\_ad\_img\_src
This is an array of URLs of the image files used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty the offer code is not rendered. The surrounding HTML 'collapses'. For a `2018-full-mod` based offer code two image files are required. The first URL is for the large image, the second for the smaller image. For more info on image sizes see the [Web ad image sizes](https://github.com/agency-quill/agency-project-files/blob/master/documentation/web-ad-img-sizes.md) doc.

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT-lg.jpg, /content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT-sm.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView pop-up or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id attribute value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are three numbers used to identify the product.  They are, in order, the SKU number, effort number and item number. That is followed by 'qview' for the QView pop-up or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`

`#filteredContainer`

`181004, 723, 105007CT, qview`

`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`.__

##### Examples
`Click to see our selection of gel pens`

`Scroll to All Deals`

`Learn more about Quill Brand&reg; 8&quot; Stainless-Steel Scissors`

`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_map\_href
This field generates an image map and as many `<area>` elements as you need. _This functionality is not responsive at this point and should probably be avoided._ For more info on the `<area>` element check out the [Mozilla Developers Network (MDN) `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) reference.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`link, (circle | default | poly | rect), title, [coord1, coordX][ + link...]`

__link (position 1):__ This is a link, and follows the same format as `u_ad_link_href`. It can be a URL, anchor, QView or add to cart link.

__circle | default | poly | rect (position 2):__ For an image map the `<map>` element is populated with `<area>` elements that define the space(s) within the map that are clickable. `<area>` elements have a `shape` attribute that tells the browser the shape of the area. The possible options are 'circle', 'default', 'poly' and 'rect'. The choice of shape affects the `coords` attribute below.

__title (position 3):__ This field adds a `title` attribute to the `<area>` element. This text should describe the result of clicking the `<area>`. This text appears in a tooltip when the cursor hovers over the `<area>`.

__coord1, coordX (position 4-):__ This is a series of numbers, separated by commas. They define the pixel coordinates for the image map `<area>`. Depending on the value of position 2, the `<area>` `shape` attribute, the numbers represent different things.

* _circle -_ creates a circle. It requires 3 numbers, `x,y,r` where `x,y` is a pair specifying the center of the circle and `r `is a value for the radius.
* _default -_ requires no numbers. The image map extends to the full height and width of the image. This is useful if you want to give the majority of the image one link. Then you use the plus sign (`+`) to add `<area>` elements for the smaller regions. The additional `<area>` elements sit on top of the default `<area>`
* _poly -_ creates a complex polygon. It requires as many numbers as necessary where every two numbers is a set of `x,y` pairs for each point in the polygon: `x1,y1,x2,y2,x3,y3`, and so on.
* _rect -_ creates a rectangle.  It requires 4 numbers, two `x,y` pairs: left, top, right, bottom.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html, circle, Shop our selection of printer paper, 100, 100, 50`

`#filteredContainer, rect, Scroll to All Products, 0, 0, 100, 50`

`181004, 723, 105007CT, qview, poly, Learn more about HammerMill&reg; Copy Plus Copy Paper, 0, 0, 100, 100, 0, 100, 0, 0`

#### u\_ad\_popup
This field creates text links that, upon clicking, generate pop-up overlays. The rendered pop-up is the same as the one used for disclaimers. The pop-up can free free-standing, with it's own CSS for positioning and formatting, or it can be locked into an ICC for gift details.

__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Commas not used to separate array elements need to be replaced with the ASCII code `&#044;`. Positioning using `px` can pose an issue for responsive design.__

##### Format
`cta, html[, (css | icc)][ + cta...]`

__cta (position 1):__ This position is the call to action text that opens the pop-up when clicked. If omitted the default value is `Gift Details`.

__html (position 2):__ This position is the HTML that displays in the pop-up when the call to action is clicked.

__(css | icc) (position 3):__ This position can hold the in-line CSS that governs the appearance and position of the call to action or the ICC that this pop-up will be tied to. If omitted, the default value is: `color:#000`.

##### Examples
`Gift details, <ul><li>4 Ceramic mugs with tapered shape</li><li>Contemporary designs</li><li>12 oz. capacity</li><li>Microwave and dishwasher safe</li></ul>, ICCICC01`

`More information, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Sunt saepe magni commodi&#44; necessitatibus quas&#44; eligendi magnam exercitationem sequi ipsum at iure officiis praesentium sed blanditiis iste! Nostrum ex quidem cumque!, bottom:15px;color:#fff;`

___
a.edmonds 12/12/18