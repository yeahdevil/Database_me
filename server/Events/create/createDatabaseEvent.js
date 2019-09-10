var events = require('events');
var eventEmitter = new events.EventEmitter();
const operations = require("../../Repeating_Functions/controller");

eventEmitter.on('Create Database', async function (DBName) {
    function DatabaseDir() {
        if (!operations.checkdir("../Database"))
            operations.mkdir("../Database");
    }

    function DBDir() {
        if (operations.checkdir("../Database/" + DBName)) {
            console.log("DATABASE ALREADY EXISTS");
        } else {
            operations.mkdir("../Database/" + DBName)
            console.log("Database "+DBName+" Created");
        }
    }
    await DatabaseDir();
    await DBDir();
  
});

module.exports = {
    createDatabaseEvt: eventEmitter
}