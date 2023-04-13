import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  errorMessage!: String;
  loginCredentials!: FormGroup;
  isResponceGetted = false;
  constructor(
    private auth: AuthService,
    private route: Router
  ) { }
  ngOnInit() {
    this.loginCredentials = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  signin() {
    // this.auth.isAuthenticate();
    if (this.loginCredentials.valid) {
      this.isResponceGetted = true;
      this.auth.signin(this.loginCredentials.value).subscribe({
        next: data => {
          this.auth.setToken(data.idToken);
          this.route.navigate(['/app/employee']);
        },
        error: response => {
          console.log(response);

          this.isResponceGetted = false;
          if (response.error.error.message === "INVALID_EMAIL") {
            this.errorMessage = "Invalid email";
          } else if (response.error.error.message === "INVALID_PASSWORD") {
            this.errorMessage = "Incorrect email or password";
          } else if (response.error.error.message === "EMAIL_NOT_FOUND") {
            this.errorMessage = "Email not found";
          }
          else {
            this.errorMessage = "Check your internet connection or try again !";
          }
        }
      });
    } else {
      this.errorMessage = "Enter email and password";
    }
  }
}
