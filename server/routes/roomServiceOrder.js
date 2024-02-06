const express = require('express');
const router = express.Router();
const {RoomServiceOrders} = require('../models'); 

// Route to insert data into Room Service Orders table
router.post('/room-service-orders', async (req, res) => {
    try {
        const { roomID, guestID, orderDate, status } = req.body;
        const newRoomServiceOrder = await RoomServiceOrders.create({
            roomID,
            guestID,
            orderDate,
            status
        });
        res.status(201).json(newRoomServiceOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
