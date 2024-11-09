// src/app/modules/assigned-orders-to-courier.model.ts

export interface AssignedOrderToCourier {
    id: string; // Unique identifier for the order
    pickupLocation: string; // Pickup location of the order
    dropoffLocation: string; // Drop-off location of the order
    packageDetails: string; // Details about the package
    status: string; // Current status of the order
    courierAssigned: string; // The name of the assigned courier
  }
  