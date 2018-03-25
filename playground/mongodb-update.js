const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err)
  {
    return console.log('Unable to connect to mongoDB server');
  }

  db.collection('Users').findOneAndUpdate({
    name: 'Dushyant'
  }, {
    $set: {
      name: 'Dushyant Dee'
    }, $inc: {
      age: -1
    }
  }, {returnOriginal: false }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })
})
