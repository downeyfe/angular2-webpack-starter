import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UsersService {
  private http;

  constructor(http: Http) {
    this.http = http;
  }

  get() {
    return this.http.get('/assets/users.json')
      .map(response => response.json().users);
  }
}
