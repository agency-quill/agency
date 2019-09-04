# Web ad image sizes
_Last updated 9/4/19_

The __Image width and usable space__ and __Web ad by viewport__ tables define the width of and usable space within the web ad/banners of each responsive grid units.

The __Image width and usable space__ table is a detail of image size and usable space, in pixels, by module type. The numbers in the desktop column are the pixel widths of the images used for desktop sized viewports. The numbers in the mobile column are the pixel widths of the images used for mobile sized viewports if needed.

The __Web ad by viewport__ table lists all of the web ad/banner image size(s) for each grid unit. The numbers in parenthesis mark the space within the image that can contain text or critical visual elements. For example, a `grid__unit--100` uses a `970px`-wide image for viewport widths of `0px` - `1011px` and a `1860px`-wide image for `1012px` - `1885px`. From `0px` - `499px` the `970px`-wide image is cropped to `605px`; from `500px` - `765px` the `970px`-wide image is cropped to `735px`; and from `766px` - `1011px` the `970px`-wide image is not cropped. So, for viewport widths of `0px` - `1011px`, text or critical visual elements should be kept within `605px`.

## Image width and usable space in pixels
| module	| grid unit 			| desktop 	| usable	| mobile	| usable	|
| :---		| :---					| :---:		| :---:		| :---:		| :---:		|
| eighth	| grid__unit--12-5.card	| 165		| -			| -			| -			|
| quarter	| grid__unit--25		| 470		| 300		| - 		| - 		|
| quarter	| grid__unit--25.card	| 355		| - 		| -			| -			|
| third		| grid__unit--33		| 600		| 395		| 320		| 230		|
| half		| grid__unit--50		| 1125		| 725		| -			| -			|
| half		| grid__unit--50.card	| 660		| - 		| -			| -			|
| two-third	| grid__unit--66		| n/a		| n/a		| n/a		| n/a		|
| full		| grid__unit--100		| 1860		| 1250		| 970		| 605		|
| home page	| -						| 1650		| 960		| 960		| 320		|

## Web ad by viewport
| viewport width 					| grid__unit--12-5.card	| grid__unit--25 	| grid__unit--25.card	| grid__unit--33	| grid__unit--50	| grid__unit--50.card	| grid__unit--66	| grid__unit--100	|
| :---								| :---:					| :---:				| :---:					| :---:				| :---:				| :---:					| :---:				| :---:				|
| mobile portrait: 0 - 499			| 165 					| 470 (300)			| 355 					| 600				| 1125 (725)		| 660					| n/a				| 970 (605)			|
| mobile landscape: 500 - 765		| 165 					| 470 (355)			| 355 					| 320 (230)			| 1125 (725)		| 660					| n/a				| 970 (735)			|
| tablet portrait: 766 - 1011		| 165 					| 470				| 355 					| 320 				| 1125				| 660					| n/a				| 970				|
| tablet landscape: 1012 - 1279		| 165 					| 470 (300)			| 355 					| 600 (395)			| 1125 (750)		| 660					| n/a				| 1860 (1250)		|
| laptop: 1280 - 1519				| 165 					| 470 (388)			| 355 					| 600 (500)			| 1125 (945)		| 660					| n/a				| 1860 (1560)		|
| desktop: 1520 - 1885				| 165 					| 470				| 355 					| 600 				| 1125				| 660					| n/a				| 1860				|

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