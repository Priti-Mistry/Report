const express = require('express');
const router = express.Router();
const {Reservations} = require('../models'); 

// Route to insert data into Reservations table
router.post('/reservations', async (req, res) => {
    try {
        const { guestID, roomID, checkInDate, checkOutDate, totalPrice, status } = req.body;
        const newReservation = await Reservations.create({
            guestID,
            roomID,
            checkInDate,
            checkOutDate,
            totalPrice,
            status
        });
        res.status(201).json(newReservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
