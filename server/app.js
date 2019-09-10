const express = require("express");
const app = express();
const DBevents = require("./Events/EventHandler");


//database events
var data = {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
}
var data1 = {
    "id": 2,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
}
var data3 = [{
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters": {
            "batter": [{
                    "id": "1001",
                    "type": "Regular"
                },
                {
                    "id": "1002",
                    "type": "Chocolate"
                },
                {
                    "id": "1003",
                    "type": "Blueberry"
                },
                {
                    "id": "1004",
                    "type": "Devil's Food"
                }
            ]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5005",
                "type": "Sugar"
            },
            {
                "id": "5007",
                "type": "Powdered Sugar"
            },
            {
                "id": "5006",
                "type": "Chocolate with Sprinkles"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
    },
    {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.55,
        "batters": {
            "batter": [{
                "id": "1001",
                "type": "Regular"
            }]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5005",
                "type": "Sugar"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
    },
    {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters": {
            "batter": [{
                    "id": "1001",
                    "type": "Regular"
                },
                {
                    "id": "1002",
                    "type": "Chocolate"
                }
            ]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
    }
];


async function db() {
    await DBevents.createDatabaseEvt.emit("Create Database", "abc");
    await DBevents.createCollectionEvt.emit("Create Collection", "abc", "xyz", JSON.stringify({
        "name": "String"
    }));


    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data1)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data3)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data1)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data1)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data)
    await DBevents.createRecordEvt.emit("Create Record", "abc", "xyz", data)


    await DBevents.readRecordEvt.emit("Read Record", "abc", "xyz");

    await DBevents.updateRecordEvt.emit("Update Record","abc","xyz","first_name","Jeanette","Deepak");

    await DBevents.removeRecordEvt.emit("Remove Record","abc","xyz","id",2);
    await DBevents.removeCollectionEvt.emit("Remove Collection","abc","xyz");
    await DBevents.removeDatabaseEvt.emit("Remove Database","abc");
}
db()


//testarea
app.listen(2000, (req, res) => {
    console.log("connected to database listening on port 2000");
});