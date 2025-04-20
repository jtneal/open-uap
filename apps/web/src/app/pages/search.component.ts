import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
import { CardComponent } from '../card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
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

    .results-preview {
      margin-top: 2rem;
      color: #eee;
    }
  `,
  template: `
    <h2>Search</h2>
    <app-card title="Search UAP Sightings">
      <form [formGroup]="searchForm" (ngSubmit)="onSubmit()">
        <div class="form-row">
          <mat-form-field>
            <mat-label>From Date</mat-label>
            <input matInput [matDatepicker]="fromPicker" formControlName="fromDate">
            <mat-datepicker-toggle matIconSuffix [for]="fromPicker"></mat-datepicker-toggle>
            <mat-datepicker #fromPicker></mat-datepicker>
          </mat-form-field>

          <mat-form-field>
            <mat-label>To Date</mat-label>
            <input matInput [matDatepicker]="toPicker" formControlName="toDate">
            <mat-datepicker-toggle matIconSuffix [for]="toPicker"></mat-datepicker-toggle>
            <mat-datepicker #toPicker></mat-datepicker>
          </mat-form-field>
        </div>

        <div class="form-row">
          <mat-form-field>
            <mat-label>City</mat-label>
            <input matInput formControlName="city">
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
          </mat-form-field>
        </div>

        <mat-form-field>
          <mat-label>Shape</mat-label>
          <mat-select formControlName="shape">
            <mat-option value="">Any</mat-option>
            <mat-option value="circle">Circle</mat-option>
            <mat-option value="triangle">Triangle</mat-option>
            <mat-option value="rectangle">Rectangle</mat-option>
            <mat-option value="oval">Oval</mat-option>
            <mat-option value="other">Other</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Duration</mat-label>
          <mat-select formControlName="duration">
            <mat-option value="">Any</mat-option>
            <mat-option value="<1">Less than 1 minute</mat-option>
            <mat-option value="1-5">1-5 minutes</mat-option>
            <mat-option value="5-15">5-15 minutes</mat-option>
            <mat-option value="15-60">15-60 minutes</mat-option>
            <mat-option value=">60">More than 1 hour</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Keywords</mat-label>
          <textarea matInput rows="2" formControlName="keywords" 
                    placeholder="Search descriptions (e.g. bright lights, hovering, silent)"></textarea>
        </mat-form-field>

        <div class="actions">
          <button mat-button type="button" (click)="resetForm()">Clear</button>
          <button mat-raised-button color="primary" type="submit">
            Search
          </button>
        </div>
      </form>

      <!-- Placeholder for search results -->
      <div class="results-preview"><p>Results will appear here...</p></div>
    </app-card>
  `
})
export class SearchComponent {
  searchForm: FormGroup;
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
    this.searchForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      city: [''],
      state: [''],
      shape: [''],
      duration: [''],
      keywords: ['']
    });

    this.filteredStates = this.searchForm.get('state')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      // TODO: Implement search functionality
    }
  }

  resetForm() {
    this.searchForm.reset();
  }
} 