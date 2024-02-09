const express = require('express')
const db = require('../models')
const { sequelize, Reservations, Guests, Rooms, RoomTypes } = require('../models')
const { Op } = require('sequelize');
const router = express.Router()

// Route to get all column names from all tables
router.get('/columns', async (req, res) => {
    try {
        // Get all model names
        const modelNames = [{Reservations,Guests,Rooms,RoomTypes}];

        // Retrieve column names for each model and exclude createdAt and updatedAt
        const columnData = {};
        for (let modelName of modelNames) {
            // console.log(modelName,"---server")
            // const model = modelName;
            const columns = await modelName.describe();
            const filteredColumns = Object.keys(columns).filter(column => column !== 'createdAt' && column !== 'updatedAt');
            columnData[modelName] = filteredColumns;
            
        }
        console.log(columnData,"----modelcol***")
        // const reservation = await Reservations.describe();
        // const room = await Rooms.describe();
        // const roomtype = await RoomTypes.describe();
        // const guest = await Guests.describe();

        // console.log(Object.keys(reservation,room))
        res.status(200).json(columnData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// router.get('/gettingAllColumnsData', async (req, res) => {
//     try {
//         const response = await Reservations.findAll({
//             include: [
//                 { model: Guests },
//                 {
//                     model: Rooms,
//                     include: {
//                         model: RoomTypes
//                     }
//                 }
//             ]
//         });
//         res.json(response)
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// router.get('/gettingAllColumns', async (req, res) => {
//     try {
//         // Fetch descriptions of all models in parallel
//         const [reservationColumns, guestColumns, roomColumns, roomTypeColumns] = await Promise.all([
//             Reservations.describe(),
//             Guests.describe(),
//             Rooms.describe(),
//             RoomTypes.describe()
//         ]);

//         // Combine all column names into a single Set to ensure uniqueness
//         const allColumns = new Set([
//             ...Object.keys(reservationColumns),
//             ...Object.keys(guestColumns),
//             ...Object.keys(roomColumns),
//             ...Object.keys(roomTypeColumns)
//         ]);

//         // Remove common and specific columns to exclude
//         const excludedColumns = new Set(['createdAt', 'updatedAt', 'reservationID', 'guestID', 'roomID', 'roomTypeID']);
//         allColumns.forEach(column => {
//             excludedColumns.forEach(excludedColumn => {
//                 if (column.toLowerCase() === excludedColumn.toLowerCase()) {
//                     allColumns.delete(column);
//                 }
//             });
//         });

//         res.json(Array.from(allColumns));
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });
// // router.get('/gettingAllColumns', async (req, res) => {
// //     try {
// //         // Get the column names for each table
// //         const reservationColumns = await Reservations.describe();
// //         const guestColumns = await Guests.describe();
// //         const roomColumns = await Rooms.describe();
// //         const roomTypeColumns = await RoomTypes.describe();
        
// //         // Combine all column names into a single array
// //         let allColumns = [
// //             ...new Set([
// //                 ...Object.keys(reservationColumns),
// //                 ...Object.keys(guestColumns),
// //                 ...Object.keys(roomColumns),
// //                 ...Object.keys(roomTypeColumns)
// //             ])
// //         ];

// //         // Remove common columns like createdAt and updatedAt
// //         allColumns = allColumns.filter(column => column !== 'createdAt' && column !=='reservationID' && column !== 'updatedAt' &&  column !=='guestID' &&  column !=='roomID' &&  column !=='roomTypeID');

// //         res.json(allColumns);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: error.message });
// //     }
// // });
// //getting details of selected columns
// router.post('/selectedColumnsData', async (req, res) => {
//     try {
//         const { selectedColumns } = req.body;

//         // Check if selectedColumns is an array and is not empty
//         if (!Array.isArray(selectedColumns) || selectedColumns.length === 0) {
//             return res.status(400).json({ message: 'Selected columns must be a non-empty array' });
//         }

//         // Construct attributes object to include only selected columns
//         const attributes = selectedColumns.reduce((acc, col) => {
//             acc[col] = true; // Set the attribute to true to include it in the query
//             return acc;
//         }, {});

//         // Fetch data with selected columns
//         const response = await Reservations.findAll({
//             attributes: attributes,
//             include: [
//                 { model: Guests },
//                 {
//                     model: Rooms,
//                     include: {
//                         model: RoomTypes
//                     }
//                 }
//             ]
//         });

//         res.json(response);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// router.post('/fetchDataByColumns', async (req, res) => {
//     try {
//         const { selectedColumns } = req.body; // Assuming selectedColumns is an array of selected column names

//         // Define models and their corresponding attributes
//         const models = {
//             Reservations: Reservations,
//             Guests: Guests,
//             Rooms: Rooms,
//             RoomTypes: RoomTypes
//         };

//         // Construct attributes object for Sequelize query
//         const includeModels = Object.keys(models).map(modelName => ({
//             model: models[modelName],
//             attributes: selectedColumns.filter(column => column.startsWith(modelName.toLowerCase() + '.')),
//             required: false // Adjust as needed based on your database schema
//         }));

//         // Execute Sequelize query with selected columns
//         const data = await Reservations.findAll({ include: includeModels.filter((col)=>col!== "Reservations") });

//         res.json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });
  

module.exports = router

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