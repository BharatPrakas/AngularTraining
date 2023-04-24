import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { UserServiceService } from 'src/app/Services/user-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  dataSource: any;
  data: any;
  displayedColumns = ['firstName', 'lastName', 'email', 'dateOfJoin', 'designation', 'role', 'action'];
  actions = [{ icon: 'edit', function: 'onEdit' }, { icon: 'delete', function: 'onDelete' }];
  isGetResponse = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private dataService: DataService,
    private userService: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.tittle.emit('Database');
    });
    this.getAllRecords();
  }

  getAllRecords() {
    this.userService.getRecords().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<any>(res.response);
      this.isGetResponse = false;
      if (!this.isGetResponse) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  addEmployee() {
    this.router.navigate(['/app/task3']);
  }

  eventClick(data: any, functionName: string) {
    // this[this.method]()
    if (functionName === 'onEdit') {
      this.onEdit(data);
    } else {
      this.onDelete(data);
    }
  }
  onEdit(data: any) {
    this.router.navigate(['/app/task3', 'edit', data.id]);
  }
  onDelete(data: any) {
    this.userService.deleteRecord({ id: data.id }).subscribe({
      next: (response: any) => {
        if (response) {
          this.getAllRecords();
          this.dataService.customSnakbar('Record deleted successfully', 'success');
        }
      },
      error: errors => {
        this.dataService.customSnakbar('Record deleted successfully', 'error');
      }
    })
  }
}
