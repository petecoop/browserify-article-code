(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = User = function (name) {
  this.name = name;
};

User.prototype.welcome = function () {
  return 'Welcome ' + this.name;
};
},{}],2:[function(require,module,exports){
var maths = require('./mymodule');
var User = require('./User');

var num = maths.multiply(1, 2);

var someUser = new User('Pete');
var welcomeMessage = someUser.welcome();
},{"./User":1,"./mymodule":3}],3:[function(require,module,exports){
exports.multiply = function (a, b) {
  return a * b;
};
},{}]},{},[2])