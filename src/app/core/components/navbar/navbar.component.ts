import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {
  private mediaSubscription !: Subscription;
  isSmallDevice = false;

  constructor(private mediaObserver: MediaObserver, public dataService: DataService) { }
  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((x) => {
      x.forEach(element => {
        if (element.mqAlias == 'xs') {
          console.log("Small device");
          this.isSmallDevice = true;
        }
      });
    });
  }
  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }
}