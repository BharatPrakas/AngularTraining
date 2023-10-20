import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription, fromEvent } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
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
  eventSubscription: any
  constructor(
    private mediaObserver: MediaObserver,
    public dataService: DataService,
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }
  // @HostListener('window:scroll')
  onWindowScroll() {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(offset);
  }


  navList = [
    { path: '/app/employee', value: 'Employee' },
    { path: '/app/task2', value: 'Ecommerce' },
    { path: '/app/task3', value: 'Forms' },
    { path: '/app/task4', value: 'Snackbar' },
    { path: '/app/api', value: 'API' },
    { path: '/app/dynamic', value: 'Table' },
    { path: '/app/task1', value: 'Observable' },
    { path: '/app/db', value: 'Database' },
    { path: '/app/chart', value: 'apexChart' },
  ];

  ngOnInit(): void {

    this.eventSubscription = fromEvent(window, "scroll").subscribe(e => {
      this.onWindowScroll();
      console.log('event');

    });

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

  logout() {
    this.auth.signout();
  }
}