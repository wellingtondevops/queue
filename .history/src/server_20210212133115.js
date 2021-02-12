import express from 'express';
import 'dotenv/config'
import UserController from './app/controllers/UserController';
import userController from './app/controllers/UserController'
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue'

const app = express();
BullBoard.setQueues(Queue.queues.map(queue=>queue.bull))


app.use(express.json())
app.post('/users', UserController.store)

app.use('/admin/queues', BullBoard.UI)


app.listen(process.env.PORT, ()=>{
  console.log(`Server running on the ${process.env.PORT}`)
})