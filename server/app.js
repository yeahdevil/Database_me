const express = require("express");
const app = express();
const DBevents = require("./Events/EventHandler");


//database events
var data = {
    "id": 2,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
}

async function db() {
    await DBevents.createDatabaseEvt.emit("Create Database", "abc");
    await DBevents.createCollectionEvt.emit("Create Collection", "abc", "xyz", JSON.stringify({
        "name": "String"
    }));
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data)
    await DBevents.readRecordEvt.emit("Read Record", "abc", "xyz");
    await DBevents.removeCollectionEvt.emit("Remove Collection","abc","xyz");
    await DBevents.removeDatabaseEvt.emit("Remove Database","abc");
}
db()


//testarea
app.listen(2000, (req, res) => {
    console.log("connected to database listening on port 2000");
});