import { AfterViewInit, Component, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    { no: 1, name: 'Ajaykumar', age: 21, department: 'Developement' },
    { no: 2, name: 'Abhishek', age: 20, department: 'Developement' },
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
  @ViewChild('addRecords', { static: true }) add!: TemplateRef<any>
  @ViewChild('editRecords', { static: true }) edit!: TemplateRef<any>

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  //---------- DELETE RECORD ----------
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
  // -------------- ADD RECORDS --------------
  AddEmployee!: FormGroup;
  editEmployee!: FormGroup;

  Department = [{ sno: 1, value: 'Developement' }, { sno: 2, value: 'Marketing' }, { sno: 3, value: 'Business Analysist' }]
  ngOnInit() {
    this.dataService.tittle = "Employee Table";
    this.AddEmployee = new FormGroup({
      no: new FormControl(null,),
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      age: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      department: new FormControl(null, Validators.required),
    });

    this.editEmployee = new FormGroup({
      no: new FormControl(null,),
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      age: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      department: new FormControl(null, Validators.required),
    });
  }
  addRecord() {
    this.openDialog.open(this.add, {
      autoFocus: true,
      width: '400px'
    });
  }

  onSubmit() {
    const sizeOfArray = this.ELEMENT_DATA.length;
    const lastElement = this.ELEMENT_DATA[sizeOfArray - 1];
    const sno = lastElement.no;
    if (this.AddEmployee.valid) {
      const records = this.AddEmployee.value;
      records.no = sno + 1
      this.ELEMENT_DATA.push(records);
      const updatedArray = this.ELEMENT_DATA.length;
      this.openDialog.closeAll();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (sizeOfArray != updatedArray) {
        this.dataService.customSnakbar('New Record added sucessfully !', 'success', 3000);
      }
      // ---------- CLEAR PREVIOUS DATAS ---------- 
      this.openDialog.afterAllClosed.subscribe(x => {
        this.AddEmployee.get('name')?.setValue('');
        this.AddEmployee.get('age')?.setValue('');
        this.AddEmployee.get('department')?.setValue('');
        this.AddEmployee.get('name')?.markAsUntouched();
        this.AddEmployee.get('age')?.markAsUntouched();
        this.AddEmployee.get('department')?.markAsUntouched();
      });
    }
  }
  // -------------- EDIT RECORDS --------------
  OnEdit(editRecord: any) {
    const editDialogRef = this.openDialog.open(this.edit, {
      autoFocus: true,
      width: '400px'
    });
    this.editEmployee.setValue(editRecord);
    editDialogRef.afterClosed().subscribe(responce => {
      const editValue = this.editEmployee.value;
      if (responce) {
        const index = this.ELEMENT_DATA.findIndex(x => x.no === editRecord.no);
        this.ELEMENT_DATA.splice(index, 1);
        this.ELEMENT_DATA.splice(index, 0, editValue);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.ELEMENT_DATA[index].no = editValue.no;
        // this.ELEMENT_DATA[index].name = editValue.name;
        // this.ELEMENT_DATA[index].age = editValue.age;
        // this.ELEMENT_DATA[index].department = editValue.department;
      }
    });
  }

  onReset() {
    location.reload();
  }

}
function openSnackBar(msg: any, action: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

