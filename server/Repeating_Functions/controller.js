const fs = require("fs");
const path = require("path");

function checkExistsSync(loc) {
  return fs.existsSync(path.join(__dirname, loc));
}

function mkdir(loc) {
  fs.mkdirSync(path.join(__dirname, loc))
}

function Write(loc, str, name) {
  var count = 0;
  if (checkExistsSync(loc + "/" + name)) {
    var data = fs.readFileSync(path.join(__dirname, loc + "/" + name), 'utf8')
    obj = JSON.parse(data);
    if(Array.isArray(str)){
      for(x in str){
        obj.push(str[x]);
        count++;
      }
    }
    else
    {
      obj.push(str);
      count++;
    }
    
    json = JSON.stringify(obj);
    fs.writeFileSync(path.join(__dirname, loc + "/" + name), json, 'utf8')
    console.log("Inserted "+count+" records")
  } else {
   
    fs.writeFileSync(path.join(__dirname, loc + "/" + name), str, 'utf8')
    console.log("Structure Created");
  }
}

function Read(loc) {
  var data = fs.readFileSync(path.join(__dirname, loc), 'utf8')
  console.log(JSON.parse(data));
}

function removeDir(loc) {
  var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file, index) {
        var curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };
  deleteFolderRecursive(path.join(__dirname, loc));
}

function removeRecord(loc, key, value) {
  var data = JSON.parse(fs.readFileSync(path.join(__dirname, loc), 'utf8'));
  var count = 0;
  for (var x = 0; x < data.length; x++) {

    if (data[x][key] === value) {
      data.splice(x, 1);
      x--;
      count++;
    }
  }
  fs.writeFileSync(path.join(__dirname, loc), JSON.stringify(data), 'utf8')
  console.log("Deleted " + count + " record with key:" + key + " value:" + value)
}

function updateRecord(loc,key,value,newVal)
{
  var data = JSON.parse(fs.readFileSync(path.join(__dirname, loc), 'utf8'));
  var count = 0;
  for (var x = 0; x < data.length; x++) {

    if (data[x][key] === value) {
      data[x][key] = newVal
      count++;
    }
  }
  fs.writeFileSync(path.join(__dirname, loc), JSON.stringify(data), 'utf8')
  console.log("Updated " + count + " record with key:" + key + " value:" + value+ " to:" + newVal )

}

module.exports = {
  checkdir: checkExistsSync,
  mkdir: mkdir,
  Write: Write,
  Read: Read,
  removeDir: removeDir,
  removeFromFile: removeRecord,
  updateInFile: updateRecord
}