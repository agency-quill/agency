var docRef = app.documents.add(200,200),
	w = docRef.width,
	h = docRef.height,
	gray = '999999',
	textLayerRef = docRef.artLayers.add(),
	strokeLayerRef = docRef.artLayers.add(),
	textItemRef
	;

textLayerRef.kind = LayerKind.TEXT;
textItemRef = textLayerRef.textItem;
textItemRef.contents = "Hello world!";

strokeLayerRef.kind = LayerKind.NORMAL;

docRef.selection.select([[0,0],[w,0],[w,h],[0,h]]);
app.foregroundColor.rgb.hexValue = gray;
docRef.selection.stroke(app.foregroundColor,1);
docRef.selection.deselect();

docRef = null;
textLayerRef = null;
textItemRef = null;