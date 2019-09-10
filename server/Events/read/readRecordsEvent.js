var events = require('events');
var eventEmitter = new events.EventEmitter();
var operations = require("../../Repeating_Functions/controller");

eventEmitter.on("Read Record", async function (DBName, CollectionName) {
    function ReadRec() {
        if (operations.checkdir("../Database/" + DBName)) {
            if (!operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
                console.log("Collection doesn't exist");

            } else {
                operations.Read("../Database/" + DBName + "/" + CollectionName + "/index.json")
            }

        } else {
            console.log("Databse does not exist");
        }

    }
    await ReadRec();
});

module.exports = {
    readRecordEvt: eventEmitter
}