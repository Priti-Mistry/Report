const express = require('express');
const router = express.Router();
const {Rooms} = require('../models'); 

router.post('/rooms', async (req, res) => {
    try {
        const { roomNumber, roomTypeID, status } = req.body;
        const newRoom = await Rooms.create({
            roomNumber,
            roomTypeID,
            status
        });
        res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
