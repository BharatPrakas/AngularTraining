import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private angularFireMessaging: AngularFireMessaging,) { }
  getToken() {
    this.angularFireMessaging.requestToken.subscribe((res: any) => {
      console.log(res);
    });
  }
}
