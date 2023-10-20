import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpRoutingService } from 'src/app/Services/http-routing.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

  constructor(
    private dataService: DataService,
    private httpRouting: HttpRoutingService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) { }

  appendId!: number;
  fromEdit = false;
  employeeRecord: any;
  todayDate = new Date();
  message!: Observable<any>;
  selectedValue!: string;
  Designation: any[] = [
    { value: '0', viewValue: 'TeamLeader' },
    { value: '1', viewValue: 'Senior Software Engineer' },
    { value: '2', viewValue: 'SoftwareEngineer' },
  ];
  Roles: any[] = [
    { value: '0', viewValue: 'Super Admin' },
    { value: '1', viewValue: 'Admin' },
    { value: '2', viewValue: 'Employee' },
  ];

  register!: FormGroup;
  ngOnInit() {
    this.formInit();
    setTimeout(() => {
      this.dataService.tittle.emit('Forms');
    });
    // this.formInit();
    this.route.params.subscribe((res: any) => {
      if (res && res.id) {
        this.appendId = res.id;
        this.fromEdit = true;
        this.httpRouting.postMethod('/getEmployeeRecord', { id: +res.id }).subscribe((res: any) => {
          this.employeeRecord = res.response;
          this.formInit();
          // delete res.response.id;
          // this.register.setValue(res.response);
        });
      }
      else {
        this.formInit();
      }
    });

    this.message = this.httpRouting.getJsonData('message.json');

  }
  formInit() {
    this.register = new FormGroup({
      firstName: new FormControl(this.employeeRecord && this.employeeRecord.firstName ? this.employeeRecord.firstName : null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      lastName: new FormControl(this.employeeRecord && this.employeeRecord.lastName ? this.employeeRecord.lastName : null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl(this.employeeRecord && this.employeeRecord.email ? this.employeeRecord.email : null, [Validators.required, Validators.email]),
      alternateEmail: new FormControl(this.employeeRecord && this.employeeRecord.alternateEmail ? this.employeeRecord.alternateEmail : null, [Validators.required, Validators.email]),
      dateOfBirth: new FormControl(this.employeeRecord && this.employeeRecord.dateOfBirth ? this.employeeRecord.dateOfBirth : null, Validators.required),
      dateOfJoin: new FormControl(this.employeeRecord && this.employeeRecord.dateOfJoin ? this.employeeRecord.dateOfJoin : null, Validators.required),
      designation: new FormControl(this.employeeRecord && this.employeeRecord.designation ? this.employeeRecord.designation : null, Validators.required),
      role: new FormControl(this.employeeRecord && this.employeeRecord.role ? this.employeeRecord.role : null, Validators.required),
      // contacts: new FormArray([])
    });
  }
  OnSubmit(form: FormGroupDirective) {
    if (this.register.valid) {
      this.httpRouting.postMethod('/createEmployee', this.register.value).subscribe({
        next: res => {
          if (res) {
            form.resetForm();
            this.dataService.customSnakbar('Records added successfully', 'success');
            this.router.navigate(['/app/db']);
          }
        },
        error: err => {
          this.dataService.customSnakbar(err.error.error, 'error')
        }
      })
    }
    else {
      this.dataService.customSnakbar('Fill the required details', 'error');
    }
  }

  onUpdate(form: FormGroupDirective) {
    if (this.register.valid) {
      this.register.value.id = +this.appendId;
      this.userService.updateRecord(this.register.value).subscribe((res: any) => {
        if (res) {
          form.resetForm();
          this.dataService.customSnakbar('Data update Successfully!', 'success');
          this.router.navigate(['/app/db']);
        }
      });
    }
  }

  OnClear() {
    this.register.reset();
  }

  previous() {
    this.router.navigate(['/app/db']);
  }
  primaryTheme() {
    document.body.classList.remove('pink-theme');
    document.body.classList.add('purple-theme');
    document.documentElement.className = 'purple-theme';
  }
  secondaryTheme() {
    document.body.classList.remove('purple-theme');
    document.body.classList.add('pink-theme');
    document.documentElement.className = 'pink-theme';
  }
}
