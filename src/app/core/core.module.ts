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
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class CoreModule { }
