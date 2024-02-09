const express = require('express');
const router = express.Router();
const {Hotel} = require('../models');

// Route to insert data into Hotel Information table
router.post('/hotel-information', async (req, res) => {
    try {
        const { hotelName, address, contactInformation, description, amenities } = req.body;
        const newHotel = await Hotel.create({
            hotelName,
            address,
            contactInformation,
            description,
            amenities
        });
        res.status(201).json(newHotel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
