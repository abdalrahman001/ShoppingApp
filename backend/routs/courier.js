const express = require('express');
const router = express.Router();
const Courier = require('../models/courier');

// Route to add a new courier
router.post('/addCourier', async (req, res) => {
    const { name, phoneNumber, email } = req.body;
    const newCourier = new Courier(name, phoneNumber, email);

    try {
        await Courier.add(newCourier);
        res.status(201).json({ message: 'Courier added successfully' });
    } catch (error) {
        console.error('Error adding courier:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to find a courier by ID
router.get('/getCourier/:id', async (req, res) => {
    const courierId = req.params.id;

    try {
        const [rows] = await Courier.findById(courierId);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Courier not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching courier:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to update a courier
router.put('/updateCourier/:id', async (req, res) => {
    const courierId = req.params.id;
    const { name, phoneNumber, email } = req.body;
    const updatedCourier = { name, phoneNumber, email };

    try {
        const [result] = await Courier.update(courierId, updatedCourier);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Courier not found' });
        }
        res.status(200).json({ message: 'Courier updated successfully' });
    } catch (error) {
        console.error('Error updating courier:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to delete a courier
router.delete('/deleteCourier/:id', async (req, res) => {
    const courierId = req.params.id;

    try {
        const [result] = await Courier.delete(courierId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Courier not found' });
        }
        res.status(200).json({ message: 'Courier deleted successfully' });
    } catch (error) {
        console.error('Error deleting courier:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports=router;
