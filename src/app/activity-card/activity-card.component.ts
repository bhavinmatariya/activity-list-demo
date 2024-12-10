import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivityInputComponent } from './activity-input/activity-input.component';
import { ActivityRadioComponent } from './activity-radio/activity-radio.component';
import { ActivityEntry } from '../model/activity-entry.interface';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-card',
  imports: [MatButtonModule, ActivityInputComponent, ActivityRadioComponent],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss',
})
export class ActivityCardComponent {
  @ViewChild(ActivityInputComponent) activityInput!: ActivityInputComponent;
  @ViewChild(ActivityRadioComponent) activityRadio!: ActivityRadioComponent;

  constructor(private activityService: ActivityService) {}

  onSubmit() {
    const inputNote = this.activityInput?.ActivityForm?.value?.note || '';
    const selectedActivity = this.activityRadio?.selectedRadio || '';
    if (inputNote && selectedActivity) {
      const newActivity: ActivityEntry = {
        id: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        type: selectedActivity.name as ActivityEntry['type'],
        icon: selectedActivity.icon as ActivityEntry['icon'],
        note: inputNote,
      };

      this.activityService.addActivity(newActivity);
      console.log('Activity saved:', newActivity);

      this.activityInput.ActivityForm.reset();
      this.activityRadio.selectedRadio = null;
    } else {
      console.warn('Input or activity type is missing.');
    }
  }
}
