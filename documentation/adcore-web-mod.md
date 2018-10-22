# ADCore Modules
To support the new responsive grid we have developed some new ADCore modules. They are rich in functionality. They support images with or without links, html that floats on top of an image or with no background image. Links can be standard, jump-to, qview or add to cart. You can add as many image maps, iccs or pop-ups as you want too.

## Description Syntax
For every field in the offer codes there is a template for the type of content that goes in the field. You can see it by clicking on the _ADCore field name (i.e. "u_ad_img_src")_. Some of these descriptions use the special characters below.

### Commas ( ,,, )
Several of the fields accept comma-separated arrays instead of straight `HTML` as input. Commas in the description denote where commas should be in the field input. Each value is used by the scripts that build the offer code html. If the content you want to add includes commas, they need to be replace with the ASCII code &#44;.

### Brackets ( \[ \] )
The parts brackets are used to denote optional values.

### Pipes ( || )

### Plus Signs ( ++ )

## Grid Units/Web Ads
Instead of web ad offer codes we have built grid unit-based offer codes. They can hold traditional web ad images or be used to layout a page.

### 2018-half-mod
#### u\_ad\_card
This is a flag that, when set will render the web ad using the `webModCard` class.  

#### u\_ad\_class

#### u\_ad\_css

#### u\_ad\_html\_text

#### u\_ad\_icc
`icc, disclaimer, expiry[, usage, url, color, css][ + icc...]`

__Example:__
`ICCICC01, d1c, Offer good through 1/1/18., One-time use per order., /ink-toner-finder, #fff, bottom:2%;left:2%; + ICCICC02, d9, Offer good through 12/31/18., Five-time use per customer., /default.aspx, #fff, bottom:2%;right:2%;`

#### u\_ad\_id

#### u\_ad\_img\_align
`left | center | right`

#### u\_ad\_img\_alt

#### u\_ad\_img\_src
`img src url[, mobile img src url]`

__Example:__
`/content/iw/adv/2018/07/011/W18_07_011_STOCKUPICT.jpg, /content/iw/adv/2018/07/011/W18_07_011_STOCKUPICM.jpg`

#### u\_ad\_link\_href
`url | # anchor | sku, effort, absolute, (qview | addtocart)`

__Example:__


#### u\_ad\_link\_title

#### u\_ad\_map\_href
`link, (circle | default | poly | rect), title, coord1, coordX[ + url...]`

__Example:__


#### u\_ad\_popup
`cta, html[, (css | icc)][ + cta...]`

__Example:__


### 2018-eighth-mod
### 2018-full-mod
### 2018-half-mod
### 2018-quarter-mod
### 2018-third-mod
### 2018-two-third-mod