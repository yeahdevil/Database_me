var events = require('events');
var eventEmitter = new events.EventEmitter();
const operations = require("../../Repeating_Functions/controller");

eventEmitter.on('Remove Database', async function (DBName) {
    function removeDBDir() {
        if (operations.checkdir("../Database/" + DBName)) {
            operations.removeDir("../Database/" + DBName)
        }
    }
    await removeDBDir();
  
});

module.exports = {
    removeDatabaseEvt: eventEmitter
}