const db = require('../database.js'); 

module.exports = class Package {
    constructor(orderID, price, details) {
        this.orderID = orderID; 
        this.price = price;
        this.details = details;
    }

    static find(packageID) {
        return db.execute(
            'SELECT * FROM packages WHERE id = ?',
            [packageID]
        );
    }

    static findByOrderID(orderID) {
        return db.execute(
            'SELECT * FROM packages WHERE order_id = ?',
            [orderID]
        );
    }

    static add(pkg) {
        return db.execute(
            'INSERT INTO packages (order_id, price, details) VALUES (?, ?, ?)',
            [pkg.orderID, pkg.price, pkg.details]
        );
    }

    static update(packageID, updatedPackage) {
        return db.execute(
            'UPDATE packages SET price = ?, details = ? WHERE id = ?',
            [updatedPackage.price, updatedPackage.details, packageID]
        );
    }
    static updateOrderID(packageID, orderID) {
    return db.execute(
        'UPDATE packages SET order_id = ? WHERE id = ?',
        [orderID, packageID] 
    );
}
    // Delete a package by ID
    static delete(packageID) {
        return db.execute(
            'DELETE FROM packages WHERE id = ?',
            [packageID]
        );
    }
    static deletebyOrderID(order_id) {
        return db.execute(
            'DELETE FROM packages WHERE id = ?',
            [order_id]
        );
    }
};
