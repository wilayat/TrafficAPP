function IncidentsReport(
    CallerName,
    CallerNumber ,
    Latitude ,
    Longitude ,
    IncidentDesc ,
    SpecialNeed,
    HelpReq997 ,
    HelpReq998 ,
    ReportTime ,
    ArabicSpeaking ,
    SettingId ) {
    this.CallerName=CallerName;
    this.CallerNumber =CallerNumber ;
    this.Latitude =Latitude ;
    this.Longitude =Longitude ;
    this.IncidentDesc =IncidentDesc ;
    this.SpecialNeed=SpecialNeed;
    this.HelpReq997 =HelpReq997 ;
    this.HelpReq998 =HelpReq998 ;
    this.ReportTime =ReportTime ;
    this.ArabicSpeaking =ArabicSpeaking ;
    this.SettingId =SettingId;
}
IncidentsReport.prototype.creartIncidentsReport= function(db) {
    db.transaction(function (tx) { tx.executeSql(CREATE_INCIDENTREPORTS_TABLE, [], this.onSuccess, this.onError); });
};
IncidentsReport.prototype.InsertIncidentsReport= function(db) {
    db.transaction(function (tx) {
        tx.executeSql(INSERT_INCIDENTSREPORTED, [this.CallerName,
    this.CallerNumber,
    this.Latitude,
    this.Longitude,
    this.IncidentDesc,
    this.SpecialNeed,
    this.HelpReq997,
    this.HelpReq998,
    this.ReportTime,
    this.SettingId], this.onSuccess, this.onError);
    });
};
IncidentsReport.prototype.UpdateIncidentsReport= function(db) {
    db.transaction(function (tx) { tx.executeSql(UPDATE_INCIDENTSREPORTED, [  IncidentReportId,CallerName,
    CallerNumber ,
    Latitude ,
    Longitude ,
    IncidentDesc ,
    SpecialNeed,
    HelpReq997 ,
    HelpReq998 ,
    ReportTime ,
    ArabicSpeaking ,
    SettingId], this.onSuccess, this.onError);
    });
};

IncidentsReport.prototype.GetAllRecords = function (db) // Function For Retrive data from Database Display records as list
{

    $("#results").html('')

    db.transaction(function (tx) {

        tx.executeSql(SELECT_ALL_FROM_INCIDENTREPORTED, [], function (tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

                item = dataset.item(i);

                var linkeditdelete = '<li>' + item['CallerName'] + ' , ' + item['CallerNumber'] + '</li>'; // +'    ' +
                alert(linkeditdelete);    
                //    '<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';

                $("#results").append(linkeditdelete);

            }

        });

    });

};

IncidentsReport.prototype.onError= function(tx, error){
    alert(error.message);
};
IncidentsReport.prototype.onSuccess = function () {
    alert("Successful");
};
