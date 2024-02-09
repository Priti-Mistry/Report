const express = require('express');
const router = express.Router();
const {Billing} = require('../models'); 

// Route to insert data into Billing table
router.post('/billing', async (req, res) => {
    try {
        const { reservationID, roomID, guestID, totalAmount, paymentStatus } = req.body;
        const newBilling = await Billing.create({
            reservationID,
            roomID,
            guestID,
            totalAmount,
            paymentStatus
        });
        res.status(201).json(newBilling);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
