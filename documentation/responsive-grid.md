# Responsive grid
>_Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation._ &ndash; [Responsive Web Design - What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Ethan Marcotte introduced the concept of responsive design in his 2010 _A List Apart_ article [Responsive Web Design](https://alistapart.com/article/responsive-web-design). The idea is pretty simple. Responsive design uses `CSS` to render `HTML` differently depending on the user's device. It's a little more complicated in practice.

The foundation of responsive design is the __responsive grid__, which uses a combination of cropping, scaling and wrapping to render web pages across different viewports.

## The underlying functionality
There are some elements, units, properties and functions in `HTML5` and `CSS3` that make responsive grids possible. Below are a few of the more important ones.

### Semantic `HTML`
`HTML` has historically had different types of elements including: semantic, presentation and layout.

Semantic elements have names that describe the content within them (e.g. the `<blockquote>`, `<h1>`, `<p>` and `<table>` elements). They help define the hierarchy of information.

In the beginning `HTML` also had a bunch of elements that were intended for presentation purposes (e.g. the `<b>`, `<center>`, `<font>` and `<i>` elements). They have since been deprecated in favor of `CSS`.

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
Media queries are `CSS` rules that are applied conditionally, based on some criteria. For responsive design the criteria is the viewport width.

If a viewport is `1024px` wide, the `CSS` in a media query specified for a viewport width that falls between `1012px` and `1279px` will be applied.

This allows us to set up breakpoints that align with the width of the user's viewport. For instance, an element that is designed to take up half of the screen on a desktop would have a `width: 50%;`. On a mobile device spanning half of the page would make the element too small, so the layout changes to two rows with a `width: 100%;`.

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
The `<picture>` element is what the `HTML5` spec calls an art direction-based selector element. It allows the browser to choose the appropriate image to load based on specified criteria. Inside a `<picture>` element is an `<img>` element and zero or more `<source>` elements.

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
The `calc()` function is a way to use more than one unit type when specifying a measurement. It's easy to lay out an element full width with a `16px` gutter of the left and the right if you know the width of the element's parent. If you don't, or if the width of the parent is proportional and changes based on viewport size you are out of luck.

That is why the `calc()` function exists. With it you can say: "make this element 100% of its parent then subtract `32px`," combining fluid and static measurements.

With the `calc()` function the problem above would be resolved by the example below.

__Example:__
```css 
width: calc(100% - 32px);
```

You can find out more about the `calc()` function on the [Mozilla Developers Network (MDN) calc() page](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

## The responsive grid
Our responsive grid can handle every viewport from a `320px` wide iPhone to a `1920px` wide desktop monitor. It breaks the horizontal space into 12, proportional (`8.333333%`), columns.

The grid is made up of a wrapper element with a class of `grid` filled with rows of grid units. The `grid` class can be added to any of the layout elements (e.g. `article`, `header`, `section`, `div`, etc.). The grid units divide the row proportionally (e.g. four quarters, two halves, etc.).

__Example:__
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

Grids can also be nested. It is an area that we need to explore further, so feel free to experiment. Keep in mind that we may not have ready solutions if you run into any issues.

__Example:__
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
The grid units are `div` elements with a class of `grin__unit--` _('grid' followed by 2 underscores, followed by 'unit', followed by 2 dashes)_ followed by a number representing the percentage of horizontal space that unit fills (e.g. `grin__unit--100`).

Because the responsive grid changes its layout depending on viewport size, class names based on dimensions will only apply some of the time. Since the majority of our users are on laptops/desktops, we have based our naming convention on the dimensions of that viewport size.

Grid units have left and right padding that expands and contracts with viewport size. They use the flex-box display type so that all units in a row will stretch to the height of the tallest grid unit.

Below are the available grid unit classes. It is recommended that a row only use one type of grid unit (except for a couple of cases that are also listed below).

#### `grid__unit--100`
This a a full-width unit. From mobile to desktop this unit fills 100% of the screen width. You can only have one `grid__unit--100` per row. Adoy.

#### `grid__unit--66`
This is a two-third-width unit. It needs to be used with a third-width (`grid__unit--33`) unit.

#### `grid__unit--50`
This is a half-width unit. It can be used with either another half-width unit or two quarter-width (`grid__unit--25`) units.

#### `grid__unit--33`
This is a third-width unit. It can be used with two other third-width units or one two-third-width (`grid__unit--66`) unit.

#### `grid__unit--25`
This is a quarter-width unit. It can be used with three other quarter-width units or one quarter-width unit and a half-width (`grid__unit--50`) unit.

#### `grid__unit--12-5`
This is an eighth-width unit. It can only be used other eighth-width units.

### Layout patterns
Layout patterns are the ways that elements scale, crop and wrap related to viewport size. If you would like more information, Google has a nice intro to [Responsive Web Design Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns). The requirements of our site require our grid to support two different patterns. The `grid__unit--33`, `grid__unit--25` and `grid__unit--12-5` units have two layout patterns: static and card-based. The others are restricted to the static flow.

The different patterns can exist on the same page, but not in the same row. It might be best to separate different layout patterns into their own grids.

#### Static pattern
In the static pattern the grid units hold their proportional widths as much as possible. This is the default pattern.

Below `1012px` the half-width units wrap to two rows of full-width units. The quarter-width units wrap to two rows of two units. For view ports `1012px` and up the half and quarter-width units maintain their two-up and four-up layouts. 

Below `500px` the third-width units wrap to three rows of full-width units. For view ports `500px` and up the third-width units are three-up.

#### Card-based pattern
The card-based pattern is to support design elements like jump-to links and product cards that need to keep a consistent aspect ratio. They favor wrapping over cropping. 

Rows of card-based units fill the available horizontal space. The smaller the viewport, the fewer will fit in a row, with the overflow wrapping to the row below. This inevitably leads to widows, or rows with a single unit in them, for some viewport sizes.

Only the `grid__unit--33`, `grid__unit--25` and `grid__unit--12-5` units can be rendered as card-based at this time.

To make a grid unit follow the card-based add the `webModCard` class to the grid unit element.

__Example:__
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

### Image-based grid units
Up to this point we have been talking about the grid and grid units abstractly. When it comes to units that contain images, like web ads or banners, there is another level of consideration. These are units that follow the static pattern. They favor cropping over wrapping.

#### Image sizes and cropping


## Conclusion
Working with a responsive grid presents a fundamental shift in the way we think about page layout.

[Responsive Grid](http://qpreview.quillcorp.com/content/iw/adv/sandbox/responsive-grid.cshtml)

[Responsive Web Ads](http://qpreview.quillcorp.com/content/iw/adv/sandbox/responsive-web-ads.cshtml)
