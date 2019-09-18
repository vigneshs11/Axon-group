import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.css']
})
export class ViewcardComponent implements OnInit {

  viewcarddata:any;

  constructor(public dialogRef:MatDialogRef<ViewcardComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      
      console.log('reached inside child component')

      this.viewcarddata = data.viewrow;
      console.log(this.viewcarddata)
    }

  ngOnInit() {
  }

}
