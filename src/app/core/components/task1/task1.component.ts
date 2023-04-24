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
  cards: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('Observable');
    });

    //----- SLIDER ------
    this.cards = [
      { no: 1, image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/p/k/l-dss-plan-3-prexacreation-original-imagman55wy4cp6m.jpeg?q=70" },
      { no: 2, image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/p/k/l-dss-plan-3-prexacreation-original-imagman55wy4cp6m.jpeg?q=70" },
      { no: 3, image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/p/k/l-dss-plan-3-prexacreation-original-imagman55wy4cp6m.jpeg?q=70" },
      { no: 1, image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/p/k/l-dss-plan-3-prexacreation-original-imagman55wy4cp6m.jpeg?q=70" },
      { no: 1, image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/p/k/l-dss-plan-3-prexacreation-original-imagman55wy4cp6m.jpeg?q=70" },

    ];
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
