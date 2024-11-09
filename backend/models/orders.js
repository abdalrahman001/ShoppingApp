const db = require('../database.js');

module.exports = class Order {
    constructor(userID, pickupLocation, dropoffLocation, totalSum) {
        this.userID = userID;
        this.pickupLocation = pickupLocation;
        this.dropoffLocation = dropoffLocation;
        this.totalSum = totalSum;
        this.status = 'pending';
    }

    // Find an order by its ID
    static async find(ID) {
        console.log("Fetching order with ID:", ID);
        const [rows] = await db.execute(
            'SELECT * FROM orders WHERE id=?',
            [ID]
        );
        return rows;
    }

    static findById(userID) {
        console.log("Fetching order with ID:", userID);
        return db.execute(
            'SELECT * FROM orders WHERE user_id=?',
            [userID]
        );
    }
    static findByCourierId(courierID) {
        return db.execute(
            'SELECT * FROM orders WHERE courier_id=?',
            [courierID]
        );
    }
    static update(orderId, updatedOrder) {
        return db.execute(
            'UPDATE orders SET pickup_location = ?, dropoff_location = ?, total_sum = ?, status = ? WHERE id = ?',
            [updatedOrder.pickupLocation, updatedOrder.dropoffLocation, updatedOrder.totalSum, updatedOrder.status, orderId]
        );
    }
    static add(order) {
        return db.execute(
            'INSERT INTO orders(user_id, pickup_location, dropoff_location, total_sum,status) VALUES(?,?,?,?,?)',
            [order.userID, order.pickupLocation, order.dropoffLocation, order.totalSum,order.status]
        );
    }
    static updateCourier(orderID, CID) {
        return db.execute(
            'UPDATE orders SET courier_id = ? WHERE id =?',
            [CID,orderID]
        );
    }
    static async deleteOrderAndPackages(id) {
    
        await db.execute('DELETE FROM packages WHERE order_id = ?', [id]);
        console.log(id)
        await db.execute('DELETE FROM orders WHERE id = ?', [id]);
    }
    
    
    
};
