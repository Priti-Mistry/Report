const express = require('express');
const router = express.Router();
const { sequelize } = require('../models'); // Import Sequelize instance
const db = require('../models');

// Route to get all column names from all tables
router.get('/columns', async (req, res) => {
    try {
        // Get all model names
        const modelNames = Object.keys(sequelize.models);

        // Retrieve column names for each model and exclude createdAt and updatedAt
        const columnData = {};
        for (let modelName of modelNames) {
            if(modelName === "Reservations" || modelName === "Rooms" || modelName === "Guests" || modelName === "RoomTypes")
            {const model = sequelize.models[modelName];
            const columns = await model.describe();
            const filteredColumns = Object.keys(columns).filter(column => column !== 'createdAt' && column !== 'updatedAt' && column !=='reservationID' && column !=='guestID' &&  column !=='roomID' &&  column !=='roomTypeID');
            columnData[modelName] = filteredColumns;}
        }
        res.status(200).json(columnData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Route to get all column names for a specific table
// router.get('/columns/:tableName', async (req, res) => {
//     try {
//         const { tableName } = req.params;
//         const model = db[tableName];
//         if (!model) {
//             return res.status(404).json({ message: 'Table not found' });
//         }
//         const columns = await model.describe();
//         res.status(200).json(Object.keys(columns));
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });
// Route to get data for selected columns from a specific table
router.post('/data/:tableName', async (req, res) => {
    try {
        const { tableName } = req.params;
        const { selectedColumns } = req.body;
        const model = db[tableName];
        if (!model) {
            return res.status(404).json({ message: 'Table not found' });
        }
        const data = await model.findAll({
            attributes: selectedColumns
        });
        console.log("selected col from client : ",data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
