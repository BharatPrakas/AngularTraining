import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './core/components/employee/employee.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { Task1Component } from './core/components/task1/task1.component';
import { Task2Component } from './core/components/task2/task2.component';
import { Task3Component } from './core/components/task3/task3.component';
import { Task4Component } from './core/components/task4/task4.component';
import { Task5Component } from './core/components/task5/task5.component';
import { TableComponent } from './core/components/table/table.component';
import { TimesheetComponent } from './core/components/dynamicTable/timesheet/timesheet.component';
import { ApiComponent } from './core/components/api/api.component';
import { SigninComponent } from './core/components/login/signin/signin.component';
import { SignupComponent } from './core/components/login/signup/signup.component';
import { LoginGuard } from './Services/login.guard';
import { AuthGuard } from './Services/auth.guard';
import { ForgotComponent } from './core/components/login/forgot/forgot.component';
import { UsersComponent } from './core/components/users/users.component';
import { ChartComponent } from './core/components/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, canActivate: [AuthGuard], children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'task1', component: Task1Component },
      { path: 'task2', component: Task2Component },
      { path: 'task3', component: Task3Component },
      { path: 'task3/:data/:id', component: Task3Component },
      { path: 'task4', component: Task4Component },
      { path: 'task5', component: Task5Component },
      { path: 'table', component: TableComponent },
      { path: 'dynamic', component: TimesheetComponent },
      { path: 'api', component: ApiComponent },
      { path: 'db', component: UsersComponent },
      { path: 'chart', component: ChartComponent },

    ]
  },
  { path: 'signin', component: SigninComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },
  { path: 'forgot', component: ForgotComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
