const express = require('express');
const router = express.Router();
const {Maintenance} = require('../models');

// Route to insert data into Maintenance table
router.post('/maintenance', async (req, res) => {
    try {
        const { roomID, maintenanceDate, description, status } = req.body;
        const newMaintenance = await Maintenance.create({
            roomID,
            maintenanceDate,
            description,
            status
        });
        res.status(201).json(newMaintenance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
