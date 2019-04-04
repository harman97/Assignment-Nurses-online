import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserService } from './add-user.service';
import { passwordValidator } from './password-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private myService: AddUserService, private _router: Router) { }


  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', Validators.required],
      phone_number: ['', Validators.required],
      brief: [''],
      confirm_password: ['', [Validators.required, passwordValidator]]
    });
  }

  onRegister = function (user) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(user);
    console.log(this.form.controls.confirm_password);

    this.myService.addUser(this.form.value).subscribe(response => {
      console.log(response);
    });
    alert('Registration Successfull!!');
    this._router.navigate(['public/login']);
  }

}
