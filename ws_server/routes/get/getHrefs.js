var path = require('path');
var pathToFolder = path.join(__dirname, '../../dataVideo');

module.exports = function(req, res) {
  var folderName = req.params.prof;
  var fileName = req.params.topic;

  var data = require(`${pathToFolder}/${folderName}/${fileName}.json`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
};