var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds033066.mlab.com:33066/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
