# Responsive grid
	_"Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation."_

	– [Responsive Web Design – What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Most credit Ethan Marcotte with introducing the concept in his 2010 _A List Apart_ article [Responsive Web Design](https://alistapart.com/article/responsive-web-design). Conceptually it's pretty simple. Use `CSS` to render `HTML` differently depending on the user's device and behavior. In practice it is a little more complex.

The foundation of reponsive design is the __responsive grid__. Using a combination of cropping, scaling and wrapping, a responsive grid renders a single block of `HTML` in the best possible presentation across multiple devices.

The next section goes into the `CSS` and `HTML` elements, units, properties and functions that underly the responsive grid. We get into the nuts and bolts of our responsive grid system in the following section.

## The underlying functionality
New elements, units, properties and functions that are a part of `HTML5` and `CSS3` make a responsive grid possible. Below are a few of the more important concepts.

### Semantic `HTML`
`HTML` has always had semantic elements, or elements whose name describes the content within them (i.e. the `<blockquote>`, `<h1>`, `<p>` and `<table>` elements). Originally it also had a bunch of elements that were intended for presentation purposes (i.e. the `<b>`, `<center>`, `<font>` and `<i>` elements).  It also had a couple of elements for layout (i.e. the `<div>` and `<span>` elements).

Once `CSS` came around all of the presentation elements were no longer needed, so they have, for the most part been deprecated.

`HTML5` added new elements in order to apply the semantic concept to layout. Generic `<div>` elements have been replaced with new, descriptive, elements like `<header>`, `<section>` and `<footer>`. The new elements describe the role of the content they contain. The `<div>` element still exists, but is used for non-semantic content divisions.

You can find out more about the new elements and which old elements have been deprecated in the [Mozilla Developers Network (MDN) HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Media queries
Media queries are chunks of `CSS` that are applied conditionally, based on some criteria. For responsive design the criteria being tested is usually the viewport width. So if a viewport is 1024px wide, all of the `CSS` held within the `@media` rule for viewports between 1012px and 1279px will be applied.

This allows us to set up breakpoints where elements are formatted differently. For instance, an element that is designed to take up half of the screen on a desktop would have a `width: 50%;`, but on a mobile device it would be too small, so it becomes two full-width rows with a `width: 100%;`.

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
	    padding-left: 1%;
		padding-right: 1%;
	}
}
```

You can find out more about media queries on the [Mozilla Developers Network (MDN) Using media queries page](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

### Responsive typography
`CSS3` has added some new typography units to support responsive design. Along with the `px`, `em` and `%` units we now have the `vh`, `vw`, `vmin` and `vmax` units.

These units allow us to set element sizes relative to the dimensions of the viewport. This is particularly handy for font sizes since the `%` unit for `font-size` is relative to the `font-size` of the parent, not the parent's width or height.

The units are defined as:

+ `vh` Equal to 1% of the height of the viewport
+ `vw` Equal to 1% of the width of the viewport
+ `vmin` Equal to the smaller of vw and vh
+ `vmax` Equal to the larger of vw and vh

__Example:__
```css 
font-size: 3.5vw;
```

If you are interested, this Smashing Magazine article goes into the subject further: [Responsive and Fluid Typography with vh and vw Units](https://www.smashingmagazine.com/2016/05/fluid-typography/).

### The `<picture>` element
The `<picture>` element is what the `HTML5` spec calls an art direction-based selector element. It allows the browser to choose the appropriate image to load based on criteria. It contains within it an `<img>` element and zero or more `<source>` elements.

The `<source>` element has a `media` attribute that takes a media query as it's value.

The example below renders `small-image.jpg` if the viewport width is under 1012px and `large-image.jpg` if it is 1012px or over.

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

That is why the `calc()` function exists. With it you can say: "make this element 100% of its parent then subtract 32px." Now you can create relationships that combine fluid and static measurements.

With the `calc()` function the problem above would be resolved by the example below.

__Example:__
```css 
width: calc(100% - 32px);
```

You can find out more about the `calc()` function on the [Mozilla Developers Network (MDN) calc() page](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

## The responsive grid
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque optio nam quo explicabo, velit a error iure minima nisi. Corporis, labore, ratione delectus distinctio quam consequatur quae accusantium! Amet, enim.

```html
<header class="grid header">
	<h1 class="h1 grid__unit--100">Lorem ipsum dolor sit amet</h1>
	<picture>
	    <source media="(max-width: 1011px)" srcset="small-image.jpg">
		<img class="img" src="large-image.jpg">
	</picture>
</header>
```