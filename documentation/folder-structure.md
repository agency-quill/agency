# Folder Structure #
_Last updated 12/12/18_

The folders in the `WebAd` directory are organized by year, month and web request number. Inside the web request directory are two type of folders: ones that hold the work files, which are preceded by an underscore (\_), and ones that hold the final collateral files.

## Work folders ##
These folders organize the files for concept, comp, source and resource files. They are further broken into `_assets` and `_resources`.

### `_assets` ###
In the root of the `_assets` folder belong final editable and wire frame source files. The `_assets` folder also contains the `_concepts` and `_deck` folders.

#### `_concepts` ####
This is where the editable creative, photography, wire frames, etc. from the creation of concepts belong.

#### `_deck` ####
This is where the indesign files, images, pdfs, etc. from the creation of the creative review decks belong.

### `_resources` ###
This is the folder for mock up and secondary files. These are files that aren't necessary to make edits. You wouldn't copy these files forward for pick-up versions of this collateral.

## Product folders ##
The product folders should mimic the folders in production. If the files go in the `index` folder in production, recreate the folder structure for every folder under `index` through the folder the files belong in. For instance a folder for the resource center or category, with a folder for the specific page inside.

#### Example
```
resource-center
	healthcare
		avoid-burnout-at-work
```

If the files belong in the `adv` folder, recreate the year folder if it's different from the web request number. Inside that recreate the month folder if it's different from the web request number. Finally, inside that create a folder named with the 3-digit job number.

#### Example
```
2018
	11
		114
```

## Structure
```
webrequestnumber_initials (W18_12_122_SAMPLE_AE)
	_assets
		_concepts
			contents: editable creative, photography, wire frames
		_deck
			contents: indesign files, images, pdfs
		contents: final editable creative, final wire frame
	_resources
		contents: mock up, secondary files
	index resource center or category name (if there is one)
		index folder name
			contents: final landing page files (.cshtml, .jpg, etc.)
	year (if different from web request number)
		month (if different from web request number)
			nnn (n = number)
				contents: final landing page files (.cshtml, .jpg, etc.)
```

There is a folder in the `WebAd` directory named `_folder_structure` that has the skeleton of a properly formatted web request folder. Feel free to copy it into new web request folders.