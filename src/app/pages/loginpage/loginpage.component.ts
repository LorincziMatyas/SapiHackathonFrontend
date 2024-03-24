import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  loginDatas!: FormGroup;
  showPasswordField = false;
  showPassword = false;
  isLogged!: boolean;
  storedTokenNew!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginDatas = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  formDataToUserData(form: FormGroup): UserLogin {
    return {
      username: form.get('username')?.value,
      password: form.get('password')?.value,
    };
  }

  login() {
    console.log('data:', this.formDataToUserData(this.loginDatas));

    this.authService
      .loginUser(this.formDataToUserData(this.loginDatas))
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
          console.log('resp ', response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    console.log('login clicked');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginDatas.get(fieldName);
    return !!field && field.invalid && (field.touched || field.dirty);
  }
}
