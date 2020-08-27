var docRef = app.activeDocument,
    exportOptions = new ExportOptionsSaveForWeb(),
    fileName = docRef.name.replace(/\.[^\.]+$/, ''),
    filePath = docRef.path
    ;

exportOptions.format = SaveDocumentType.JPEG;
exportOptions.quality = 40;
docRef.exportDocument (new File(filePath + '/' + fileName + '.jpg'), ExportType.SAVEFORWEB, exportOptions);