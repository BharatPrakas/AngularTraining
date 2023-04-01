import { Component, ViewChild } from '@angular/core';
import { DefalutComponent } from '../defalut/defalut.component';
import { WorklistComponent } from '../worklist/worklist.component'
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})

export class TimesheetComponent {
  @ViewChild('tabGroup') tabGroup: any;
  managerActive = false;
  datasource!: Array<any>;
  displayedColumns!: string[];

  ActiveTab = [
    { label: 'timesheet', Component: WorklistComponent },
    { label: 'default', Component: DefalutComponent },
  ];

  onTabClick(event: any) {
    console.log(event.tab.isActive);
  }

  // ReceiveData(event: any) {
  //   console.log(event.displayFormat);
  //   this.datasource = event.displayData;
  //   this.displayedColumns = event.displayFormat;
  // }

  // ReceiveData1(event: any) {
  //   console.log(event.displayFormat);
  //   this.datasource = event.displayData;
  //   this.displayedColumns = event.displayFormat;
  // }


}
