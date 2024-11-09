const express = require('express');
const router = express.Router();
const Order = require('../models/orders.js');
const { body } = require('express-validator');

router.post('/addOrder', async (req, res) => {
    try {
        const { userID, pickupLocation, dropoffLocation, totalSum} = req.body;
        
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


router.get('/getOrder/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        const [rows] = await Order.find(orderId); 
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/updatecourier/:id', async (req, res) => {
    const { courierID } = req.body;  
    const orderId = req.params.id;

    if (!courierID) {
        return res.status(400).json({ message: 'Courier ID is required' });
    }

    try {
        const [rows] = await Order.find(orderId); 
        await Order.updateCourier(orderId, courierID);

        res.status(200).json({ message: 'Courier updated successfully', orderId, courierID });
        
    } catch (error) {
        console.error('Error updating courier:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.get('/getorderbyCourier/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        const [rows] = await Order.findByCourierId(orderId); 
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.get('/getorderbyCourier/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        const [rows] = await Order.findByCourierId(orderId); 
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/addCourier/:ID', async (req, res) => {
    const userID = req.params.userID;
    try {
        const [rows] = await Order.find(userID); 
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No orders' });
        }else{}
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.put('/updateOrder/:id', async (req, res) => {
    const orderId = req.params.id;
    const { pickupLocation, dropoffLocation, totalSum,status } = req.body;
    
    try {
        const updatedOrder = {
            pickupLocation,
            dropoffLocation,
            totalSum,
            status
        };

        // Perform the update operation
        const updateResults = await Order.update(orderId, updatedOrder);

        // Log the update results to help debug
        console.log('Update results:', updateResults);

        // Check if any rows were updated
        if (updateResults.affectedRows === 0) {
            console.error('No rows affected. The order was not updated.');
            return res.status(400).json({ message: 'Failed to update order' });
        }

        // Successfully updated
        res.status(200).json({ message: 'Order updated successfully' });

    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.delete('/deleteOrder/:id', async (req, res) => {
    const orderId = req.params.id;

    try {
        await Order.deleteOrderAndPackages(orderId);
        const[rows]=await Order.find(orderId);
        return res.status(200).json({ message: 'Order and associated packages does not exist' });


    } catch (error) {
        console.error('Error deleting order and packages:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports=router;
