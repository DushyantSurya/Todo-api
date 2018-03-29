const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

Todo.remove({}).then((result) => {
  console.log(result);
})
