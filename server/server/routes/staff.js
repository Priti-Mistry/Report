const express = require('express');
const router = express.Router();
const {Staff} = require('../models'); 

// Route to insert data into Staff table
router.post('/staff', async (req, res) => {
    try {
        const { firstName, lastName, position, contactInformation } = req.body;
        const newStaff = await Staff.create({
            firstName,
            lastName,
            position,
            contactInformation
        });
        res.status(201).json(newStaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
