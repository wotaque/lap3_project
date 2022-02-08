const express = require('express');
const cors = require('cors');
const router = express.Router();
const User = require('../models/User');

router.use(cors());

// Get highscores route
router.get("/leaderboard", async (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        
        res.send(result);
    })
})

// Posting highscores
router.post('/insert', async (req, res) => {
    const name = req.body.name; 
    const score = req.body.score;

    const user = new User({ name: name, score: score })
    try {
        await user.save();
        res.send("Inserted new highscore")
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;