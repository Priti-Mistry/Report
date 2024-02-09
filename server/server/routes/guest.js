const express = require('express');
const router = express.Router();
const {Guests} = require('../models'); 

// Route to insert data into Guests table
router.post('/guests', async (req, res) => {
    try {
        const { firstName, lastName, address, contactInformation, email, nationality } = req.body;
        const newGuest = await Guests.create({
            firstName,
            lastName,
            address,
            contactInformation,
            email,
            nationality
        });
        res.status(201).json(newGuest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
