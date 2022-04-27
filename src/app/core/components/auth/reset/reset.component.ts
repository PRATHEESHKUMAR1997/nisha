import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  hide= true;
  newPassword = new FormControl('', []);
  confirmPassword = new FormControl('', []);
  constructor() { }

  ngOnInit(): void {
  }

}
