const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

//   db.collection('Todos').find({
//     _id: new ObjectID('5ab4dce2bab0411168c07363')
//   }).toArray().then((docs)=>{
//     console.log('Todos:');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err)=> {
//     return console.log('Unable to fetch Todos');
//   })
// })

db.collection('Users').find({
  name: 'Dushyant Surya'
}).toArray().then((docs)=>{
  console.log('Users: \n');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to Fetch docs');
  console.log(err);
})
});
