//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://coffeescript.org/


function listFn() {
  var f = document.getElementById("list-input-form");
  var listOneArr = f.elements["list-1-body"].value.split("\n");
  var listTwoArr = f.elements["list-2-body"].value.split("\n");

  if (listOneArr.length !== listTwoArr.length) {
    alert("The lists are not equal length");
  }
  else {
    var output = document.getElementById("output");
    var outputString = "where ";
    var conjunction = f.elements["conjunction"].value;
    var listOneComparitor = f.elements["list-1-comparitor"].value;
    var listTwoComparitor = f.elements["list-2-comparitor"].value;

    for (var i = 0; i < listOneArr.length; i++) {
      if (i > 0) {
        outputString += "or ";
      }
      outputString+="(" + f.elements["list-1-header"].value + " " + listOneComparitor + " " + "'" + listOneArr[i] + "'" +" "+ conjunction +" "+ f.elements["list-2-header"].value + " " + listTwoComparitor + " " + "'" + listTwoArr[i] + "'" + ")";
      if (i !== listOneArr.length - 1) {
        outputString+="\n";
      }
    }
    output.append(outputString);
    console.log(listOneComparitor, listTwoComparitor);

  } //close else statement
} //end listFn definition

function clearOutput() {
  document.getElementById("output").innerHTML="";
}

function toggleTextArea(element, textareaId) {
  var val = element.value;
  console.log(val);
  if (val === "IS NULL" || val === "IS NOT NULL") {
    document.getElementById(textareaId).value = val;
    document.getElementById(textareaId).disabled = true;
  }
  else {
    document.getElementById(textareaId).disabled = false;
    document.getElementById(textareaId).value = "";
  }
}

function listDBTables(element){
  $("#db1_table1").empty();
  var db = element.value;
  var tables = db_tables[db];
  tables.forEach(function(table) {
    var $option = "<option value="+table+">"+table+"</option>";
    $('#db1_table1').append($option);
  })

}

var db_tables = {
  'epic':['','attack','v_basic_data_dump', 'v_data_dump_for_analysis'],
  'temp':['','hla_forefront'],
  'subjects':['','_querytable'],
  'origins':[''],
  'msgenlabprod':[''],
  'cohorts':['']
}
