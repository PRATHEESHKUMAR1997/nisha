import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('test@gmail.com', [Validators.required, Validators.email]);
  password = new FormControl('admin', []);
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  login() {
    if(!this.email.valid)
        return alert("email field is empty");
    this.route.navigate(['/app']); 
  }
}
