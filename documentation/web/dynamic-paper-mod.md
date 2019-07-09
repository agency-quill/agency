# Dynamic Paper Module HTML
_Last updated 7/2/19_

To improve turn-around times and reduce work updating the paper modules on the [Hot Deals](https://www.quill.com/daily-deals/cbx/35.html) page, SDS and the Agency have developed some new scripts, styles and `HTML` code. The code allows Product Specialists to update paper prices on the fly without requesting any updates to the offer code or image files. It does this by pulling item prices from the back-end dynamically.

The new code is designed to work with the existing `2018-half-mod` web ad module. It needs to be placed in the `u_ad_html_text` field.

Below the important elements of the code are explained including: how to build product images, what flags exist and how to use them, how to use the `GetSkuPrice()` script to dynamically fetch a price from the back end and more.

There is an example of the full code at the end of this document.

## Formatting Reminder
__Apostrophes/single quotes need to be preceded by a backslash (e.g. `\'`). Positioning using `px` can pose an issue for responsive design.__

## Product Image
The module includes a right-aligned product image. This image needs to be 480px wide by 290px tall. Please keep in mind that the bottom 10px of the image will be cut off. Save the file in the `PNG` format, with a transparent background.

## Flags
Not all offers have a flag, but some of them do. At this point we have two: 'Hot Buy' and 'Sale,' but this list may grow with the needs of the business.

The flag code is `html`-based and is part of the `html` in the `u_ad_html_text` field.

### Hot Buy
![alt text](https://www.quill.com/content/iw/images/documentation/hot-buy.png "Hot Buy flag screenshot")

This flag is used when the offer is being presented to an inactive customer (i.e a customer that hasn't made a paper purchase in over 4 months).

##### Example
```html
<div class="flag--hotbuy">Hot Buy</div>
```

### Sale
![alt text](https://www.quill.com/content/iw/images/documentation/sale.png "Sale flag screenshot")

This flag is used when the offer is being presented to an active customer (i.e a customer that has made a paper purchase within the last 3 months).

##### Example
```html
<div class="flag--sale">Sale</div>
```

## Dynamic Price Code
The code that makes these offers work is the `GetSkuPrice()` function written by SDS. Placing it in your code will dynamically insert the price of any item on the site in raw text format. To use it place an array of two values to the back-end script: effort number and item, or find, number. The example below will pull the price for a case of Quill Brand Copy Paper (720222CT) for effort 499.

##### Example
```javascript
<$= GetSkuPrice(['499','720222CT']) $>
```

## Dynamic Savings Code
Some of the offers require both a regular price and a sale price. In these cases an Agency-developed script dynamically renders the amount of savings (the regular price minus the sale price).

The script grabs the price in the `span` element with the `wasPrice` class attribute, gets the price in the `span` element with the `isPrice` class attribute, subtracts the `.isPrice` from the `.wasPrice` and puts the answer in the `span` element with the `salePrice` class attribute, replacing the `{{savings}}` text.

The `.wasPrice` is always effort 901 unless another is provided.

The examples below show the html that will render the sale price for a case of Quill Brand Copy Paper (effort: 499 and item: 720222CT), the regular price (effort: 901) and the amount of savings.

##### Example
```html
<p class="p--paper">Was <span class="strike">$<span class="wasPrice"><$= GetSkuPrice(['901','720222CT']) $></span></span> Save $<span class="savePrice">{{savings}}</span></p>

<h3 class="h3--paper quillRed"><span class="sup">$</span><span class="isPrice"><$= GetSkuPrice(['499','720222CT']) $></span></h3>
```

## Classes
### `div__content--paper`
### `div__background--paper`
### `div__img--paper`
### `div__info--paper`
### `flag--hotbuy`
### `flag--sale`
### `h2--paper`
### `h3--paper`
### `img--paper`
### `p--paper`

## E-mail Jump Link `id`
One last note before getting to the code: Some emails and web ads use jump links to scroll to the paper ads on page load. In order to do this, there needs to be an `id` attribute assigned to, at least, one of the four paper ads. The `id` that needs to be used is: 'paper'. It should be populated in the `u_ad_id` field of the offer code. The `id` can be added to any of the paper ads, so long as they are programmed into either the 18th or 19th position of the current [Hot Deals](https://www.quill.com/daily-deals/cbx/35.html) template (`2019-hot-deals-2`).
 
## The Code
Below is the code populated in the `u_ad_html_text` field of the `2018-half-mod` offer code `W19_06_040_4PLSP0150`.

```html
<div class="webModPicture">

	<div class="align--center div__background--paper webModImg--50">

		<div class="div__content--paper">

			<div class="flag--hotbuy">Hot Buy</div>

			<h2 class="h2--paper">Quill Brand Copy Paper</h2>

			<p class="p--paper">Was <span class="strike">$<span class="wasPrice"><$= GetSkuPrice(['901','720222CT']) $></span></span> Save $<span class="savePrice">{{savings}}</span></p>

			<h3 class="h3--paper quillRed"><span class="sup">$</span><span class="isPrice"><$= GetSkuPrice(['499','720222CT']) $></span></h3>

			<p class="p--paper">Limit 3.</p>

			<button class="button--standard margin__bottom--12-5 margin__top--50 pfm scTrack" locater="carousel_1" onclick="showPriceInCart(this,\'200885\',\'499\',\'720222CT\')" sctype="pfm" sku="200885" title="Add to cart">Add to Cart</button>

			<p class="icc__p--conditions quillOrange margin__bottom--12-5" style="width:175px">No further discounts can be applied to the $<$= GetSkuPrice(['499','720222CT']) $> paper price.</p>

		</div>

		<div class="div__img--paper">
		
			<img class="img--paper" src="/content/iw/adv/2019/06/040/720222CT.png" alt="Quill Brand Copy Paper Case">

		</div>

		<div class="div__info--paper">
		
			<p class="p--paper quillWhite">10-Ream | 92 bright | 20 lb</p>
		
		</div>

	</div>

</div>
```

## Product Image
## Flags
## Dynamic Price Code
## Dynamic Savings Code
## Classes