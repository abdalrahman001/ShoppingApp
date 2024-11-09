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

    static add(package) {
        return db.execute(
            'INSERT INTO packages (order_id, price, details) VALUES (?, ?, ?)',
            [package.orderID, package.price, package.details]
        );
    }

    static update(packageID, updatedPackage) {
        return db.execute(
            'UPDATE packages SET price = ?, details = ? WHERE id = ?',
            [updatedPackage.price, updatedPackage.details, packageID]
        );
    }

    // Delete a package by ID
    static delete(packageID) {
        return db.execute(
            'DELETE FROM packages WHERE id = ?',
            [packageID]
        );
    }
};
