
var db = openDatabase("TrafficViolation", "1.0", "Traffic Violation", 200000);  // Open SQLite Database

var dataset;

var DataType;

function initDatabase()  // Function Call When Page is ready.
{

    try {

        if (!window.openDatabase)  // Check browser is supported SQLite or not.
        {

            alert('Databases are not supported in this browser.');

        }

        else {

            createTable();  // If supported then call Function for create table in SQLite
            alert('Databases created.');
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

    db.transaction(function (tx) { tx.executeSql(CREATE_INCIDENTREPORTS_TABLE, [], showRecords, onError); });

}

function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
{

    var currentdate = new Date();
    var usernametemp = $('input:text[id=txt_Name]').val();
    var usermobiletemp = $('input:text[id=txt_MobileNum]').val();
    var txtlatTmp = $('input:text[id=txt_Lat]').val();
    var txtLongtemp = $('input:text[id=txt_lang]').val();
    var txtServeritytemp = $('input:text[id=tx_tSeverity]').val();
    var txtDetailstemp = $("txt_Details").val();

    db.transaction(function (tx) { tx.executeSql(INSERT_INCIDENTSREPORTED, [usernametemp, usermobiletemp, txtlatTmp, txtLongtemp, txtDetailstemp, 0, 0, 0, currentdate.getDate(), 1], loadAndReset, onError); });
    alert("Inserted Successfully");
    //tx.executeSql(SQL Query Statement,[ Parameters ] , Sucess Result Handler Function, Error Result Handler Function );

}

function deleteRecord(id) // Get id of record . Function Call when Delete Button Click..
{

    var iddelete = id.toString();

    db.transaction(function (tx) { tx.executeSql(deleteStatement, [id], showRecords, onError); alert("Delete Sucessfully"); });

    resetForm();

}

function updateRecord() // Get id of record . Function Call when Delete Button Click..
{

    var usernameupdate = $('input:text[id=CallerName]').val().toString();

    var useremailupdate = $('input:text[id=CallerNumber]').val().toString();

    var useridupdate = $("#id").val();

    db.transaction(function (tx) { tx.executeSql(updateStatement, [usernameupdate, useremailupdate, Number(useridupdate)], loadAndReset, onError); });

}

function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.
{

    db.transaction(function (tx) { tx.executeSql(dropStatement, [], showRecords, onError); });

    resetForm();

    initDatabase();

}

function loadRecord(i) // Function for display records which are retrived from database.
{

    var item = dataset.item(i);

    $("#CallerName").val((item['CallerName']).toString());

    $("#CallerNumber").val((item['CallerNumber']).toString());

    $("#id").val((item['id']).toString());

}

function resetForm() // Function for reset form input values.
{
    document.getElementById("myForm").reset();  

}

function loadAndReset() //Function for Load and Reset...
{

    resetForm();

    showRecords()

}

function onError(tx, error) // Function for Hendeling Error...
{

    alert(error.message);

}

function showRecords() // Function For Retrive data from Database Display records as list
{

    $("#results").html('')

    db.transaction(function (tx) {

        tx.executeSql(SELECT_ALL_FROM_INCIDENTREPORTED, [], function (tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

                item = dataset.item(i);

                var linkeditdelete = '<li>' + item['CallerName'] + ' , ' + item['CallerNumber'] + '    ' + '<a href="#" onclick="loadRecord(' + i + ');">edit</a>' + '    ' +

                                            '<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';

                $("#results").append(linkeditdelete);

            }

        });

    });

}

/*$(document).ready(function () // Call function when page is ready for load..
{
    ;

    $("body").fadeIn(2000); // Fede In Effect when Page Load..

    initDatabase();

    $("#submitButton").click(insertRecord);  // Register Event Listener when button click.

    $("#btnUpdate").click(updateRecord);

    $("#btnReset").click(resetForm);

    $("#btnDrop").click(dropTable);

});*/