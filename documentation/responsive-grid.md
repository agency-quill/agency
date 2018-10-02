# Responsive grid
>"Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation."
– [Responsive Web Design – What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Most credit Ethan Marcotte with introducing the concept of responsive design in his 2010 _A List Apart_ article [Responsive Web Design.](https://alistapart.com/article/responsive-web-design) Conceptually it's pretty simple—use `CSS` to render `HTML` differently depending on the user's device and behavior. In practice it is a little more complex.

The foundation of reponsive design is the __responsive grid__. Using a combination of cropping, scaling and wrapping, a responsive grid renders a single block of `HTML` in the best possible presentation across multiple devices.

## The underlying functionality
New elements, units, properties and functions made to `HTML5` and `CSS3` have made a responsive grid possible. Below are a few of the more important concepts.

### Semantic HTML
`HTML` has always had semantic elements, or elements whose name describes the content within them (i.e. the `<blockquote>`, `<h1>`, `<p>` and `<table>` elements). Originally it also had a bunch of elements that were intended for presentation purposes (i.e. the `<b>`, `<center>`, `<font>` and `<i>` elements).  It also had a couple of elements for layout (i.e. the `<div>` and `<span>` elements).

Once `CSS` came around all of the presentation elements were no longer needed, so they have, for the most part been deprecated.

`HTML5` added new elements in order to apply the semantic concept to layout. Generic `div` elements have been replaced with new, descriptive, elements like `header`, `section` and `footer`. The new elements describe the role of the content they contain. The `div` element still exists, but is used for non-semantic content divisions.

You can find out more about the new elements and which old elements have been deprecated in the [Mozilla Developers Network (MDN) HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Media queries


### Responsive typography
`CSS3` has added some new typography units to support responsive design. Along with the `px`, `em` and `%` units we now have the `vh`, `vw`, `vmin` and `vmax` units. The units are defined as:

+ `vh` Equal to 1% of the height of the viewport
+ `vw` Equal to 1% of the width of the viewport
+ `vmin` Equal to the smaller of vw and vh
+ `vmax` Equal to the larger of vw and vh

__Example:__
```css font-size: 3.5vw;```

These allow us to set elemnt sizes relative to the dimensions of the viewport. This is particularly handy for font sizes since the `%` unit for `font-size` is relative to the `font-size` of the parent, not the parent's width or height.

### The `picture` element


### The `calc()` function


If you want to dig deeper on the topic od responsive design, there are a lot of resources out there. Google has a pretty good introduction: [Responsive Web Design Basics.](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)