# Responsive grid
>_Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation._ &ndash; [Responsive Web Design - What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Ethan Marcotte introduced the concept of responsive design in his 2010 _A List Apart_ article [Responsive Web Design](https://alistapart.com/article/responsive-web-design). The idea is pretty simple. Responsive design uses `CSS` to render `HTML` differently depending on the user's device. It's a little more complicated in practice.

The foundation of responsive design is the __responsive grid__, which uses a combination of cropping, scaling and wrapping to render web pages across different viewports.

## The underlying functionality
There are some elements, units, properties and functions in `HTML5` and `CSS3` that make responsive grids possible. Below are a few of the more important ones.

### Semantic `HTML`
`HTML` has historically had different types of elements including: semantic, presentation and layout.

Semantic elements have names that describe the content within them (e.g. the `<blockquote>`, `<h1>`, `<p>` and `<table>` elements). They help define the hierarchy of information.

In the beginning `HTML` also had a bunch of elements that were intended for presentation purposes (e.g. the `<b>`, `<center>`, `<font>` and `<i>` elements). They have since been depricated because of `CSS`.

Finally there were a couple of elements for layout (e.g. the `<div>` and `<span>` elements).

`HTML5` added some new elements in order to extend the benefits of semantic naming to page layout. Generic `<div>` elements have been replaced with new, descriptive, elements like `<header>`, `<section>` and `<footer>`. The `<div>` element still exists, but is used for non-semantic content divisions.

__Example:__
```html
<article>
	<header>
		<h1>Lorem ipsum dolor sit amet</h1>
	</header>
	<section>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</section>
	<footer>
		<p>Consectetur unde esse sequi eveniet porro illo aperiam.</p>
	</footer>
</article>
```

You can find out more about the new elements and which old elements have been deprecated in the [Mozilla Developers Network (MDN) HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Media queries
Media queries are `CSS` rules that are applied conditionally, based on some criteria. For responsive design the criteria being tested is the viewport width.

So, if a viewport is `1024px` wide, the `CSS` in a media query based on a viewport width between `1012px` and `1279px` will be applied.

This allows us to set up breakpoints where layouts match the width of the user's viewport. For instance, an element that is designed to take up half of the screen on a desktop would have a `width: 50%;`. On a mobile device spanning half of the page would make the element too small, so the layout changes to two rows with a `width: 100%;`.

Below is an example of managing the left and right padding for an element on a landscape-oriented tablet vs. a laptop.

__Example:__
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
`CSS3` has added some new typography units to support responsive design. Along with the `px`, `em` and `%` units we now have the `vh`, `vw`, `vmin` and `vmax` units.

These units allow us to set element sizes relative to the dimensions of the viewport. This is particularly handy for font sizes since the `%` unit for `font-size` is relative to the `font-size` of its parent, not the parent's width or height.

The units are defined as:

+ `vh` Equal to 1% of the height of the viewport
+ `vw` Equal to 1% of the width of the viewport
+ `vmin` Equal to the smaller of `vw` and `vh`
+ `vmax` Equal to the larger of `vw` and `vh`

__Example:__
```css 
font-size: 3.5vw;
```

If you are interested, this Smashing Magazine article goes into the subject further: [Responsive and Fluid Typography with vh and vw Units](https://www.smashingmagazine.com/2016/05/fluid-typography/).

### The `<picture>` element
The `<picture>` element is what the `HTML5` spec calls an art direction-based selector element. It allows the browser to choose the appropriate image to load based on specified criteria. It contains within it an `<img>` element and zero or more `<source>` elements.

The `<source>` element has a `media` attribute that takes a media query as its value.

The example below renders `small-image.jpg` if the viewport width is under `1012px` and `large-image.jpg` if it is `1012px` or over.

__Example:__
```css 
<picture>
	<source media="(max-width: 1011px)" srcset="small-image.jpg">
	<img src="large-image.jpg">
</picture>
```

You can find out more about the `<picture>` element in section [4.8.4 Images of the WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/images.html#images).

### The `calc()` function
The `calc()` function is a way to use more than one unit type when specifying a measurement. For instance, if you want an element to fill the full width of its parent but want to accommodate a `16px` gutter on the left and right it's easy if you know the width of the parent. If you don't, or if the width of the parent changes you are out of luck.

That is why the `calc()` function exists. With it you can say: "make this element 100% of its parent then subtract `32px`," combining fluid and static measurements.

With the `calc()` function the problem above would be resolved by the example below.

__Example:__
```css 
width: calc(100% - 32px);
```

You can find out more about the `calc()` function on the [Mozilla Developers Network (MDN) calc() page](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

## The responsive grid
Our responsive grid can handle every viewport from a `320px` wide iPhone to a `1920px` wide desktop monitor. It breaks the horizontal space into 12, proportional (`8.333333%`), columns.

The grid is made up of rows of grid units. The grid units divide the row proportionally (e.g. four quarters, two halves, etc.).

__Example:__
```html
<section class="grid">
	<div class="grid__unit--25">
		<picture class="picture align--left">
			<img class="img" src="module-25.gif">
		</picture>
	</div>
	<div class="grid__unit--25">
		<picture class="picture align--left">
			<img class="img" src="module-25.gif">
		</picture>
	</div>
	<div class="grid__unit--25">
		<picture class="picture align--left">
			<img class="img" src="module-25.gif">
		</picture>
	</div>
	<div class="grid__unit--25">
		<picture class="picture align--left">
			<img class="img" src="module-25.gif">
		</picture>
	</div>
</section>
```

### Grid units
Because the responsive grid changes its layout depending on viewport width, naming the components is a little difficult. As mentioned above, a grid unit that covers half of the width of the screen on a desktop monitor will cover the full width on a portrait-oriented tablet. That means that a unit named a 'half' will actually be 'full' on some screens.

Since the majority of our users are on laptops/desktops, that is what we have based our naming convention on.

Below are the grid unit classes that are available. It is recommended that a row only use one type of grid unit (except for a couple of cases that are also listed below).

The naming convention uses percentages (`100`) instead of the number of columns (`12col`) or english words (`full`).

#### `grid__unit--100`
This a a full-width unit. From mobile to desktop this unit fills 100% of the screen width.

#### `grid__unit--66`


#### `grid__unit--50`


#### `grid__unit--33`


#### `grid__unit--25`


#### `grid__unit--12-5`


### Flow patterns
There are two flow patterns.



[Responsive Grid](http://qpreview.quillcorp.com/content/iw/adv/sandbox/responsive-grid.cshtml)

[Responsive Web Ads](http://qpreview.quillcorp.com/content/iw/adv/sandbox/responsive-web-ads.cshtml)
