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
    { name: 'note', icon: 'question_answer' },
    { name: 'call', icon: 'phone' },
    { name: 'coffee', icon: 'local_cafe' },
    { name: 'beer', icon: 'local_bar' },
    { name: 'meeting', icon: 'person' },
  ];

  onRadioChange(activity: { name: string; icon: string }) {
    this.selectedRadio = activity;
  }
}
