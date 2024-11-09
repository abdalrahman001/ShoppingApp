// src/app/modules/order-status.model.ts

export interface OrderStatus {
    orderId: string;
    status: string; // e.g., 'picked up', 'in transit', 'delivered'
  }
  