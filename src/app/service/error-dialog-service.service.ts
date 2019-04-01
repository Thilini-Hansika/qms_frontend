import { ErrorDialogComponent } from './../error/error-dialog/error-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class ErrorDialogServiceService {

  constructor(public dialog: MatDialog) { }
  openDialog(data): void {
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
          width: '300px',
          data: data
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          let animal;
          animal = result;
      });
  }
}
