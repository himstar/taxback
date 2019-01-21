import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from '../../services/users-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: Object[];
  email: any;
  addForm: FormGroup;
  amount: FormControl;
  currency: FormControl;
  txn_date: FormControl;
  transaction: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private UsersApiService: UsersApiService) { }

  onFormSubmit() {
    if (this.addForm.valid) {
      this.transaction = this.addForm.value;
      this.UsersApiService.addUser(this.email, this.email)
        .subscribe(
          data => {
            this.user = data.json();
            console.log(this.user)
          });
    } else {
      console.log('please enter the data');
    }
  }
  ngOnInit() {
    this.addForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
      currency: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      txn_date: new FormControl('', [Validators.required])
    });
    this.route.paramMap
      .subscribe(paramas => {
        this.email = paramas['params'].email;
      });
  }

}
