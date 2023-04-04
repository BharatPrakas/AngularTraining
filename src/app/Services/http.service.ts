import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpRouting: HttpRoutingService) { }

  posts() {
    return this.httpRouting.getMethod('posts');
  }
}
