var docRef = app.activeDocument,
    savedRuler = app.preferences.rulerUnits,
    w = docRef.width,
    h = docRef.height;
app.backgroundColor = docRef.colorSamplers.add([2,2]).color;
app.preferences.rulerUnits = Units.PIXELS;
if(w>h){
	docRef.resizeCanvas (w, w, AnchorPosition.MIDDLECENTER);
}else{
	if(w<h) docRef.resizeCanvas (h, h, AnchorPosition.MIDDLECENTER);
}
app.preferences.rulerUnits = savedRuler;