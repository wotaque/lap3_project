const express = require('express');
const cors = require('cors');
const router = express.Router();
const User = require('../models/User');

router.use(cors());

// Get highscores route
router.get('/leaderboard', (req, res) => async (req, res) => {
    try {
        const users = await User.all;
        res.json({users})
    } catch (err) {
        res.status(500).json({err})
    }
})

// Posting highscores
// router.post('/leaderboard', async (req, res) => {

// })

module.exports = router;