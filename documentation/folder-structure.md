# `WebAd` Folder Structure #
The folders for the `WebAd` folder are organized by year, month and web request number. Inside the web request number folder are two type of folders: the ones that hold the work files, which are preceded by an underscore (\_), and the ones that hold the final product files.

## Work folders ##
These folders organize the files for concept, comp, source and resource files. They are further broken into `_assets` and `_resources`.

### `_assets` ###
In the root of the `_assets` folder belong final editable creative and wire frame source files. The `_assets` folder also contains the `_concepts` and `_deck` folders.

#### `_concepts` ####
This is where the editable creative, photography, wire frames, etc. from the creation of concepts belong.

#### `_deck` ####
This is where the indesign files, images, pdfs, etc. from the creation of the creative review decks belong.

### `_resources` ###
This is the folder for mock up and secondary files. These are files that aren't necessary to make edits. You wouldn't copy these files forward for future, pick-up versions, of this collateral.

## Product folders ##
The product folders should mimic the folders in production. If the files go in the `index` folder in production, recreate the folder structure for every folder under `index` through the folder the files belong in. 

#### Example
```
index resouce center or category name (if there is one)
	index folder name
```

If the files belong in the `adv` folder, recreate the year folder if it's different from the web request number, in that recreate the month folder if it's different from the web request number and in that create a folder named with the 3-digit job number.

#### Example
```
year (if different from web request number)
	month (if different from web request number)
		nnn (3-digit job number)
```

##### Structure
```
webrequestnumber_initials (W18_12_122_SAMPLE_AE)
	_assets
		_concepts
			contents: editable creative, photography, wire frames
		_deck
			contents: indesign files, images, pdfs
		contents: final editable creative, final wire frame.txt
	_resources
		contents: mock up, secondary files.txt
	index resouce center or category name (if there is one)
		index folder name
			contents: final landing page files (.cshtml, .jpg, etc.).txt
	year (if different from web request number)
		month (if different from web request number)
			nnn
				contents: final landing page files (.cshtml, .jpg, etc.).txt
```