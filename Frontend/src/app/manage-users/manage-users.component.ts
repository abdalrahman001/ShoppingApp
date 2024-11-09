import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  // Mock data for users (in a real app, you would fetch this from an API)
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012' },
  ];

  // This would be used to delete a user
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  // You can add more logic here for updating users, adding new users, etc.
}
