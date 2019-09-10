var events = require('events');
var eventEmitter = new events.EventEmitter();
var operations = require("../../Repeating_Functions/controller");

eventEmitter.on("Update Record", async function (DBName, CollectionName,key,value,newValue) {
    function UpdateRec() {
        if (operations.checkdir("../Database/" + DBName)) {
            if (!operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
                console.log("Collection doesn't exist");
                
            } else {
                operations.updateInFile("../Database/" + DBName + "/" + CollectionName + "/" + "index.json" ,key,value,newValue);
            }

        } else {
            console.log("Databse does not exist");
        }

    }
    await UpdateRec();
});

module.exports = {
    updateRecordEvt: eventEmitter
}