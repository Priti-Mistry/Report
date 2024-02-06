const express = require('express');
const router = express.Router();
const {Inventory} = require('../models'); 

// Route to insert data into Inventory table
router.post('/inventory', async (req, res) => {
    try {
        const { itemName, quantity, unitPrice, supplierInformation } = req.body;
        const newInventoryItem = await Inventory.create({
            itemName,
            quantity,
            unitPrice,
            supplierInformation
        });
        res.status(201).json(newInventoryItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
