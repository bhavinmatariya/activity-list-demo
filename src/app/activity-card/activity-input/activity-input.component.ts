import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-activity-input',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './activity-input.component.html',
  styleUrl: './activity-input.component.scss',
})
export class ActivityInputComponent {
  ActivityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ActivityForm = this.fb.group({
      note: ['', Validators.required],
    });
  }
}
