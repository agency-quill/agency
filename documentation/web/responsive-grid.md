# Responsive grid
_Last updated 8/28/18_

Welcome to the world of responsive design!  You are now the proud owner of a reposnsive design grid. Your new responsive grid is made up of HTML and CSS code that works seamlessly on devices from mobile phones to large desktop monitors without the need to write HTML for each. That's right!  You only need to use a single block of code. For a quick introduction to the responsive grid, check out the two examples below. 

[Responsive Grid](http://qpreview.quillcorp.com/content/iw/tools/responsive-grid/responsive-grid.cshtml) &ndash; This is an empty grid that demonstrates the basic layout relationships.

[Responsive Web Ads](http://qpreview.quillcorp.com/content/iw/tools/responsive-grid/responsive-web-ads.cshtml) &ndash; This grid demonstrates the way web ad, or banner, images work within the responsive grid. Review the [Web ad image sizes](https://github.com/agency-quill/agency-project-files/blob/master/documentation/responsive-img-sizes.md) doc for specs on image and cropping sizes.

---

>_Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation._ &ndash; [Responsive Web Design - What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

---

Ethan Marcotte introduced the concept of responsive design in his 2010 _A List Apart_ article [Responsive Web Design](https://alistapart.com/article/responsive-web-design). The idea is pretty simple. Responsive design uses CSS to render HTML differently depending on the user's device. In practice it's a little more complicated, but CSS and HTML have been evolving to accommodate it.

The foundation of responsive design is the __responsive grid__, which uses a combination of cropping, scaling and wrapping to render web pages differently across viewports.

## The underlying functionality
There are some developments in HTML and CSS that make responsive grids possible. Below are a few of the more important ones.

### Semantic HTML
HTML is made up of different types of elements (e.g. semantic, presentation and layout).

Semantic elements have names that describe the content within them (e.g. `<blockquote>`, `<h1>`, `<p>`, `<table>`, etc.). They tell the browser the nature of the content within them.

Presentation elements were intended for presentation purposes (e.g. `<b>`, `<center>`, `<font>`, `<i>`, etc.). They have since been deprecated (are no longer supported) in favor of CSS and new semantic elements (e.g. `<em>`, `<strong>`, etc.).

Layout elements are for breaking the HTML up into visual bocks for layout or applying targeted CSS (e.g. `<div>`, `<span>`, etc.).

HTML5 added some new elements in order to extend the benefits of semantic naming to page layout and presentation. Generic `<div>` elements have been replaced with new, descriptive, elements like `<header>`, `<section>` and `<footer>`. The `<div>` element still exists, but is used for non-semantic content divisions.

##### Example
```html
<article>
	<header>
		<h1>Lorem ipsum dolor sit amet</h1>
	</header>
	<section>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</section>
	<section>
		<p>Nulla accusamus numquam sequi voluptas quod.</p>
	</section>
	<footer>
		<p>Consectetur unde esse sequi eveniet porro illo aperiam.</p>
	</footer>
</article>
```

You can find out more about the new elements and which old elements have been deprecated in the [Mozilla Developers Network (MDN) HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Media queries
Media queries are CSS rules that are applied conditionally, based on some criteria. For responsive design the criteria we use is the viewport width.

If a viewport is 1024px wide, the CSS in a media query specified for a viewport width that falls between 1012px and 1279px will be applied.

This allows our layout to change depending on the width of the user's viewport. For instance, an element that is designed to take up half of the screen on a desktop would have a `width: 50%;`. On a mobile device spanning half of the page would make the element too small, so the layout changes to two rows each with a `width: 100%;`.

Below is an example of managing the left and right padding for an element on a landscape-oriented tablet vs. a laptop.

##### Example
```css 
@media (min-width: 1012px) and (max-width: 1279px) {
	.grid__unit--25 {
		padding-left: 1.25%;
		padding-right: 1.25%;
	}
}

@media (min-width: 1280px) and (max-width: 1519px) {
	.grid__unit--25 {
		padding-left: 10px;
		padding-right: 10px;
	}
}
```

You can find out more about media queries on the [Mozilla Developers Network (MDN) Using media queries page](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

### Responsive typography
CSS3 has added some new typography units to support responsive design. Along with the px, `em` and `%` units we now have the `vh`, `vw`, `vmin` and `vmax` units.

These units allow us to set element sizes relative to the dimensions of the viewport. This is particularly handy for font sizes since the `%` unit for `font-size` is relative to the `font-size` of its parent, not the parent's width or height.

The units are defined as:

+ `vh` 1% of the height of the viewport
+ `vw` 1% of the width of the viewport
+ `vmin` The smaller of `vw` and `vh`
+ `vmax` The larger of `vw` and `vh`

##### Example
```css 
font-size: 3.5vw;
```

If you are interested, [Responsive and Fluid Typography with vh and vw Units](https://www.smashingmagazine.com/2016/05/fluid-typography/) from [Smashing Magazine](https://www.smashingmagazine.com) goes into the subject further.

### The `<picture>` element
The `<picture>` element is what the HTML5 spec calls an [art direction](https://html.spec.whatwg.org/multipage/images.html#art-direction)-based selector element. It allows the browser to choose the appropriate image to load based on specified criteria. Inside a `<picture>` element is an `<img>` element and zero or more `<source>` elements.

The `<source>` element has a `media` attribute that takes a media query as its value.

The example below renders `small-image.jpg` if the viewport width is under 1012px and `large-image.jpg` if it is 1012px or over.

##### Example
```html 
<picture>
	<source media="(max-width: 1011px)" srcset="small-image.jpg">
	<img src="large-image.jpg">
</picture>
```

You can find out more about the `<picture>` element in section [4.8.4 Images of the WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/images.html#images).

### The `calc()` function
The `calc()` function is a way to use more than one unit type when specifying a measurement.

It's easy to lay out an element full width with a 16px gutter on the left and the right if you know the width of the element's parent. If you don't, or if the width of the parent is proportional, and changes based on viewport size, you are out of luck.

That is why the `calc()` function exists. With it you can say: "make this element 100% of its parent then subtract 32px," combining fluid and static measurements.

With the `calc()` function the problem above would be resolved by the example below.

##### Example
```css 
width: calc(100% - 32px);
```

You can find out more about the `calc()` function on the [Mozilla Developers Network (MDN) calc() page](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

## The responsive grid
Our responsive grid can handle every viewport from a 320px wide iPhone to a 1920px wide desktop monitor. It breaks the horizontal space into 12, proportional (8.333333%), columns.

The grid is made up of a wrapper element with a class of `grid` filled with rows of grid units. The `grid` class can be added to any of the layout elements (e.g. `<article>`, `<header>`, `<section>`, `<div>`, etc.). The grid units divide the row proportionally (e.g. four quarters, two halves, etc.).

##### Example
```html
<section class="grid">
	<div class="grid__unit--25">
		...content...
	</div>
	<div class="grid__unit--25">
		...content...
	</div>
	<div class="grid__unit--25">
		...content...
	</div>
	<div class="grid__unit--25">
		...content...
	</div>
</section>
```

Grids can also be nested. It is functionality that we need to explore further, so feel free to experiment. Keep in mind that we may not have ready solutions if you run into any issues.

##### Example
```html
<section class="grid">
	<div class="grid grid__unit--50">
		<div class="grid__unit--50">
			...content...
		</div>
		<div class="grid__unit--50">
			...content...
		</div>
	</div>
	<div class="grid grid__unit--50">
		<div class="grid__unit--50">
			...content...
		</div>
		<div class="grid__unit--50">
			...content...
		</div>
	</div>
</section>
```

### Grid units
The grid units are `<div>` elements with a class of `grin__unit--` ('grid' followed by 2 underscores, followed by 'unit', followed by 2 dashes) followed by a number representing the percentage of horizontal space that unit fills (e.g. `grin__unit--100`).

Because the responsive grid changes its layout depending on viewport size, class names based on dimensions will only apply some of the time. Since the majority of our users are on laptops/desktops, we have based our naming convention on the dimensions of that viewport size.

Grid units use left and right padding to create gutters. These gutters expand and contracts based on viewport size. This means that grid units are not flush with their parent grid.

Grid units use the flex-box display type so that all units in a row will stretch to the height of the tallest grid unit.

Below are the available grid unit classes. It is recommended that a row only use one type of grid unit (except for a couple of cases).

#### `grid__unit--100`
This a a full-width unit. From mobile to desktop this unit fills 100% of the screen width. You can only have one `grid__unit--100` per row, adoy. :)

#### `grid__unit--66`
This is a two-third-width unit. It must be used with a third-width (`grid__unit--33`) unit.

#### `grid__unit--50`
This is a half-width unit. It can be used with either another half-width unit or two quarter-width (`grid__unit--25`) units.

#### `grid__unit--33`
This is a third-width unit. It can be used with two other third-width units or one two-third-width (`grid__unit--66`) unit.

#### `grid__unit--25`
This is a quarter-width unit. It can be used with three other quarter-width units or one quarter-width unit and a half-width (`grid__unit--50`) unit.

#### `grid__unit--12-5`
This is an eighth-width unit. It can only be used with other eighth-width units.

#### .webModInner
Inside the grid unit element is an element with a class of `webModInner` that serves as the wrapper for any content within it. The `webModInner` class fills all of the horizontal and vertical space.

##### Example
```html
<div class="grid__unit--50">
	<div class="webModInner">
		...content...
	</div>
</div>
```

### Layout patterns
A layout pattern is the specific way that elements scale, crop and wrap related to viewport size. For more info check out [Responsive Web Design Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns) on the Google developers site.

Our site requires our grid to support two different patterns. All of the units except `grid__unit--12-5` follow a pattern called the static flow. The `grid__unit--12-5` unit follows a pattern called the card-based flow. The `grid__unit--33` and `grid__unit--25` units can follow either the static or card-based flow.

The different patterns can exist on the same page, but not in the same row.

#### Static pattern
In the static pattern the grid units hold their proportional widths as much as possible. It relies on cropping over wrapping to maintain the layout. This is the default pattern. 

##### Half and quarter-width units
Below 1012px the half-width units wrap to two rows of full-width units. The quarter-width units wrap to two rows of half-width units. For viewports 1012px and up the half and quarter-width units maintain their two-up and four-up layouts. 

##### Third-width units
Below 500px the third-width units wrap to three rows of full-width units. For viewports 500px and up the third-width units are three-up.

#### Card-based pattern
The card-based pattern is to support design elements like jump-to links and product cards that need to keep a consistent aspect ratio. They favor wrapping over cropping. 

Rows of card-based units fill the available horizontal space. The smaller the viewport, the fewer will fit in a row, with the overflow wrapping to the row below. This inevitably leads to widows, or rows with a single unit in them, for some viewport sizes.

Only the `grid__unit--12-5`, `grid__unit--25` and `grid__unit--33` units can be rendered as card-based.

To make a grid unit follow the card-based pattern, add the `webModCard` class to the grid unit element.

##### Example
```html
<section class="grid">
	<div class="grid__unit--25 webModCard">
		...content...
	</div>
	<div class="grid__unit--25 webModCard">
		...content...
	</div>
	<div class="grid__unit--25 webModCard">
		...content...
	</div>
	<div class="grid__unit--25 webModCard">
		...content...
	</div>
</section>
```

You can see the way grid units scale and wrap in this example: [Responsive Grid](http://qpreview.quillcorp.com/content/iw/tools/responsive-grid/responsive-grid.cshtml).

### Web ad grid units
Content, including images, scale to fit the bounds of the grid unit. Web ad, or banner, images behave a little differently. Rather than wrap, web ad images crop (for the most part).

#### Image sizes and cropping
The height of a banner is not set and can be whatever the design calls for. The widths of the grid units however, have specific pixel dimensions. Additionally, only a portion of the total image can contain information. For instance, a half-width unit image should be 1125px wide, but and text or important imagery should only fill 726px.

For more information see the [Web ad image sizes](https://github.com/agency-quill/agency-project-files/blob/master/documentation/responsive-img-sizes.md) doc.

You can see the way images scale, crop and wrap in this example: [Responsive Web Ads](http://qpreview.quillcorp.com/content/iw/tools/responsive-grid/responsive-web-ads.cshtml).