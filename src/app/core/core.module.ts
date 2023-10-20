import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';
import { Task5Component } from './components/task5/task5.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { TimesheetComponent } from './components/dynamicTable/timesheet/timesheet.component';
import { WorklistComponent } from './components/dynamicTable/worklist/worklist.component';
import { DefalutComponent } from './components/dynamicTable/defalut/defalut.component';
import { ApiComponent } from './components/api/api.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';
import { UsersComponent } from './components/users/users.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { WINDOW_PROVIDERS } from '../Services/window/window.service';

@NgModule({
  declarations: [
    NavbarComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    EmployeeComponent,
    SnackbarComponent,
    TableComponent,
    TimesheetComponent,
    WorklistComponent,
    DefalutComponent,
    ApiComponent,
    BytesPipe,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    UsersComponent,
    ChartComponent,
  ],
  exports: [
    NavbarComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    EmployeeComponent,
    TableComponent,
    ApiComponent,
    SigninComponent,
    UsersComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxChartsModule,
    NgxHideOnScrollModule
  ],
  providers: [WINDOW_PROVIDERS]
})
export class CoreModule { }
