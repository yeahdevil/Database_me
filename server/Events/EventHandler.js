const createDatabaseEvt = require("./create/createDatabaseEvent").createDatabaseEvt;
const createCollectionEvt = require("./create/createCollectionEvent").createCollectionEvt;
const createRecordEvt = require("./create/createRecordEvent").createRecordEvt;
const readRecordEvt = require("./read/readRecordsEvent").readRecordEvt;
const removeDatabaseEvt = require("./delete/deleteDatabaseEvent").removeDatabaseEvt;
const removeCollectionEvt = require("./delete/deleteCollectionEvent").removeCollectionEvt;
const removeRecordEvt = require("./delete/deleteRecordEvent").removeRecordEvt;
const updateRecordEvt = require("./update/updateRecordEvent").updateRecordEvt;

module.exports = {
    //creation
    createCollectionEvt : createCollectionEvt,
    createDatabaseEvt : createDatabaseEvt,
    createRecordEvt : createRecordEvt,
    //reading
    readRecordEvt:readRecordEvt,
    updateRecordEvt: updateRecordEvt,
    //removing
    removeDatabaseEvt:removeDatabaseEvt,
    removeCollectionEvt:removeCollectionEvt,
    removeRecordEvt : removeRecordEvt
}
