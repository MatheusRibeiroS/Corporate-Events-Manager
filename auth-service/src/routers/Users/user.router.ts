import { Router } from "express";

const userRouter = Router();

userRouter.get('/', function (req, res) {
  res.send('Got a GET request at /user');
})

userRouter.post('/', function (req, res) {
  res.send('Got a POST request at /user');
})

userRouter.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user');
})

userRouter.put('/:id', function (req, res) {

  // validate if user with id exists

  // if not 
  // res.status(404).json({
  //   message: 'User not found',
  // })

  res.send(`Got a PUT request at /user with id: ${req.params.id as string}`);
})

export default userRouter;