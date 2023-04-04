import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  @Input() DisplyedData!: any;

  displayedColumns!: string[];
  datasource!: string[];

  ngOnInit() {
    this.displayedColumns = this.DisplyedData.displayFormat;
    this.datasource = this.DisplyedData.displayData;
  }
}
