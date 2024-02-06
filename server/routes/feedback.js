const express = require('express');
const router = express.Router();
const {Feedback} = require('../models'); 

// Route to insert data into Feedback table
router.post('/feedback', async (req, res) => {
    try {
        const { guestID, feedbackDate, feedbackDescription, rating } = req.body;
        const newFeedback = await Feedback.create({
            guestID,
            feedbackDate,
            feedbackDescription,
            rating
        });
        res.status(201).json(newFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
