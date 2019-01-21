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
  ) {}
  getUsers(email) {
    console.log(email);
    return this.http.get(this.url + email);
  }
}
