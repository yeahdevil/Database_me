var events = require('events');
var eventEmitter = new events.EventEmitter();
var operations = require("../../Repeating_Functions/controller");

eventEmitter.on("Remove Record", async function (DBName, CollectionName,key,value) {
    function DeleteRec() {
        if (operations.checkdir("../Database/" + DBName)) {
            if (!operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
                console.log("Collection doesn't exist");
                
            } else {
                operations.removeFromFile("../Database/" + DBName + "/" + CollectionName + "/" + "index.json" ,key,value);
            }

        } else {
            console.log("Databse does not exist");
        }

    }
    await DeleteRec();
});

module.exports = {
    removeRecordEvt: eventEmitter
}