import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';
import { MatTableDataSource } from '@angular/material/table';

export interface btns {
  color: string,
  value: string,
  method: string
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})



export class ApiComponent {
  buttons: btns[] = [
    { color: 'primary', value: 'posts', method: 'posts' },
    { color: 'primary', value: 'todos', method: 'toDo' }
  ];
  isGetResponse = true;
  httpRef!: Subscription;
  datasource!: any
  displayedColumns!: any;
  // buttons!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private http: HttpService, private dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('API');
    });

    this.httpRef = this.http.doDo().subscribe((responce: any) => {
      this.displayedColumns = ['id', 'title', 'completed'];
      this.datasource = new MatTableDataSource<any>(responce);
      this.datasource.paginator = this.paginator;
      this.isGetResponse = false;
    });
  }

  clickEvent(event: string) {
    console.log(event);
    // this[event]();
  }

  posts() {
    console.log('posts works');

  }

  toDo() {
    console.log('toDo works');

  }


  ngOnDestroy() {
    this.httpRef.unsubscribe();
  }
}
