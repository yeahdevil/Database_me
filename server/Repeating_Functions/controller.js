const fs = require("fs");
const path = require("path");


function checkExistsSync(loc) {
  return fs.existsSync(path.join(__dirname, loc));
}

function mkdir(loc) {
  fs.mkdirSync(path.join(__dirname, loc))
}

function Write(loc, str, name) {
  if (checkExistsSync(loc + "/" + name)) {
    var data = fs.readFileSync(path.join(__dirname, loc + "/" + name), 'utf8')
    obj = JSON.parse(data);
    obj.push(str);
    json = JSON.stringify(obj);
    fs.writeFileSync(path.join(__dirname, loc + "/" + name), json, 'utf8')
  } else {
    fs.writeFileSync(path.join(__dirname, loc + "/" + name), str, 'utf8')
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
function removeRecord(loc,constrain)
{
  var data = JSON.parse(fs.readFileSync(path.join(__dirname, loc), 'utf8'));
  for(x in data)
  {
    
  }
  
}


module.exports = {
  checkdir: checkExistsSync,
  mkdir: mkdir,
  Write: Write,
  Read: Read,
  removeDir: removeDir
}