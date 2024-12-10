import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivityEntry } from '../model/activity-entry.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-activity-item',
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.scss',
})
export class ActivityItemComponent {
  @Input() activity!: ActivityEntry;
  @Output() delete = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}
 
  onDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete this ${this.activity.type}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.delete.emit();
      }
    });
  }
}
