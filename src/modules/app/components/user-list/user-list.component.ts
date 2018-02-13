import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'user-list',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.css']
})
export class UserListComponent {
    public users: User[];

    constructor(private dataService: DataService) {
      this.dataService.userDeleted.subscribe(
        (data: User) => {
          console.log("accountDeleted received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem deleting.");
          }
          else {
            var indextToDelete = this.users.findIndex((element) => element.id === data.id);
            this.users.splice(indextToDelete, 1);
          }
        },
        error => alert("There was a problem deleting.")
      );
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.dataService.getUsers().subscribe(users => this.users = users);
    }

    onDelete(id: string): void {
      var confirmation = confirm('are you sure you want to delete ' + this.users.find((element) => element.id == id).userName + '?');
      if (confirmation) { this.dataService.deleteUser(id); };
    }

    onToggleAdmin(id: string) {
      var indexToToggle = this.users.findIndex((element) => element.id === id);
      if (this.users[indexToToggle].admin === true) {
        this.users[indexToToggle].admin = false;
        this.dataService.unmakeAdmin(id)
      }
      else {
        this.users[indexToToggle].admin = true;
        this.dataService.makeAdmin(id)
      }
    }
    onReset(id: string) {
      this.dataService.resetPassword(id, "Password?123");
    }
}
