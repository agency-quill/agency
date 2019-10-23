app.documents.add(4,4)
jpgFile = new File("/temp001.jpg")
jpgSaveOptions = new JPEGSaveOptions()
jpgSaveOptions.embedColorProfile = true
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE
jpgSaveOptions.matte = MatteType.NONE
jpgSaveOptions.quality = 3
app.activeDocument.saveAs(jpgFile,jpgSaveOptions,true,Extension.LOWERCASE)