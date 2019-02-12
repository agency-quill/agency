var docRef = app.activeDocument;
var colorSamplerRef = docRef.colorSamplers.add([2,2]);
app.backgroundColor = colorSamplerRef.color;


var savedRuler= app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = app.activeDocument.width;
var h = app.activeDocument.height;
if(w>h) app.activeDocument.resizeCanvas (w, w, AnchorPosition.MIDDLECENTER);
if(w<h) app.activeDocument.resizeCanvas (h, h, AnchorPosition.MIDDLECENTER);
app.preferences.rulerUnits = savedRuler;