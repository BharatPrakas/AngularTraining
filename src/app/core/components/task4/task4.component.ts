import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss',]
})
export class Task4Component {
  constructor(private dataService: DataService) { }

  //----- SUCCESS SNACKBAR -----
  success() {
    this.dataService.customSnakbar("Submiited Successfully", 'success');
  }

  //----- WARNING SNACKBAR -----
  warning() {
    this.dataService.customSnakbar("Warning", 'warning');
  }

  //----- ERROR SNACKBAR -----
  error() {
    this.dataService.customSnakbar("Something went wrong", 'error');
  }

  //----- DEFAULT SNACKBAR -----
  default() {
    this.dataService.customSnakbar("Default SnackBar", 'defalut');
  }
}
