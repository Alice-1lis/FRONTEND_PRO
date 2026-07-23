require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
const port = 3000

const client = new MongoClient(process.env.MONGO_URI);
let addTodo;

client.connect().then(() => {
  console.log('MongoDB connected');
  const db = client.db('todolist');
  addTodo = db.collection('todos');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', async (req, res) => {
  const todos = await addTodo.find().toArray();
  res.send(todos);
})

app.post('/todos', async (req, res) => {
  const newInform = { text: req.body.text, checked: false };
  const result = await addTodo.insertOne(newInform);
  res.send({ _id: result.insertedId, ...newInform });
});

app.patch('/todos/:id', async (req, res) => {
  const userId = req.params.id;
  const updated = await addTodo.findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $set: { checked: req.body.checked } },
    { returnDocument: 'after' }
  );
  res.send(updated);
});

app.delete('/todos/:id', async (req, res) => {
  const userId = req.params.id;
  const deleted = await addTodo.findOneAndDelete({ _id: new ObjectId(userId) });
  res.send(deleted);
});

app.listen(port, () => {
  console.log(`port ${port}`)
})

