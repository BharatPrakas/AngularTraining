import { Component, Inject, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public dataService: DataService) { }
  snackBarRef = inject(MatSnackBarRef);

  isIcon = true;

  ngOnInit() {
    this.dataService.tittle = "Forms";
    if (this.data.icon === '') {
      this.isIcon = false;
    }
  }
}
