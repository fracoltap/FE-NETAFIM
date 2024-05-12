import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/modules/users/models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';


const ELEMENT_DATA: User[] = [
  {
    id: 1,
    name: "Francisco",
   email: "javiercoltap@gmail.com",
   isActive: true,
   emailConfirmed: true,
  },
  {
    id: 2,
    name: "Jose",
   email: "javiercoltap@gmail.com",
   isActive: true,
   emailConfirmed: true,
  },
  {
    id: 3,
    name: "Maria",
   email: "javiercoltap@gmail.com",
   isActive: true,
   emailConfirmed: true,
  },  
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['actions','id', 'name'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  subscriptions: any;
  row: any;
  loading: boolean = false;

  constructor(private _snackBar: MatSnackBar){    
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

    }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Items Por Página";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add(){

  }

  edit(row: any){

  }

  view(row: any){

  }
  delete(row: any){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;      
      this._snackBar.open('Eliminado con Éxito', '',{
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        
      });
    }, 3000);    
  }
  ngOnInit(): void {
  }

}

