import {Component} from '@angular/core';

import {UsersService} from '../services/usersService';

@Component({
  selector: 'users',
  styles: [`
    .superuser {
      color: lightseagreen;
    }
  `],
  template: `<h1>Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of usersList | async" [class.superuser]="user.superuser">
          <td>{{user.id}}</td>
          <td (click)="onClick(user.username)">
            {{user.username}} 
          <span *ngIf="user.superuser">(superuser)</span></td>
          <td>{{user.roles.join(', ')}}</td>
        </tr>
      </tbody>
    </table>
`
})

export class Users {
  private usersList;

  constructor(users: UsersService) {
    this.usersList = users.get();
  }
}
