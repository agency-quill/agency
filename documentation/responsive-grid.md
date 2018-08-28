# Responsive grid
" Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. – [Responsive Web Design – What It Is And How To Use It](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

The concept is attributed to Ethan Marcotte in his 2010 _A List Apart_ article [Responsive Web Design.](https://alistapart.com/article/responsive-web-design) It is a simple concept—use `CSS` and `HTML` to render the same content in various ways depending on the user's device. In practice it is a little more complex.

One of the tools that make it possible is the __responsive grid__ which uses a combination of cropping, scaling and wrapping to render a single `HTML` file in the best possible presentation across multiple devices.

There are a lot of resources out there, but Google has a pretty good introduction if you want to dig deeper: [Responsive Web Design Basics.](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)

The responsive grid can be used for everything from web ads up through complex `HTML` content. It works on custom landing pages and `ADCore` spotlight pages. The hope is that eventually the whole site will take advantage of it.

The next section outlines the specific code elements that have been used to build the grid.

## The underlying tech


### Semantic HTML
`HTML5` added new elements in order to accommodate a new philosmeaning of `HTML` elements. Generic `div` elements have been replaced with new, descriptive, elements like `header`, `section` and `footer` for page layout.  The new elements describe the role of the content they contain. The `div` element still exists, but is used for non-semantic content divisions. You can find out more in the [Mozilla Developers Network (MDN) HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Media queries
`CSS3` media queries and responsive typography units `vh` and `vw`.

### Responsive typography


### The `picture` element


## The design


### Classes


## ADCore Modules


### Common Fields


#### u\_ad\_card
This is a flag that, when set will render the web ad using the `webModCard` class.  

#### u\_ad\_class


#### u\_ad\_css


#### u\_ad\_html\_text


#### u\_ad\_icc
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`
>__Example:__ TN4BUY42, d1c, Offer good through 8/19/18., One-time use per order., /ink-toner-finder, # fff

#### u\_ad\_id


#### u\_ad\_img\_align
`left | center | right`

#### u\_ad\_img\_alt


#### u\_ad\_img\_src
`img src url[, mobile img src url]`
>__Example:__ /content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg, /content/iw/adv/2018/07/011/W18_07_011_STOCKUPICM.jpg

#### u\_ad\_link\_href
`url | # anchor | sku, effort, absolute, (qview | addtocart)`
>__Example:__ 

#### u\_ad\_link\_title


#### u\_ad\_map\_href
`link, (circle | default | poly | rect), title, coord1, coordX[ + url...]`
>__Example:__ 

#### u\_ad\_popup
`cta, html[, (css | icc)][ + cta...]`
>__Example:__ 



### 2018-eighth-mod
### 2018-full-mod
### 2018-half-mod
### 2018-quarter-mod
### 2018-third-mod
### 2018-two-third-mod