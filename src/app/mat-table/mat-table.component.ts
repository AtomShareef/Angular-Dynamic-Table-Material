// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-mat-table',
//   templateUrl: './mat-table.component.html',
//   styleUrls: ['./mat-table.component.css']
// })
// export class MatTableComponent implements OnInit {
//   @ViewChild(MatSort, {static: true}) sort: MatSort;

//   tableDataSrc: any;
//   tableCols: string[] = ['name', 'role', 'skills'];
//   tableData: {}[] = [
//     {
//       name: 'shareef',
//       role: 'Java Developer',
//       skills: 'Java, Angular, MySQL, SpringBoot'
//     },
//     {
//       name: 'shareef',
//       role: 'Java Developer',
//       skills: 'Java, Angular, MySQL, SpringBoot'
//     },
//     {
//       name: 'shareef',
//       role: 'Java Developer',
//       skills: 'Java, Angular, MySQL, SpringBoot'
//     },
//   ];

//   constructor() { }

//   ngOnInit(): void {
//     this.tableDataSrc = new MatTableDataSource(this.tableData);
//     this.tableDataSrc = this.sort;
//   }
// }
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  tableDataSrc: any;
  // tslint:disable-next-line: no-input-rename
  @Input('tableColumns') tableCols: string[];
  @Input() tableData: {}[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
    this.tableDataSrc.sort = this.sort;
    this.tableDataSrc.paginator = this.paginator;
  }

  onSearchInput(ev) {
    const searchTarget = ev.target.value;
    this.tableDataSrc.filter = searchTarget.trim().toLowerCase();
  }
}
