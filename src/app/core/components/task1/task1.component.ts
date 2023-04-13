import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
  dataRef!: Subscription;
  value !: number;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('Observable');
    });
  }
  //----- OBSERVABLE DECLARATION -----
  data(): Observable<string> {
    return new Observable(x => {
      setInterval(() => {
        x.next('Subscribed');
      })
    })
  }
  //----- OBSERVABLE SUBSCRIBTION -----
  subscribe() {
    this.dataRef = this.data().subscribe(response => {
      console.log(response);
    });
    //--- SNACKBAR MSG ---
    this.dataService.customSnakbar('Output was displayed in console', 'success', 5000);
  }
  //----- OBSERVABLE UNSUBSCRIBE -----
  unsubscribe() {
    this.dataRef.unsubscribe();
    console.log("UnSubscribed");
  }
}
