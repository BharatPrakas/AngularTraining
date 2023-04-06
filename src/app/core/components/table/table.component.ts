import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  @Input() DisplyedData!: any;
  displayedColumns!: string[];
  dataSource!: any;

  ngOnInit() {
    console.log(this.DisplyedData);

    // this.displayedColumns = ['id', 'title'];
    // this.dataSource = this.DisplyedData;

    this.displayedColumns = this.DisplyedData.displayFormat;
    this.dataSource = this.DisplyedData.displayData;
  }

}
