import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getMethod(url: string) {
    return this.httpClient.get(this.apiUrl + 'v1' + url);
  }

  postMethod(url: string, data: any) {
    return this.httpClient.post(this.apiUrl + 'v1' + url, data)
  }

  getJsonData(url: string) {
    return this.httpClient.get('./assets/' + url);
  }
}
