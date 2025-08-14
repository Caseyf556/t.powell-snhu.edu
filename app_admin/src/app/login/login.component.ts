import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formErrorMsg: string = '';
  formInvalid: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onLoginSubmit(): void {
    this.formInvalid = false;
    this.formErrorMsg = '';

    if (this.loginForm.invalid) {
      this.formInvalid = true;
      this.formErrorMsg = 'Enter a valid email and password.';
      return;
    }

    this.isSubmitting = true;
    this.authService.login(this.loginForm.value)
      .then(() => {
        this.loginForm.reset();
        this.router.navigateByUrl('list-trips');
      })
      .catch((error: any) => {
        if (error?.status === 401) {
          this.formErrorMsg = 'Login Failed. Please try again.';
        } else {
          this.formErrorMsg = error?.message || 'Login failed. Please try again.';
        }
        this.formInvalid = true;
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
