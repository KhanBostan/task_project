import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from './services/user.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  error: string | null = null;

  constructor(private userService: UserService, private progressService: ProgressBarService) {}
 ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.progressService.show();
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        /** use to see loader behavior */
        setTimeout(() => {
          this.progressService.hide();
        }, 1000);
        if (this.users.length === 0) {
          this.error = 'No users found.'; 
        } else {
          this.error = null; 
        }
      },
      err => {
        console.log(err)
        this.error = 'Failed to load users.'; 
      }
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => this.loadUsers(), 
      err => this.error = 'Failed to delete user.' 
    );
  }

  /**Other methods (viewUser, updateUser) go here */
}
