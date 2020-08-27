var docRef = app.activeDocument,
	artLayerRef = docRef.artLayers.add(),
	w = docRef.width,
	h = docRef.height,
	corners = [[1,1],[w,h]],
    exportOptions = new ExportOptionsSaveForWeb(),
    fileName = docRef.name.replace(/\.[^\.]+$/, ''),
    filePath = docRef.path,
    gray = '999999',
    white = 'ffffff'
    ;

artLayerRef.kind = LayerKind.NORMAL;

docRef.selection.select([[0,0],[w,0],[w,h],[0,h]]);
app.foregroundColor.rgb.hexValue = gray;
docRef.selection.stroke(app.foregroundColor,1);
docRef.selection.deselect();

exportOptions.format = SaveDocumentType.JPEG;
exportOptions.quality = 40;
docRef.exportDocument (new File(filePath + '/' + fileName + '.jpg'), ExportType.SAVEFORWEB, exportOptions);