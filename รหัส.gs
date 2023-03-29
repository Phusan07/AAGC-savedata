function doGet(request) {
  return HtmlService.createTemplateFromFile('index').evaluate();

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1LRx1tYoq49iaFubQPyP9y6tLMP8RR7G2pjzNY9SENbM/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("ชีต1");

  ws.appendRow([
    formObject.first_name,
    formObject.last_name,
    //formObject.gender,
    // formObject.dateOfBirth,
    formObject.email,
    formObject.phone

  ]);
}
