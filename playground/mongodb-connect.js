// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').insertOne({
//   text: 'Something to print',
//   completed: false
// }, (err, res) => {
//   if(err){
//     return console.log('Unable to add Todo');
//   }
//   console.log(JSON.stringify(res.ops, undefined, 2));
// })

// db.collection('Users').insertOne({
//
//   name: 'Dushyant Surya',
//   age: 20,
//   location: 'Philadelphia,US',
//
// },(err, res) => {
//   if(err){
//     return console.log('unable to add User detail to database');
//   }
//   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
// })
  db.close();
})
