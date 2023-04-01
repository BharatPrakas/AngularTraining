import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-defalut',
  templateUrl: './defalut.component.html',
  styleUrls: ['./defalut.component.scss']
})
export class DefalutComponent {
  @Output() defaultItemEvent = new EventEmitter<object>();
  data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', age: 21 },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  displayedColumns = ['name', 'symbol'];

  dataSharing = {
    displayData: this.data,
    displayFormat: this.displayedColumns
  }
  empty = {
    displayData: null,
    displayFormat: this.displayedColumns
  }

  ngOnInit() {
    console.log('default open');
    this.defaultItemEvent.emit(this.dataSharing);
  }


  ngOnDestroy() {
    console.log('default close    ');
    this.defaultItemEvent.emit(this.empty);
  }

}
