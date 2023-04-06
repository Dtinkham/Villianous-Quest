const router = require('express').Router();
const usersRouter = require('./users-router');
const exampleRouter = require('./example-router');
const questRouter = require('./quest-router');

router.use('/users', usersRouter);
router.use('/example', exampleRouter);
router.use('/quests', questRouter);


module.exports = router;
