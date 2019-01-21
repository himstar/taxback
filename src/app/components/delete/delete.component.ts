import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from '../../services/users-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  status: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private UsersApiService: UsersApiService) { }
  delUser() {
    this.route.paramMap
      .subscribe(paramas => {
        var email = paramas['params'].email;
        var uId = paramas['params'].uid;
        this.UsersApiService.deleteUser(email, uId)
          .subscribe(
            data => {
              this.status = data.json();
            }
          );
      });
  }
  ngOnInit() {
    this.delUser();
  }

}
