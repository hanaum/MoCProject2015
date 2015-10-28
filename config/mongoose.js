var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://heroku_0v4q6hdk:nhht2iodbhje8atpiqh0vr34fn@ds045644.mongolab.com:45644/heroku_0v4q6hdk');
var models_path = __dirname + '/../server/models';
//mongodb://jkhh:jkhh123@ds035553.mongolab.com:35553/mocproject
fs.readdirSync(models_path).forEach( function (file) {
  if (file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
});
