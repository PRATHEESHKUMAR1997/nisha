import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgetEmail = new FormControl('test@gmail.com', [Validators.required, Validators.email]);
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.forgetEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.forgetEmail.hasError('email') ? 'Not a valid email' : '';
  }
}
