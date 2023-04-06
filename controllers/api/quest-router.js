const { Quest } = require('../../models');
const router = require('express').Router();

router.post('/questPage', async (req, res) => {
    try {
        const quest = await Quest.create({ username, password});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.'})
    }
    })

    module.exports = router