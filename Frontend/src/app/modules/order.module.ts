// order.model.ts

export interface Order {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  packageDetails: string;
  deliveryTime: Date;
  status: 'pending' | 'in-transit' | 'delivered' | 'canceled'; // You can adjust the status types as needed
  courierId?: string; // Optional: Only for orders assigned to a courier
  createdAt: Date; // Optional: Timestamp when the order was created
}
