import { Component, OnInit, ViewChild } from '@angular/core';
import { GetdataService} from './sharedservices/getdata.service';
import {HttpClient} from '@angular/common/http'
import { async } from '@angular/core/testing';
import {ViewcardComponent} from './viewcard/viewcard.component'
//import { MatDialog, MatDialogConfig } from "@angular/material";


import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatTableModule } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns = ['date', 'open', 'high','low','close','volume','view'];

  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  //  @ViewChild(MatSort) sort: MatSort;
  

  datasource: MatTableDataSource<financeData>;

  tableData:financeData[]=[];

  financeArray:any[]= [
    {date:"Sep 16 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 13 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 12 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 11 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 10 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 09 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 06 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 },
    {date:"Sep 05 2019", open:2996.41, high:3002.19, low:2990.67, close:2997.96,volume:274640000 }
  ]
  title = 'axiom';

  constructor(private service:GetdataService,
  private dialog: MatDialog){

    this.service.getData().subscribe(data=>console.log(data))
    this.tableData = this.financeArray;
 this.datasource = new MatTableDataSource(this.tableData)
//  this.datasource.paginator = this.paginator;
//  this.datasource.sort = this.sort;

  }

  openCard(row){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "40%";
    dialogConfig.data = {

      viewrow: row
    }

    this.dialog.open(ViewcardComponent,dialogConfig)
  }
}



export interface financeData {
  date:string;
  open:any;
  high:any;
  low:any;
  close:any;
  volume:any;
  

 }