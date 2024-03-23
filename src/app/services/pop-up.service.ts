import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';
import { TableDialogComponent } from '../components/table-dialog/table-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService) {}

  openEditPrompt(text: string, header: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.ref = this.dialogService.open(CustomDialogComponent, {
        header: header,
        width: '25%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data: {
          promptText: text,
        },
        position: 'center',
        closable: false,
        modal: true,
        style: { border: '1px solid black' },
      });

      this.ref.onClose.subscribe((result: boolean) => {
        resolve(result);
      });
    });
  }

  openEditPromptTable(tableElements: any[], header: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.ref = this.dialogService.open(TableDialogComponent, {
        header: header,
        width: '50%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data: {
          tableElements: tableElements,
        },
        position: 'center',
        closable: false,
        modal: true,
        style: { border: '1px solid black' },
      });

      this.ref.onClose.subscribe((result: boolean) => {
        resolve(result);
      });
    });
  }
}
