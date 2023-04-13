import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpRoutingService } from 'src/app/Services/http-routing.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  isSend!: boolean;
  forgot!: FormGroup;
  errorMessage!: string;
  isResponceGetted = false;
  requestType = environment.forgotRequestType;
  constructor(private auth: AuthService, private httpRouting: HttpRoutingService) { }
  ngOnInit() {
    this.forgot = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  resetPassword() {
    if (this.forgot.valid) {
      this.isResponceGetted = true;
      this.requestType.email = this.forgot.get('email')?.value;
      this.auth.forgot(this.requestType).subscribe({
        next: respose => {
          this.forgot.get('email')?.patchValue('');
          if (respose != null) {
            this.isSend = true;
            this.errorMessage = 'Password reset link was send to registered email';
          }
        },
        error: response => {
          this.isResponceGetted = false;
          if (response.error.error.message === "EMAIL_NOT_FOUND") {
            this.forgot.get('email')?.reset();
            this.errorMessage = "Email not found";
          } else {
            this.forgot.get('email')?.patchValue('');
            this.errorMessage = "Please try again after some time";
          }
        }
      });
    } else {
      this.errorMessage = "Enter valid email";
    }
  }
}
