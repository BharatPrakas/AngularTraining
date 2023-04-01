import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})

export class WorklistComponent {
  @Output() newItemEvent = new EventEmitter<object>();
  data = [
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', age: 21 },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },

  ];
  emptydata = []
  displayedColumns = ['symbol', 'weight', 'name'];
  dataSharing = {
    displayData: this.data,
    displayFormat: this.displayedColumns
  }

  empty = {
    displayData: null,
    displayFormat: this.displayedColumns
  }

  ngOnInit() {
    console.log('timesheet open');
    this.newItemEvent.emit(this.dataSharing);
  }
  Destroy() {

  }
  ngOnDestroy() {
    console.log('timesheet close');
    this.newItemEvent.emit(this.empty);
  }
}
