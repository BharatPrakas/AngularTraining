import { Component, ViewChild } from "@angular/core";

// import { single } from './data';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  data = [
    {
      name: 'monday',
      value: 100
    },
    {
      name: 'tuesday',
      value: 200
    },
    {
      name: 'wednessday',
      value: 300
    },
    {
      name: 'thursday',
      value: 50
    },
    {
      name: 'friday',
      value: 1
    },
    {
      name: 'saturday',
      value: 64
    },
    {
      name: 'sunday',
      value: 190
    },
  ];

  single: any[];
  view: [number, number] = [800, 500];
  colorScheme: any = {
    domain: ['#003f5c', '#374c80', '#7a5195', '#bc5090', '#ef5675', '#ff764a', '#ffa600']
  };
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'weekdays';
  yAxisLabel = 'expense';
  constructor() {
    this.single = this.data;
  }
}


