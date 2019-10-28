var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('auth/index', { title: 'User Authentication' });
});

router.get('/logout', function(req, res){
// Code Used to provide log-out of API with need to clear cookie 
//   req.logout();
//   res.redirect('/auth');
// });
  // Final code provides reliable log-out of API without need to clear cookie 
  req.session.destroy(function (err) {
  res.redirect('/'); //Inside a callback… bulletproof!
  });

});

module.exports = router;