import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Factory } from 'src/app/models/factory';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss'],
})
export class TableDialogComponent {
  promptText = '';
  tableElements!: Factory[];
  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig
  ) {
    this.tableElements = dialogConfig.data.tableElements;
  }
  onClose() {
    this.dialogRef.close();
  }
}
