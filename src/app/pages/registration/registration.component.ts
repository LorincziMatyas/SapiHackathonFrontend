import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationDates!: FormGroup;
  // teamName = [
  //   { name: 'Szuper Admin', value: 'Super Admin' },
  //   { name: 'Szerkesztő', value: 'Editor' },
  //   { name: 'Munkatárs', value: 'Worker' },
  // ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationDates = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      teamName: ['', Validators.required],
    });
  }
  register() {
    console.log('registration cliced');
    this.router.navigateByUrl('/home');
  }
}
