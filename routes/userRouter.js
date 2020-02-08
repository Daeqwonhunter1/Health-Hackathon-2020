const {
  Router
} = require('express');
const {
  User
} = require('../models');
const userRouter = Router();



userRouter.get('/', async (req, res,next) => {
  try {
    const test = await User.findAll()
    res.json(test)
  } catch (e) {
    next()
  }
});

module.exports = userRouter;