import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  email: any = 'priya@gmail.com';
  results: Object[];
  constructor(private UsersApiService: UsersApiService) { }
  userList() {
    this.UsersApiService.getUsers(this.email).subscribe(data => {
      this.results = data.json();
    });
  }
  ngOnInit() {
    this.userList();
  }

}
