var events = require('events');
var eventEmitter = new events.EventEmitter();
var operations = require("../../Repeating_Functions/controller");

eventEmitter.on("Create Record", async function (DBName, CollectionName,Data) {
    function CreateRec() {
        if (operations.checkdir("../Database/" + DBName)) {
            if (!operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
                console.log("Collection doesn't exist");
                
            } else {
                operations.Write("../Database/" + DBName + "/" + CollectionName,Data,"index.json")
            }

        } else {
            console.log("Databse does not exist");
        }

    }
    await CreateRec();
});

module.exports = {
    createRecordEvt: eventEmitter
}