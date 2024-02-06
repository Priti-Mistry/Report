const express = require('express');
const router = express.Router();
const {Shifts} = require('../models'); 

// Route to insert data into Shifts table
router.post('/shifts', async (req, res) => {
    try {
        const { staffID, startTime, endTime } = req.body;
        const newShift = await Shifts.create({
            staffID,
            startTime,
            endTime
        });
        res.status(201).json(newShift);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
