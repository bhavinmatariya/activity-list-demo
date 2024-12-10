import { Injectable } from '@angular/core';
import { ActivityEntry } from '../model/activity-entry.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private storageKey = 'activityEntries';

  private activitiesSubject = new BehaviorSubject<ActivityEntry[]>(this.getActivities());
  activities$ = this.activitiesSubject.asObservable();

  getActivities(): ActivityEntry[] {
    const activities = localStorage.getItem(this.storageKey);
    return activities ? JSON.parse(activities) : [];
  }

  addActivity(activity: ActivityEntry): void {
    const activities = this.getActivities();
    activities.push(activity);
    localStorage.setItem(this.storageKey, JSON.stringify(activities));
    this.activitiesSubject.next(activities); 
  }

  deleteActivity(id: string): void {
    const activities = this.getActivities();
    const updatedActivities = activities.filter(
      (activity) => activity.id !== id
    );
    localStorage.setItem(this.storageKey, JSON.stringify(updatedActivities));
    this.activitiesSubject.next(updatedActivities);
  }
}
