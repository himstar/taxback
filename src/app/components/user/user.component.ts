import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from '../../services/users-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Object[];
  constructor(private route: ActivatedRoute,
    private router: Router, private UsersApiService: UsersApiService) { }
  singleUser() {
    this.route.paramMap
      .subscribe(paramas => {
        var email = paramas['params'].email;
        var uId = paramas['params'].uid;
        this.UsersApiService.getUser(email, uId)
          .subscribe(
            data => {
              this.user = data.json();
            }
          );
      });
  }
  ngOnInit() {
    this.singleUser();
  }

}
