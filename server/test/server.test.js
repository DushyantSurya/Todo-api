const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos.js');

beforeEach((done)=> {
  Todo.remove({}).then(()=> done());
});

describe('POST/todo', ()=> {
  it('should create a todo', (done)=>{
    var text = 'for testing purpose';
    request(app)
      .post('/todo')
      .send({text})
      .expect(200)
      .expect((res)=>{
        res.body.text.toBe(text);
      })
      .end((err, res)=> {
        if(err){
          return done(err);
        }
        Todo.find().then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch(e)=>{ done(e) }
      })
  })
})
