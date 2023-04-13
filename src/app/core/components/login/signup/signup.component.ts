import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isResponceGetted = false;
  haveAccount = false;
  errorMessage!: String;
  Signup!: FormGroup;
  constructor(
    private auth: AuthService,
    private route: Router
  ) { }
  ngOnInit() {
    this.Signup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
    });
  }
  signup() {
    const credentials = this.Signup.value;
    if (credentials.password !== credentials.password2) {
      this.errorMessage = "password not match";
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    } else {
      if (this.Signup.valid) {
        this.isResponceGetted = true;
        this.auth.signup(this.Signup.value).subscribe({
          next: data => {
            this.auth.setToken(data.idToken);
            this.haveAccount = true;
            this.errorMessage = "Account created successfully";
            setInterval(() => {
              if (this.haveAccount) {
                this.route.navigate(['signin']);
              }
            }, 2500);
          },
          error: response => {
            this.isResponceGetted = false;
            if (response.error.error.message === "EMAIL_EXISTS") {
              this.errorMessage = "Email already exist";
            }
            else {
              this.errorMessage = "Server down please try again";
            }
          }
        });
      } else {
        this.errorMessage = "Fill all required field";
      }
    }
  }
}
