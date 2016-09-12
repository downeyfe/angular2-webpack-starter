import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  private _users;

  constructor() {
    this._users = [
      {
        id: 1,
        username: 'Frances',
        roles: ['admin', 'user']
      },
      {
        id: 2,
        username: 'Jordan',
        roles: ['user']
      }
    ];
  }

  get() {
    return this._users;
  }
}
