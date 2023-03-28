import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './core/components/employee/employee.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { Task1Component } from './core/components/task1/task1.component';
import { Task2Component } from './core/components/task2/task2.component';
import { Task3Component } from './core/components/task3/task3.component';
import { Task4Component } from './core/components/task4/task4.component';
import { Task5Component } from './core/components/task5/task5.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/employee', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'task1', component: Task1Component },
      { path: 'task2', component: Task2Component },
      { path: 'task3', component: Task3Component },
      { path: 'task4', component: Task4Component },
      { path: 'task5', component: Task5Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
