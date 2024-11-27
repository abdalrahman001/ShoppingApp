const db = require('../database.js');

module.exports = class Courier {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Add a new courier
    static add(courier) {
        return db.execute(
            'INSERT INTO couriers (name, phone_number, email) VALUES (?, ?, ?)',
            [courier.name, courier.phoneNumber, courier.email]
        );
    }

    // Find a courier by ID
    static findById(id) {
        return db.execute(
            'SELECT * FROM couriers WHERE id = ?',
            [id]
        );
    }

    // Update courier details
    static update(id, updatedCourier) {
        const query = `
            UPDATE couriers 
            SET name = ?, phone_number = ?, email = ? 
            WHERE id = ?
        `;
        return db.execute(query, [
            updatedCourier.name,
            updatedCourier.phoneNumber,
            updatedCourier.email,
            id
        ]);
    }

    // Delete a courier by ID
    static delete(id) {
        return db.execute(
            'DELETE FROM couriers WHERE id = ?',
            [id]
        );
    }
};
