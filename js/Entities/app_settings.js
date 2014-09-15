function app_settings(
    IMEI,
    FirstName,
    LastName,
    FamilyName,
    IdentityId,
    SpecialNeed,
    ArabicSpeaking,
    NationalityId,
    CallerNumber,
    CreatedOn) {
    this.IMEI = IMEI;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.FamilyName = FamilyName;
    this.IdentityId = IdentityId;
    this.SpecialNeed = SpecialNeed;
    this.ArabicSpeaking = ArabicSpeaking;
    this.NationalityId = NationalityId;
    this.CallerNumber = CallerNumber;
    this.CreatedOn = CreatedOn;
}

app_settings.prototype.creartSettingsTable = function(db) {
    db.transaction(function (tx) { tx.executeSql(CREATE_SETTINGS_TABLE, [], onSuccess, onError); });
};
app_settings.prototype.InsertIntotSettingsTable= function(db) {
    db.transaction(function (tx) { tx.executeSql(INSERT_SETTINGS, [   IMEI,
    FirstName,
    LastName,
    FamilyName,
    IdentityId,
    SpecialNeed,
    ArabicSpeaking,
    NationalityId,
    CallerNumber,
    CreatedOn], onSuccess, onError); });
};
app_settings.prototype.UpdateSettingsTable= function(db) {
    db.transaction(function (tx) { tx.executeSql(Quries.updateSettings, [  SettingId, IMEI,
    FirstName,
    LastName,
    FamilyName,
    IdentityId,
    SpecialNeed,
    ArabicSpeaking,
    NationalityId,
    CallerNumber,
    CreatedOn], onSuccess, onError); });
};

app_settings.prototype.GetAllRecords= function(db) // Function For Retrive data from Database Display records as list
{
/*
    $("#results").html('')

    db.transaction(function (tx) {

        tx.executeSql(Quries.selectAppSettingsById, [], function (tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

                item = dataset.item(i);

                var linkeditdelete = '<li>' + item['CallerName'] + ' , ' + item['CallerNumber'] + '    ' + '<a href="#" onclick="loadRecord(' + i + ');">edit</a>' + '    ' +

                                            '<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';

                $("#results").append(linkeditdelete);

            }

        });

    });*/

};

app_settings.prototype.onError= function(tx, error){
    alert(error.message);
};
app_settings.prototype.onSuccess = function () {
   // alert("Successful");
};
