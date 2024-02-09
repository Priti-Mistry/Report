const express = require('express');
const router = express.Router();
const {RoomTypes} = require('../models'); 

router.post('/room-types', async (req, res) => {
    try {
        const { typeName, description, price } = req.body;
        const newRoomType = await RoomTypes.create({
            typeName,
            description,
            price
        });
        res.status(201).json(newRoomType);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
