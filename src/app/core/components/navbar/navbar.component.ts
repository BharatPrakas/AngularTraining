import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private mediaSubscription !: Subscription;
  isSmallDevice = false;
  toggler = true;
  pageTitle!: string;
  constructor(private mediaObserver: MediaObserver, public dataService: DataService) {
  }

  navList = [
    { path: '/app/employee', value: 'Employee' },
    { path: '/app/task2', value: 'Ecommerce' },
    { path: '/app/task3', value: 'Forms' },
    { path: '/app/task4', value: 'Snackbar' },
    { path: '/app/api', value: 'API' },
    { path: '/app/dynamic', value: 'Table' },
  ];

  ngOnInit(): void {
    this.dataService.tittle.subscribe(res => {
      this.pageTitle = res;
    })
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((x) => {
      x.forEach(element => {
        if (element.mqAlias == 'sm' || element.mqAlias == 'lt-sm') {
          this.isSmallDevice = true;
        }
        if (element.mqAlias == 'gt-sm') {
          this.isSmallDevice = false;
        }
      });
    });
  }
}