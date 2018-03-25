const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err)
  {
    return  console.log('Unable to connect to mongoDB server');
  }

  db.collection('Users').deleteMany({
    name: 'Dushyant Surya'
  }).then((result)=> {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5ab744cb13c9619dad852caf")
  }).then((result) => {
    console.log(result);
  })

})
