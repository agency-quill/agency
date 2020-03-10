# Dynamic Paper Module `HTML`
_Last updated 3/10/20_

There is a new paper module for the [Hot Deals](https://www.quill.com/daily-deals/cbx/35.html) page. It uses new scripts, styles, and `HTML` code. The code allows Product Specialists to update paper prices on the fly without requesting any updates to offer codes or images. It does this by pulling item prices from the back-end dynamically.

The new code is designed to work with the existing `2018-half-mod` web ad module. It is populated into the `u_ad_html_text` field.

Below is everything you need to use the dynamic paper module including product images, flags, the `GetSkuPrice()` script, and more.

If you want to jump right into the code, there is an example at the end of this document.

__Reminder: Apostrophes/single quotes in the `u_ad_html_text` field need to be preceded by a backslash (e.g. `\'`). Also, positioning using `px` can pose an issue for responsive design.__

## Product Image
The module includes a product image. The image should be a merchbase image, saved at 480px wide by 290px tall. Keep in mind that the bottom 10px of the image is cut off. Save the file in the `.png` format, with a transparent background.

## Flags
Not all offers have a flag. At this point, we support two: 'Hot Buy' and 'Sale.' This list may grow with the needs of the business.

The flag is html-based and is part of the `HTML` in the `u_ad_html_text` field.

### Hot Buy
![alt text](https://www.quill.com/content/iw/images/documentation/hot-buy.png "Hot Buy flag screen shot")

Use this flag for inactive customers (i.e., a customer that hasn't made a paper purchase in 4 months or more).

##### Example
```html
<div class="flag--hotbuy">Hot Buy</div>
```

### Paper Price Promise
![alt text](https://www.quill.com/content/iw/images/documentation/price-promise.png "Paper Price Promise flag screen shot")

Use this flag for Paper Price Promise SKUs.

##### Example
```html
<div class="flag--promise">Price Promise</div>
```

### Sale
![alt text](https://www.quill.com/content/iw/images/documentation/sale.png "Sale flag screen shot")

Use this flag for active customers (i.e., a customer that has made a paper purchase within the last 3 months).

##### Example
```html
<div class="flag--sale">Sale</div>
```

## Dynamic Price Code
The code that makes these offers work is the `GetSkuPrice()` function written by SDS. Placing it in your code inserts the price of any item on the site in raw text form. To use it, send the function an array of two values: effort number and item, or find, number. The example below pulls the price for a case of [Quill Brand Copy Paper](https://www.quill.com/quill-brand-copy-paper-8-1-2-x-11-92-bright-20-lb-10-reams-500-sheets-720222/cbs/200885.html?Effort_Code=499&Find_Number=720222CT) (item 720222CT) for effort 499. If the effort hasn't been built or has expired, the script substitutes effort 901.  This script is server-based and runs before the page loads. _The space after `<$=` and before `$>` are necessary for the script to function._

##### Example
```javascript
<$= GetSkuPrice(['499','720222CT']) $>
```

## Dynamic Savings Code
Some of the offers require both a regular price and a sale price. In these cases, an Agency-developed script dynamically renders the amount of savings (the regular price minus the sale price). This script is browser-based and runs when the module is rendering after the page has loaded.

The script does the following:
1. Grabs the price in the `span` element with the `wasPrice` class attribute
2. Gets the price in the `span` element with the `isPrice` class attribute
3. Subtracts the `isPrice` from the `wasPrice`
4. Puts the answer in the `span` element with the `salePrice` class attribute, replacing the `{{savings}}` text

The `wasPrice` should be set to effort 901 unless otherwise directed.

The example below shows the `HTML` rendering the sale price for a case of Quill Brand Copy Paper (effort: 499 / item: 720222CT), the regular price (effort: 901) and the amount of savings.

##### Example
```html
<p class="p--paper">Was <span class="strike">$<span class="wasPrice"><$= GetSkuPrice(['901','720222CT']) $></span></span> Save $<span class="savePrice">{{savings}}</span></p>

<h3 class="h3--paper quillRed"><span class="sup">$</span><span class="isPrice"><$= GetSkuPrice(['499','720222CT']) $></span></h3>
```

## Information/Promotional Overlay
At the bottom of the module, roughly in the middle, is an optional overlay.  At this time we have two options.

The standard is the information overlay.  It is a rectangle that holds the number of reams, brightness, and paper weight info separated by vertical bars or pipes.

##### Example
```html
<div class="div__info--paper">
    <p class="p--paper quillWhite">10-Ream | 92 bright | 20 lb</p>
</div>
```

The second option is a half-circle that contains promotional language like "One-time offer." This option is a little more complicated to code as it uses include the `SVG`, `ellipse`, and `text` elements.

##### Example
```html
<svg class="svg--paper" xmlns="http://www.w3.org/2000/svg">
    <ellipse class="ellipse--paper" cx="76" cy="76" rx="76" ry="76"/>
    <text class="svg__text--paper" x="14%" y="72%">One-time offer</text>
</svg>
```

Only the text needs to be modified.  Copy the bulk of the `HTML` as-is.

## Classes
There are a few new classes that have been added to the `agency5.css` style sheet to handle these modules.

__`div__background--paper`__ is the wrapper that contains all of the other content. It sets the background color and padding for the module.

__`div__content--paper`__ houses all of the main content. It holds the flag, product name, pricing info, limits, call to action button, and usage/expiry/disclaimer text. It is left-aligned and has a width between 14% and 46% depending on the viewport width.

__`div__img--paper`__ houses the product image. It is right-aligned and has a width between 53% and 85% depending on the viewport width.

__`div__info--paper`__ is the floating paper infobox. It houses the `p` element with the number of reams, brightness, and paper weight info. It sets the background color, positioning (40% from the left) and padding for the box.

__`h2--paper`__ sets the font attributes for the product name.

__`h3--paper`__ sets the font attributes for the sale price.

__`img--paper`__ sets the position and width (from 67.875% to 94%, depending on viewport width) of the product image within the `div` element with the `div__img--paper` class.

__`p--paper`__ sets the font attributes for the pricing info, limits and info box.

## E-mail Jump Link `id`
One last note before getting to the code: Some e-mails and web ads use jump links to scroll to the paper ads on page load. There needs to be an `id` attribute assigned to, at least, one of the two paper ads in the first row of paper ads (module positions 18 and 19 of the `2019-hot-deals-2` ADCore template). Populate the `u_ad_id` field of all dynamic paper module offer codes with the `id` 'paper.'
 
## The Code
Below is the code populated in the `u_ad_html_text` field of the `2018-half-mod` offer code `W19_06_040_4PLSP0550` following a screenshot of the ad it renders.

##### Example
![alt text](https://www.quill.com/content/iw/images/documentation/W19_06_040_4PLSP0550.png "W19_06_040_4PLSP0550 screen shot")

```html
<div class="cursor--pointer pfm scTrack webModPicture" locater="carousel_1" onclick="showPriceInCart(this,\'200885\',\'510\',\'720222CT\')" sctype="pfm" sku="200885" title="Add to cart">

    <div class="align--center div__background--paper webModImg--50">

        <div class="div__content--paper">

            <div class="flag--hotbuy">Hot Buy</div>

            <h2 class="h2--paper">Quill Brand Copy Paper</h2>

            <p class="p--paper">Was <span class="strike">$<span class="wasPrice"><$= GetSkuPrice(['901','720222CT']) $></span></span> Save $<span class="savePrice">{{savings}}</span></p>

            <h3 class="h3--paper quillRed"><span class="sup">$</span><span class="isPrice"><$= GetSkuPrice(['510','720222CT']) $></span></h3>

            <p class="p--paper">Limit 3.</p>

            <button class="button--standard margin__bottom--12-5 margin__top--50">Add to Cart</button>

            <p class="icc__p--conditions quillOrange margin__bottom--12-5" style="width:175px">No further discounts can be applied to the $<$= GetSkuPrice(['510','720222CT']) $> paper price.</p>

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

## Proofing
Due to their complexity, and reliance on scripts to pull in back-end pricing, the dynamic paper offer codes need to be tested in production.

Unfortunately the `GetSkuPrice()` script doesn't work in Lago or the [Offer Code Preview](https://www.quill.com/csr/offercode?offercode=), so test offer codes need to be used. We have created 16 offer codes, named W19_10_000_PPRMOD01 through W19_10_000_PPRMOD16 which need to be populated with the module code.

There are also 16 offer codes named W19_10_000_PPRLBL01 through W19_10_000_PPRLBL16 which contain a text string of the offer code number (i.e. "W20_02_043_DIGLC0450").

The test offer codes are programmed in CMS to appear on a test spotlight page ([https://www.quill.com/x/cbx/379.html](https://www.quill.com/x/cbx/379.html)) for review. The page is laid out like this:

|   Content             |   Label               |
|   -------             |   -----               |
|   W19_10_000_PPRMOD01 |   W19_10_000_PPRLBL01 |
|   W19_10_000_PPRMOD02 |   W19_10_000_PPRLBL02 |
|   W19_10_000_PPRMOD03 |   W19_10_000_PPRLBL03 |
|   W19_10_000_PPRMOD04 |   W19_10_000_PPRLBL04 |
|   W19_10_000_PPRMOD05 |   W19_10_000_PPRLBL05 | 
|   W19_10_000_PPRMOD06 |   W19_10_000_PPRLBL06 |
|   W19_10_000_PPRMOD07 |   W19_10_000_PPRLBL07 |
|   W19_10_000_PPRMOD08 |   W19_10_000_PPRLBL08 |
|   W19_10_000_PPRMOD09 |   W19_10_000_PPRLBL09 |
|   W19_10_000_PPRMOD10 |   W19_10_000_PPRLBL10 |
|   W19_10_000_PPRMOD11 |   W19_10_000_PPRLBL11 |
|   W19_10_000_PPRMOD12 |   W19_10_000_PPRLBL12 |
|   W19_10_000_PPRMOD13 |   W19_10_000_PPRLBL13 |
|   W19_10_000_PPRMOD14 |   W19_10_000_PPRLBL14 |
|   W19_10_000_PPRMOD15 |   W19_10_000_PPRLBL15 |
|   W19_10_000_PPRMOD16 |   W19_10_000_PPRLBL16 |

When an offer code is finished the designer picks one of the test offer codes from the __Content__ column and places the `HTML` from the finished offer code in it. Then the offer code number is placed in the corresponding offer code from the __Label__ column.

Once the test offer codes are live the test page is sent out for review. _Any edits need to be made to both the web request offer code and the test offer code._