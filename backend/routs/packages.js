const express = require('express');
const router = express.Router();
const Package = require('../models/packages.js');

router.post('/addPackage', async (req, res) => {
    try {
        const { orderID, price, details } = req.body;

        if (!price || !details) {
            return res.status(400).json({ message: 'Price and details are required' });
        }

        const newPackage = new Package(orderID || null, price, details);

        const [results] = await Package.add(newPackage);
        res.status(201).json({ message: 'Package added successfully', insertId: results.insertId });
    } catch (error) {
        console.error('Error adding package:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all packages for a specific order
router.get('/getPackagesByOrder/:orderID', async (req, res) => {
    const { orderID } = req.params;
    try {
        const [rows] = await Package.findByOrderID(orderID);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No packages found for this order' });
        }
        res.json(rows);
    } catch (error) {
        console.error('Error fetching packages:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a package
router.put('/updatePackage/:id', async (req, res) => {
    const packageID = req.params.id;
    const { price, details } = req.body;

    if (!price || !details) {
        return res.status(400).json({ message: 'Price and details are required' });
    }

    try {
        const updatedPackage = { price, details };
        const [results] = await Package.update(packageID, updatedPackage);

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Package not found' });
        }

        res.status(200).json({ message: 'Package updated successfully' });
    } catch (error) {
        console.error('Error updating package:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/deletePackage/:id', async (req, res) => {
    const packageID = req.params.id;

    try {
        const [results] = await Package.delete(packageID);

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Package not found' });
        }

        res.status(200).json({ message: 'Package deleted successfully' });
    } catch (error) {
        console.error('Error deleting package:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get a single package by ID
router.get('/getPackage/:id', async (req, res) => {
    const packageID = req.params.id;

    try {
        const [rows] = await Package.find(packageID);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching package:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.put('/addToOrder/:id', async (req, res) => {
        const { orderID } = req.body;
        const packageID = req.params.id; 

    if (!orderID) {
        return res.status(400).json({ message: 'OrderID required' });
    }

    try {
       
        const [results] = await Package.updateOrderID(packageID, orderID);

        if (results.affectedRows === 0) {   
            return res.status(404).json({ message: 'Package not found' });
        }
        
        res.status(200).json({ message: 'Package updated successfully' });
    } catch (error) {
        console.error('Error updating package:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports=router;

