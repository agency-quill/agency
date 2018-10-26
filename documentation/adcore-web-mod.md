# ADCore Modules
To support the new responsive grid we have developed some new ADCore modules. They are rich in functionality. They support images with or without links, HTML that floats on top of an image or with no image at all. Links can be standard, jump-to, QView or add to cart. You can add as many image maps, iccs or pop-ups as you want too.

## How to read descriptions
For the new modules offer code fields accept different types of data. Some take URLs, some take text, some take HTML and some take arrays. For every field in an offer code there is a description of the type of content that goes in the field. You can see it by clicking on the _ADCore field name (e.g. "u_ad_img_src")_. Some of these descriptions use special characters to explain how the data should be formatted.

### Commas ( ,,, )
Several of the fields accept comma-separated arrays as input. Commas separate the data into individual array elements. Each value is used by the scripts that build the web ad. 

##### Example
`QQ6PNT96, d9p, Offer good through 9/2/18., 5-time use per customer&#44; 1 per order., /daily-deals/cbx/35.html', , bottom:2%;right:2%;`

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
Instead of web ad offer codes we have built grid unit-based offer codes. They can hold traditional web ad images or HTML. Below each of the offer codes is defined and each of its fields is explained. Most of the modules share fields.

### 2018-half-mod
This module spans half of the width of the viewport if it's over 1011px wide and the full width if it is under 1012px. If the card flag is set, the module will render 3-up if the viewport is over 1520px, 2-up if it's over 1012px and 1-up under that. There is more info on the card-based pattern in the [Responsive grid](https://github.com/agency-quill/agency-project-files/blob/master/documentation/responsive-grid.md) doc.

__If an apostrophe, or single quote, is present in any of the fields for this offer code, the apostrophe/single quote needs to be preceded by a backslash (\\).__

This offer code renders HTML similar to the below example.
```html
<div class="grid__unit--50">
	<div class="webModInner">
		<a href="/link/url/page.html" title="link title">
			<picture class="webModPicture align--left">
				<img alt="web ad img alt tag" class="webModImg--50" src="/img/src/image.gif">
			</picture>
		</a>
	</div>
</div>
```

#### u\_ad\_card
This is a flag that, when set, will render the web ad in the card-based pattern by adding the `webModCard` class. The number one `1` will set the flag. Leaving the field blank or the number `0` will not.

##### Example
`1`

#### u\_ad\_class
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`) should be populated here.

##### Examples
`className`
`listOf classNames`

#### u\_ad\_css
This field applies inline CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self:start;height:25%;`

#### u\_ad\_html\_text
This field accepts HTML. If the `u_ad_img_src` field is populated, the HTML will float on top of the image. If not, the HTML is treated as inline. ADCore will remove any carriage returns or tabs, so indented HTML like the second example is acceptable.

##### Examples
```html
<p class="a align--center p--small" style="bottom:0;position:absolute">Inkjet Printers</p>
```

```html
<a class="a" href="javascript:void(0)" onclick="AnimateScroll(\'#computerAccessories\')" title="Scroll to Computer Accessories">
	<picture class="webModPicture align--left">
		<img alt="Computer Accessories" class="webModImg__webModCard--12-5" src="/content/iw/adv/2018/08/022/W18_08_022_HPST06125.png">
	</picture>
	<p class="a p--jump">Computer Accessories</p>
</a>
```

#### u\_ad\_icc
This field accepts one or more arrays of data that are used to build coupon clipper ICCs. Each of the elements in an array hold specific information. The position of the data is important. Some of the array elements have default values that will render if the element is left blank. If an element is left blank, the comma still needs to be included. Otherwise the data will not line up with the script and it will fail.

##### Format
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__icc (position 1):__ An eight character alphanumeric string&mdash;an ICC (e.g `QP7DLR27`).

__disclaimer (position 2):__ This content renders the text that appears in the 'Disclaimer' popup. It can take HTML, raw text and disclaimer numbers (the number of a disclaimer preceded by the lowercase letter 'd'). These can be combined in any way.

##### Examples
`d9`
`This is a disclaimer`
```html
d1<br><br>d2<br><br>d3 Excludes Epson<sup class="sup">&reg;</sup>
```
```html
<ul><li>d1</li><li>d2</li><li>d3</li>
```

__expiry (position 3):__ This is a string of text that includes the expiry day of the offer (e.g. `Offer good through 1/1/18.`). ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__usage (position 4):__ This is a string of text that describes the usage conditions of the ICC (e.g. `One-time use per order.`, `Five-time use per customer.`, etc.). If left blank the default value is `One-time use per order.`. ___If a comma is present, the comma needs to be replaced with the HTML code for a comma (`&#44;`).___

__url (position 5):__ Once the coupon is clipped, the call to action changes from 'Save to Clipboard' to 'Shop Now'. This is where you put the URL to which the 'Shop Now' call to action will link. If left blank the default value is the URL of the home page (i.e. `/default.aspx`).

__color (position 6):__ This defines the color of the expiry, usage and disclaimer link text. It can use any of the formats acceptable in CSS (i.e. hexadecimal, RGB or name). If left blank the default value is `#000` (black).

##### Examples
`#ffffff`
`#fff`
`rgb(255,255,255)`
`white`

__css (position 7):__ This field applies inline CSS code to the `style` attribute of `div.webModInner`.

##### Example
`align-self:start;height:25%;`

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
This field applies a space-separated list of classes to `div.webModInner`. Classes governing margins and alignment (e.g. `margin__bottom--50`, `align--center`) should be populated here.

##### Example
`className`
`listOf classNames`

#### u\_ad\_img\_align
This field aligns the content of the web ad. The alignment applies to web ad/banner images with regard to cropping. It also applies to any HTML whether superimposed on an image or not.

##### Format
`left | center | right`

#### u\_ad\_img\_alt
This field is the `alt` attribute for the image referenced in `u_ad_img_src`. It should be text that describes the content of the image.

#### u\_ad\_img\_src
This is the URL of the image file used for a web ad or banner. If this is empty, and the `u_ad_html_text` field is empty the offer code is not rendered. The surrounding HTML 'collapses'. 

##### Example
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg`

#### u\_ad\_link\_href
This field handles what happens when you click the web ad/banner. It takes four different types of input. You can leave it blank which will not render and anchor element at all. You can add a URL for a traditional link, an anchor for an on-page anchor link, and a comma-separated array for either a QView popup or to add a SKU directly to the cart.

##### Format
`url | #anchor | sku, effort, item, (qview | addtocart)`

__url:__ This is a traditional URL.

__#anchor:__ This is a hash mark (`#`) followed by the id value of an element elsewhere on the page.

__sku, effort, item, (qview | addtocart):__ This is an array of values. First are the SKU number, effort number and item number of a product. That is followed by 'qview' for the QView popup or 'addtocart' if the link adds the product directly to the cart.

##### Examples
`/bulk-printer-paper-and-office-paper/cbu/28.html`
`#filteredContainer`
`181004, 723, 105007CT, qview`
`181004, 723, 105007CT, addtocart`

#### u\_ad\_link\_title
This field adds a `title` attribute to the anchor element populated in the `u_ad_link_href` field. This text should describe the result of clicking the link. This text appears in a tooltip when the cursor hovers over the web ad/banner.

##### Examples
`Click to see our selection of gel pens`
`Scroll to All Deals`
`Learn more about Quill Brand&reg; 8" Stainless-Steel Scissors`
`Add Quill Brand&reg; 8" Stainless-Steel Scissors to your cart`

#### u\_ad\_map\_href
x

[Mozilla Developers Network (MDN) `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)

##### Format
`link, (circle | default | poly | rect), title, [coord1, coordX][ + url...]`

__link (position 1):__ This is a link, and follows the same format as `u_ad_link_href`. It can be a URL, anchor, QView or add to cart link.

__(circle | default | poly | rect) (position 2):__ For an image map the `<map>` element is populated with `<area>` elements that define the space(s) within the map that are links. `<area>` elements have a `shape` attribute that sets the shape of the area. Adoy. The possible options are 'circle', 'default', 'poly' and 'rect'. The choice of shape affects the `coords` attribute see below for more info.

__title (position 3):__ This field adds a `title` attribute to the `<area>` element. This text should describe the result of clicking the `<area>`. This text appears in a tooltip when the cursor hovers over the `<area>`.

__coord1, coordX (position 4-):__ This is a series of numbers, separated by commas. They define the pixel coordinates for the image map `<area>`. Depending on the value of position 2, the `<area>` `shape` attribute, the numbers represent different things.

* _circle -_ creates a circle. It requires 3 numbers, `x,y,r` where `x,y` is a pair specifying the center of the circle and `r `is a value for the radius.
* _default -_ requires no numbers. The image map extends to the full height and width of the image. This is useful if you want to give the majority of the image one link. Then you use the plus sign (`+`) to add `<area>` elements for the smaller regions. The additional `<area>` elements sit on top of the default `<area>`
* _poly -_ creates a complex polygon. It requires as many numbers as necessary where every two numbers is a set of `x,y` pairs for each point in the polygon: `x1,y1,x2,y2,x3,y3`, and so on.
* _rect -_ creates a rectangle.  It requires 4 numbers, two `x,y` pairs: left, top, right, bottom.

##### Examples


#### u\_ad\_popup
x

##### Format
`cta, html[, (css | icc)][ + cta...]`

##### Example


### 2018-eighth-mod
### 2018-full-mod
### 2018-half-mod
### 2018-quarter-mod
### 2018-third-mod
### 2018-two-third-mod