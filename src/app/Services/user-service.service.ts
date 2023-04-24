import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpRouting: HttpRoutingService) { }

  getRecords() {
    return this.httpRouting.getMethod('/getEmployee');
  }

  updateRecord(data: any) {
    return this.httpRouting.postMethod('/updateRecord', data);
  }

  deleteRecord(data: any) {
    return this.httpRouting.postMethod('/deleteRecord', data);
  }
}
