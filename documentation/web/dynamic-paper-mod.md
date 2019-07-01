# Dynamic Paper Module HTML
_Last updated 6/25/19_

In order to reduce labor and update times for the paper modules on the [Hot Deals](https://www.quill.com/daily-deals/cbx/35.html) page, SDS and the Agency have developed some scripts, styles and `HTML` code. The code allows Product Specialists to update paper prices on the fly without requesting any updates to the offer code or image files. It does this by pulling item prices from the back-end dynamically.

The new code is designed to work with the existing `2018-half-mod` web ad module. The code is placed in the `u_ad_html_text` field.



 

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