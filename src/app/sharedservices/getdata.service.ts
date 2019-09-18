import { Injectable } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private baseUrl = 'https://finance.yahoo.com/quote/%5EGSPC/history?p=%5EGSPC';

  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/html'})
  };

  getData():Observable<any>{
    return this.http.get(`${this.baseUrl}`,this.httpOptions)
  }
}
