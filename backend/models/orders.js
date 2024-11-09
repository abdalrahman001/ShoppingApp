const db=require('../database.js')
module.exports=class Order  {
    constructor(userID,pickupLocation,dropoffLocation,totalSum){
       this.userID=userID;
       this.pickupLocation=pickupLocation;
       this.dropoffLocation=dropoffLocation;
       this.totalSum=totalSum;
    }
    static find(ID){
        return db.execute(
            'SELECT * FROM orders WHERE id=?',
            [ID]
        )
    }
    static findById(userID){
        return db.execute(
            'SELECT * FROM orders WHERE user_id=?',
            [userID]
        )
    }
       
    
    static add(order){
        return db.execute(
            'INSERT INTO orders(user_id,pickup_location,dropoff_location,total_sum) VALUES(?,?,?,?)',
            [order.userID,order.pickupLocation,order.dropoffLocation,order.totalSum]
        );
    }
    static update(orderID, updatedOrder) {
        return db.execute(
            'UPDATE orders SET pickup_location = ?, dropoff_location = ?, total_sum = ? WHERE id = ?',
            [updatedOrder.pickupLocation, updatedOrder.dropoffLocation, updatedOrder.totalSum, orderID]
        );
    }
};