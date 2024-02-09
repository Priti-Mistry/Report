const express = require('express');
const router = express.Router();
const {EventBookings} = require('../models'); 

// Route to insert data into Event Bookings table
router.post('/event-bookings', async (req, res) => {
    try {
        const { guestID, eventDate, eventType, numberOfAttendees } = req.body;
        const newEventBooking = await EventBookings.create({
            guestID,
            eventDate,
            eventType,
            numberOfAttendees
        });
        res.status(201).json(newEventBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
