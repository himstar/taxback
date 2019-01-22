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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UsersApiService: UsersApiService
  ) {}

  onFormSubmit() {
    if (this.addForm.valid) {
      this.transaction = this.addForm.value;
      console.log(this.transaction);
      this.UsersApiService.addUser(this.email, this.transaction).subscribe(
        data => {
          this.user = data.json();
        }
      );
    } else {
      console.log('please enter the data');
    }
  }
  ngOnInit() {
    this.addForm = new FormGroup({
      amount: new FormControl('', [
        Validators.required,
        Validators.min(99),
        Validators.max(99999)
      ]),
      currency: new FormControl('', [Validators.required]),
      txn_date: new FormControl('', [Validators.required])
    });
    this.route.paramMap.subscribe(paramas => {
      this.email = paramas['params'].email;
    });
  }
}
