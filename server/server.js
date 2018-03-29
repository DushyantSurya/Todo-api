var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {Users} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    req.send(doc)
  },(e) => {
    req.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=> {
    res.send(e);
  })
});

app.get('/todos/:id', (req, res)=> {
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send({});
  }
  Todo.findById(id).then((todo)=> {
    if(!todo){
      return res.status(404).send({});
    }
    res.send({todo});
  }).catch((e)=> res.status(400).send());
})

app.listen(3000, ()=> {
  console.log('Setting up server at port');
});

module.exports = {app};
