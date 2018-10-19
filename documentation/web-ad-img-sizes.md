# Web ad image sizes
The __Web ad by viewport__ and __Image width and usable space__ tables define the width of and usable space within the web ad/banners of each responsive grid units.

The __Web ad by viewport__ table lists all of the web ad/banner image size(s) for each grid unit. The numbers in parenthesis mark the space within the image that can contain text or critical visual elements. For example, a `grid__unit--100` uses a `966px`-wide image for viewport widths of `0px` - `1011px` and a `1858px`-wide image for `1012px` - `1885px`. From `0px` - `499px` the `966px`-wide image is cropped to `598px`; from `500px` - `765px` the `966px`-wide image is cropped to `728px`; and from `766px` - `1011px` the `966px`-wide image is not cropped. So, for viewport widths of `0px` - `1011px`, text or critical visual elements should be kept within `598px`.

The __Image width and usable space__ table is a detail of image size and usable space, in pixels, by grid unit. The numbers in the desktop column are the pixel widths of the images used for desktop sized viewports. The numbers in the mobile column are the pixel widths of the images used for mobile sized viewports if needed.

## Web ad by viewport 
| viewport width 					| grid__unit--12-5	| grid__unit--25 	| grid__unit--25.card	| grid__unit--33	| grid__unit--33.card	| grid__unit--50	| grid__unit--66	| grid__unit--100	|
| :---								| :---:				| :---:				| :---:					| :---:				| :---:					| :---:				| :---:				| :---:				|
| mobile portrait: 0 - 499			| 165 				| 470 (302)			| 355 					| 600				| n/a					| 1125 (726)		| n/a				| 966 (598)			|
| mobile landscape: 500 - 765		| 165 				| 470 (355)			| 355 					| 320 (228)			| n/a					| 1125 (726)		| n/a				| 966 (728)			|
| tablet portrait: 766 - 1011		| 165 				| 470				| 355 					| 320 				| n/a					| 1125				| n/a				| 966				|
| tablet landscape: 1012 - 1279		| 165 				| 470 (302)			| 355 					| 600 (393)			| n/a					| 1125 (749)		| n/a				| 1858 (124)		|
| laptop: 1280 - 1519				| 165 				| 470 (388)			| 355 					| 600 (500)			| n/a					| 1125 (944)		| n/a				| 1858 (156)		|
| desktop: 1520 - 1885				| 165 				| 470				| 355 					| 600 				| n/a					| 1125				| n/a				| 1858				|

## Image width and usable space
| grid unit 			| desktop 	| usable	| mobile	| usable	|
| :---					| :---:		| :---:		| :---:		| :---:		|
| grid__unit--12-5		| 165		| -			| -			| -			|
| grid__unit--25		| 470		| 302		| - 		| - 		|
| grid__unit--25.card	| 355		| - 		| -			| -			|
| grid__unit--33		| 600		| 393		| 320		| 228		|
| grid__unit--33.card	| n/a		| n/a		| n/a		| n/a		|
| grid__unit--50		| 1125		| 726		| -			| -			|
| grid__unit--66		| n/a		| n/a		| n/a		| n/a		|
| grid__unit--100		| 1858		| 1246		| 966		| 598		|