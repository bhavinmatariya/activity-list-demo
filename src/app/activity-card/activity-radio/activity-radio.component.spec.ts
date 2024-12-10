import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRadioComponent } from './activity-radio.component';

describe('ActivityRadioComponent', () => {
  let component: ActivityRadioComponent;
  let fixture: ComponentFixture<ActivityRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
