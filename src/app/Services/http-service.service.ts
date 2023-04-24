import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpRouting: HttpRoutingService) { }

  doDo() {
    return this.httpRouting.getMethod('todos');
  }
}
