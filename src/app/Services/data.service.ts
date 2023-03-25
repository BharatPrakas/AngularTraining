import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../core/components/snackbar/snackbar.component';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  // actions !: Array<any>;
  constructor(private snackBar: MatSnackBar) { }
  count = 0;
  msg = "hello";

  //SNACKBAR SERVICE

  //----- SUCCESS SNACKBAR -----
  successSnakbar(msg: any, action: any) {
    const snackBarRef = this.snackBar.open(msg, action, { duration: 5000, panelClass: 'success-snackbar' });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dissmissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggerd');
    });
  }

  //----- WARNING SNACKBAR -----
  warningSnakbar(msg: any, action: any) {
    const snackBarRef = this.snackBar.open(msg, action, { duration: 2000, panelClass: 'warning-snackbar' });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dissmissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggerd');
    });
  }

  //----- ERROR SNACKBAR -----
  errorSnakbar(msg: any, action: any) {
    const snackBarRef = this.snackBar.open(msg, action, { duration: 2000, panelClass: 'error-snackbar' });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dissmissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggerd');
    });
  }

  //----- DEFALUT SNACKBAR -----
  defaultSnakbar(msg: any, action: any) {
    const snackBarRef = this.snackBar.open(msg, action, { duration: 2000, panelClass: 'defalut-snackbar' });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dissmissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggerd');
    });
  }

  //CUSTOM SUCCESS SNACKBAR
  actions = [
    { action: 'success', style: 'success-snackbar', icon: 'done' },
    { action: 'warning', style: 'warning-snackbar', icon: 'warning' },
    { action: 'error', style: 'error-snackbar', icon: 'error' },
    { action: 'defalut', style: 'defalut-snackbar', icon: '' }
  ]
  customSnakbar(message: string, action: string) {
    const property = this.actions.find(x => x.action === action);
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { msg: message, icon: property?.icon },
      duration: 2000,
      panelClass: property?.style
    });
  }
}