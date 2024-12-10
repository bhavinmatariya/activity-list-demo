import { Component } from '@angular/core';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivityEntry } from './model/activity-entry.interface';
import { ActivityService } from './services/activity.service';
import { ActivityItemComponent } from './activity-item/activity-item.component';

@Component({
  selector: 'app-root',
  imports: [ActivityCardComponent, MatIconModule, ActivityItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'activity-list-demo';

  activities: ActivityEntry[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService.activities$.subscribe((activities) => {
      this.activities = activities.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }

  getRelativeTime(createdAt: string): string {
    const now = new Date().getTime();
    const createdTime = new Date(createdAt).getTime();
    const diff = now - createdTime;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds}s`;
    } else if (minutes < 60) {
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${hours}h`;
    } else {
      return `${days}d`;
    }
  }

  deleteActivity(id: string): void {
    this.activityService.deleteActivity(id);
  }
}
