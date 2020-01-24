var docRef = app.activeDocument,
    savedRuler = app.preferences.rulerUnits,
    h = docRef.height,
    h2,
    w = docRef.width
    w2 = 1500;
app.preferences.rulerUnits = Units.PIXELS;
if(w > w2){
	ratio = h / w;
	h2 = w2 * ratio;
	docRef.resizeImage (w2, h2, 72, ResampleMethod.PRESERVEDETAILS, 100);
}
app.preferences.rulerUnits = savedRuler;