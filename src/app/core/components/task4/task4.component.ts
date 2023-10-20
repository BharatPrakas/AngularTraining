import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/messageService/message.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss',]
})
export class Task4Component {
  msg = "hello";
  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('Snackbar');
    });
    // this.dataService.tittle.emit('Sanckbar');
  }

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

  getToken() {
    this.messageService.getToken();
  }
}
