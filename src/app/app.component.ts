import { Component, HostListener, Inject } from '@angular/core';
import { DataService } from './Services/data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularTraining';
}
