const express = require('express');
const router = express.Router();
const Order = require('../models/orders.js');

router.post('/addOrder', async (req, res) => {
    try {
        const { userID, pickupLocation, dropoffLocation, totalSum } = req.body;
        
        if (!userID || !pickupLocation || !dropoffLocation || !totalSum) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const newOrder = new Order(userID, pickupLocation, dropoffLocation, totalSum);
        const [results] = await Order.add(newOrder); 
        res.status(201).json({ message: 'Order created successfully', insertId: results.insertId });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get order by ID
router.get('/getOrder/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        const [rows] = await Order.find(orderId); // Retrieve order by ID
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(rows[0]); // Return the first row (the order data)
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get orders by user ID
router.get('/getOrderbyuser/:userID', async (req, res) => {
    const userID = req.params.userID;
    try {
        const [rows] = await Order.findById(userID); // Retrieve orders by user ID
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/updateOrder/:id', async (req, res) => {
    const { pickupLocation, dropoffLocation, totalSum } = req.body;

    try {
        const [rows] = await Order.find(req.params.id);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const updatedOrder = {};
        if (pickupLocation) updatedOrder.pickupLocation = pickupLocation;
        if (dropoffLocation) updatedOrder.dropoffLocation = dropoffLocation;
        if (totalSum) updatedOrder.totalSum = totalSum;

        if (Object.keys(updatedOrder).length === 0) {
            return res.status(400).json({ message: 'No valid fields to update' });
        }

        const [updateResults] = await Order.update(req.params.id, updatedOrder);

        if (updateResults.affectedRows === 0) {
            return res.status(400).json({ message: 'Failed to update order' });
        }

        res.status(200).json({ message: 'Order updated successfully' });

    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
