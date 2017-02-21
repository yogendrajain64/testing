var Item = require('./model');
var mongoose = require('mongoose');

exports.index = function(req, res, next) {
  Item.find(function (err, items) {
    //  console.log("Inside controller",items);
      res.status(200).json(items);
      next();
  });
};
