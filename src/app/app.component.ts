import { Component, OnInit } from '@angular/core';
import { UsersApiService } from './services/users-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any = 'TaxBack';
  email: any = 'priya@gmail.com';
  results: Object[];
  constructor(private UsersApiService: UsersApiService) {}
  userList() {
    console.log(this.email);
    this.UsersApiService.getUsers(this.email).subscribe(data => {
      this.results = data.json();
      console.log(this.results);
    });
  }
  ngOnInit() {
    this.userList();
  }
}
