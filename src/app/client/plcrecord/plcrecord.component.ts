import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  company_name: string;
  designation: string;
  no_of_c: number;
  location: string;
  website:string;
  year:string;
  avg_pkg:string;
  hig_pkg:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 //fetch the data here in json formet : {compant_name: "plax", desingation:"SDE",...}
];

@Component({
  selector: 'app-plcrecord',
  templateUrl: './plcrecord.component.html',
  styleUrls: ['./plcrecord.component.css']
})
export class PlcrecordComponent implements AfterViewInit {

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['Company Name', 'Designation', 'No. of Candidates Hired', 'Location', 'Website', 'Year', 'Average Pacakage', 'Highest Package'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  

}
