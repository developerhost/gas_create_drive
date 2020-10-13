function myFunction() {
  var parentFolderId = "親フォルダID"   
  var parentFolder = DriveApp.getFolderById(parentFolderId);
  var newFolderName = "子ファイルName";
  var newFolder =  parentFolder.createFolder(newFolderName);  
}
