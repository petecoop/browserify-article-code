module.exports = User = function (name) {
  this.name = name;
};

User.prototype.welcome = function () {
  return 'Welcome ' + this.name;
};