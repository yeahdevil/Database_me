const createDatabaseEvt = require("./create/createDatabaseEvent").createDatabaseEvt;
const createCollectionEvt = require("./create/createCollectionEvent").createCollectionEvt;
const createRecordEvt = require("./create/createRecordEvent").createRecordEvt;
const readRecordEvt = require("./read/readRecordsEvent").readRecordEvt;
const removeDatabaseEvt = require("./delete/deleteDatabaseEvent").removeDatabaseEvt;
const removeCollectionEvt = require("./delete/deleteCollectionEvent").removeCollectionEvt;


module.exports = {
    createCollectionEvt : createCollectionEvt,
    createDatabaseEvt : createDatabaseEvt,
    createRecordEvt : createRecordEvt,
    readRecordEvt:readRecordEvt,
    removeDatabaseEvt:removeDatabaseEvt,
    removeCollectionEvt:removeCollectionEvt
}
