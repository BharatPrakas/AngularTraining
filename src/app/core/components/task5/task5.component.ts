import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component {
  @Input() text: any;
  toggler = true;
  constructor(private data: DataService, public router: Router) {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('onInit');
  }
  ngOnDestroy() {
    console.log('OnDestroy');
  }
  ngOnChanges(changes: any) {
    console.log('OnChanges', changes);
  }
  ngDoCheck() {

  }
  toggle() {
    this.toggler = !this.toggler;
  }

  goTo() {
    this.router.navigate(['/app/employee']);
  }

}
