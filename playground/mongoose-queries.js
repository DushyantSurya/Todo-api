const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todos');
const {Users} = require('./../server/models/users');

var id = "5ab775bc8967392f382804f3";

if(!ObjectID.isValid(id))
{
  return console.log('ID not Valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if(!todo)
//   {
//     return console.log('ID not found');
//   }
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo)
//   {
//     return console.log('ID not found');
//   }
//   console.log(todo);
// });

// Todo.findById(id).then((todo)=> {
//   if(!todo)
//   {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=> {
//   console.log(e);
// })

Users.findById(id).then((user)=> {
  if(!user){
    return console.log('No data available for this ID');
  }
  console.log(user);
}).catch((e)=> {console.log(e)});
