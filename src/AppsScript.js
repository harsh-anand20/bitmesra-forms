function getAllData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var firebaseUrl = "https://bit-forms01-default-rtdb.firebaseio.com/pretermData";

  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);

  var data = base.getData();

  var rows = [];
  for (var id in data) {
    rows.push([id, data[id].searchID, data[id].name, data[id].age, data[id].area, data[id].location, data[id].education, data[id].educationLevel, data[id].smoking, data[id].alcohol, data[id].bloodGroup, data[id].weight, data[id].height, data[id].caesarean, data[id].complication, data[id].complicationRemarks, data[id].gravida, data[id].parity, data[id].mensuralDate, data[id].expectedDeliveryDate, data[id].gestationalAge, data[id].systolicBP, data[id].diastolicBP, data[id].haemoglobin, data[id].fetalHeartRate, data[id].hypertension, data[id].highComplication, data[id].highComplicationRemarks, data[id].hiv, data[id].syphilis, data[id].maleria, data[id].hepatitisB, data[id].activePlacita, data[id].labourInduction, data[id].megasulfIinjection, data[id].oxytocinInjection, data[id].antibiotic, data[id].bloodTransfusion, data[id].deliveryDateTime, data[id].deliveryType, data[id].statusOfWomen, data[id].numberOfDelivery, data[id].birthType, data[id].newBornGender, data[id].newBornWeight, data[id].lowBirthWeight, data[id].newBornStatus, data[id].vitaminK1, data[id].BCG, data[id].OPV, data[id].hepatitis, data[id].motherComplication, data[id].newBornComplication, data[id].formOneStatus, data[id].formTwoStatus]);
  }

  var dataRange = sheet.getRange(2, 1, rows.length, 55);
  dataRange.setValues(rows);
}


// function getAllData() {
//   var ss = SpreadsheetApp.getActiveSpreadsheet();
//   var sheet = ss.getActiveSheet();

//   var firebaseUrl = "https://bit-forms01-default-rtdb.firebaseio.com/pretermData";

//   var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);

//   var data = base.getData();

//   var rows = [];
//   for (var id in data) {
//     rows.push([id, data[id].searchID, data[id].name, data[id].age]);
//   }

//   var dataRange = sheet.getRange(2, 1, rows.length, 4);
//   dataRange.setValues(rows);
// }