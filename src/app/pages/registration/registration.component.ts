import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationDates!: FormGroup;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registrationDates = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  formDataToUserData(form: FormGroup): UserRegister {
    return {
      email: form.get('email')?.value,
      username: form.get('username')?.value,
      password: form.get('password')?.value,
    };
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationDates.get(fieldName);
    return !!field && field.invalid && (field.touched || field.dirty);
  }

  // register() {
  //   console.log('ja');
  //   this.router.navigateByUrl('loginUser');
  // }

  register() {
    console.log('registration cliced');
    this.authService
      .registerUser(this.formDataToUserData(this.registrationDates))
      .subscribe({
        next: (response) => {
          this.router.navigate(['/loginUser']);
          console.log('this.productService.getProuctById(1): ', response);
        },
      });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
