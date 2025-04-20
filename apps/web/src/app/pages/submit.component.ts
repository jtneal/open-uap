import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@Component({
  imports: [
    CardComponent,
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  selector: 'app-submit',
  styles: `
    :host {
      display: block;
      max-width: 768px;
      margin: 0 auto;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-row {
      display: flex;
      gap: 1rem;
    }

    .form-row > * {
      flex: 1;
    }

    mat-form-field {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    .mat-mdc-card {
      background-color: rgba(0, 0, 0, 0.5) !important;
      border: 2px dashed rgba(0, 255, 255, 0.5) !important;
      color: #eee;

      p {
        margin-top: 8px !important;
      }
    }

    .mat-mdc-button {
      background-color: rgba(0, 255, 255, 0.5) !important;
      color: #eee !important;
      padding: 0 0.75rem !important;
    }

    .mat-mdc-card-actions {
      padding: 16px !important;
    }

    .mat-mdc-raised-button {
      background-color: #0ff !important;
      color: #111 !important;
      transition: background-color 0.3s ease;

      &:disabled {
        background-color: #ccc !important;
        color: #666 !important;
      }

      &:hover {
        background-color: #0ee !important;
      }
    }
  `,
  template: `
    <h2>Submit</h2>
    <app-card title="Report a UAP Sighting">
      <form [formGroup]="reportForm" (ngSubmit)="onSubmit()">
        <div class="form-row">
          <mat-form-field>
            <mat-label>Date</mat-label>
            <input matInput [matDatepicker]="picker" formControlName="date">
            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
            @if (reportForm.get('date')?.errors?.['required']) {
              <mat-error>Date is required</mat-error>
            }
          </mat-form-field>

          <mat-form-field>
            <mat-label>Time</mat-label>
            <input matInput type="time" formControlName="time">
            @if (reportForm.get('time')?.errors?.['required']) {
              <mat-error>Time is required</mat-error>
            }
          </mat-form-field>
        </div>

        <div class="form-row">
          <mat-form-field>
            <mat-label>City</mat-label>
            <input matInput formControlName="city">
            @if (reportForm.get('city')?.errors?.['required']) {
              <mat-error>City is required</mat-error>
            }
          </mat-form-field>

          <mat-form-field>
            <mat-label>State</mat-label>
            <input matInput
                  formControlName="state"
                  [matAutocomplete]="auto">
            <mat-autocomplete #auto="matAutocomplete">
              @for (state of filteredStates | async; track state) {
                <mat-option [value]="state">{{ state }}</mat-option>
              }
            </mat-autocomplete>
            @if (reportForm.get('state')?.errors?.['required']) {
              <mat-error>State is required</mat-error>
            }
          </mat-form-field>
        </div>

        <mat-form-field>
          <mat-label>Shape</mat-label>
          <mat-select formControlName="shape">
            <mat-option value="circle">Circle</mat-option>
            <mat-option value="triangle">Triangle</mat-option>
            <mat-option value="rectangle">Rectangle</mat-option>
            <mat-option value="oval">Oval</mat-option>
            <mat-option value="other">Other</mat-option>
          </mat-select>
          @if (reportForm.get('shape')?.errors?.['required']) {
            <mat-error>Shape is required</mat-error>
          }
        </mat-form-field>

        <mat-form-field>
          <mat-label>Duration</mat-label>
          <input matInput formControlName="duration" placeholder="e.g. 5 minutes">
          @if (reportForm.get('duration')?.errors?.['required']) {
            <mat-error>Duration is required</mat-error>
          }
        </mat-form-field>

        <mat-form-field>
          <mat-label>Description</mat-label>
          <textarea matInput rows="5" formControlName="description"></textarea>
          @if (reportForm.get('description')?.errors?.['required']) {
            <mat-error>Description is required</mat-error>
          }
          @if (reportForm.get('description')?.errors?.['minlength']) {
            <mat-error>Description must be at least 50 characters</mat-error>
          }
        </mat-form-field>

        <!-- Upload file - photo, video, etc. -->
        <!-- Start date, end date, start time, end time, defaults to same day/time? -->
        <!-- Research other fields that might be relevant -->

        <div class="actions">
          <button mat-button type="button" (click)="resetForm()">Clear</button>
          <button mat-raised-button color="primary" type="submit" [disabled]="!reportForm.valid">
            Submit Report
          </button>
        </div>
      </form>
    </app-card>
  `,
})
export class SubmitComponent {
  reportForm: FormGroup;
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];
  filteredStates: Observable<string[]>;

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      shape: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(50)]]
    });

    this.filteredStates = this.reportForm.get('state')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    if (this.reportForm.valid) {
      console.log(this.reportForm.value);
      // TODO: Send to backend
    }
  }

  resetForm() {
    this.reportForm.reset();
  }
}
