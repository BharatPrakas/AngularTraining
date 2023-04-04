import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  data!: any;
  records!: any
  constructor(private http: HttpService, private dataService: DataService) { }
  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('API');
    });

    this.http.posts().subscribe((responce: any) => {

      // this.data = responce.find((x: any) => x.id == 1);
      // console.log(this.data);
      this.records = responce;
    });
  }
}
