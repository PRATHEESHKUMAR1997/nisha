import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-profile-info',
  templateUrl: './add-profile-info.component.html',
  styleUrls: ['./add-profile-info.component.scss']
})
export class AddProfileInfoComponent implements OnInit {
  profileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userMobile: new FormControl('', Validators.required),
    userDob: new FormControl('', Validators.required),
    userGender: new FormControl('', Validators.required),
    userBloodGroup: new FormControl('', Validators.required),
    userPinCode: new FormControl('', Validators.required),
    userAddress: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  submitProfileForm(){
    
  }
}
