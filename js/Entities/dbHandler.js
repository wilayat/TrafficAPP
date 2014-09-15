
var db = openDatabase("TrafficViolation", "1.0", "Traffic Violation", 200000);  // Open SQLite Database
var dataset;
var DataType;
var objIncidentsReport;
function initDatabase()  // Function Call When Page is ready.
{

    try {

        if (!window.openDatabase)  // Check browser is supported SQLite or not.
        {

            alert('Databases are not supported in this browser.');

        }

        else {

            createTable();  // If supported then call Function for create table in SQLite

        }

    }

    catch (e) {

        if (e == 2) {

            // Version number mismatch. 

            console.log("Invalid database version.");

        } else {

            console.log("Unknown error " + e + ".");

        }

        return;

    }

}

function createTable()  // Function for Create Table in SQLite.
{

    db.transaction(function (tx) { tx.executeSql(CREATE_SETTINGS_TABLE, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(CREATE_COMPLAINTS_TABLE, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(CREATE_INCIDENTREPORTS_TABLE, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(CREATE_NATIONALITIES, [], onSuccess, onError); });
    alert("All tables Created Successfully");
}

function onError(tx, error) // Function for Hendeling Error...
{

    alert(error.message);

}
function onSuccess() // Function for Hendeling Success...
{

   // alert("Successful");

}
function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
{
    
    var currentdate = new Date();
    var usernametemp = $('input:text[id=CallerName]').val();
    var usermobiletemp = $('input:text[id=CallerNumber]').val();
    var txtlatTmp = $('input:text[id=Latitude]').val();
    var txtLongtemp = $('input:text[id=Longitude]').val();
    var txtServeritytemp = $('input:text[id=txtServerity]').val();
    var txtDetailstemp = $('textarea:text[id=IncidentDesc]').val();
    db.transaction(function (tx) { tx.executeSql(InsertViolation, [usernametemp, usermobiletemp, txtlatTmp, txtLongtemp, txtDetailstemp, 0, 0, 0, currentdate.getDate(), 1], onSuccess, onError); });
   /* objIncidentsReport = new IncidentsReport(usernametemp,
    usermobiletemp,
    txtlatTmp,
    txtLongtemp,
    'ttyt',
    0,
    0,
    0,
    currentdate.getDate(),
    1    );

    objIncidentsReport.InsertIncidentsReport(db);
    objIncidentsReport.GetAllRecords(db);*/


}
function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.
{

    db.transaction(function (tx) { tx.executeSql(DROP_TABLE1, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(DROP_TABLE2, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(DROP_TABLE3, [], onSuccess, onError); });
    db.transaction(function (tx) { tx.executeSql(DROP_TABLE4, [], onSuccess, onError); });
    //resetForm();

    initDatabase();

}
$(document).ready(function () // Call function when page is ready for load..
{
    $("body").fadeIn(2000); // Fede In Effect when Page Load..
    initDatabase();
    $("#submitButton").click(insertRecord);  // Register Event Listener when button click.
   // $("#btnUpdate").click(updateRecord);
   // $("#btnReset").click(resetForm);
   $("#btnDrop").click(dropTable);

});