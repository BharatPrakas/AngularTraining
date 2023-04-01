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
  constructor(private mediaObserver: MediaObserver, public dataService: DataService) {
    dataService.onchanges = "value from navbar"
  }
  ngOnInit(): void {
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