var events = require('events');
var eventEmitter = new events.EventEmitter();
const operations = require("../../Repeating_Functions/controller");

eventEmitter.on('Remove Collection', async function (DBName, CollectionName) {
    function removeCollectionDir() {
        if (operations.checkdir("../Database/" + DBName + "/" + CollectionName)) {
            operations.removeDir("../Database/" + DBName + "/" + CollectionName)
        }
    }
    await removeCollectionDir();
  
});

module.exports = {
    removeCollectionEvt: eventEmitter
}