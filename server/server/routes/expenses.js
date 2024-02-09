const express = require('express');
const router = express.Router();
const {Expenses} = require('../models'); 

// Route to insert data into Expenses table
router.post('/expenses', async (req, res) => {
    try {
        const { expenseDate, expenseType, amount, description } = req.body;
        const newExpense = await Expenses.create({
            expenseDate,
            expenseType,
            amount,
            description
        });
        res.status(201).json(newExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
