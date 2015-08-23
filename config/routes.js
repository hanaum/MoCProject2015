var users = require('./../server/controllers/users');
var digits = require('./../server/controllers/digits');

module.exports = function(app) {
  app.get('/', function(req, res) {
  	console.log("HERE");
    res.render('mainpage.html');
  })

  app.get('/main', function(req, res){
  	res.render('mainpage.html');
  })

  app.post('/addUser', function(req, res) {
    console.log(req.body);
    users.addUser(req, res);
  })
  // app.get('/getUserInfo', function(req, res) {
  //   users.getUserInfo(req, res);
  // })
  app.get('/getCharities', function(req, res) {
    console.log("routes");
    users.getCharities(req, res);
  })
  app.get('/getUserInfo', function(req, res) {
    users.getUserInfo(req, res);
  })
  app.post('/digits', function (req, res) {
    console.log('got to routes');
    digits.authenticate(req, res);
  });
}
