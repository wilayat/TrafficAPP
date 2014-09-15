/// Create Tables
var CREATE_SETTINGS_TABLE = "CREATE TABLE IF NOT EXISTS [AppSettings] (SettingId integer PRIMARY KEY, IMEI  text , FirstName text, LastName text , FamilyName text, IdentityId integer,SpecialNeed boolean DEFAULT 0,ArabicSpeaking boolean DEFAULT 1,NationalityId integer,CallerNumber integer, CreatedOn Date)";
var CREATE_COMPLAINTS_TABLE = "CREATE TABLE IF NOT EXISTS [Complaints] (Complaintid integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,Desc text,Vedio blob,Picture blob,DeviceSettingId integer NOT NULL,ComplaintTime timestamp NOT NULL)";
var CREATE_INCIDENTREPORTS_TABLE = "CREATE TABLE IF NOT EXISTS [IncidentsReported] (IncidentReportId integer NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,CallerName text NOT NULL,CallerNumber text NOT NULL,Latitude double,Longitude double,IncidentDesc text,SpecialNeed boolean NOT NULL DEFAULT 0,HelpReq997 boolean NOT NULL DEFAULT 0,HelpReq998 boolean NOT NULL DEFAULT 0,ReportTime timestamp NOT NULL,ArabicSpeaking boolean DEFAULT 0,SettingId integer)";
var CREATE_NATIONALITIES = "CREATE TABLE IF NOT EXISTS [Nationalities] (NationalityId Integer NOT NULL PRIMARY KEY UNIQUE,NationalityDesc text NOT NULL UNIQUE,Active boolean NOT NULL DEFAULT 1)";
///Insert into Tables
var INSERT_INCIDENTSREPORTED = "INSERT INTO IncidentsReported (CallerName ,CallerNumber,Latitude ,Longitude ,IncidentDesc,SpecialNeed ,HelpReq997 ,HelpReq998 ,ReportTime ,SettingId   ) VALUES(? ,?,? ,? ,?,? ,? ,? ,? ,? ) ";
var INSERT_SETTINGS = "INSERT INTO AppSettings  (IMEI  , FirstName ,LastName , FamilyName ,IdentityId ,SpecialNeed ,ArabicSpeaking,NationalityId,CallerNumber, CreatedOn) VALUES  (?,?,?,?,?,?,?,?,?,?)";
//Select From Tables
var SELECT_ALL_FROM_INCIDENTREPORTED = "SELECT * FROM IncidentsReported";
var SELECT_ALL_FROM_APPSETTINGS = "SELECT * FROM AppSettings";
var SELECT_FROM_APPSETTINGS_BY_ID = "SELECT * FROM AppSettings WHERE SettingId=? ";
//Update Tables
var UPDATE_INCIDENTSREPORTED = "UPDATE IncidentsReported SET CallerName = ?, CallerNumber = ? WHERE id=?";
var UPDATE_SETTINGS = "UPDATE AppSettings SET IMEI =? , FirstName=? ,LastName =?, FamilyName=? ,IdentityId=? ,SpecialNeed=? ,ArabicSpeaking=?,NationalityId=?,CallerNumber=?, CreatedOn=? WHERE SettingId=?";
//Delete From Tables
var DELETE_FROM_INCIDENTSREPORTED = "DELETE FROM IncidentsReported WHERE id=?";
//Drop Tables
var DROP_TABLE1 = "DROP TABLE IncidentsReported";
var DROP_TABLE2 = "DROP TABLE AppSettings";
var DROP_TABLE3 = "DROP TABLE Complaints";
var DROP_TABLE4 = "DROP TABLE Nationalities";
var DROP_TABLE5 = "DROP TABLE IncidentReports";