import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUserService } from './login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private myService: LoginUserService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin = function (user) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(user);
    this.myService.loginUser(this.form.value).subscribe(response => {
      console.log(response);

      if ((Object.keys(response).length) == 0) {
        alert("email or password is incorrect");
        console.log("Invalid user");
      }
      else {
        console.log("valid user");
        var data = JSON.parse(JSON.stringify(response));
        localStorage.setItem('token', data[0].id.toString());
        this.router.navigate(['/private/navbar/profile']);
      }
    });

  }

}
