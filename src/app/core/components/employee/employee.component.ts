import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/Services/data.service';

export interface Details {
  name: string;
  no: number;
  age: number;
  department: string;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements AfterViewInit {

  ELEMENT_DATA: Details[] = [
    { no: 1, name: 'Bharath', age: 21, department: 'Developement' },
    { no: 2, name: 'Prakash', age: 20, department: 'Developement' },
    { no: 3, name: 'Karthick', age: 22, department: 'Developement' },
    { no: 4, name: 'Venkatesh', age: 24, department: 'Developement' },
    { no: 5, name: 'Dharun', age: 21, department: 'Developement' },
    { no: 6, name: 'Aashiq', age: 23, department: 'Developement' },
    { no: 7, name: 'Bosha', age: 21, department: 'Developement' },
    { no: 8, name: 'Pranesh', age: 23, department: 'Developement' },
    { no: 9, name: 'Praveen', age: 22, department: 'Developement' },
    { no: 10, name: 'Anand', age: 21, department: 'Developement' },
  ];
  constructor(private openDialog: MatDialog, private dataService: DataService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['no', 'name', 'age', 'department', 'action'];
  dataSource = new MatTableDataSource<Details>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild('delete', { static: true }) del!: TemplateRef<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  name: any;
  OnDelete(data: any) {
    this.name = data.name;
    const dialogRef = this.openDialog.open(this.del, {
      autoFocus: false,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(Response => {
      if (Response) {
        const index = this.ELEMENT_DATA.findIndex(x => x.no === data.no);
        const deleteValue = this.ELEMENT_DATA[index];
        if (index != -1) {
          this.ELEMENT_DATA.splice(index, 1);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          const snackBarRef = this.snackBar.open('Record deleted Sucussfully', 'undo', { duration: 5000, panelClass: 'success-snackbar' });
          snackBarRef.onAction().subscribe(() => {
            this.ELEMENT_DATA.splice(index, 0, deleteValue);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        }
      }
    });
  }
}

function openSnackBar(msg: any, action: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

