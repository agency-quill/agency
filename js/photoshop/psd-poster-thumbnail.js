var docRef = app.activeDocument,
    h = docRef.height,
    h2,
    exportOptions = new ExportOptionsSaveForWeb(),
    fileName = docRef.name.replace(/\.[^\.]+$/, ''),
    filePath = docRef.path,
    ratio,
    savedRuler = app.preferences.rulerUnits,
    w = docRef.width,
    w2 = 500;
app.preferences.rulerUnits = Units.PIXELS;
exportOptions.format = SaveDocumentType.JPEG;
exportOptions.quality = 40;
ratio = h / w;
h2 = w2 * ratio;
docRef.resizeImage (w2, h2, 72, ResampleMethod.PRESERVEDETAILS, 100);
docRef.exportDocument (new File(filePath + '/' + fileName + '.jpg'), ExportType.SAVEFORWEB, exportOptions);
app.preferences.rulerUnits = savedRuler;