# Web ad image sizes
_Last updated 8/27/20_

The __Image width and usable space in pixels__, __Web ad visible width by viewport__, and __Image height in pixels__ tables define the dimensions of, and usable space within, the web ad/banners of each responsive grid unit.

The __Image width and usable space in pixels__ table defines the image size and usable space, in pixels, of each module type. The numbers in the desktop column are the pixel widths of the images used for desktop sized viewports. The numbers in the mobile column are the pixel widths of the images used for mobile sized viewports _if needed_. A dash in the __usable__ column means that the image doesn't crop and all of the space is usable. A dash in the __mobile__ column means that no mobile sized image is needed.

The __Web ad by viewport__ table lists all of the web ad/banner image size(s) for each grid unit. The numbers in parenthesis mark the space within the image that can contain text or critical visual elements. For example, a `grid__unit--100` uses a `970px`-wide image for viewport widths of `0px` - `1011px` and a `1860px`-wide image for `1012px` - `1885px`. From `0px` - `499px` the `970px`-wide image is cropped to `605px`; from `500px` - `765px` the `970px`-wide image is cropped to `735px`; and from `766px` - `1011px` the `970px`-wide image is not cropped. So, for viewport widths of `0px` - `1011px`, text or critical visual elements should be kept within `605px`.

The __Image height in pixels__ table lists the heights of each module type.

## Image width and usable space in pixels
| module				| grid unit 			| desktop 	| usable	| mobile	| usable	|
| :---					| :---					| :---:		| :---:		| :---:		| :---:		|
| eighth				| grid__unit--12-5.card	| 165		| -			| -			| -			|
| quarter				| grid__unit--25		| 470		| 300		| - 		| - 		|
| quarter (card)		| grid__unit--25.card	| 355		| - 		| -			| -			|
| quarter (homepage)	| grid__unit--25.webMod	| 470		| 285		| - 		| - 		|
| third					| grid__unit--33		| 600		| 395		| 320		| 230		|
| third	(homepage)		| grid__unit--33.webMod	| 600		| 395		| 320		| 300		|
| third	(flyup)*		| -						| 300		| -			| -			| -			|
| half					| grid__unit--50		| 1125		| 725		| -			| -			|
| half (card)			| grid__unit--50.card	| 660		| - 		| -			| -			|
| half (homepage)		| grid__unit--50.webMod	| 1000		| 600		| -			| -			|
| two-third				| grid__unit--66		| 1230		| 820		| 670		| 480		|
| three-quarter			| grid__unit--75		| 1475		| 975		| 470		| 300		|
| full					| grid__unit--100		| 1860		| 1250		| 970		| 600		|
| home page				| -						| 1650		| 960		| 960		| 320		|
| rotating banner		| -						| 1450		| 960		| 500		| -			|

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

## Image height in pixels
| module				| grid unit 			| desktop 	| mobile	|
| :---					| :---					| :---:		| :---:		|
| eighth				| grid__unit--12-5.card	| ?			| -			|
| quarter				| grid__unit--25		| 300		| - 		|
| third					| grid__unit--33		| 300		| 300		|
| third	(flyup)*		| -						| 150		| -			|
| half					| grid__unit--50		| 300		| -			|
| two-third				| grid__unit--66		| 300		| 300		|
| three-quarter			| grid__unit--75		| 300		| 300		|
| full					| grid__unit--100		| 300		| 500		|
| home page				| -						| 300		| 300		|
| rotating banner		| -						| 300		| 300		|

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