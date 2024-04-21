import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cookie-permission-dialog',
  templateUrl: './cookie-permission-dialog.component.html',
  styleUrls: ['./cookie-permission-dialog.component.css']
})
export class CookiePermissionDialogComponent {
  constructor(public dialogRef: MatDialogRef<CookiePermissionDialogComponent>) {}

  allowCookies(): void {
    this.dialogRef.close(true);
  }

  denyCookies(): void {
    this.dialogRef.close(false);
  }
}
