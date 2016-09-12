import { Component } from '@angular/core';

import {UsersService} from '../services/usersService';

@Component({
  selector: 'users',
  styles: [`
    .superuser {
      color: lightseagreen;
    }
  `],
  template: `<h1>Users</h1>
              <ul>
               <!--*ngIf="user.superuser"-->
                <li *ngFor="let user of usersList | async"
                    [class.superuser]="user.superuser">
                  {{user.id}}, {{user.name}}
                </li>
              </ul>`
})

export class Users {
  private usersList;

  constructor(users: UsersService) {
    this.usersList = users.get();
  }
}
