import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpRoutingService } from 'src/app/Services/http-routing.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

  constructor(private dataService: DataService, private httpRouting: HttpRoutingService) { }

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
    setTimeout(() => {
      this.dataService.tittle.emit('Forms');
    });

    this.message = this.httpRouting.getJsonData('message.json')

    this.register = new FormGroup({
      FirstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      LastName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      AlternateEmail: new FormControl(null, [Validators.required, Validators.email]),
      DateOfBirth: new FormControl(null, Validators.required),
      DateOfJoin: new FormControl(null, Validators.required),
      Designation: new FormControl(null, Validators.required),
      Role: new FormControl(null, Validators.required),
      contacts: new FormArray([])
    });
  }
  OnSubmit() {
    if (this.register.valid) {
      this.dataService.successSnakbar('Submitted Sucessfully', 'ok');
    }
    else {
      this.dataService.errorSnakbar('Something went wrong', 'ok');
    }
  }

  OnClear() {
    this.register.reset();
  }
}
