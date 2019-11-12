Require Event Handler in any node File to used this DB

Diff functions Are 

 for creation of DB -->


DBevents.createDatabaseEvt.emit("Create Database", DB_name);


 for creation of collection -->

DBevents.createCollectionEvt.emit("Create Collection", DB_name, Collection_name, Structure of collection);

 for creation of record -->


DBevents.createRecordEvt.emit("Create Record", DB_name, Collection_name, data)
data=>can be array of object or object


 to read all records -->


DBevents.readRecordEvt.emit("Read Record",  DB_name, Collection_name);


 to update record -->

DBevents.updateRecordEvt.emit("Update Record", DB_name, Collection_name,key,old value,new value);


 remove record -->

DBevents.removeRecordEvt.emit("Remove Record",DB_name, Collection_name,key,value);

 remove collection -->
 DBevents.removeCollectionEvt.emit("Remove Collection",DB_name, Collection_name);

 remove database -->

 DBevents.removeDatabaseEvt.emit("Remove Collection",DB_name);
