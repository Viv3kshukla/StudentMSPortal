import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router, private formsBuilder: FormBuilder) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formsBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getFormControls() { return this.loginForm.controls; }


  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
