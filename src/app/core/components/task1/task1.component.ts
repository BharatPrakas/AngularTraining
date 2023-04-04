import { Component } from '@angular/core';
import { Observable, Subscription, observable } from 'rxjs';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {

  ngOnInit() {

  }


  subscribe() {
    let data = new Observable(x => {

    })

    data.subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
