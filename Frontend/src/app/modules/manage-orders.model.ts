// src/app/modules/manage-orders.model.ts

export interface ManageOrder {
    id: string; // Unique identifier for the order
    pickupLocation: string; // Pickup location of the order
    dropoffLocation: string; // Drop-off location of the order
    packageDetails: string; // Details about the package
    status: string; // Current status of the order (e.g., 'pending', 'completed')
  }
  