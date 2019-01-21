import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ApiUrlService } from '../config/api-url.service';

@Injectable()
export class UsersApiService {
  url = this.apiUrl.url;
  constructor(
    private http: Http,
    private router: Router,
    private apiUrl: ApiUrlService
  ) { }
  getUsers(email) {
    return this.http.get(this.url + email);
  }
  getUser(email, id) {
    return this.http.get(this.url + email + '/' + id);
  }
  addUser(email, data) {
    return this.http.post(this.url + email, data);
  }
  updateUser(email, id) {
    return this.http.get(this.url + email + '/' + id);
  }
  deleteUser(email, id) {
    return this.http.delete(this.url + email + '/' + id);
  }
}
