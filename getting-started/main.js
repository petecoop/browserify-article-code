var maths = require('./mymodule');
var User = require('./User');

var num = maths.multiply(1, 2);

var someUser = new User('Pete');
var welcomeMessage = someUser.welcome();