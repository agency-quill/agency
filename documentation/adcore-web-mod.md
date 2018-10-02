# ADCore Modules
To support the new responsive grid we have developed some new ADCore modules. They are rich in functionality. They can support images with or without links, html that floats on top of an image or that is independant of an image. Links can be standard, jump-to, qview or add to cart. You can add as many image maps, iccs or pop-ups too. With all of this versatility comes some complexity. Below all of the functionality is explained and instructions are provided on how to fill them out.

## Description Syntax
For every field in the offer codes there is a description of the type of content that goes in the field. You can see it by clicking on the *ADCore field name (i.e. "u_ad_img_src")*. Some of these descriptions use the special characters below.

### Commas ( ,,, )
Several of the fields accept comma-separated arrays instead of straight `HTML` as input. Commas in the description denote where commas should be in the field input. Each value is used by the scripts that build the offer code html 

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
`TN4BUY42, d1c, Offer good through 8/19/18., One-time use per order., /ink-toner-finder, # fff`

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