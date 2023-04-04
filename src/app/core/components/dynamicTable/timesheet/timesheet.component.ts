import { Component, ViewChild } from '@angular/core';
import { DefalutComponent } from '../defalut/defalut.component';
import { WorklistComponent } from '../worklist/worklist.component'
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})

export class TimesheetComponent {
  // @ViewChild('tabGroup') tabGroup: any;
  // managerActive = false;
  datasource!: Array<any>;
  displayedColumns!: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('Table');
    });
    // this.dataService.tittle.next('Table');
  }

  ActiveTab = [
    { label: 'timesheet', Component: WorklistComponent },
    { label: 'default', Component: DefalutComponent },
  ];
  isActiveLabel = this.ActiveTab[0].label;
  onTabClick(event: any) {
    this.isActiveLabel = event.tab.textLabel;
  }
}
