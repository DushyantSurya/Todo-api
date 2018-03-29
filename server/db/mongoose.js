var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//'mongodb://<dbuser>:<dbpassword>@ds033066.mlab.com:33066/todoapp' ||
mongoose.connect( process.env.NONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
