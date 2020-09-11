# Web ad image sizes
_Last updated 8/27/20_

The __Image width, height and usable space in pixels__ and __Web ad visible width by viewport__ tables define the dimensions of, and usable space within, the web ad/banners of each responsive grid unit.

The __Image width, height and usable space in pixels__ table defines the image size and usable space, in pixels, of each module type. It is broken into image width and height, then desktop and mobile dimensions. If there is a dash, no image is required for that ad size.

Most of the images crop at certain viewport sizes (see the __Web ad visible width by viewport__ table for details). The numbers in parentheses are the number of pixels that are visible on __ALL__ viewports. Any content outside of usable dimensions will be cropped off on some devices. If there is no number in parentheses, the module does not crop.

The __Web ad visible width by viewport__ table lists all of the web ad/banner image size(s) for each grid unit. The numbers in parenthesis mark the space within the image that can contain text or critical visual elements. For example, a `grid__unit--100` uses a `970px`-wide image for viewport widths of `0px` - `1011px` and a `1860px`-wide image for `1012px` - `1885px`. From `0px` - `499px` the `970px`-wide image is cropped to `605px`; from `500px` - `765px` the `970px`-wide image is cropped to `735px`; and from `766px` - `1011px` the `970px`-wide image is not cropped. So, for viewport widths of `0px` - `1011px`, text or critical visual elements should be kept within `605px`.

## Image width, height and usable space in pixels
| module				| grid unit 			| desktop<br>width	| desktop<br>height	| mobile<br>width	| mobile<br>height	|
| :---					| :---					| :---:				| :---:				| :---:				| :---:				|
| eighth				| grid__unit--12-5.card	| 165				| 165				| -					| -					|
| quarter				| grid__unit--25		| 470 (300)			| 300				| -			 		| - 				|
| quarter (card)		| grid__unit--25.card	| 355 				| 300				| -					| -					|
| quarter (homepage)	| grid__unit--25.webMod	| 470 (285)			| 300				| - 				| -					|
| third					| grid__unit--33		| 600 (395)			| 300				| 320 (230)			| 300				|
| third	(homepage)		| grid__unit--33.webMod	| 600 (395)			| 300				| 320 (300)			| 300				|
| third	(flyup)*		| -						| 300				| 150				| -					| -					|
| half					| grid__unit--50		| 1125 (725)		| 300				| -					| -					|
| half (homepage)		| grid__unit--50.webMod	| 1000 (600)		| 300				| -					| -					|
| two-third				| grid__unit--66		| 1230 (820)		| 300				| 670 (480)			| 300				|
| two-third	(homepage)	| grid__unit--66.webMod	| 1230 (820)		| 300				| 970 (600)			| 500				|
| three-quarter			| grid__unit--75		| 1475 (975)		| 300				| 470 (300)			| 300				|
| full					| grid__unit--100		| 1860 (1250)		| 300				| 970 (600)			| 500				|
| rotating banner		| -						| 1450 (960)		| 300				| 500				| 300				|

<!-- | half (card)			| grid__unit--50.card	| 660				| -					| 300		| -					| -->

\* Flyup ads are not responsive.  They are 300px wide x 150px tall.

## Web ad visible width by viewport
| viewport width 					| grid__unit--12-5.card	| grid__unit--25 	| grid__unit--25.card	| grid__unit--33	| grid__unit--50	| grid__unit--50.card	| grid__unit--66	| grid__unit--75	| grid__unit--100	|
| :---								| :---:					| :---:				| :---:					| :---:				| :---:				| :---:					| :---:				| :---:				| :---:				|
| mobile portrait: 0 - 499			| 165 					| 470 (300)			| 355 					| 600				| 1125 (725)		| 660					| 670				| 470 (300)			| 970 (605)			|
| mobile landscape: 500 - 765		| 165 					| 470 (355)			| 355 					| 320 (230)			| 1125 (725)		| 660					| 670 (480)			| 470 (355)			| 970 (735)			|
| tablet portrait: 766 - 1011		| 165 					| 470				| 355 					| 320 				| 1125				| 660					| 670				| 470				| 970				|
| tablet landscape: 1012 - 1279		| 165 					| 470 (300)			| 355 					| 600 (395)			| 1125 (750)		| 660					| 1230 (820)		| 1230 (975)		| 1860 (1250)		|
| laptop: 1280 - 1519				| 165 					| 470 (388)			| 355 					| 600 (500)			| 1125 (945)		| 660					| 1230 (1030)		| 1230 (1225)		| 1860 (1560)		|
| desktop: 1520 - 1885				| 165 					| 470				| 355 					| 600 				| 1125				| 660					| 1230				| 1230				| 1860				|

<!-- ## Usable space - ICC
| grid unit 					| 1 icc (left/right align)	| 2 icc (left/right align)	| 3 icc (left/right align)	| 1 icc (center align)	| 2 icc (center align)	| 3 icc (center align)	|
| :---							| :---:						| :---:						| :---:						| :---:					| :---:					| :---:					|
| grid__unit--25				| 							| -							| -							| 						| -						| -						|
| grid__unit--25.card			| 0							| -							| -							| -						| -						| -						|
| grid__unit--33				| 							| -							| -							| 						| -						| -						|
| grid__unit--33 - mobile		| 							| -							| -							| 						| -						| -						|
| grid__unit--50				| 							| 							| -							| 						| 						| -						|
| grid__unit--50.card			| 							| -							| -							| 						| -						| -						|
| grid__unit--66				| n/a						| n/a						| n/a						| n/a					| n/a					| n/a					|
| grid__unit--100				| 1265						| 680						| 680						| 1280					| 700					| 700					|
| grid__unit--100 - mobile		| 							| 							| 							| 						| 						| 						| -->