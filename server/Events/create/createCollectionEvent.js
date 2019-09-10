var events = require('events');
var eventEmitter = new events.EventEmitter();
var operations = require("../../Repeating_Functions/controller");

eventEmitter.on("Create Collection", async function (DBName, CollectionName,CollectionStruct) {
    function CollectionDir() {
        if (operations.checkdir("../Database/" + DBName)) {

            if (!operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
                operations.mkdir("../Database/" + DBName + "/" + CollectionName);
                operations.Write("../Database/" + DBName + "/" + CollectionName,CollectionStruct,"struct.json")
                operations.Write("../Database/" + DBName + "/" + CollectionName,'[]',"index.json")
            } else {
                console.log("Collection already exist");
            }

        } else {
            console.log("Databse does not exist");
        }

    }
    await CollectionDir();
});

module.exports = {
    createCollectionEvt: eventEmitter
}