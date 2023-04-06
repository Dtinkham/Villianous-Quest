const router = require('express').Router();
const usersRouter = require('./users-router');
const exampleRouter = require('./quest-router');

router.use('/users', usersRouter);
router.use('/quests', exampleRouter);


module.exports = router;
