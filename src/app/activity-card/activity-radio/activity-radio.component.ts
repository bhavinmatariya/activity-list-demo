import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-activity-radio',
  imports: [MatRadioModule, MatIconModule, MatTooltipModule],
  templateUrl: './activity-radio.component.html',
  styleUrl: './activity-radio.component.scss',
})
export class ActivityRadioComponent {
  selectedRadio: { name: string; icon: string } | null = null;
  activities = [
    { name: 'Note', icon: 'question_answer' },
    { name: 'Call', icon: 'phone' },
    { name: 'Coffee', icon: 'local_cafe' },
    { name: 'Beer', icon: 'local_bar' },
    { name: 'Meeting', icon: 'person' },
  ];

  onRadioChange(activity: { name: string; icon: string }) {
    this.selectedRadio = activity;
  }
}
